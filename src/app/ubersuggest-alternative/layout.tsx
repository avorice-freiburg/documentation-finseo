import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('ubersuggest-alternative');

export default function UbersuggestAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
