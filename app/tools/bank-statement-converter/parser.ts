import { Transaction, ParseResult } from "./types";



function normalizeDate(value:string){

  const parts =
    value.split(/[\/\-]/);


  if(parts.length !== 3){
    return value;
  }


  const year = parts[0];
  const month = parts[1];
  const day = parts[2];


  if(year.length !== 4){
    return value;
  }


  return `${year}-${month.padStart(2,"0")}-${day.padStart(2,"0")}`;

}







function cleanLine(text:string){

  return text
    .replace(/\bNBR\b/gi,"")
    .replace(/\b131\b/g,"")
    .replace(/account\s*(number|no|#)?\s*\d+/gi,"")
    .replace(/page\s+\d+/gi,"")
    .replace(/\s+/g," ")
    .trim();

}








function isHeader(text:string){

 const lower =
   text.toLowerCase();


 return (

   lower.includes("contact us") ||
   lower.includes("branch") ||
   lower.includes("previous balance") ||
   lower.includes("transactions") ||
   lower.includes("checks") ||
   lower.includes("closing date") ||
   lower.includes("statement date") ||
   lower.includes("loan") ||
   lower.includes("fee summary") ||
   lower.includes("interest") ||
   lower.includes("true checking")

 );

}








function extractDate(text:string){

 const match =
   text.match(
     /\b\d{4}[-\/]\d{2}[-\/]\d{2}\b/
   );


 if(!match){
   return "";
 }


 return normalizeDate(
   match[0]
 );

}








function extractAmounts(
 text:string
):string[]{


 const matches =
   text.match(
     /\(?\d[\d,]*\.\d{2}\)?/g
   );


 if(!matches){

   return [];

 }



 return matches

   .map(value =>

      value
       .replace(/[(),]/g,"")
       .replace(/,/g,"")
       .trim()

   )

   .filter(value=>{


      const number =
        Number(value);



      if(isNaN(number)){
        return false;
      }



      if(number === 131){
        return false;
      }



      return true;


   });


}









function isDebit(text:string){


 const lower =
   text.toLowerCase();



 return (

   lower.includes("debit") ||
   lower.includes("withdraw") ||
   lower.includes("settlement") ||
   lower.includes("charge") ||
   lower.includes("fee") ||
   lower.includes("payment")

 );


}








function isCredit(text:string){


 const lower =
   text.toLowerCase();



 return (

   lower.includes("deposit") ||
   lower.includes("credit") ||
   lower.includes("received") ||
   lower.includes("correction")

 );


}









function cleanDescription(
 text:string,
 amounts:string[]
){


 let description =
   text;



 amounts.forEach(amount=>{


   description =
     description.replace(
       amount,
       ""
     );


 });




 return description

   .replace(/\$/g,"")

   .replace(/\//g," ")

   .replace(/\s+/g," ")

   .trim();


}









function parseLine(
 line:string
):Transaction|null{



 const cleaned =
   cleanLine(line);




 if(isHeader(cleaned)){
   return null;
 }




 const date =
   extractDate(cleaned);



 if(!date){
   return null;
 }





 const amounts =
   extractAmounts(cleaned);




 if(!amounts.length){
   return null;
 }




 const numbers =
   amounts.map(Number);





 let debit:number|null = null;

 let credit:number|null = null;

 let balance:number|null = null;





 /*
   Carson Bank format:

   Debit:
   Debit Amount + Balance

   Credit:
   Credit Amount + Balance

 */





 if(numbers.length >= 2){



    balance =
      numbers[numbers.length - 1];



    const transactionAmount =
      numbers[0];



    if(isDebit(cleaned)){


      debit =
        transactionAmount;


    }
    else if(isCredit(cleaned)){


      credit =
        transactionAmount;


    }


 }

 else if(numbers.length === 1){


    if(isDebit(cleaned)){


      debit =
        numbers[0];


    }
    else if(isCredit(cleaned)){


      credit =
        numbers[0];


    }


 }







 const description =
   cleanDescription(
     cleaned,
     amounts
   );






 if(
   !description &&
   debit === null &&
   credit === null
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
 transactions:Transaction[]
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



   if(seen.has(key)){
     return false;
   }



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

    .map(cleanLine)

    .filter(Boolean);





 const transactions:Transaction[] = [];





 for(
   const line of lines
 ){



   const transaction =
     parseLine(line);



   if(transaction){

     transactions.push(
       transaction
     );

   }


 }





 const finalTransactions =
   removeDuplicates(
     transactions
   );







 return {


   transactions:
     finalTransactions,


   totalTransactions:
     finalTransactions.length,


   success:
     finalTransactions.length > 0,


   error:
     finalTransactions.length
       ? undefined
       : "No transactions found"


 };


}