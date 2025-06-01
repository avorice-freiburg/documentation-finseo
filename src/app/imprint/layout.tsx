import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('imprint');

export default function ImprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
