import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { createPricingProductSchema, createFAQSchema } from "@/lib/schemas";

export const metadata = getPageMetadata("pricing");

const pricingSchema = createPricingProductSchema();

const pricingFAQSchema = createFAQSchema([
  {
    question: "What is AI search visibility tracking?",
    answer: "AI search visibility tracking monitors how often and in what context your brand appears in AI platform responses like ChatGPT, Claude, Gemini, and Perplexity. It helps you understand your brand's presence in the new era of AI-powered search and provides insights to optimize your visibility."
  },
  {
    question: "Which AI platforms can I track with Finseo?",
    answer: "Finseo tracks your visibility across all major AI platforms including ChatGPT, Claude, Gemini, Perplexity, and DeepSeek. We continuously monitor these platforms and add support for new AI search engines as they gain prominence in the market."
  },
  {
    question: "How does AI visibility tracking differ from traditional SEO?",
    answer: "Traditional SEO tracks rankings on search engines like Google, while AI visibility tracking monitors how AI platforms mention and recommend your brand in conversational responses. This is crucial as more users rely on AI for research, recommendations, and decision-making."
  },
  {
    question: "Can I track my competitors' AI visibility too?",
    answer: "Yes! Finseo includes comprehensive competitor analysis for AI platforms. Monitor how competitors appear in AI responses, compare mention frequency and sentiment, and identify opportunities to improve your own AI visibility relative to the competition."
  },
  {
    question: "What actionable insights does the tool provide?",
    answer: "Our AI visibility tool provides structured data recommendations, citation suggestions, content optimization tips, and prompt discovery insights. You'll get specific actions to improve your visibility, such as adding schema markup or creating content that answers key prompts."
  },
  {
    question: "How accurate is the AI brand sentiment analysis?",
    answer: "Our sentiment analysis uses advanced natural language processing to analyze how AI platforms discuss your brand. We track positive, neutral, and negative mentions with 95%+ accuracy, providing insights into brand perception across AI conversations."
  }
]);

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup schema={[pricingSchema, pricingFAQSchema]} />
      {children}
    </>
  );
} 