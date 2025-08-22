import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huntercoach - KI und Automatisierung für KMU | Finseo",
  description: "30% mehr Output durch KI und Automatisierung für kleine und mittelständische Unternehmen. Martin Jäger unterstützt KMUs bei der digitalen Transformation.",
  keywords: [
    "KI für KMU",
    "Automatisierung",
    "Martin Jäger",
    "Huntercoach",
    "KI Beratung",
    "Digitale Transformation",
    "Mittelstand",
    "SEO für KMU"
  ],
  openGraph: {
    title: "Huntercoach - KI und Automatisierung für KMU",
    description: "30% mehr Output durch KI und Automatisierung für kleine und mittelständische Unternehmen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function HuntercoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 