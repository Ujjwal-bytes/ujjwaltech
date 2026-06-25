import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Font configurations for better performance
const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a1628",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ujjwaltech.site"),
  title: {
    default: "Ujjwal Tech | Best Web Development Company in Mumbai",
    template: "%s | Ujjwal Tech - Web Developers Mumbai",
  },
  description:
    "Top-rated web development company in Mumbai offering affordable website design, e-commerce solutions, SEO, Google Ads & Facebook Ads. Get a free quote today!",

  // ========== LOCAL SEO ICONS ==========
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },

  // ========== ENHANCED OPEN GRAPH (FIXED) ==========
  openGraph: {
    title: "Ujjwal Tech - Best Web Development Company in Mumbai",
    description:
      "Professional web development, corporate website design, e-commerce solutions, Google Ads, Facebook Ads & SEO packages in Mumbai. Affordable rates, proven results.",
    url: "https://ujjwaltech.site",
    siteName: "Ujjwal Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ujjwal Tech - Web Development Company Mumbai",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.png",
        width: 600,
        height: 600,
        alt: "Ujjwal Tech Logo",
        type: "image/png",
      },
    ],
    emails: ["info@ujjwaltech.site"],
    phoneNumbers: ["+91-XXXXXXXXXX"],
    countryName: "India",
    // Removed: locality (not supported in OpenGraph type)
  },

  // ========== TWITTER CARDS ==========
  twitter: {
    card: "summary_large_image",
    site: "@ujjwaltech",
    creator: "@ujjwaltech",
    title: "Ujjwal Tech - Best Web Development Company in Mumbai",
    description:
      "Top web development company in Mumbai. Affordable website design, e-commerce, SEO, Google Ads & Facebook Ads services. Get a free quote!",
    images: {
      url: "/twitter-image.jpg",
      alt: "Ujjwal Tech - Web Development Company Mumbai",
    },
  },

  // ========== COMPREHENSIVE KEYWORDS ==========
  keywords: [
    // Primary keywords
    "web development company in Mumbai",
    "web developer near me",
    "website developer near me",
    "affordable website developer",
    "best web development company",
    "professional web developers",
    
    // Local keywords
    "Mumbai web development company",
    "web design agency Mumbai",
    "website development services Mumbai",
    "e-commerce development Mumbai",
    "corporate website design Mumbai",
    
    // Service keywords
    "affordable website design packages",
    "professional e-commerce web design",
    "custom web development services",
    "responsive website design",
    "web application development",
    
    // Marketing keywords
    "SEO services Mumbai",
    "Google Ads management Mumbai",
    "Facebook Ads agency Mumbai",
    "digital marketing services",
    "PPC management Mumbai",
    
    // Long-tail keywords
    "cheapest web development company in Mumbai",
    "best website developer for small business",
    "professional web design services near me",
    "top rated web development agency Mumbai",
    "affordable corporate website designers",
    
    // Brand keywords
    "Ujjwal Tech",
    "Ujjwal Tech web development",
    "Ujjwal Tech Mumbai",
  ],

  // ========== STRUCTURED AUTHOR INFORMATION ==========
  authors: [
    { name: "Ujjwal Tech", url: "https://ujjwaltech.site/about" },
    { name: "Team Ujjwal Tech" },
  ],
  creator: "Ujjwal Tech",
  publisher: "Ujjwal Tech",
  
  // ========== ADVANCED ROBOT CONFIGURATION ==========
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
      notranslate: false,
    },
    nocache: false,
  },

  // ========== VERIFICATION CODES ==========
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    me: "ujjwaltech.site",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
      "msvalidate.01": "your-bing-verification-code",
    },
  },

  // ========== CANONICAL AND ALTERNATE URLs ==========
  alternates: {
    canonical: "https://ujjwaltech.site",
    languages: {
      "en-IN": "https://ujjwaltech.site",
      "en-US": "https://ujjwaltech.site/en-us",
      "hi-IN": "https://ujjwaltech.site/hi",
    },
  },

  // ========== OTHER IMPORTANT METADATA ==========
  category: "Technology",
  classification: "Web Development, Digital Marketing, IT Services",
  applicationName: "Ujjwal Tech",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  
  // ========== APPLE WEB APP META ==========
  appleWebApp: {
    capable: true,
    title: "Ujjwal Tech",
    statusBarStyle: "black-translucent",
  },

  // ========== OTHER META TAGS (FIXED - No duplicate keys) ==========
  other: {
    "business:contact_data:street_address": "Mumbai, Maharashtra, India",
    "business:contact_data:locality": "Mumbai",
    "business:contact_data:region": "Maharashtra",
    "business:contact_data:postal_code": "400001",
    "business:contact_data:country": "India",
    "business:contact_data:email": "info@ujjwaltech.site",
    "business:contact_data:phone_number": "+91-XXXXXXXXXX",
    "business:hours:day:monday_friday": "Monday-Friday 9:00-18:00",
    "business:hours:day:saturday": "Saturday 10:00-16:00",
    "business:service:area": "Mumbai, Navi Mumbai, Thane, Pune",
    "business:service:type": "Web Development, Digital Marketing",
    // Additional SEO meta tags
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
    "language": "English",
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "General",
    "copyright": "Ujjwal Tech",
  },
};

