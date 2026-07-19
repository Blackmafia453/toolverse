import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://soupxor.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },

    // Tools

    {
      url: `${baseUrl}/tools/word-counter`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/password-generator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/pdf-merge`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/pdf-split`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/image-compressor`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/jpg-to-png`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/png-to-jpg`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/qr-code-generator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/age-calculator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/bmi-calculator`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/tools/percentage-calculator`,
      lastModified: new Date(),
    },
  ];
}