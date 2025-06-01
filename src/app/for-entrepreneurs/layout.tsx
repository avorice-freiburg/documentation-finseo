import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('for-entrepreneurs');

export default function ForEntrepreneursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
