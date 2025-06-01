import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { createSoftwareApplicationSchema, createHowToSchema } from "@/lib/schemas";

export const metadata = getPageMetadata("ai-chart-generator");

const chartGeneratorAppSchema = createSoftwareApplicationSchema(
  "AI Chart Generator",
  "Create stunning charts and visualizations with AI. Generate professional charts from data or descriptions in seconds.",
  "https://finseo.ai/ai-chart-generator",
  true
);

const chartGeneratorHowToSchema = createHowToSchema(
  "How to Generate Charts with AI",
  "Learn how to create professional charts and visualizations using our AI-powered chart generator",
  [
    {
      name: "Enter your data or description",
      text: "Input your data or describe the chart you want to create"
    },
    {
      name: "Select chart type",
      text: "Choose from various chart types like bar, line, pie, or let AI decide"
    },
    {
      name: "Generate and customize",
      text: "AI generates your chart which you can then customize and export"
    }
  ]
);

export default function AIChartGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup schema={[chartGeneratorAppSchema, chartGeneratorHowToSchema]} />
      {children}
    </>
  );
} 