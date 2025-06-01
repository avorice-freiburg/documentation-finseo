import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { createSoftwareApplicationSchema, createHowToSchema } from "@/lib/schemas";

export const metadata = getPageMetadata("keyword-research");

const keywordResearchAppSchema = createSoftwareApplicationSchema(
  "AI Keyword Research Tool",
  "Discover high-value keywords with AI-powered research. Find profitable keywords, analyze competition, and optimize your SEO strategy.",
  "https://finseo.ai/keyword-research",
  true
);

const keywordResearchHowToSchema = createHowToSchema(
  "How to Do Keyword Research with AI",
  "Learn how to find and analyze keywords using our AI-powered keyword research tool",
  [
    {
      name: "Enter seed keywords",
      text: "Start with basic keywords related to your business or topic"
    },
    {
      name: "Analyze AI suggestions",
      text: "Review AI-generated keyword suggestions with search volume and difficulty data"
    },
    {
      name: "Export and implement",
      text: "Export your keyword list and implement them in your content strategy"
    }
  ]
);

export default function KeywordResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup schema={[keywordResearchAppSchema, keywordResearchHowToSchema]} />
      {children}
    </>
  );
} 