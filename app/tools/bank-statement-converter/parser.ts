import { Transaction, ParseResult } from "./types";
import {
  extractAmounts,
  extractDate,
  sanitizeDescription,
  removeDuplicateTransactions,
  removeHeadersFooters,
  mergeWrappedLines,
  isValidTransaction,
} from "./utils";

const MONTHS: Record<string, string> = {
  jan: "01",
  feb: "02",
  mar: "03",
  apr: "04",
  may: "05",
  jun: "06",
  jul: "07",
  aug: "08",
  sep: "09",
  oct: "10",
  nov: "11",
  dec: "12",
};

function normalizeDate(
  date: string,
  currentYear = new Date().getFullYear()
): string {

  const clean = date
    .replace(",", "")
    .trim();

  const parts = clean.split(/\s+/);

  if (parts.length >= 2) {

    const month =
      MONTHS[
        parts[0]
          .toLowerCase()
          .slice(0,3)
      ];

    const day =
      parts[1].padStart(2,"0");

    const year =
      parts[2] || currentYear;

    if(month) {
      return `${year}-${month}-${day}`;
    }
  }


  return clean;

}


function isSummaryLine(line:string){

  const value =
    line.toLowerCase();


  return (

    value.includes("opening balance") ||
    value.includes("closing balance") ||
    value.includes("total withdrawals") ||
    value.includes("total deposits") ||
    value.includes("summary")

  );

}



function detectTransactionType(
  line:string,
  amounts:number[]
){

  const lower =
    line.toLowerCase();


  if(
    lower.includes("deposit") ||
    lower.includes("credit") ||
    lower.includes("cr") ||
    lower.includes("+")
  ){

    return "credit";

  }


  if(
    lower.includes("withdraw") ||
    lower.includes("debit") ||
    lower.includes("dr") ||
    lower.includes("-")
  ){

    return "debit";

  }


  return null;

}



function getBalance(
  amounts:number[]
){

  if(amounts.length < 2)
    return null;


  return amounts[
    amounts.length - 1
  ];

}



function getAmount(
  amounts:number[]
){

  if(amounts.length === 0)
    return null;


  return amounts[
    amounts.length - 2
  ] ?? null;

}



function buildTransaction(
  lines:string[],
  date:string
):Transaction | null {


  const fullLine =
    lines.join(" ");


  const amounts =
    extractAmounts(fullLine);


  if(amounts.length < 2)
    return null;



  const type =
    detectTransactionType(
      fullLine,
      amounts
    );


  const amount =
    getAmount(amounts);


  const balance =
    getBalance(amounts);



  let debit:null|number = null;

  let credit:null|number = null;



  if(type === "credit"){

    credit = amount;

  }
  else{

    debit = amount;

  }



  const description =
    sanitizeDescription(
      fullLine,
      date,
      amounts
    );



  const transaction:Transaction = {

    date,

    description:
      description ||
      "Transaction",

    debit,

    credit,

    balance,

    transactionType:
      type === "credit"
        ? "Credit"
        : "Debit"

  };



  if(
    !isValidTransaction(transaction)
  ){

    return null;

  }


  return transaction;

}





export function parseTransactions(
  text:string
):ParseResult {


  let lines =
    text
      .split("\n")
      .map(
        line =>
          line.trim()
      )
      .filter(Boolean);



  lines =
    removeHeadersFooters(
      lines
    );



  lines =
    mergeWrappedLines(
      lines
    );



  const transactions:Transaction[]=[];


  let currentDate = "";

  let buffer:string[]=[];



  function processBuffer(){

    if(
      !buffer.length ||
      !currentDate
    )
      return;


    const transaction =
      buildTransaction(
        buffer,
        currentDate
      );


    if(transaction){

      transactions.push(
        transaction
      );

    }


    buffer=[];

  }





  for(
    const line of lines
  ){


    if(
      isSummaryLine(line)
    ){

      continue;

    }



    const foundDate =
      extractDate(line);



    if(foundDate){


      processBuffer();


      currentDate =
        normalizeDate(
          foundDate
        );


      buffer.push(
        line.replace(
          foundDate,
          ""
        )
        .trim()
      );


    }
    else{


      if(
        buffer.length
      ){

        buffer.push(
          line
        );

      }


    }



  }


  processBuffer();



  return {

    transactions:
      removeDuplicateTransactions(
        transactions
      )

  };

}