import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('for-enterprise');

export default function ForEnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 