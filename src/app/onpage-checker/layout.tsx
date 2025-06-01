import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('onpage-checker');

export default function OnpageCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
