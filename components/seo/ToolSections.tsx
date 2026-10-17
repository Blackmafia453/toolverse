import ToolFAQ from "./ToolFAQ";
import ToolContent from "./ToolContent";
import ToolHowTo from "./ToolHowTo";
import ToolRelated from "./ToolRelated";


interface ContentSection {
  title: string;
  text: string;
}

interface HowToStep {
  name?: string;
  text: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedToolItem {
  title: string;
  description: string;
  href: string;
}

interface ToolData {
  content?: {
    heading?: string;
    sections: ContentSection[];
  };
  howTo?: HowToStep[];
  faqs?: FAQItem[];
  relatedTools?: RelatedToolItem[];
}

interface ToolSectionsProps {
  data: ToolData;
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
              data.content.sections.map((item: ContentSection) => ({
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
              data.howTo.map((step: HowToStep) => step.text)
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