import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('for-agencies');

export default function ForAgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
