import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { createServiceSchema } from "@/lib/schemas";

export const metadata = getPageMetadata("enterprise");

const enterpriseServiceSchema = createServiceSchema(
  "Enterprise SEO Solutions",
  "Comprehensive AI-powered SEO platform designed for large organizations with advanced features, dedicated support, and custom integrations.",
  "https://finseo.ai/enterprise",
  "Contact for pricing"
);

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup schema={enterpriseServiceSchema} />
      {children}
    </>
  );
} 