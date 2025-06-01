import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('line-chart-generator');

export default function LineChartGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
