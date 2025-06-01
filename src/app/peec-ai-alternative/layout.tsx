import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('peec-ai-alternative');

export default function PeecAiAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
