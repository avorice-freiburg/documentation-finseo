import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('otterly-ai-alternative');

export default function OtterlyAiAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
