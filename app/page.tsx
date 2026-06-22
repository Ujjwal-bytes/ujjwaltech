import dynamic from "next/dynamic";
import Hero from "./components/Hero";

const Services = dynamic(() => import("./components/Services"), { loading: () => null });
const PricingSection = dynamic(() => import("./components/Pricing"), { loading: () => null });
const Portfolio = dynamic(() => import("./components/Portfolio"), { loading: () => null });
const Testimonials = dynamic(() => import("./components/Testimonials"), { loading: () => null });
const Footer = dynamic(() => import("./components/Footer"), { loading: () => null });

export default function Home() {
  // LocalBusiness Schema with OfferCatalog
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ujjwal Tech",
    "description": "Ujjwal Tech - Professional web development, corporate website design, e-commerce solutions, Google Ads, Facebook Ads & SEO packages in Mumbai.",
    "url": "https://ujjwaltech.site",
    "telephone": "+91-77700-74667",
    "priceRange": "₹2,999 - ₹30,000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0760,
      "longitude": 72.8777
    },
    "areaServed": {
      "@type": "City",
      "name": "Mumbai"
    },
    "sameAs": [
      "https://facebook.com/ujjwaltech",
      "https://instagram.com/ujjwaltech",
      "https://linkedin.com/company/ujjwaltech"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ujjwal Tech Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Business Website Package",
          "price": "4999",
          "priceCurrency": "INR",
          "description": "Professional business website with 15 pages, free hosting for 1 year & SSL certificate"
        },
        {
          "@type": "Offer",
          "name": "Advanced Dynamic Solution",
          "price": "9999",
          "priceCurrency": "INR",
          "description": "Advanced dynamic website with secure admin panel & payment gateway integration"
        },
        {
          "@type": "Offer",
          "name": "Shopping E-commerce System",
          "price": "11999",
          "priceCurrency": "INR",
          "description": "Full-featured e-commerce website with cart, wishlist, order management & payment processing"
        },
        {
          "@type": "Offer",
          "name": "Marketing & Ads Setups",
          "price": "2999",
          "priceCurrency": "INR",
          "description": "Professional Google Ads & Facebook Ads campaign setup with conversion tracking"
        },
        {
          "@type": "Offer",
          "name": "Mobile Application Development",
          "price": "30000",
          "priceCurrency": "INR",
          "description": "Custom mobile application development for Android & iOS platforms"
        }
      ]
    },
    "knowsAbout": [
      "Web Development",
      "Corporate Website Design",
      "E-commerce Development",
      "Google Ads",
      "Facebook Ads",
      "Search Engine Optimization"
    ]
  };

  // FAQPage Schema (no UI changes)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the starting price for a business website in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ujjwal Tech offers business website packages starting at ₹4,999, including 15 pages, free hosting for 1 year, and an SSL certificate."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to deliver a corporate website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard corporate websites are delivered within 48 hours, while advanced dynamic or e-commerce solutions take 5-7 business days, depending on project complexity."
        }
      },
      {
        "@type": "Question",
        "name": "What support does Ujjwal Tech provide after delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All Ujjwal Tech packages include 30 days of free technical support, with optional annual maintenance contracts available for ongoing assistance."
        }
      }
    ]
  };

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* FAQPage Schema (no UI changes) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <main className="w-full">
        <Hero />
        <Services />
     
        <PricingSection/>
        
        <Portfolio />
        
        {/* Hand-drawn SVG Divider */}
        <div className="w-full bg-white overflow-hidden py-4">
          <svg 
            className="w-full h-auto" 
            viewBox="0 0 1200 80" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 40 
                 Q 60 25 120 45 
                 Q 180 65 240 40 
                 Q 300 15 360 35 
                 Q 420 55 480 40 
                 Q 540 25 600 50 
                 Q 660 75 720 45 
                 Q 780 15 840 40 
                 Q 900 65 960 40 
                 Q 1020 15 1080 50 
                 Q 1140 70 1200 40"
              fill="none"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 2 2 4"
            />
          </svg>
        </div>

        <Testimonials />
        <Footer />
      </main>
    </>
  );
}