import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('seo-ai-affiliate-program');

export default function SeoAiAffiliateProgramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
