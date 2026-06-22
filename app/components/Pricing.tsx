"use client";
import React, { useState } from "react";

interface PricingPlan {
  badge: string;
  price: string;
  originalPrice: string;
  tagline: string;
  btnText: string;
  features: string[];
  isFeatured?: boolean;
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

  return (
    <>
      <section id="pricing" className="w-full bg-[#f9fafb] py-24 px-6 md:px-12 flex flex-col items-center select-none">
        
        {/* Header Content */}
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-[42px] font-extrabold text-black tracking-tight mb-4">Affordable Business Website Packages in Mumbai</h2>
          <p className="text-[15px] text-zinc-600 font-medium">Choose the perfect plan to take your business online with Ujjwal Tech.</p>
        </div>

        {/* Pricing Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1440px]">
          {plans.map((plan, idx) => (
            <div key={idx} className={`bg-white border rounded-[36px] p-8 flex flex-col transition-all duration-300 shadow-sm ${plan.isFeatured ? "border-[#ff4500] scale-[1.02] shadow-orange-100" : "border-zinc-100"}`}>
              
              {/* Card Hero Segment */}
              <div className={`rounded-3xl p-6 mb-8 ${plan.isFeatured ? "bg-orange-50/20" : "bg-zinc-50"}`}>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-block ${plan.isFeatured ? "border-orange-200 text-[#ff4500]" : "border-zinc-200 text-zinc-500"}`}>{plan.badge}</span>
                <div className="flex flex-col gap-1">
                  <span className="text-xs line-through text-zinc-400 font-bold">{plan.originalPrice}/-</span>
                  <span className="text-4xl font-extrabold text-black">{plan.price}/-</span>
                </div>
                <p className="text-xs text-zinc-500 mt-3 font-semibold leading-relaxed">{plan.tagline}</p>
              </div>

              {/* Strict Top 3 Primary Features Filter */}
              <ul className="flex flex-col gap-4 mb-6 px-1">
                {plan.features.slice(0, 3).map((feature, fIdx) => (
                  <li key={fIdx} className="text-[13px] font-bold text-zinc-800 flex items-center gap-3">
                    <svg className={`w-4 h-4 shrink-0 ${plan.isFeatured ? "text-[#ff4500]" : "text-zinc-400"}`} fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Interactive Modal Toggle Action */}
              <button 
                onClick={() => setSelectedPlan(plan)}
                className="text-[12px] font-extrabold text-[#71717b] hover:text-[#ff4500] transition-colors flex items-center gap-1 mb-8 outline-none"
              >
                View all features <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className={`w-full py-4 text-[13px] font-black rounded-2xl transition-all uppercase tracking-wider ${plan.isFeatured ? "bg-[#ff4500] text-white hover:bg-orange-600 shadow-lg shadow-orange-200" : "bg-black text-white hover:bg-zinc-800"}`}
              >
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>

        
        {/* Modular Detailed Feature Pop-up Layout */}
        {selectedPlan && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Overlay backdrop Layer */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedPlan(null)}></div>
            
            {/* Center Focus Box container */}
            <div className="relative bg-white w-full max-w-lg rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-[#ff4500] uppercase tracking-widest">{selectedPlan.badge}</span>
                    <h3 className="text-2xl font-black text-black mt-1">Full Plan Details</h3>
                  </div>
                  <button onClick={() => setSelectedPlan(null)} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>

                {/* Scaled Dynamic Feature Mapping */}
                <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  <ul className="flex flex-col gap-4 py-2">
                    {selectedPlan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-[14px] font-bold text-zinc-700 flex items-start gap-4 border-b border-zinc-50 pb-3 last:border-0">
                        <svg className="w-5 h-5 text-[#ff4500] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button onClick={() => setSelectedPlan(null)} className="w-full mt-8 py-4 bg-black text-white font-black rounded-2xl uppercase tracking-widest">
                  Close Details
                </button>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar { width: 4px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #ff4500; border-radius: 10px; }
        `}</style>
      </section>
    </>
  );
}
