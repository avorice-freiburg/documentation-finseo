import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('pie-chart-generator');

export default function PieChartGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
