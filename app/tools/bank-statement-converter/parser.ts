import { Transaction, ParseResult } from "./types";
import {
  extractDate,
  removeDuplicateTransactions,
} from "./utils";


function normalizeDate(
  date: string
): string {

  const clean =
    date.replace(",", "").trim();


  const parts =
    clean.split(/[\/\-]/);


  if(parts.length === 3){

    let month =
      parts[0].padStart(2,"0");

    let day =
      parts[1].padStart(2,"0");

    let year =
      parts[2];


    if(year.length === 2){

      year =
        "20" + year;

    }


    return `${year}-${month}-${day}`;

  }


  return clean;

}





function isNoiseLine(
  line:string
){

  const value =
    line.toLowerCase();



  const noise = [

    "previous balance",
    "opening balance",
    "closing balance",
    "transactions continued",
    "transaction summary",
    "checks continued",
    "interest charged",
    "interest charge calculation",
    "account reconciliation",
    "payment information",
    "annual percentage rate",
    "total fees",
    "total interest"

  ];



  return noise.some(
    item =>
      value.includes(item)
  );

}







function extractMoney(
  text:string
):number[] {


  const matches =
    text.match(
      /\$?\s?\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g
    );


  if(!matches)
    return [];



  return matches

    .map(
      value =>
        Number(
          value
          .replace("$","")
          .replace(/\s/g,"")
          .replace(/,/g,"")
        )
    )

    .filter(
      value =>
        !isNaN(value)
    );

}







function detectType(
  line:string
):"debit"|"credit"|null{


  const text =
    line.toLowerCase();



  if(
    text.includes("deposit") ||
    text.includes("credit") ||
    text.includes("interest paid")
  ){

    return "credit";

  }




  if(
    text.includes("debit") ||
    text.includes("withdraw") ||
    text.includes("charge") ||
    text.includes("fee") ||
    text.includes("ach")
  ){

    return "debit";

  }



  return null;

}







function cleanDescription(
  line:string,
  amounts:number[]
){

  let result =
    line;



  amounts.forEach(
    amount=>{

      result =
        result.replace(
          amount.toString(),
          ""
        );

    }
  );



  return result

    .replace(/\$/g,"")

    .replace(/\s+/g," ")

    .trim();

}







function buildTransaction(
  date:string,
  lines:string[]
):Transaction|null {


  const fullLine =
    lines.join(" ");



  if(
    isNoiseLine(fullLine)
  ){

    return null;

  }




  const amounts =
    extractMoney(
      fullLine
    );



  if(
    amounts.length === 0
  ){

    return null;

  }



  const type =
    detectType(
      fullLine
    );



  if(!type)
    return null;




  let debit:number|null = null;

  let credit:number|null = null;


  let balance:number|null = null;




  /**
   * Usually:
   * amount + balance
   */

  if(
    amounts.length >= 2
  ){

    balance =
      amounts[
        amounts.length - 1
      ];



    const amount =
      amounts[
        amounts.length - 2
      ];



    if(type==="credit"){

      credit = amount;

    }
    else{

      debit = amount;

    }

  }

  else {


    if(type==="credit"){

      credit =
        amounts[0];

    }
    else{

      debit =
        amounts[0];

    }

  }






  const description =
    cleanDescription(
      fullLine,
      amounts
    );





  if(
    description.length < 3
  ){

    return null;

  }




  return {

    date,

    description,

    debit,

    credit,

    balance,

    transactionType:
      type==="credit"
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
      !currentDate ||
      !buffer.length
    ){

      buffer=[];

      return;

    }



    const transaction =
      buildTransaction(
        currentDate,
        buffer
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