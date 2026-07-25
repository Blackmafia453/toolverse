import { Transaction, ParseResult } from "./types";
import { cleanAmount } from "./utils";


function normalizeDate(value: string) {
  const parts = value.split(/[\/\-]/);

  if (parts.length !== 3) {
    return value;
  }

  let day = parts[0];
  let month = parts[1];
  let year = parts[2];


  if (year.length === 2) {
    year = "20" + year;
  }


  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
}



function isValidAmount(value: string) {

  if (!value) return false;


  const num = Number(
    value
      .replace(/,/g, "")
      .replace(/[()]/g, "")
      .trim()
  );


  if (isNaN(num)) {
    return false;
  }


  // Ignore PDF artifact
  if (num === 131) {
    return false;
  }


  return true;
}




function extractAmounts(text: string): string[] {

  const matches =
    text.match(/\(?\d[\d,]*\.?\d{0,2}\)?/g);


  if (!matches) {
    return [];
  }


  return matches
    .map(item =>
      item
        .replace(/[(),]/g, "")
        .trim()
    )
    .filter(isValidAmount);

}





function cleanPDFArtifacts(text: string) {

  return text
    .replace(/\bNBR\b/gi, "")
    .replace(/\b131\b/g, "")
    .replace(/account\s*(number|no|#)?\s*\d+/gi, "")
    .replace(/page\s+\d+\s+of\s+\d+/gi, "")
    .replace(/statement\s+period/gi, "")
    .replace(/date\s+description\s+debit\s+credit\s+balance/gi, "")
    .replace(/transaction\s+history/gi, "")
    .replace(/\s+/g, " ")
    .trim();

}





function extractDate(text: string) {

  const match =
    text.match(
      /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/
    );


  if (!match) {
    return "";
  }


  return normalizeDate(match[0]);

}





function isDebitRow(text: string) {

  const lower =
    text.toLowerCase();


  return (
    lower.includes("debit") ||
    lower.includes("withdraw") ||
    lower.includes("payment") ||
    lower.includes("settlement") ||
    lower.includes("charge") ||
    lower.includes("fee")
  );

}





function isCreditRow(text: string) {

  const lower =
    text.toLowerCase();


  return (
    lower.includes("deposit") ||
    lower.includes("credit") ||
    lower.includes("received") ||
    lower.includes("correction")
  );

}





function extractDescription(
  text: string,
  amounts: string[]
) {

  let description = text;


  amounts.forEach(amount => {
    description =
      description.replace(amount, "");
  });


  return description
    .replace(/=/g, "")
    .replace(/\s+/g, " ")
    .trim();

}





function parseTransactionLine(
  line: string
): Transaction | null {


  const cleaned =
    cleanPDFArtifacts(line);



  const date =
    extractDate(cleaned);



  if (!date) {
    return null;
  }



  const amounts =
    extractAmounts(cleaned);



  if (!amounts.length) {
    return null;
  }



  const numbers =
    amounts.map(amount =>
      Number(cleanAmount(amount))
    );



  if (!numbers.length) {
    return null;
  }



  let debit: number | null = null;
  let credit: number | null = null;
  let balance: number | null = null;



  // Balance generally highest value in this PDF layout

  balance =
    Math.max(...numbers);



  const remaining =
    numbers.filter(
      value => value !== balance
    );





  if (isDebitRow(cleaned)) {

    if (remaining.length) {
      debit =
        remaining[remaining.length - 1];
    }


  } else if (isCreditRow(cleaned)) {


    if (remaining.length) {
      credit =
        remaining[remaining.length - 1];
    }


  } else {


    if (remaining.length) {
      credit =
        remaining[0];
    }

  }





  const description =
    extractDescription(
      cleaned,
      amounts
    );





  if (!description && !debit && !credit) {
    return null;
  }





  return {

    date,

    description,

    debit,

    credit,

    balance,

  };

}





function removeDuplicates(
  transactions: Transaction[]
) {


  const seen =
    new Set<string>();


  return transactions.filter(tx => {


    const key =
      [
        tx.date,
        tx.description,
        tx.debit,
        tx.credit,
        tx.balance,
      ].join("|");



    if (seen.has(key)) {
      return false;
    }


    seen.add(key);

    return true;

  });

}





export function parseTransactions(
  rawText: string
): ParseResult {


  const lines =
    rawText
      .split(/\r?\n/)
      .map(line =>
        cleanPDFArtifacts(line)
      )
      .filter(Boolean);




  const transactions: Transaction[] = [];


  let previousText = "";





  for (const line of lines) {


    const transaction =
      parseTransactionLine(line);




    if (transaction) {


      if (previousText) {

        transaction.description =
          `${previousText} ${transaction.description}`
            .trim();


        previousText = "";

      }



      transactions.push(transaction);


    } else {


      const isHeader =
        /date|description|balance|account|statement|page/i
          .test(line);



      if (!isHeader) {

        previousText +=
          " " + line;

      }

    }


  }





  const finalTransactions =
    removeDuplicates(
      transactions
    );





  return {

    transactions: finalTransactions,

  };

}