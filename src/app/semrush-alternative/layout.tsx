import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('semrush-alternative');

export default function SemrushAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
