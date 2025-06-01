import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('terms-conditions');

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
