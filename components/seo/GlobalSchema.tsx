export default function GlobalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://soupxor.com/#organization",
        "name": "Soupxor",
        "url": "https://soupxor.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://soupxor.com/icon-512.png"
        },
        "description":
          "Soupxor provides free browser-based online tools including PDF tools, image converters, calculators, text utilities, developer tools and productivity solutions."
      },

      {
        "@type": "WebSite",
        "@id": "https://soupxor.com/#website",
        "name": "Soupxor",
        "url": "https://soupxor.com",
        "publisher": {
          "@id": "https://soupxor.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate":
              "https://soupxor.com/search?q={search_term_string}"
          },
          "query-input":
            "required name=search_term_string"
        }
      },

      {
        "@type": "CollectionPage",
        "@id": "https://soupxor.com/tools/#collection",
        "name": "Soupxor Free Online Tools",
        "url": "https://soupxor.com/tools",
        "isPartOf": {
          "@id": "https://soupxor.com/#website"
        },
        "description":
          "Explore free online tools for PDF processing, image conversion, text analysis, calculators and developer utilities."
      },

      {
        "@type": "SoftwareApplication",
        "@id": "https://soupxor.com/#software",
        "name": "Soupxor Online Tools",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "Web Browser",
        "url": "https://soupxor.com/tools",
        "publisher": {
          "@id": "https://soupxor.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description":
          "Free privacy-friendly online tools that work directly in your browser without installation."
      }
    ]
  };

  return (
    <script
      id="soupxor-global-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}