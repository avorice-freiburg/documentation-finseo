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
  metadataBase: new URL(siteConfig.url),
  ...getPageMetadata('home'),
  title: {
    default: "Finseo - AI-Powered SEO Tools for Next-Gen Search Optimization",
    template: `%s | Finseo`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Finseo",
    "description": "AI-powered SEO tools for next-generation search optimization. Optimize for Google, ChatGPT, Claude & AI platforms with advanced keyword research, rank tracking, and content generation.",
    "url": "https://finseo.ai",
    "applicationCategory": "SEO Software",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    },
    "author": {
      "@type": "Organization",
      "name": "Finseo",
      "url": "https://finseo.ai"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "15"
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
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}