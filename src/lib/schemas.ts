export interface SchemaConfig {
  type: string;
  data: any;
}

// Organization schema for the company
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Finseo.ai",
  "alternateName": ["Finseo", "FinSEO"],
  "url": "https://finseo.ai",
  "logo": "https://finseo.ai/logo.png",
  "description": "AI-powered platform designed to enhance your SEO and content creation efforts. Offers tools for keyword research, content generation, and on-page SEO optimization.",
  "foundingDate": "2025",
  "industry": "Technology, Information and Internet",
  "numberOfEmployees": "2-10",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Eschholzstraße 90",
    "postalCode": "79115",
    "addressLocality": "Freiburg",
    "addressCountry": "DE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@finseo.ai",
    "url": "https://finseo.ai/support"
  },
  "sameAs": [
    "https://www.linkedin.com/company/finseo/",
    "https://www.instagram.com/finseo.ai/"
  ],
  "offers": {
    "@type": "Offer",
    "category": "SaaS",
    "description": "AI-powered SEO tools and content creation services"
  }
};

// Website schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Finseo.ai",
  "url": "https://finseo.ai",
  "description": "AI-powered platform for SEO and content creation with tools for keyword research, content generation, and optimization",
  "publisher": {
    "@type": "Organization",
    "name": "Finseo.ai"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://finseo.ai/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// Software Application schema for tools
export function createSoftwareApplicationSchema(toolName: string, description: string, url: string, isFree: boolean = false) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": toolName,
    "description": description,
    "url": url,
    "applicationCategory": "SEO Software",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": isFree ? "0" : "29",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "category": isFree ? "Free Tool" : "Freemium",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Finseo.ai",
      "url": "https://finseo.ai"
    },
    "featureList": [
      "AI-powered analysis",
      "Real-time results",
      "Export capabilities",
      "Multi-language support"
    ],
    "softwareVersion": "1.0",
    "releaseNotes": "Latest version with enhanced AI capabilities"
  };
}

// Service schema for business pages
export function createServiceSchema(serviceName: string, description: string, url: string, price?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "name": "Finseo.ai",
      "url": "https://finseo.ai"
    },
    "serviceType": "SEO Services",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName
          },
          "price": price || "Contact for pricing",
          "priceCurrency": "USD"
        }
      ]
    }
  };
}

// Product schema for pricing plans
export function createPricingProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Finseo.ai SEO Platform",
    "description": "AI-powered SEO and content creation platform with multiple pricing tiers",
    "category": "Software",
    "brand": {
      "@type": "Brand",
      "name": "Finseo.ai"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Creator Plan",
        "description": "Perfect for bloggers, freelancers, and small websites with up to 50 pages",
        "price": "29",
        "priceCurrency": "USD",
        "billingIncrement": "P1M",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Finseo.ai"
        }
      },
      {
        "@type": "Offer",
        "name": "Professional Plan",
        "description": "Ideal for small businesses, agencies, and websites with up to 150 pages",
        "price": "49",
        "priceCurrency": "USD",
        "billingIncrement": "P1M",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Finseo.ai"
        }
      },
      {
        "@type": "Offer",
        "name": "Growth Plan",
        "description": "Perfect for larger businesses, e-commerce sites, and websites with up to 250 pages",
        "price": "99",
        "priceCurrency": "USD",
        "billingIncrement": "P1M",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2025-12-31",
        "seller": {
          "@type": "Organization",
          "name": "Finseo.ai"
        }
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Finseo.ai Pricing Plans",
      "description": "Choose from Creator, Professional, or Growth plans with 7-day free trial"
    }
  };
}

// FAQ schema
export function createFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Article schema for blog posts
export function createArticleSchema(title: string, description: string, url: string, datePublished?: string, dateModified?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Finseo.ai",
      "url": "https://finseo.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Finseo.ai",
      "url": "https://finseo.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://finseo.ai/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

// BreadcrumbList schema
export function createBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

// How-to schema for tutorial pages
export function createHowToSchema(name: string, description: string, steps: Array<{name: string, text: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };
}

// Review schema for testimonials
export function createReviewSchema(reviewText: string, rating: number, authorName: string, itemName: string = "Finseo.ai") {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": itemName
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rating,
      "bestRating": 5
    },
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "reviewBody": reviewText
  };
}

// Helper function to generate JSON-LD script tag
export function generateSchemaScript(schema: any): string {
  return JSON.stringify(schema, null, 2);
}

// Helper function to create multiple schemas
export function combineSchemas(...schemas: any[]): any[] {
  return schemas;
} 