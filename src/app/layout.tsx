import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/config";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import localFont from "next/font/local";
import { generateMetadata as getPageMetadata } from "@/lib/metadata";
import { SchemaMarkup } from "@/components/schema-markup";
import { organizationSchema, websiteSchema } from "@/lib/schemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "black",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.finseo.ai"),
  title: {
    default: "Finseo Documentation - AI Visibility Tracking & Analytics",
    template: `%s | Finseo Docs`,
  },
  description: "Official documentation for Finseo.ai - Learn how to track and optimize your visibility across AI-powered search platforms including ChatGPT, Claude, Perplexity, and more.",
  keywords: ["Finseo documentation", "AI visibility tracking", "ChatGPT SEO", "AI search optimization", "bot analytics", "AI metrics", "generative engine optimization"],
  authors: [
    {
      name: "Finseo",
      url: "https://finseo.ai",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://docs.finseo.ai",
    title: "Finseo Documentation - AI Visibility Tracking & Analytics",
    description: "Official documentation for Finseo.ai - Learn how to track and optimize your visibility across AI-powered search platforms.",
    siteName: "Finseo Docs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finseo Documentation",
    description: "Official documentation for Finseo.ai - Learn how to track and optimize your visibility across AI-powered search platforms.",
    creator: "@finseo_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Documentation schema for docs.finseo.ai
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Finseo Documentation - AI Visibility Tracking Platform",
    "description": "Official technical documentation for Finseo.ai - Track and optimize your visibility in AI-powered search results including ChatGPT, Claude, Perplexity, and other AI platforms.",
    "url": "https://docs.finseo.ai",
    "isPartOf": {
      "@type": "SoftwareApplication",
      "name": "Finseo",
      "url": "https://finseo.ai",
      "applicationCategory": "SEO Software"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "Finseo",
      "description": "AI visibility tracking and optimization platform for monitoring brand presence across AI-powered search engines and chat systems.",
      "url": "https://finseo.ai"
    },
    "author": {
      "@type": "Organization",
      "name": "Finseo",
      "url": "https://finseo.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Finseo",
      "url": "https://finseo.ai"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Schema Markup */}
        <SchemaMarkup schema={[organizationSchema, websiteSchema]} />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M5TV8G8F');
          `}
        </Script>

        {/* Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-NFR69PVT', { 'debug_mode':true });
          `}
        </Script>

        {/* Iubenda Configuration */}
        <Script id="iubenda-config" strategy="afterInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":3847897,"cookiePolicyId":81748432,"lang":"en","storage":{"useSiteId":true}};
          `}
        </Script>

        {/* Iubenda Scripts */}
        <Script 
          src="https://cs.iubenda.com/autoblocking/3847897.js" 
          strategy="afterInteractive"
        />
        <Script 
          src="//cdn.iubenda.com/cs/gpp/stub.js" 
          strategy="afterInteractive"
        />
        <Script 
          src="//cdn.iubenda.com/cs/iubenda_cs.js" 
          strategy="afterInteractive"
        />

        {/* Trackdesk */}
        <Script 
          src="//cdn.trackdesk.com/tracking.js" 
          strategy="afterInteractive"
        />
        <Script id="trackdesk-init" strategy="afterInteractive">
          {`
            (function(t,d,k){(t[k]=t[k]||[]).push(d);t[d]=t[d]||t[k].f||function(){(t[d].q=t[d].q||[]).push(arguments)}})(window,"trackdesk","TrackdeskObject"); 
            trackdesk('finseo', 'click');
          `}
        </Script>

        {/* Tolt */}
        <Script 
          src="https://cdn.tolt.io/tolt.js" 
          data-tolt="pk_H2pfiRLDJ1fbkVpcbE62SQbE"
          strategy="afterInteractive"
        />

        {/* TikTok Pixel */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
            var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
            ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

              ttq.load('CV4UOCRC77U7MRR06AB0');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5TV8G8F"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}