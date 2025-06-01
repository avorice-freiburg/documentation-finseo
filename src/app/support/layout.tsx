import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('support');

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
