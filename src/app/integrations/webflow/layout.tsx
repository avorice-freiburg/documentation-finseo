import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('integrations/webflow');

export default function IntegrationswebflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
