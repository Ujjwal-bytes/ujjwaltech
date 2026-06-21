"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Check } from "lucide-react";

interface ServiceItem {
  title: string;
  tagline: string;
  mockupUrl: string;
  highlights: string[];
  icons: string[];
  fullDescription: string;
}

export default function Services() {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  const list: ServiceItem[] = [
    {
      title: "Professional Web Development",
      tagline: "Mumbai-Based Corporate Solutions",
      mockupUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Enterprise-grade web application architecture for Mumbai businesses",
        "Scalable full-stack solutions & API integration",
        "High-performance database optimization",
        "Custom CMS & admin dashboard development"
      ],
      icons: ["React", "Next.js", "Node.js", "TypeScript"],
      fullDescription: "Building robust, professional web solutions tailored to complex corporate requirements in Mumbai. Our development approach combines scalable architecture with cutting-edge technologies to deliver powerful, secure, and high-performance applications that drive business growth."
    },
    {
      title: "Corporate E-commerce Development",
      tagline: "Complete E-commerce Solutions",
      mockupUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Custom e-commerce platform development for Mumbai retailers",
        "Secure payment gateway integration",
        "Inventory & order management systems",
        "Multi-vendor marketplace solutions"
      ],
      icons: ["Shopify", "WooCommerce", "Stripe", "Vue.js"],
      fullDescription: "Developing comprehensive e-commerce ecosystems for businesses in Mumbai. We create seamless online shopping experiences with integrated payment systems, inventory management, and advanced analytics to maximize your digital revenue potential."
    },
    {
      title: "Digital Marketing & Ads Setup",
      tagline: "SEO & Marketing Solutions",
      mockupUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      highlights: [
        "Professional Google Ads & Facebook Ads setup in Mumbai",
        "Advanced analytics & conversion tracking",
        "Annual maintenance contracts (AMC)",
        "Search engine optimization services"
      ],
      icons: ["Marketing", "Analytics", "SEO", "AI"],
      fullDescription: "Accelerating business growth through intelligent digital strategies for Mumbai enterprises. We design and implement comprehensive marketing systems, automated workflows, and data-driven growth strategies that optimize your digital presence and maximize ROI."
    }
  ];

  return (
    <section id="services" className="w-full bg-[#0b0b0c] py-28 px-6 md:px-12 select-none relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Exact Replicated Header Area From Image */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-zinc-800 pb-10 mb-20 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ujjwal Tech <span className="text-brand-orange">Services</span>
            </h2>
          </div>
          <div className="max-w-sm md:text-right md:mt-2">
            <p className="text-sm text-zinc-400 leading-relaxed font-light opacity-90">
              Professional web development, corporate e-commerce solutions, and digital marketing services in Mumbai.
            </p>
          </div>
        </div>

        {/* Minimal White Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-stretch w-full">
          {list.map((item, i) => (
            <div
              key={i}
              className="bg-white w-full max-w-[440px] rounded-[48px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden relative flex flex-col group transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative w-full h-[260px] overflow-hidden bg-zinc-100">
                <Image
                  src={item.mockupUrl}
                  alt={item.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 440px) 100vw, 440px"
                  quality={80}
                />
              </div>

              {/* White Container with Signature Wave Shape */}
              <div 
                className="p-10 pt-12 bg-white relative -mt-[60px] z-10 rounded-tl-[40px] flex-1 flex flex-col justify-between"
                style={{
                  clipPath: "path('M 0 50 C 120 50, 200 15, 300 15 C 330 15, 340 45, 370 45 C 410 45, 420 25, 440 25 L 440 500 L 0 500 Z')"
                }}
              >
                {/* Title & Tagline */}
                <div className="mt-2 pr-4">
                  <h3 className="text-[28px] font-semibold text-zinc-900 tracking-tight leading-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-snug">
                    {item.tagline}
                  </p>
                </div>

                {/* Footer Layout */}
                <div className="flex justify-between items-center w-full mt-10">
                  
                  {/* Clean Horizontal Tech Tags */}
                  <div className="flex items-center gap-1.5 overflow-hidden max-w-[70%]">
                    {item.icons.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-100 text-[11px] font-medium text-zinc-500 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Trigger Lucide Arrow Component Button */}
                  <button 
                    onClick={() => setActiveModal(item)}
                    className="w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:bg-brand-orange group-hover:scale-105 shrink-0"
                    aria-label={`View ${item.title} details`}
                  >
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphic Vertically Scrollable Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
          {/* Backdrop Overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-opacity duration-300"
            onClick={() => setActiveModal(null)}
          />
          
          {/* Scrollable Modal Box */}
          <div className="bg-[#131315] border border-zinc-800/80 w-full max-w-xl max-h-[85vh] rounded-[36px] overflow-hidden shadow-2xl relative z-10 flex flex-col">
            
            {/* Scrollable Container Content */}
            <div className="overflow-y-auto flex-1 custom-scrollbar">
              
              {/* Modal Graphics Banner */}
              <div className="relative w-full h-[220px] bg-zinc-900 shrink-0">
                <Image 
                  src={activeModal.mockupUrl} 
                  alt={activeModal.title} 
                  fill 
                  className="object-cover object-top opacity-50"
                  sizes="(max-width: 576px) 100vw, 576px"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-transparent to-transparent" />
                
                {/* Close Component Icon Button */}
                <button 
                  onClick={() => setActiveModal(null)}
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer transition-colors z-20"
                  aria-label="Close service details modal"
                >
                  <X className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

              {/* Modal Dynamic Information Area */}
              <div className="p-8 pt-2">
                <span className="text-xs font-medium text-brand-orange block mb-1">
                  {activeModal.tagline}
                </span>
                <h4 className="text-3xl font-semibold text-white tracking-tight mb-4">
                  {activeModal.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-400 font-light mb-8">
                  {activeModal.fullDescription}
                </p>

                {/* Service Highlights List */}
                <div className="mb-8">
                  <h5 className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-4">
                    Key Deliverables
                  </h5>
                  <ul className="space-y-3">
                    {activeModal.highlights.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-zinc-300 leading-snug">
                        <Check className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" strokeWidth={3} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Execution Stack Inside Modal */}
                <div className="pt-2">
                  <h5 className="text-[11px] uppercase tracking-wider font-semibold text-zinc-500 mb-3">
                    Core execution stack
                  </h5>
                  <div className="flex flex-wrap gap-2.5">
                    {activeModal.icons.map((tech, token) => (
                      <span 
                        key={token}
                        className="px-3.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800/60 text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
