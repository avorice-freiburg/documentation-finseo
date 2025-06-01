import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('backlink-checker');

export default function BacklinkCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
