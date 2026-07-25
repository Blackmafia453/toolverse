import { ParsedTransaction, ParseResult } from "./types";
import { cleanNumber, normalizeDate } from "./utils";


function isValidAmount(value: string) {
  if (!value) return false;

  const num = Number(
    value
      .replace(/,/g, "")
      .replace(/[()]/g, "")
      .trim()
  );

  if (isNaN(num)) return false;

  // Ignore PDF artifacts like page numbers
  if (num === 131) return false;

  return true;
}


function extractAmounts(text: string): string[] {

  const matches = text.match(
    /\(?\d[\d,]*\.?\d{0,2}\)?/g
  );


  if (!matches) return [];


  return matches
    .map((item) =>
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

  const match = text.match(
    /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/
  );


  if (!match) return "";


  return normalizeDate(match[0]);

}



function isDebitRow(text:string){

  const lower = text.toLowerCase();


  return (
    lower.includes("debit") ||
    lower.includes("withdraw") ||
    lower.includes("payment") ||
    lower.includes("settlement") ||
    lower.includes("charge") ||
    lower.includes("fee")
  );

}



function isCreditRow(text:string){

  const lower=text.toLowerCase();


  return (
    lower.includes("deposit") ||
    lower.includes("credit") ||
    lower.includes("received") ||
    lower.includes("correction")
  );

}



function extractDescription(
  text:string,
  amounts:string[]
){

  let description=text;


  amounts.forEach(amount=>{
    description =
      description.replace(amount,"");
  });


  description =
    description
      .replace(/\b131\b/g,"")
      .replace(/=/g,"")
      .replace(/\s+/g," ")
      .trim();


  return description;

}



function parseTransactionLine(
  line:string
):ParsedTransaction|null{


  const cleaned =
    cleanPDFArtifacts(line);



  const date =
    extractDate(cleaned);


  if(!date) return null;



  const amounts =
    extractAmounts(cleaned);



  if(amounts.length===0)
    return null;



  const numbers =
    amounts.map(a =>
      Number(cleanNumber(a))
    );



  let debit=0;
  let credit=0;
  let balance=0;



  /*
    BANK STATEMENT LOGIC

    Balance is always the highest
    amount in these PDF layouts.

  */


  balance =
    Math.max(...numbers);



  const remaining =
    numbers.filter(
      n=>n!==balance
    );



  if(isDebitRow(cleaned)){


    /*
      Debit format:

      Description Debit Balance

    */


    if(remaining.length){

      debit =
        remaining[remaining.length-1];

    }



  }
  else if(isCreditRow(cleaned)){


    /*
      Credit format:

      Description Credit Balance

    */


    if(remaining.length){

      credit =
        remaining[remaining.length-1];

    }


  }
  else {


    // fallback

    if(numbers.length >=2){

      credit =
        remaining[0] ?? 0;

    }

  }



  const description =
    extractDescription(
      cleaned,
      amounts
    );



  if(
    !description &&
    debit===0 &&
    credit===0
  ){
    return null;
  }



  return {

    date,

    description,

    debit,

    credit,

    balance

  };

}




function removeDuplicates(
 transactions:ParsedTransaction[]
){

 const seen =
   new Set<string>();


 return transactions.filter(tx=>{


  const key =
    [
      tx.date,
      tx.description,
      tx.debit,
      tx.credit,
      tx.balance
    ].join("|");



  if(seen.has(key))
    return false;



  seen.add(key);

  return true;


 });


}





export function parseTransactions(
 rawText:string
):ParseResult{


 const lines =
   rawText
    .split(/\r?\n/)
    .map(line=>cleanPDFArtifacts(line))
    .filter(Boolean);



 const transactions:ParsedTransaction[]=[];


 let previousText="";



 for(const line of lines){


   const transaction =
     parseTransactionLine(line);



   if(transaction){


     if(previousText){

       transaction.description =
         `${previousText} ${transaction.description}`
          .trim();


       previousText="";

     }


     transactions.push(transaction);


   }
   else {


     const isHeader =
       /date|description|balance|account|statement|page/i
       .test(line);



     if(!isHeader){

       previousText +=
         " "+line;

     }

   }


 }



 const finalTransactions =
   removeDuplicates(
     transactions
   );



 return {

   success:
     finalTransactions.length>0,


   transactions:
     finalTransactions,


   totalTransactions:
     finalTransactions.length,


   error:
     finalTransactions.length
       ? undefined
       : "No transactions found"

 };


}