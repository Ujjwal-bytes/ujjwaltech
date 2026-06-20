"use client";

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
      headPath: "M 205 18 L 217 25 L 210 35"
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
      headPath: "M 206 12 L 217 21 L 212 32"
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
      headPath: ""
    }
  ];

  return (
    <>
      <section 
        id="process" 
        className="w-full bg-white py-28 px-6 md:px-12 select-none relative overflow-hidden"
      >
        {/* Background Decorative Circle */}
        <div className="absolute w-[580px] h-[580px] rounded-full bg-gradient-to-br from-[#f4f7ff]/80 to-[#f0f4ff]/40 right-[-120px] top-[100px] z-0 pointer-events-none" />

        {/* Main Grid Framework Layout */}
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 relative z-10">
          
          {/* Left Side Intro Column */}
          <div className="flex flex-col justify-start pt-5 lg:sticky lg:top-12 h-fit">
            <span className="text-[11px] font-bold text-brand-orange uppercase tracking-[1.5px] mb-5 block">
              Ujjwal Tech Process
            </span>
            
            <div className="relative w-fit mb-6">
              <h1 className="text-4xl md:text-[44px] font-extrabold text-[#111111] tracking-[-1px] leading-[1.2]">
                Our Work Process
              </h1>
              {/* Hand-drawn underline vector marker */}
              <svg className="absolute left-0 bottom-[-12px] w-full h-3 text-brand-orange" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M4 8.5C65 5 180 3 296 7.5M15 10C95 7.5 190 6.5 270 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
              </svg>
            </div>

            <p className="text-[15px] text-[#6c757d] leading-[1.65] mb-9 font-normal mt-2">
              Transforming your business goals into production-grade websites with professional execution workflows in Mumbai.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-brand-orange text-white px-8 py-[15px] rounded-[30px] font-semibold text-[14px] shadow-[0_10px_24px_rgba(255,69,0,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,69,0,0.35)] w-fit"
            >
              Get Started
            </a>
          </div>

          {/* Right Side Steps Layout Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full pt-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`relative flex flex-col justify-start pl-2 group ${step.offsetClass}`}
              >
                {/* Dynamic Node Spot Structure */}
                <div className="absolute top-[-36px] left-[20px] w-8 h-8 rounded-[10px] bg-white border border-zinc-200 shadow-[0_10px_16px_rgba(0,0,0,0.06)] flex items-center justify-center z-30">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#a2a8b0]" />
                </div>

                {/* Highly Rounded Hand-Drawn Fluid DOTTED Connector Arrow */}
                {step.showLineAfter && (
                  <div className="hidden md:block absolute top-[-44px] left-[48px] w-[calc(100%+8px)] h-[70px] text-brand-orange z-20 pointer-events-none">
                    <svg className="w-full h-full overflow-visible" viewBox={step.arrowViewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                      {/* Added strokeDasharray here to ensure proper dotted layout rendering */}
                      <path 
                        d={step.arrowPath} 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Arrow Head Pointer */}
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

                {/* Massive Raw Background Digits */}
                <span className={`absolute text-[170px] font-extrabold text-[#f3f5f9] select-none leading-none z-0 tracking-tighter ${step.digitPosition}`}>
                  {step.number}
                </span>

                {/* Text Content Info Blocks */}
                <div className="relative z-10 mt-4 pl-4 pr-2">
                  <h3 className="text-[17px] font-bold text-[#111111] mb-3 tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-[#6c757d] leading-[1.6] max-w-[260px] font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}