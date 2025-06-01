import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { createArticleSchema } from "@/lib/schemas";

export const metadata = getPageMetadata("about");

const aboutArticleSchema = createArticleSchema(
  "About Finseo.ai - AI-Powered SEO Platform",
  "Learn about Finseo.ai, the innovative AI-powered platform designed to enhance SEO and content creation efforts with cutting-edge technology.",
  "https://finseo.ai/about",
  "2025-01-01",
  "2025-01-01"
);

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup schema={aboutArticleSchema} />
      {children}
    </>
  );
} 