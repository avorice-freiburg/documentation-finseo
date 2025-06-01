import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('for-smbs');

export default function ForSmbsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
