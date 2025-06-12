import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { createSoftwareApplicationSchema, createHowToSchema, createFAQSchema } from "@/lib/schemas";

export const metadata = getPageMetadata('ai-visibility-tracking');

const aiVisibilityTrackingAppSchema = createSoftwareApplicationSchema(
  "AI Visibility Tracking Tool",
  "Track your brand mentions and visibility across ChatGPT, Claude, Gemini, Perplexity and all major AI platforms. Monitor AI search rankings, analyze competitor performance, and understand search intent.",
  "https://finseo.ai/ai-visibility-tracking",
  false
);

const aiVisibilityHowToSchema = createHowToSchema(
  "How to Track AI Visibility and Brand Mentions",
  "Learn how to monitor your brand visibility across AI platforms using our comprehensive tracking tool",
  [
    {
      name: "Set up brand monitoring",
      text: "Enter your brand name and competitors you want to track across AI platforms"
    },
    {
      name: "Monitor AI platform mentions",
      text: "Track mentions across ChatGPT, Claude, Gemini, and Perplexity in real-time"
    },
    {
      name: "Analyze performance and sentiment",
      text: "Review visibility metrics, sentiment analysis, and competitive positioning data"
    }
  ]
);

const aiVisibilityFAQSchema = createFAQSchema([
  {
    question: "What is AI visibility tracking?",
    answer: "AI visibility tracking is the process of monitoring how often and in what context your brand appears in AI platform responses like ChatGPT, Claude, Gemini, and Perplexity. It helps you understand your brand's presence in the new era of AI-powered search and conversation."
  },
  {
    question: "Which AI platforms can I track?",
    answer: "Our AI visibility tracking tool monitors mentions across ChatGPT, Claude, Gemini, Perplexity, and other major AI platforms. We continuously add support for new AI platforms as they gain popularity."
  },
  {
    question: "How does AI brand monitoring differ from traditional SEO tracking?",
    answer: "Traditional SEO tracking focuses on search engine rankings, while AI visibility tracking monitors how AI platforms mention and recommend your brand in conversational responses. This is crucial as more users rely on AI for research and recommendations."
  },
  {
    question: "Can I track competitor performance in AI platforms?",
    answer: "Yes, our AI visibility tracking includes comprehensive competitor analysis. Monitor how competitors appear in AI responses, compare mention frequency, sentiment, and identify opportunities to improve your own AI visibility."
  },
  {
    question: "What metrics does AI visibility tracking provide?",
    answer: "We track mention frequency, sentiment analysis, search intent classification, competitive positioning, and visibility trends over time. You'll also get alerts for significant changes in your AI platform presence."
  }
]);

export default function AiVisibilityTrackingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaMarkup schema={[aiVisibilityTrackingAppSchema, aiVisibilityHowToSchema, aiVisibilityFAQSchema]} />
      {children}
    </>
  );
}
