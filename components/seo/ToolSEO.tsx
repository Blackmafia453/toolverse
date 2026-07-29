interface FAQItem {
  question: string;
  answer: string;
}

interface HowToStep {
  name: string;
  text: string;
}

interface ToolSEOProps {
  name: string;
  description: string;
  url: string;
  category?: string;
  keywords?: string[];
  features?: string[];
  faqs?: FAQItem[];
  howTo?: HowToStep[];
}

export default function ToolSEO({
  name,
  description,
  url,
  category = "UtilitiesApplication",
  keywords = [],
  features = [],
  faqs = [],
  howTo = [],
}: ToolSEOProps) {

  if (process.env.NODE_ENV === "development") {
    console.log("TOOL SEO LOADED:", name);
    console.log("FAQ COUNT:", faqs.length);
    console.log("HOWTO COUNT:", howTo.length);
  }


  const schemas = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        "name": name,
        "applicationCategory": category,
        "operatingSystem": "Web Browser",
        "description": description,
        "url": url,

        "publisher": {
          "@id": "https://soupxor.com/#organization"
        },

        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },

        "isAccessibleForFree": true,

        "browserRequirements":
          "Requires a modern web browser",

        "featureList": features,

        "keywords": keywords.join(", ")
      },


      {
        "@type": "WebApplication",
        "@id": `${url}#webapp`,
        "name": name,
        "url": url,
        "applicationCategory": category,

        "browserRequirements":
          "Requires JavaScript enabled browser",

        "operatingSystem":
          "Any",

        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },


      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        "name": name,
        "url": url,
        "description": description,

        "isPartOf": {
          "@id": "https://soupxor.com/#website"
        },

        "about": {
          "@id": `${url}#software`
        }
      },


      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,

        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://soupxor.com"
          },

          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tools",
            "item": "https://soupxor.com/tools"
          },

          {
            "@type": "ListItem",
            "position": 3,
            "name": name,
            "item": url
          }
        ]
      },


      ...(faqs.length > 0
        ? [
            {
              "@type": "FAQPage",

              "@id": `${url}#faq`,

              "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,

                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ]
        : []),


      ...(howTo.length > 0
        ? [
            {
              "@type": "HowTo",

              "@id": `${url}#howto`,

              "name": `How to use ${name}`,

              "step": howTo.map((step, index) => ({
                "@type": "HowToStep",

                "position": index + 1,

                "name": step.name,

                "text": step.text
              }))
            }
          ]
        : [])

    ]
  };


  return (
    <script
      id={`seo-${name.toLowerCase().replace(/\s+/g, "-")}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas),
      }}
    />
  );
}