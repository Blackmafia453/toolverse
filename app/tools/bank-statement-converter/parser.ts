import { Transaction, ParseResult } from "./types";
import {
  extractDate,
  removeDuplicateTransactions,
} from "./utils";



function normalizeDate(
  date:string
):string {

  const parts =
    date
      .replace(",", "")
      .split(/[\/\-]/);



  if(parts.length === 3){

    let month =
      parts[0].padStart(2,"0");

    let day =
      parts[1].padStart(2,"0");

    let year =
      parts[2];


    if(year.length === 2){

      year = "20" + year;

    }


    return `${year}-${month}-${day}`;

  }


  return date;

}







function extractMoney(
  text:string
):number[] {


  const matches =
    text.match(
      /\$?\s?\d{1,3}(?:,\d{3})*(?:\.\d{2})/g
    );


  if(!matches)
    return [];


  return matches

    .map(
      item =>
        Number(
          item
          .replace("$","")
          .replace(/\s/g,"")
          .replace(/,/g,"")
        )
    )

    .filter(
      n =>
        !isNaN(n)
    );

}







function shouldIgnore(
  line:string
):boolean {


  const text =
    line.toLowerCase();



  const ignoreWords = [

    "ending balance",

    "previous balance",

    "opening balance",

    "transaction date",

    "date description",

    "debits credits balance",

    "page of",

    "account number",

    "fee summary",

    "interest charged",

    "interest charge",

    "account reconciliation",

    "payment information",

    "loan payment",

    "charged this period",

    "annual percentage rate",

  ];



  return ignoreWords.some(
    word =>
      text.includes(word)
  );

}








function getType(
  line:string
):"credit"|"debit"|null {


  const text =
    line.toLowerCase();



  if(
    text.includes("deposit") ||
    text.includes("credit")
  ){

    return "credit";

  }




  if(
    text.includes("debit") ||
    text.includes("ach") ||
    text.includes("charge") ||
    text.includes("fee") ||
    text.includes("withdraw")
  ){

    return "debit";

  }



  return null;

}








function createTransaction(
  date:string,
  lines:string[]
):Transaction|null {


  const full =
    lines.join(" ");



  if(
    shouldIgnore(full)
  ){

    return null;

  }




  const type =
    getType(full);



  if(!type)
    return null;




  const amounts =
    extractMoney(full);



  if(!amounts.length)
    return null;




  let balance:number|null = null;

  let amount:number|null = null;




  /**
   * Bank statement pattern:
   *
   * Deposit:
   * Description Credit Balance
   *
   * Debit:
   * Description Debit Balance
   */



  if(
    amounts.length >= 2
  ){

    balance =
      amounts[
        amounts.length - 1
      ];



    amount =
      amounts[0];

  }

  else {

    amount =
      amounts[0];

  }







  let debit:number|null = null;

  let credit:number|null = null;



  if(type === "credit"){

    credit = amount;

  }
  else{

    debit = amount;

  }







  let description =
    full;



  amounts.forEach(
    value => {

      description =
        description.replace(
          value.toString(),
          ""
        );

    }
  );



  description =
    description

    .replace(/\$/g,"")

    .replace(/\s+/g," ")

    .trim();





  if(
    description.length < 3
  ){

    description =
      "Transaction";

  }






  return {

    date,

    description,

    debit,

    credit,

    balance,

    transactionType:
      type === "credit"
      ? "Credit"
      : "Debit"

  };

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





  const transactions:
    Transaction[] = [];




  let currentDate = "";

  let buffer:string[] = [];






  function process(){

    if(
      currentDate &&
      buffer.length
    ){

      const transaction =
        createTransaction(
          currentDate,
          buffer
        );


      if(transaction){

        transactions.push(
          transaction
        );

      }

    }


    buffer=[];

  }








  for(
    const line of lines
  ){


    const date =
      extractDate(
        line
      );



    if(date){


      process();



      currentDate =
        normalizeDate(
          date
        );



      buffer.push(

        line
        .replace(
          date,
          ""
        )
        .trim()

      );


    }
    else if(
      currentDate
    ){

      buffer.push(
        line
      );

    }


  }





  process();






  return {

    transactions:

      removeDuplicateTransactions(
        transactions
      )

  };

}