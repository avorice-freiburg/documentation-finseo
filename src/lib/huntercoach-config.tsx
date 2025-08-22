import { HuntercoachFirstBentoAnimation } from "@/components/huntercoach-first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
};

export const huntercoachConfig = {
  name: "Huntercoach",
  description: "KI und Automatisierung für kleine und mittelständische Unternehmen",
  cta: "Jetzt durchstarten",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "KI für KMU",
    "Automatisierung",
    "Martin Jäger",
    "Huntercoach",
    "Digitale Transformation",
  ],
  links: {
    email: "kontakt@huntercoach.de",
    phone: "+49 176 7039 2320",
    aiPhone: "+49 32213232622",
  },
  hero: {
    badgeIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-[#364153]"
      >
        <path d="M7.62758 1.09876C7.74088 1.03404 7.8691 1 7.99958 1C8.13006 1 8.25828 1.03404 8.37158 1.09876L13.6216 4.09876C13.7363 4.16438 13.8316 4.25915 13.8979 4.37347C13.9642 4.48779 13.9992 4.6176 13.9992 4.74976C13.9992 4.88191 13.9642 5.01172 13.8979 5.12604C13.8316 5.24036 13.7363 5.33513 13.6216 5.40076L8.37158 8.40076C8.25828 8.46548 8.13006 8.49952 7.99958 8.49952C7.8691 8.49952 7.74088 8.46548 7.62758 8.40076L2.37758 5.40076C2.26287 5.33513 2.16753 5.24036 2.10123 5.12604C2.03492 5.01172 2 4.88191 2 4.74976C2 4.6176 2.03492 4.48779 2.10123 4.37347C2.16753 4.25915 2.26287 4.16438 2.37758 4.09876L7.62758 1.09876Z" />
      </svg>
    ),
    badge: "KI-SEO für alle Suchplattformen",
    title: "Sichtbar in Google UND ChatGPT",
    description:
      "Optimiere dein Unternehmen für traditionelle Suchmaschinen und KI-Plattformen wie ChatGPT, Claude und Gemini. Verfolge deine Performance, entdecke Keywords und erstelle Content, der überall rankt.",
    image: "/huntercoach.avif",
    cta: {
      primary: {
        text: "Jetzt starten",
        href: "https://app.finseo.ai/signup",
      },
      secondary: {
        text: "Mehr erfahren",
        href: "#bento",
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Jägermeister",
        logo: (
          <img 
            src="/jaegermeister-logo.png" 
            alt="Jägermeister" 
            className="h-8 w-auto object-contain invert dark:invert-0"
          />
        ),
        href: "https://app.finseo.ai/signup",
      },
      {
        id: 2,
        name: "Enpal",
        logo: (
          <img 
            src="/enpal.png" 
            alt="Enpal" 
            className="h-8 w-auto object-contain invert dark:invert-0 mt-1"
          />
        ),
        href: "https://enpal.de",
      },
      {
        id: 3,
        name: "Naturbummler",
        logo: (
          <img 
            src="/naturbummler.png" 
            alt="Naturbummler" 
            className="h-8 w-auto object-contain invert dark:invert-0"
          />
        ),
        href: "https://app.finseo.ai/signup",
      },
      {
        id: 4,
        name: "True Nature",
        logo: (
          <img 
            src="/truenature.svg" 
            alt="True Nature" 
            className="h-8 w-auto object-contain invert dark:invert-0"
          />
        ),
        href: "https://app.finseo.ai/signup",
      },
    ],
  },
  bentoSection: {
    title: "Kleine und mittlere Unternehmen stehen vor neuen Herausforderungen",
    description:
      "KI-Tools wie ChatGPT und Perplexity verändern, wie deine Kunden suchen - und ob sie dich überhaupt finden.",
    items: [
      {
        id: 1,
        content: <SecondBentoAnimation />,
        title: "Du weißt nicht, ob du in KI-Antworten überhaupt auftauchst",
        description:
          "Traditionelles SEO-Monitoring verfolgt deine Sichtbarkeit in KI-Antworten nicht. Finde heraus, ob ChatGPT, Claude oder Perplexity deine Marke erwähnen, wenn Nutzer relevante Fragen stellen.",
      },
      {
        id: 2,
        content: <HuntercoachFirstBentoAnimation />,
        title: "Du weißt nicht, was du ändern musst, um sichtbarer zu werden",
        description:
          "Ohne KI-spezifische Insights optimierst du blind. Erhalte klare, umsetzbare Empfehlungen, welche Content-Änderungen deine Präsenz in KI-Suchergebnissen verbessern.",
      },
      {
        id: 3,
        content: (
          <ThirdBentoAnimation
            data={[75, 70, 65, 58, 52, 45, 38]}
            toolTipValues={[
              5133, 4700, 4266, 3833, 3400, 2967, 2534, 2101, 1678, 1234,
            ]}
            color="#ef4444"
            showGoogleBranding={true}
          />
        ),
        title: "Dein organischer Traffic von Google fällt seit März",
        description:
          "Die KI-Revolution leitet Suchtraffic um. Verfolge den echten Impact auf deine organische Performance und verstehe, wie KI-Suche deine traditionellen SEO-Ergebnisse beeinflusst.",
      },
      {
        id: 4,
        content: <FourthBentoAnimation once={false} />,
        title: "Deine Klickraten sind um mehr als 40% gefallen",
        description:
          "Nutzer erhalten Antworten von KI, anstatt auf deine Website zu klicken. Überwache CTR-Veränderungen und optimiere deinen Content für Engagement in KI- und traditioneller Suche.",
      },
    ],
  },
  featureSection: {
    title: "Komplette KI-Sichtbarkeits-Analyse für dein Unternehmen",
    description:
      "Finde heraus, wo deine Marke in KI-Plattformen auftaucht, entdecke Optimierungschancen und erhalte konkrete Empfehlungen für mehr Sichtbarkeit.",
    items: [
      {
        id: 1,
        title: "Finde heraus, ob du in ChatGPT und KI-Suche sichtbar bist",
        content:
          "Überwache deine Markenerwähnungen in ChatGPT, Claude, Perplexity und anderen KI-Plattformen. Erhalte Echtzeit-Insights, wann und wie KI-Tools dein Unternehmen erwähnen.",
      },
      {
        id: 2,
        title: "Sieh, wie KI über deine Marke spricht",
        content:
          "Verstehe genau, was KI-Plattformen über dein Unternehmen sagen. Verfolge Sentiment, Genauigkeit und den Kontext, in dem deine Marke in KI-Antworten erscheint.",
      },
      {
        id: 3,
        title: "Entdecke, welche Prompts für dein Unternehmen wichtig sind",
        content:
          "Identifiziere die wichtigsten Fragen und Suchanfragen, die KI-Empfehlungen in deiner Branche antreiben. Wisse genau, für welche Prompts du optimieren musst für maximale Sichtbarkeit.",
      },
      {
        id: 4,
        title: "Erhalte klare Empfehlungen für bessere KI-Sichtbarkeit",
        content:
          "Bekomme umsetzbare, schrittweise Anleitungen zur Optimierung deines Contents für KI-Discovery. Verwandle Insights in konkrete Verbesserungen, die deine KI-Sichtbarkeit steigern.",
      },
    ],
  },
  quoteSection: {
    quote: "Martin hat unsere Präsenz auf LinkedIn erheblich verbessert. Seine umfassende Expertise zeigt sich in klaren Anleitungen zur Optimierung und der Gestaltung von Beiträgen für maximale Reichweite.",
    author: {
      name: "Florian Fuest",
      role: "Geschäftsführer, Bertrandt Group",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  pricing: {
    title: "Vollständige SEO & KI-Tools",
    description: "Keine versteckten Kosten. Fair-Use-Limits für intensiven Geschäftseinsatz konzipiert.",
    pricingItems: [
      {
        name: "Starter",
        href: "https://app.finseo.ai/signup",
        price: "$99",
        period: "Monat",
        yearlyPrice: "$99",
        features: [
          "Keyword-Recherche: 150 Suchen",
          "Artikel-Generator: 5 Artikel",
          "Site-Audit: 10 Audits",
          "Global Summary: 4 Zusammenfassungen",
          "Ranking Keywords: 50 Durchläufe",
          "Rank Tracker: 20 Keywords",
          "Konkurrenzanalyse",
          "KI-SEO-Audit: 40 Audits",
          "Prompt-Recherche: 50 Recherchen",
          "Chart Generator: 50 Charts",
          "Bild-Generator: 20 Bilder",
          "Local SEO Maps: 200 Punkte",
          "Backlink Explorer: 25 Suchen",
          "Backlink Summary: 25 Zusammenfassungen",
          "Keyword Overlap: 25 Analysen",
        ],
        description: "Perfekt für kleine Unternehmen, die mit umfassenden SEO-Tools starten",
        buttonText: "Starter wählen",
        buttonColor: "bg-accent text-primary",
        isPopular: false,
      },
      {
        name: "Professional",
        href: "https://app.finseo.ai/signup",
        price: "$299",
        period: "Monat",
        yearlyPrice: "$299",
        features: [
          "Keyword-Recherche: 750 Suchen",
          "Artikel-Generator: 20 Artikel",
          "Site-Audit: 50 Audits",
          "Global Summary: 20 Zusammenfassungen",
          "Ranking Keywords: 200 Durchläufe",
          "Rank Tracker: 150 Keywords",
          "Konkurrenzanalyse",
          "KI-SEO-Audit: 100 Audits",
          "Prompt-Recherche: 200 Recherchen",
          "Chart Generator: 200 Charts",
          "Bild-Generator: 100 Bilder",
          "Local SEO Maps: 1.000 Punkte",
          "Backlink Explorer: 200 Suchen",
          "Backlink Summary: 200 Zusammenfassungen",
          "Keyword Overlap: 100 Analysen",
          "Whitelabel Reports",
          "Professional Branding",
        ],
        description: "Ideal für wachsende Unternehmen und Agenturen mit professionellen SEO-Bedürfnissen",
        buttonText: "Professional wählen",
        buttonColor: "bg-secondary text-white",
        isPopular: false,
      },
      {
        name: "Growth",
        href: "https://app.finseo.ai/signup",
        price: "$599",
        period: "Monat",
        yearlyPrice: "$599",
        features: [
          "Keyword-Recherche: 2.000 Suchen",
          "Artikel-Generator: 50 Artikel",
          "Site-Audit: 100 Audits",
          "Global Summary: 50 Zusammenfassungen",
          "Ranking Keywords: 500 Durchläufe",
          "Rank Tracker: 300 Keywords",
          "Konkurrenzanalyse",
          "KI-SEO-Audit: Custom Audits",
          "Prompt-Recherche: 500 Recherchen",
          "Chart Generator: 300 Charts",
          "Bild-Generator: 250 Bilder",
          "Local SEO Maps: 5.000 Punkte",
          "Backlink Explorer: 500 Suchen",
          "Backlink Summary: 500 Zusammenfassungen",
          "Keyword Overlap: 250 Analysen",
          "Whitelabel Reports",
          "Professional Branding",
          "Priority Support",
          "24/7 Premium Support",
          "Artikel-Integration",
          "Webflow & WordPress Publishing",
        ],
        description: "Perfekt für große Unternehmen mit erweiterten SEO-Anforderungen",
        buttonText: "Growth wählen",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: true,
      },
      {
        name: "Enterprise",
        href: "/contact",
        price: "Custom",
        period: "",
        yearlyPrice: "Custom",
        features: [
          "Unbegrenzte Keyword-Suchen",
          "Unbegrenzte Artikel",
          "Unbegrenzte Audits",
          "Unbegrenzte Zusammenfassungen",
          "Unbegrenzte Ranking-Durchläufe",
          "Unbegrenzte verfolgte Keywords",
          "Konkurrenzanalyse",
          "Unbegrenzte KI-SEO-Audits",
          "Unbegrenzte Prompt-Recherchen",
          "Unbegrenzte Charts",
          "Unbegrenzte Bilder",
          "Unbegrenzte Local SEO Punkte",
          "Unbegrenzte Backlink-Suchen",
          "Unbegrenzte Backlink-Zusammenfassungen",
          "Unbegrenzte Keyword-Analysen",
          "Whitelabel Reports",
          "Professional Branding",
          "Priority Support",
          "24/7 Premium Support",
          "Artikel-Integration",
          "Webflow & WordPress Publishing",
          "Custom Integrationen",
          "Dedicated Account Manager",
        ],
        description: "Maßgeschneiderte Lösungen für große Unternehmen mit unbegrenzter Nutzung und Custom Features",
        buttonText: "Sales kontaktieren",
        buttonColor: "bg-muted text-foreground border border-border",
        isPopular: true,
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Sandra Jörg",
      role: "Founder and CEO, BLACKPIN GmbH",
      description: (
        <p>
          Martin arbeitet immer in kleinen Gruppen, bis zu max. 5 Personen, um gezielt auf die Fragen und Probleme jedes Einzelnen eingehen zu können.
          <Highlight>
            Auch nach dem Workshop ist er für einen da und bietet seine Hilfe an, was ich sehr schätze!
          </Highlight>{" "}
          Mir hat der Workshop mit ihm sehr gut gefallen und ich kann ihn wärmstens empfehlen!
        </p>
      ),
    },
    {
      id: "2",
      name: "Florian Fuest",
      role: "Geschäftsführer, Bertrandt Group",
      description: (
        <p>
          Martin hat unsere Präsenz auf LinkedIn erheblich verbessert. Seine umfassende Expertise zeigt sich in klaren Anleitungen zur Optimierung meines Profils.
          <Highlight>Ich empfehle Martin jedem, der das volle Potenzial von LinkedIn nutzen möchte.</Highlight>{" "}
          Die Ergebnisse sprechen für sich.
        </p>
      ),
    },
    {
      id: "3",
      name: "Christian Kirsch",
      role: "Managing Director, PROSPER X GmbH",
      description: (
        <p>
          Durch Martin und seine Ansätze konnten wir viele neue Wege gehen und viele neue Bewerber und später auch Kollegen für uns gewinnen.
          <Highlight>Besonders geholfen hat uns das Funnel Recruitment als neuartiger Ansatz.</Highlight>{" "}
          Martin ist ein sehr geschätzter Sparringspartner.
        </p>
      ),
    },
    {
      id: "4",
      name: "Daria Holm",
      role: "Department Manager, Hays AG",
      description: (
        <p>
          Das Training mit Martin hat mein Vertriebsteam fachlich einen großen Schritt nach vorne gebracht.
          <Highlight>Der Wissenstransfer im Bereich Akquise, Mehrwert und Pitch war ein voller Erfolg!</Highlight>{" "}
          Wer sein Team voranbringen möchte, dem kann ich die Zusammenarbeit wärmstens empfehlen.
        </p>
      ),
    },
  ],
  ctaSection: {
    id: "cta",
    title: "Verbessere deine KI-Sichtbarkeit noch heute",
    backgroundImage: "/agent-cta-background.png",
    button: {
      text: "Jetzt starten",
      href: "https://app.finseo.ai/signup",
    },
    subtext: "Überwache & optimiere auf allen KI-Plattformen",
  },
  footerLinks: [
    {
      title: "Leistungen",
      links: [
        { id: 1, title: "KI-Workshops", url: "#workshops" },
        { id: 2, title: "Automatisierung", url: "#automatisierung" },
        { id: 3, title: "KI-Beratung", url: "#beratung" },
      ],
    },
    {
      title: "Kontakt",
      links: [
        { id: 4, title: "E-Mail", url: "mailto:kontakt@huntercoach.de" },
        { id: 5, title: "Telefon", url: "tel:+4917670392320" },
        { id: 6, title: "KI-Assistent", url: "tel:+4932213232622" },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { id: 7, title: "Impressum", url: "/imprint" },
        { id: 8, title: "Datenschutz", url: "/privacy-policy" },
        { id: 9, title: "AGB", url: "/terms-conditions" },
      ],
    },
  ],
};

export type HuntercoachConfig = typeof huntercoachConfig; 