export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

export interface ContentSection {
  title: string;
  text: string;
}

export interface RelatedTool {
  title: string;
  description: string;
  href: string;
}

export interface ToolContent {
  heading: string;
  sections: ContentSection[];
}

export interface ToolSEOData {
  // Core SEO
  name: string;
  description: string;
  url: string;

  // Classification
  category: string;

  // Keywords
  keywords: string[];

  // Features
  features: string[];

  // Rich Content
  faqs: FAQItem[];

  howTo: HowToStep[];

  content: ToolContent;

  relatedTools: RelatedTool[];
}