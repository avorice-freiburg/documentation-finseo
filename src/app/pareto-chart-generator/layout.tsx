import { generateMetadata as getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata('pareto-chart-generator');

export default function ParetoChartGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
