import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { createSoftwareApplicationSchema, createHowToSchema } from "@/lib/schemas";

export const metadata = getPageMetadata("ai-article-writer");

const articleWriterAppSchema = createSoftwareApplicationSchema(
  "AI Article Writer",
  "Generate high-quality, SEO-optimized articles with AI. Create engaging content that ranks well in search engines.",
  "https://finseo.ai/ai-article-writer",
  true
);

const articleWriterHowToSchema = createHowToSchema(
  "How to Write Articles with AI",
  "Learn how to create SEO-optimized articles using our AI-powered article writer",
  [
    {
      name: "Enter your topic or keywords",
      text: "Provide the topic, keywords, or brief description of what you want to write about"
    },
    {
      name: "Set article parameters",
      text: "Choose article length, tone, target audience, and SEO requirements"
    },
    {
      name: "Generate and refine",
      text: "AI creates your article which you can edit, optimize, and export"
    }
  ]
);

export default function AIArticleWriterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup schema={[articleWriterAppSchema, articleWriterHowToSchema]} />
      {children}
    </>
  );
} 