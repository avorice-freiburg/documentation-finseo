import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('integrations/wordpress');

export default function IntegrationswordpressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
