import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://soupxor.com";
  const lastModified = new Date();

  return [
    // Main Pages
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // Text Tools
    {
      url: `${baseUrl}/tools/word-counter`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/character-counter`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Security
    {
      url: `${baseUrl}/tools/password-generator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // PDF Tools
    {
      url: `${baseUrl}/tools/pdf-merge`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/pdf-split`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Image Tools
    {
      url: `${baseUrl}/tools/image-compressor`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/jpg-to-png`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/png-to-jpg`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/qr-code-generator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Calculators
    {
      url: `${baseUrl}/tools/age-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/bmi-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/percentage-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/loan-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Developer Tools
    {
      url: `${baseUrl}/tools/json-formatter`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/color-picker`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}