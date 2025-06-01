import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('careers');

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