// ========== JSON-LD SCHEMA MARKUP FOR LOCAL BUSINESS ==========
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://ujjwaltech.site/#business",
  "name": "Ujjwal Tech",
  "description": "Best web development company in Mumbai offering affordable website design, e-commerce solutions, SEO, Google Ads & Facebook Ads services.",
  "url": "https://ujjwaltech.site",
  "logo": "https://ujjwaltech.site/logo.png",
  "image": "https://ujjwaltech.site/og-image.jpg",
  "telephone": "+91-XXXXXXXXXX",
  "email": "info@ujjwaltech.site",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mumbai",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0760",
    "longitude": "72.8777"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "sameAs": [
    "https://facebook.com/ujjwaltech",
    "https://twitter.com/ujjwaltech",
    "https://linkedin.com/company/ujjwaltech",
    "https://instagram.com/ujjwaltech"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Mumbai"
    },
    {
      "@type": "City",
      "name": "Navi Mumbai"
    },
    {
      "@type": "City",
      "name": "Thane"
    },
    {
      "@type": "City",
      "name": "Pune"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Website Design",
          "description": "Professional corporate website design services in Mumbai"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "E-commerce Development",
          "description": "Custom e-commerce website development solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Professional SEO services to rank your website higher"
        }
      }
    ]
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Client Name"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
};

// ========== FAQ SCHEMA FOR COMMON QUESTIONS ==========
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a website cost in Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ujjwal Tech offers affordable website packages starting from ₹15,000 for basic websites. Corporate websites start from ₹25,000 and e-commerce solutions start from ₹40,000. Contact us for a custom quote based on your specific requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best web development company in Mumbai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ujjwal Tech is recognized as one of the best web development companies in Mumbai, offering professional website design, e-commerce development, digital marketing, and SEO services with proven results and client satisfaction."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to develop a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard corporate website typically takes 2-4 weeks to develop. E-commerce websites require 4-8 weeks depending on complexity. We follow agile development methodology to deliver fast and efficient results."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer affordable website packages for small businesses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Ujjwal Tech specializes in affordable website development for small businesses. We offer customized packages starting from ₹15,000 that include professional design, responsive layout, and basic SEO optimization."
      }
    }
  ]
};

// ========== BREADCRUMB SCHEMA ==========
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ujjwaltech.site"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Web Development",
      "item": "https://ujjwaltech.site/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Web Development Company Mumbai",
      "item": "https://ujjwaltech.site"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en-IN" 
      className={cn("font-sans", montserratFont.variable, interFont.variable)}
      dir="ltr"
    >
      <head>
        {/* ========== FAVICONS AND ICONS ========== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* ========== PRELOAD CRITICAL RESOURCES ========== */}
        <link rel="preload" href="/fonts/montserrat.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero-banner.webp" as="image" type="image/webp" />
        
        {/* ========== PRECONNECT FOR FASTER LOADING ========== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        
        {/* ========== DNS PREFETCH ========== */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        
        {/* ========== JSON-LD SCHEMA MARKUP ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        
        {/* ========== GOOGLE ANALYTICS (Add your ID) ========== */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#f8f9fa] text-[#111111]">
        {children}
      </body>
    </html>
  );
}