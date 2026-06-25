import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Font configuration
const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

// Viewport configuration
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

  // ========== SIMPLIFIED ICONS - ONLY WHAT YOU HAVE ==========
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  // ========== OPEN GRAPH ==========
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
    ],
    emails: ["info@ujjwaltech.site"],
    phoneNumbers: ["+91-XXXXXXXXXX"],
    countryName: "India",
  },

  // ========== TWITTER CARDS ==========
  twitter: {
    card: "summary_large_image",
    site: "@ujjwaltech",
    creator: "@ujjwaltech",
    title: "Ujjwal Tech - Best Web Development Company in Mumbai",
    description:
      "Top web development company in Mumbai. Affordable website design, e-commerce, SEO, Google Ads & Facebook Ads services. Get a free quote!",
    images: ["/twitter-image.jpg"],
  },

  // ========== COMPREHENSIVE KEYWORDS ==========
  keywords: [
    "web development company in Mumbai",
    "web developer near me",
    "website developer near me",
    "affordable website developer",
    "best web development company",
    "professional web developers",
    "Mumbai web development company",
    "web design agency Mumbai",
    "website development services Mumbai",
    "e-commerce development Mumbai",
    "corporate website design Mumbai",
    "affordable website design packages",
    "professional e-commerce web design",
    "custom web development services",
    "responsive website design",
    "SEO services Mumbai",
    "Google Ads management Mumbai",
    "Facebook Ads agency Mumbai",
    "digital marketing services",
    "Ujjwal Tech",
    "Ujjwal Tech web development",
    "Ujjwal Tech Mumbai",
  ],

  authors: [{ name: "Ujjwal Tech", url: "https://ujjwaltech.site/about" }],
  creator: "Ujjwal Tech",
  publisher: "Ujjwal Tech",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },

  alternates: {
    canonical: "https://ujjwaltech.site",
  },

  category: "Technology",
  classification: "Web Development, Digital Marketing, IT Services",
  applicationName: "Ujjwal Tech",
  
  appleWebApp: {
    capable: true,
    title: "Ujjwal Tech",
    statusBarStyle: "black-translucent",
  },

  other: {
    "business:contact_data:street_address": "Mumbai, Maharashtra, India",
    "business:contact_data:locality": "Mumbai",
    "business:contact_data:region": "Maharashtra",
    "business:contact_data:postal_code": "400001",
    "business:contact_data:country": "India",
    "business:contact_data:email": "info@ujjwaltech.site",
    "business:contact_data:phone_number": "+91-XXXXXXXXXX",
    "business:service:area": "Mumbai, Navi Mumbai, Thane, Pune",
    "business:service:type": "Web Development, Digital Marketing",
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
  },
};

// ========== JSON-LD SCHEMA MARKUP ==========
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://ujjwaltech.site/#business",
  "name": "Ujjwal Tech",
  "description": "Best web development company in Mumbai offering affordable website design, e-commerce solutions, SEO, Google Ads & Facebook Ads services.",
  "url": "https://ujjwaltech.site",
  "logo": "https://ujjwaltech.site/favicon.ico",
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
  "areaServed": [
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Navi Mumbai" },
    { "@type": "City", "name": "Thane" },
    { "@type": "City", "name": "Pune" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en-IN" 
      className={cn("font-sans", montserratFont.variable)}
      dir="ltr"
    >
      <head>
        {/* ========== FAVICON - ONLY WHAT YOU HAVE ========== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* ========== PERFORMANCE OPTIMIZATION ========== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        
        {/* ========== META TAGS ========== */}
        <meta name="theme-color" content="#0a1628" />
        
        {/* ========== JSON-LD SCHEMA ========== */}
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
        
        {/* ========== GOOGLE ANALYTICS ========== */}
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
              gtag('config', 'G-XXXXXXXXXX');
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