import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { createPricingProductSchema } from "@/lib/schemas";

export const metadata = getPageMetadata("pricing");

const pricingSchema = createPricingProductSchema();

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup schema={pricingSchema} />
      {children}
    </>
  );
} 