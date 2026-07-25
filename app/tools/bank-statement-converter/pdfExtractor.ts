import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { PDFExtractionResult } from "./types";


if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

}



type PDFTextItem = {

  str?: string;

  transform?: number[];

};



type PositionedText = {

  text: string;

  x: number;

  y: number;

};





function normalizeItems(
  items: PDFTextItem[]
): PositionedText[] {


  return items
    .map(item => ({

      text:
        item.str?.trim() || "",

      x:
        item.transform?.[4] ?? 0,

      y:
        item.transform?.[5] ?? 0,

    }))

    .filter(
      item =>
        item.text.length > 0
    );

}






function sortItems(
  items: PositionedText[]
) {


  return items.sort((a,b)=>{


    const yDiff =
      b.y - a.y;


    if(
      Math.abs(yDiff) > 5
    ){
      return yDiff;
    }


    return a.x - b.x;

  });


}







function buildTableLines(
  items: PositionedText[]
): string[] {


  const lines:string[]=[];


  let currentY:number|null=null;


  let row:PositionedText[]=[];




  for(
    const item of items
  ){


    if(currentY===null){

      currentY=item.y;

    }



    if(
      Math.abs(
        currentY - item.y
      ) > 5
    ){


      if(row.length){

        row.sort(
          (a,b)=>a.x-b.x
        );


        lines.push(
          row
          .map(
            col=>col.text
          )
          .join(" ")
        );

      }



      row=[];

      currentY=item.y;


    }



    row.push(item);


  }




  if(row.length){


    row.sort(
      (a,b)=>a.x-b.x
    );


    lines.push(
      row
      .map(
        col=>col.text
      )
      .join(" ")
    );

  }



  return lines;

}








function cleanExtractedText(
 text:string
){


 return text

  .replace(
    /\u00A0/g,
    " "
  )

  .replace(
    /[ ]{2,}/g,
    " "
  )

  .replace(
    /\n{3,}/g,
    "\n\n"
  )

  .trim();


}








export async function extractPDFText(
 file:File
):Promise<PDFExtractionResult>{



 const buffer =
   await file.arrayBuffer();





 const pdf =
   await pdfjsLib
    .getDocument({

      data:buffer,

      useWorkerFetch:false,

    })
    .promise;





 const pages:string[]=[];


 let characterCount=0;





 for(
   let pageNumber=1;
   pageNumber<=pdf.numPages;
   pageNumber++
 ){



   const page =
     await pdf.getPage(
       pageNumber
     );





   const content =
     await page.getTextContent();





   const normalized =
     normalizeItems(
       content.items as PDFTextItem[]
     );





   const sorted =
     sortItems(
       normalized
     );





   const lines =
     buildTableLines(
       sorted
     );





   const pageText =
     lines.join("\n");





   characterCount +=
     pageText.length;





   pages.push(
     pageText
   );



 }





 const finalText =
   cleanExtractedText(
     pages.join("\n\n")
   );






 return {


   text:
     finalText,


   pages:
     pdf.numPages,



   isScanned:
     characterCount < 50,


 };


}