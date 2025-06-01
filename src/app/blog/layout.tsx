import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('blog');

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
