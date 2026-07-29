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
  category = "Utility",
  keywords = [],
  features = [],
  faqs = [],
  howTo = [],
}: ToolSEOProps) {


  console.log("TOOL SEO LOADED:", name);
  console.log("FAQ COUNT:", faqs.length);
  console.log("HOWTO COUNT:", howTo.length);


  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Soupxor",
      "url": "https://soupxor.com",
    },


    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": name,
      "applicationCategory": category,
      "operatingSystem": "Web Browser",
      "description": description,
      "url": url,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "featureList": features,
      "keywords": keywords.join(", "),
    },


    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": name,
      "description": description,
      "url": url,
    },


    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://soupxor.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Tools",
          "item": "https://soupxor.com/tools",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": name,
          "item": url,
        },
      ],
    },


    ...(faqs.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          },
        ]
      : []),


    ...(howTo.length > 0
      ? [
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": `How to use ${name}`,
            "step": howTo.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.name,
              "text": step.text,
            })),
          },
        ]
      : []),
  ];


  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}