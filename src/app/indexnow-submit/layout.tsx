import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('indexnow-submit');

export default function IndexnowSubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
