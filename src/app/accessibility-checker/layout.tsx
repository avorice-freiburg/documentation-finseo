import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('accessibility-checker');

export default function AccessibilityCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
