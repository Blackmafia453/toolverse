export default function HomeSchema() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://soupxor.com/#organization",
      name: "Soupxor",
      url: "https://soupxor.com",
      logo: "https://soupxor.com/icon-512.png",
      image: "https://soupxor.com/og-image.png",
      description:
        "Soupxor provides fast, secure and free online tools for PDF, image, text, developer and productivity tasks.",
      sameAs: [],
    },

    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://soupxor.com/#website",
      url: "https://soupxor.com",
      name: "Soupxor",
      publisher: {
        "@id": "https://soupxor.com/#organization",
      },
      inLanguage: "en",
    },

    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://soupxor.com/#webpage",
      url: "https://soupxor.com",
      name: "Soupxor – Free Online Tools",
      isPartOf: {
        "@id": "https://soupxor.com/#website",
      },
      about: {
        "@id": "https://soupxor.com/#organization",
      },
      description:
        "Free online tools for PDF, images, text, developers and calculators.",
    },

    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Soupxor Online Tools",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Word Counter",
          url: "https://soupxor.com/tools/word-counter",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Character Counter",
          url: "https://soupxor.com/tools/character-counter",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Password Generator",
          url: "https://soupxor.com/tools/password-generator",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "QR Code Generator",
          url: "https://soupxor.com/tools/qr-code-generator",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "PDF Merge",
          url: "https://soupxor.com/tools/pdf-merge",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "PDF Split",
          url: "https://soupxor.com/tools/pdf-split",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Image Compressor",
          url: "https://soupxor.com/tools/image-compressor",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "JPG to PNG",
          url: "https://soupxor.com/tools/jpg-to-png",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "PNG to JPG",
          url: "https://soupxor.com/tools/png-to-jpg",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Age Calculator",
          url: "https://soupxor.com/tools/age-calculator",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "BMI Calculator",
          url: "https://soupxor.com/tools/bmi-calculator",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Percentage Calculator",
          url: "https://soupxor.com/tools/percentage-calculator",
        },
        {
          "@type": "ListItem",
          position: 13,
          name: "Loan Calculator",
          url: "https://soupxor.com/tools/loan-calculator",
        },
        {
          "@type": "ListItem",
          position: 14,
          name: "JSON Formatter",
          url: "https://soupxor.com/tools/json-formatter",
        },
        {
          "@type": "ListItem",
          position: 15,
          name: "Color Picker",
          url: "https://soupxor.com/tools/color-picker",
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}