import Script from "next/script";

export default function GlobalSchema() {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Soupxor",
    "url": "https://soupxor.com",
    "logo": "https://soupxor.com/icon-512.png",
    "description":
      "Soupxor provides free online tools for PDF, image conversion, text utilities, developer tools and productivity.",
  };


  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Soupxor",
    "url": "https://soupxor.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target":
        "https://soupxor.com/search?q={search_term_string}",
      "query-input":
        "required name=search_term_string",
    },
  };


  const softwareCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Soupxor Free Online Tools",
    "url": "https://soupxor.com/tools",
    "description":
      "Collection of free browser-based tools including PDF tools, image converters, calculators, text tools and developer utilities.",
  };


  return (
    <>
      <Script
        id="soupxor-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />


      <Script
        id="soupxor-website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />


      <Script
        id="soupxor-tools-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareCollectionSchema),
        }}
      />
    </>
  );
}