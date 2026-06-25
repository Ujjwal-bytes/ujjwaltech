"use client";

import Link from "next/link";
import { PhoneCall, Code, Sparkles } from "lucide-react";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  offsetClass: string;
  digitPosition: string;
  showLineAfter: boolean;
  arrowViewBox: string;
  arrowPath: string;
  headPath: string;
  keywords: string[];
}

export default function PortfolioProcess() {
  const steps: ProcessStep[] = [
    {
      id: "step-1",
      number: "1",
      title: "Discovery & Consultation",
      description: "Deep dive analysis to understand your business needs in Mumbai, target audience, and project requirements.",
      offsetClass: "lg:mt-[280px]",
      digitPosition: "top-[-90px] left-[20px]",
      showLineAfter: true,
      arrowViewBox: "0 0 240 60",
      arrowPath: "M 10 10 Q 110 55, 215 25",
      headPath: "M 205 18 L 217 25 L 210 35",
      keywords: ["web development consultation", "business needs analysis", "Mumbai web developer", "project requirements"]
    },
    {
      id: "step-2",
      number: "2",
      title: "Professional Development",
      description: "Developing robust backend systems with pixel-perfect responsive frontend layouts for corporate websites.",
      offsetClass: "lg:mt-[160px]",
      digitPosition: "top-[-110px] left-[40px] !text-[#ebedf3]",
      showLineAfter: true,
      arrowViewBox: "0 0 240 60",
      arrowPath: "M 10 30 Q 100 -5, 215 20",
      headPath: "M 206 12 L 217 21 L 212 32",
      keywords: ["web development", "backend systems", "responsive frontend", "corporate websites", "professional web developers"]
    },
    {
      id: "step-3",
      number: "3",
      title: "SEO & Deployment",
      description: "Executing semantic SEO optimization, performance testing, and secure cloud deployment for your website.",
      offsetClass: "lg:mt-[40px]",
      digitPosition: "top-[-110px] left-[30px] !text-[#ebedf3]",
      showLineAfter: false,
      arrowViewBox: "0 0 0 0",
      arrowPath: "",
      headPath: "",
      keywords: ["SEO optimization", "performance testing", "cloud deployment", "website launch", "SEO services Mumbai"]
    }
  ];

  // ========== HOW-TO SCHEMA ==========
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Professional Web Development Process at Ujjwal Tech",
    "description": "Our step-by-step web development process for building professional websites in Mumbai.",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.title,
      "text": step.description,
    })),
    "totalTime": "P7D", // 7 days
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "4999"
    },
    "tool": [
      "React",
      "Next.js",
      "Node.js",
      "WordPress",
      "Shopify"
    ]
  };

  return (
    <>
      {/* ========== HOW-TO SCHEMA ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      {/* ========== SECTION ========== */}
      <section 
        id="process" 
        className="w-full bg-white py-28 px-6 md:px-12 select-none relative overflow-hidden"
        aria-label="Ujjwal Tech Web Development Process - Our 3-Step Workflow"
        itemScope
        itemType="https://schema.org/HowTo"
      >
        {/* ===== BACKGROUND DECORATIVE CIRCLE ===== */}
        <div 
          className="absolute w-[580px] h-[580px] rounded-full bg-gradient-to-br from-[#f4f7ff]/80 to-[#f0f4ff]/40 right-[-120px] top-[100px] z-0 pointer-events-none" 
          aria-hidden="true" 
        />

        {/* ===== MAIN GRID LAYOUT ===== */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 relative z-10">
          
          {/* ===== LEFT SIDE - INTRO COLUMN ===== */}
          <div className="flex flex-col justify-start pt-5 lg:sticky lg:top-12 h-fit">
            <span 
              className="text-[11px] font-bold text-brand-orange uppercase tracking-[1.5px] mb-5 block"
              aria-label="Ujjwal Tech Process"
            >
              Ujjwal Tech Process
            </span>
            
            <div className="relative w-fit mb-6">
              <h2 className="text-4xl md:text-[44px] font-extrabold text-[#111111] tracking-[-1px] leading-[1.2]">
                Our Work Process
              </h2>
              {/* Hand-drawn underline vector marker */}
              <svg 
                className="absolute left-0 bottom-[-12px] w-full h-3 text-brand-orange" 
                viewBox="0 0 300 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M4 8.5C65 5 180 3 296 7.5M15 10C95 7.5 190 6.5 270 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
              </svg>
            </div>

            <p className="text-[15px] text-[#6c757d] leading-[1.65] mb-9 font-normal mt-2">
              Transforming your business goals into production-grade websites with professional execution workflows in Mumbai.
            </p>
            
            <Link 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-brand-orange text-white px-8 py-[15px] rounded-[30px] font-semibold text-[14px] shadow-[0_10px_24px_rgba(255,69,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,69,0,0.35)] w-fit"
              aria-label="Get started with Ujjwal Tech web development services in Mumbai"
            >
              Get Started
            </Link>
          </div>

          {/* ===== RIGHT SIDE - STEPS ===== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col justify-start pl-2 group ${step.offsetClass}`}
                itemScope
                itemProp="step"
                itemType="https://schema.org/HowToStep"
              >
                {/* ===== STEP NUMBER (Hidden for screen readers) ===== */}
                <meta itemProp="position" content={step.number} />
                <meta itemProp="name" content={step.title} />

                {/* ===== NODE SPOT ===== */}
                <div 
                  className="absolute top-[-36px] left-[20px] w-8 h-8 rounded-[10px] bg-white border border-zinc-200 shadow-[0_10px_16px_rgba(0,0,0,0.06)] flex items-center justify-center z-30"
                  aria-hidden="true"
                >
                  <div className="w-[9px] h-[9px] rounded-full bg-[#a2a8b0]" />
                </div>

                {/* ===== ARROW CONNECTOR ===== */}
                {step.showLineAfter && (
                  <div 
                    className="hidden md:block absolute top-[-44px] left-[48px] w-[calc(100%+8px)] h-[70px] text-brand-orange z-20 pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg 
                      className="w-full h-full overflow-visible" 
                      viewBox={step.arrowViewBox} 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      preserveAspectRatio="none"
                    >
                      <path 
                        d={step.arrowPath} 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path 
                        d={step.headPath} 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}

                {/* ===== BACKGROUND DIGIT ===== */}
                <span 
                  className={`absolute text-[170px] font-extrabold text-[#f3f5f9] select-none leading-none z-0 tracking-tighter ${step.digitPosition}`}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* ===== CONTENT ===== */}
                <div className="relative z-10 mt-4 pl-4 pr-2">
                  <h3 
                    className="text-[17px] font-bold text-[#111111] mb-3 tracking-tight group-hover:text-brand-orange transition-colors duration-300"
                    itemProp="name"
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-[14px] text-[#6c757d] leading-[1.6] max-w-[260px] font-normal"
                    itemProp="text"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== SR-ONLY HIDDEN CONTENT FOR SEO ========== */}
        <div className="sr-only" aria-hidden="false">
          <h3>Ujjwal Tech Web Development Process in Mumbai</h3>
          <p>
            Our professional web development process in Mumbai includes three key steps:
          </p>
          <ol>
            <li>
              <strong>Discovery & Consultation:</strong> Deep dive analysis to understand your business needs in Mumbai, 
              target audience, and project requirements.
            </li>
            <li>
              <strong>Professional Development:</strong> Developing robust backend systems with pixel-perfect responsive 
              frontend layouts for corporate websites using React, Next.js, and Node.js.
            </li>
            <li>
              <strong>SEO & Deployment:</strong> Executing semantic SEO optimization, performance testing, and secure 
              cloud deployment for your website on Vercel.
            </li>
          </ol>
          <p>
            Ujjwal Tech is a trusted web development company in Mumbai offering affordable website design, 
            e-commerce development, and digital marketing services.
          </p>
          <a href="https://www.ujjwaltech.site/process">View our web development process</a>
          <a href="tel:+917770074667">Contact our team: +91-77700-74667</a>
        </div>
      </section>
    </>
  );
}