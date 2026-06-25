"use client";
import React, { useState } from "react";
import Link from "next/link";

interface PricingPlan {
  badge: string;
  price: string;
  originalPrice: string;
  tagline: string;
  btnText: string;
  features: string[];
  isFeatured?: boolean;
  priceValue: number;
  currency: string;
  url: string;
}

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  
  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const plans: PricingPlan[] = [
    {
      badge: "Business Website Package",
      price: "₹4,999",
      originalPrice: "₹10,000",
      tagline: "Perfect for Mumbai businesses & showrooms",
      btnText: "Choose Plan",
      priceValue: 4999,
      currency: "INR",
      url: "https://www.ujjwaltech.site/pricing#business",
      features: [
        "Upto 15 Pages",
        "Free Hosting for 1 Year + Free SSL Certificate",
        "Free Business Webmail Email ID",
        "Mobile Friendly (Responsive) Layout",
        "Image Slider, WhatsApp Chat, Call Button & Google Map",
        "1 Inquiry/Contact Form + Social Media Links",
        "Search Engine Friendly URLs",
        "Hosting Renewal (Next Year): ₹2,000/-"
      ]
    },
    {
      badge: "Advanced Dynamic Solution",
      price: "₹9,999",
      originalPrice: "₹20,000",
      tagline: "Scalable full-stack solution with admin panel",
      btnText: "Choose Plan",
      priceValue: 9999,
      currency: "INR",
      url: "https://www.ujjwaltech.site/pricing#advanced",
      features: [
        "Unlimited Dynamic Pages",
        "Advanced & Secure Admin Panel (Manage content easily)",
        "Razorpay Payment Gateway Integration",
        "Product/Service/Gallery/Blog Modules Included",
        "Free Hosting for 1 Year + Free SSL Certificate",
        "Free Business Webmail Email ID",
        "Robots.txt, XML Sitemap & SEO Friendly Structure",
        "Mobile Responsive, Image Slider & Dynamic Forms",
        "Hosting Renewal (Next Year): ₹2,000/-"
      ],
      isFeatured: true
    },
    {
      badge: "Premium E-commerce System",
      price: "₹11,999",
      originalPrice: "₹24,000",
      tagline: "Full corporate e-commerce infrastructure",
      btnText: "Choose Plan",
      priceValue: 11999,
      currency: "INR",
      url: "https://www.ujjwaltech.site/pricing#ecommerce",
      features: [
        "Dynamic Products & Categories Management",
        "Full Admin Access (Manage content, products, orders & sales)",
        "Payment Gateway Integration & COD Option",
        "Cart, Wishlist, Coupons & Customer Accounts System",
        "Reward Points, Product Reviews & Shipping Tools",
        "Social Share Functionality on Product Pages",
        "5 Sample Products Upload Support from our team",
        "⚠️ Hosting & Domain NOT Included"
      ]
    }
  ];

  // ========== OFFER SCHEMA (Product) ==========
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ujjwal Tech Web Development Packages",
    "description": "Affordable web development packages in Mumbai starting from ₹4,999. Business website, advanced dynamic, and e-commerce solutions.",
    "brand": {
      "@type": "Brand",
      "name": "Ujjwal Tech"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "4999",
      "highPrice": "11999",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "url": "https://www.ujjwaltech.site/pricing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  // ========== INDIVIDUAL OFFERS SCHEMA ==========
  const individualOffersSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ujjwal Tech Pricing Plans",
    "description": "Affordable web development packages in Mumbai",
    "numberOfItems": plans.length,
    "itemListElement": plans.map((plan, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Offer",
        "name": plan.badge,
        "price": plan.priceValue,
        "priceCurrency": plan.currency,
        "description": plan.tagline,
        "availability": "https://schema.org/InStock",
        "url": plan.url,
        "category": "Web Development"
      }
    }))
  };

  return (
    <>
      {/* ========== OFFER SCHEMAS ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(individualOffersSchema),
        }}
      />

      {/* ========== PRICING SECTION ========== */}
      <section 
        id="pricing" 
        className="w-full bg-[#f9fafb] py-24 px-6 md:px-12 flex flex-col items-center select-none"
        aria-label="Affordable Web Development Pricing Packages in Mumbai"
        itemScope
        itemType="https://schema.org/Product"
      >
        {/* ===== HEADER ===== */}
        <div className="text-center mb-16 max-w-3xl">
          <span className="text-[11px] font-bold text-brand-orange uppercase tracking-[1.5px] mb-3 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-[42px] font-extrabold text-black tracking-tight mb-4">
            Affordable Business Website Packages <br className="hidden sm:block" />in Mumbai
          </h2>
          <p className="text-[15px] text-zinc-600 font-medium max-w-xl mx-auto">
            Choose the perfect plan to take your business online with Ujjwal Tech. 
            No hidden charges, transparent pricing.
          </p>
        </div>

        {/* ===== PRICING GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1440px]">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-white border rounded-[36px] p-8 flex flex-col transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                plan.isFeatured 
                  ? "border-[#ff4500] scale-[1.02] shadow-orange-100/50 ring-2 ring-orange-200/50" 
                  : "border-zinc-100 hover:border-orange-200"
              }`}
              itemScope
              itemType="https://schema.org/Offer"
              itemProp="offers"
            >
              {/* ===== META DATA FOR SCHEMA ===== */}
              <meta itemProp="price" content={plan.priceValue.toString()} />
              <meta itemProp="priceCurrency" content={plan.currency} />
              <meta itemProp="availability" content="https://schema.org/InStock" />
              <meta itemProp="url" content={plan.url} />

              {/* ===== CARD HEADER ===== */}
              <div className={`rounded-3xl p-6 mb-8 ${
                plan.isFeatured ? "bg-orange-50/60" : "bg-zinc-50"
              }`}>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-block ${
                  plan.isFeatured 
                    ? "border-orange-200 text-[#ff4500] bg-orange-50" 
                    : "border-zinc-200 text-zinc-500"
                }`}>
                  {plan.badge}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs line-through text-zinc-400 font-bold">
                    {plan.originalPrice}/-
                  </span>
                  <span className="text-4xl font-extrabold text-black">
                    {plan.price}/-
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mt-3 font-semibold leading-relaxed">
                  {plan.tagline}
                </p>
              </div>

              {/* ===== FEATURES ===== */}
              <ul className="flex flex-col gap-4 mb-6 px-1" aria-label={`${plan.badge} features`}>
                {plan.features.slice(0, 3).map((feature, fIdx) => (
                  <li key={fIdx} className="text-[13px] font-bold text-zinc-800 flex items-center gap-3">
                    <svg 
                      className={`w-4 h-4 shrink-0 ${
                        plan.isFeatured ? "text-[#ff4500]" : "text-zinc-400"
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="4" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* ===== VIEW ALL FEATURES BUTTON ===== */}
              <button 
                onClick={() => setSelectedPlan(plan)}
                className="text-[12px] font-extrabold text-[#71717b] hover:text-[#ff4500] transition-colors flex items-center gap-1 mb-8 outline-none group"
                aria-label={`View all features for ${plan.badge}`}
              >
                View all features 
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3"
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>

              {/* ===== CHOOSE PLAN BUTTON ===== */}
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className={`w-full py-4 text-[13px] font-black rounded-2xl transition-all uppercase tracking-wider text-center ${
                  plan.isFeatured 
                    ? "bg-[#ff4500] text-white hover:bg-orange-600 shadow-lg shadow-orange-200 hover:shadow-orange-300/50" 
                    : "bg-black text-white hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-200"
                }`}
                aria-label={`Choose ${plan.badge} - ${plan.price}`}
              >
                {plan.btnText}
              </Link>
            </div>
          ))}
        </div>

        {/* ===== TRUST BADGE ===== */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400 font-medium">
            🔒 100% Secure & Transparent Pricing • No Hidden Charges • Free Consultation
          </p>
        </div>

        {/* ===== MODAL - FULL FEATURES ===== */}
        {selectedPlan && (
          <div 
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedPlan.badge} - Full Plan Details`}
          >
            {/* ===== OVERLAY ===== */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={() => setSelectedPlan(null)}
              aria-hidden="true"
            />
            
            {/* ===== MODAL CONTENT ===== */}
            <div className="relative bg-white w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-[#ff4500] uppercase tracking-widest">
                      {selectedPlan.badge}
                    </span>
                    <h3 className="text-2xl font-black text-black mt-1">
                      Full Plan Details
                    </h3>
                  </div>
                  <button 
                    onClick={() => setSelectedPlan(null)} 
                    className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
                    aria-label="Close details"
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="black" 
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                {/* ===== FEATURES LIST ===== */}
                <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  <ul className="flex flex-col gap-4 py-2" aria-label="All plan features">
                    {selectedPlan.features.map((feature, fIdx) => (
                      <li 
                        key={fIdx} 
                        className="text-[14px] font-bold text-zinc-700 flex items-start gap-4 border-b border-zinc-50 pb-3 last:border-0"
                      >
                        <svg 
                          className="w-5 h-5 text-[#ff4500] shrink-0 mt-0.5" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3.5" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ===== CLOSE BUTTON ===== */}
                <button 
                  onClick={() => setSelectedPlan(null)} 
                  className="w-full mt-8 py-4 bg-black text-white font-black rounded-2xl uppercase tracking-widest hover:bg-zinc-800 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========== SR-ONLY HIDDEN CONTENT FOR SEO ========== */}
        <div className="sr-only" aria-hidden="false">
          <h3>Ujjwal Tech Website Pricing Packages in Mumbai</h3>
          <p>
            Ujjwal Tech offers affordable website development packages for businesses in Mumbai:
          </p>
          <ul>
            {plans.map((plan, index) => (
              <li key={index}>
                <strong>{plan.badge}</strong> - {plan.price} 
                {plan.isFeatured && " (Most Popular)"}
                <p>{plan.tagline}</p>
                <p>Key features include: {plan.features.slice(0, 3).join(", ")}</p>
              </li>
            ))}
          </ul>
          <p>
            All packages include professional web development, responsive design, and SEO optimization.
            Contact Ujjwal Tech at +91-77700-74667 for a free consultation.
          </p>
          <a href="https://www.ujjwaltech.site/pricing">View all pricing plans</a>
        </div>

        {/* ===== STYLES ===== */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #ff4500; border-radius: 10px; }
          
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoom-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-in {
            animation: fade-in 0.3s ease-out, zoom-in 0.3s ease-out;
          }
        `}</style>
      </section>
    </>
  );
}