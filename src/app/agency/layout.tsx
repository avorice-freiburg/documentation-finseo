import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { createServiceSchema } from "@/lib/schemas";

export const metadata = getPageMetadata("agency");

const agencyServiceSchema = createServiceSchema(
  "SEO Agency Tools & Services",
  "Comprehensive SEO platform designed for agencies to manage multiple clients, white-label solutions, and advanced reporting tools.",
  "https://finseo.ai/agency",
  "Starting at $49/month"
);

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup schema={agencyServiceSchema} />
      {children}
    </>
  );
} 