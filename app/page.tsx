import dynamic from "next/dynamic";
import Hero from "./components/Hero";

const Services = dynamic(() => import("./components/Services"), { loading: () => null });
const PricingSection = dynamic(() => import("./components/Pricing"), { loading: () => null });
const Portfolio = dynamic(() => import("./components/Portfolio"), { loading: () => null });
const Testimonials = dynamic(() => import("./components/Testimonials"), { loading: () => null });
const Footer = dynamic(() => import("./components/Footer"), { loading: () => null });

export default function Home() {
  // ========== LOCAL BUSINESS SCHEMA (PAGE-SPECIFIC) ==========
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ujjwal Tech",
    "description": "Ujjwal Tech - Professional web development, corporate website design, e-commerce solutions, Google Ads, Facebook Ads & SEO packages in Mumbai.",
    "url": "https://www.ujjwaltech.site",
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
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  // ========== FAQ SCHEMA (18 QUESTIONS - COVERS ALL KEYWORDS) ==========
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a website cost in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ujjwal Tech offers affordable website packages starting from ₹4,999 for business websites. Corporate websites start from ₹9,999 and e-commerce solutions start from ₹11,999. Contact us for a custom quote based on your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Which is the best web development company in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ujjwal Tech is recognized as one of the best web development companies in Mumbai, offering professional website design, e-commerce development, digital marketing, and SEO services with proven results and client satisfaction. We have a 4.8/5 rating from 150+ clients."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to develop a website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard business website is delivered within 48 hours. Advanced dynamic websites take 3-5 days, and e-commerce websites require 5-7 business days depending on complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer affordable website packages for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ujjwal Tech specializes in affordable website development for small businesses. We offer customized packages starting from ₹4,999 that include professional design, responsive layout, and basic SEO optimization."
        }
      },
      {
        "@type": "Question",
        "name": "How to find a reliable web designer near me in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To find a reliable web designer near you in Mumbai, look for agencies with proven experience, client testimonials, and a strong portfolio. Ujjwal Tech has 100+ satisfied clients and offers affordable, professional web development services."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide SEO services in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ujjwal Tech provides comprehensive SEO services in Mumbai including on-page optimization, off-page link building, Google Ads management, and Facebook Ads setup to help businesses rank higher and generate more leads."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a custom website on a budget?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Ujjwal Tech offers custom website development on a budget starting from ₹4,999. We provide professional, responsive, and SEO-friendly websites that look premium without breaking the bank."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of a professional website in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The price of a professional website in Mumbai ranges from ₹4,999 to ₹30,000 depending on features and complexity. Ujjwal Tech offers transparent pricing with no hidden costs."
        }
      },
      {
        "@type": "Question",
        "name": "How to choose a web developer for my small business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When choosing a web developer for your small business, look for experience, portfolio, client testimonials, and clear pricing. Ujjwal Tech specializes in affordable, high-quality websites for small businesses in Mumbai."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in a Ujjwal Tech website package?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ujjwal Tech website packages include professional design, responsive layout, SEO optimization, free hosting for 1 year, SSL certificate, and 30 days of free technical support."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a cheap website developer near me in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ujjwal Tech is an affordable web development company in Mumbai offering cheap website design without compromising quality. Our packages start from just ₹4,999 with excellent results."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a professional website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A professional business website takes 48 hours to build. Complex e-commerce or corporate websites with custom features can take 5-7 business days. Ujjwal Tech delivers fast without sacrificing quality."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best web development company in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ujjwal Tech is among the top web development companies in Mumbai, known for affordable pricing, professional quality, and excellent client support. We have a 4.8/5 rating from 150+ clients."
        }
      },
      {
        "@type": "Question",
        "name": "How to find a web developer near me in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can find a web developer near you in Mumbai by searching online directories, asking for referrals, or checking Google Business Profile listings. Ujjwal Tech is a leading web development company serving Mumbai and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer e-commerce website development in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ujjwal Tech specializes in e-commerce website development in Mumbai. We build Shopify, WooCommerce, and custom e-commerce stores with payment gateway integration and full admin control."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a corporate website cost in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Corporate website costs in Mumbai range from ₹9,999 to ₹30,000 depending on features and complexity. Ujjwal Tech offers corporate website design with admin panel, payment integration, and full SEO optimization."
        }
      },
      {
        "@type": "Question",
        "name": "What is the starting price for a business website in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ujjwal Tech offers business website packages starting at ₹4,999, including 15 pages, free hosting for 1 year, SSL certificate, and a professional business email ID."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact a web developer near me in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Ujjwal Tech, a leading web development company in Mumbai, by visiting our contact page, calling +91-77700-74667, or emailing info@ujjwaltech.site. We offer free consultations!"
        }
      }
    ]
  };

  return (
    <>
      {/* ========== LOCAL BUSINESS SCHEMA ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* ========== FAQ SCHEMA ========== */}
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

