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
  metadataBase: new URL("https://www.ujjwaltech.site"),
  title: {
    default: "Ujjwal Tech | Best Web Development Company in Mumbai - Affordable Website Design",
    template: "%s | Ujjwal Tech - Web Developers Mumbai",
  },
  description:
    "Top-rated web development company in Mumbai offering affordable website design starting ₹4,999. E-commerce solutions, SEO, Google Ads & Facebook Ads. Get free quote!",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Ujjwal Tech - Best Web Development Company in Mumbai",
    description:
      "Professional web development, corporate website design, e-commerce solutions, Google Ads, Facebook Ads & SEO packages in Mumbai. Affordable rates from ₹4,999.",
    url: "https://www.ujjwaltech.site",
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
    phoneNumbers: ["+91-77700-74667"],
    countryName: "India",
  },

  twitter: {
    card: "summary_large_image",
    site: "@ujjwaltech",
    creator: "@ujjwaltech",
    title: "Ujjwal Tech - Best Web Development Company in Mumbai",
    description:
      "Top web development company in Mumbai. Affordable website design, e-commerce, SEO, Google Ads & Facebook Ads. Packages from ₹4,999.",
    images: ["/twitter-image.jpg"],
  },

  keywords: [
    "Ujjwal Tech", "Ujjwal Tech web development", "Ujjwal Tech Mumbai",
    "web development company in Mumbai", "website designer near me",
    "web developer near me", "affordable website developer",
    "best web development company", "professional web developers",
    "Mumbai web development company", "e-commerce development Mumbai",
    "corporate website design Mumbai", "affordable website design packages",
    "responsive website design", "SEO services Mumbai",
    "Google Ads management Mumbai", "Facebook Ads agency Mumbai",
    "small business website", "startup website", "entrepreneur website",
  ],

  authors: [{ name: "Ujjwal Tech", url: "https://www.ujjwaltech.site/about" }],
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
    canonical: "https://www.ujjwaltech.site",
    languages: {
      "en-IN": "https://www.ujjwaltech.site",
    },
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
    "business:contact_data:phone_number": "+91-77700-74667",
    "business:service:area": "Mumbai, Navi Mumbai, Thane, Pune",
    "business:service:type": "Web Development, Digital Marketing",
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
  },
};

// ========== SIRF YEH DO SCHEMAS LAYOUT MEIN (GLOBAL) ==========
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ujjwal Tech",
  "url": "https://www.ujjwaltech.site",
  "description": "Best web development company in Mumbai offering affordable website design, e-commerce solutions, SEO & digital marketing.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.ujjwaltech.site/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ujjwal Tech",
  "description": "Best web development company in Mumbai offering affordable website design, e-commerce solutions, SEO, Google Ads & Facebook Ads services.",
  "url": "https://www.ujjwaltech.site",
  "logo": "https://www.ujjwaltech.site/favicon.ico",
  "image": "https://www.ujjwaltech.site/og-image.jpg",
  "telephone": "+91-77700-74667",
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
  "sameAs": [
    "https://facebook.com/ujjwaltech",
    "https://instagram.com/ujjwaltech",
    "https://linkedin.com/company/ujjwaltech"
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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        
        {/* Meta Tags */}
        <meta name="theme-color" content="#0a1628" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
        
        {/* ========== SIRF 2 GLOBAL SCHEMAS ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Google Analytics */}
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