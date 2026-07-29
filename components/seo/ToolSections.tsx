import ToolFAQ from "./ToolFAQ";
import ToolContent from "./ToolContent";
import ToolHowTo from "./ToolHowTo";
import ToolRelated from "./ToolRelated";


interface ToolSectionsProps {

  data: any;

}



export default function ToolSections({

  data,

}: ToolSectionsProps) {


  return (

    <>


      {
        data.content && (

          <ToolContent

            title={data.content.heading}

            sections={
              data.content.sections.map((item:any)=>({

                heading: item.title,

                paragraphs: [
                  item.text
                ]

              }))
            }

          />

        )
      }




      {
        data.howTo && (

          <ToolHowTo

            steps={
              data.howTo.map((step:any)=>step.text)
            }

          />

        )
      }




      {
        data.faqs && (

          <ToolFAQ

            faqs={data.faqs}

          />

        )
      }




      {
        data.relatedTools && (

          <ToolRelated

            tools={data.relatedTools}

          />

        )
      }



    </>

  );

}