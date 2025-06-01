import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('ai-visibility-tracking');

export default function AiVisibilityTrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
