'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// ========== NAVIGATION LINKS DATA ==========
const navLinks = [
  { id: 'home', label: 'Home', isActive: true },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'process', label: 'Portfolio' },
  { id: 'testimonials', label: 'Testimonials' },
];

// ========== HERO SCHEMA ==========
const heroSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Ujjwal Tech - Web Development Company Mumbai",
  "description": "Professional web development, website design, and digital marketing services in Mumbai. Get affordable websites starting from ₹4,999.",
  "applicationCategory": "WebApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires modern browser",
  "offers": {
    "@type": "Offer",
    "price": "4999",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  },
  "provider": {
    "@type": "Organization",
    "name": "Ujjwal Tech",
    "url": "https://www.ujjwaltech.site"
  }
};

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside for mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Handle escape key for mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (isMenuOpen && event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ========== HERO SCHEMA ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(heroSchema),
        }}
      />

      {/* ========== HERO SECTION ========== */}
      <section 
        id="home" 
        className="relative w-full min-h-screen bg-white text-[#111111] font-sans flex flex-col pt-5 pb-8 overflow-hidden select-none"
        aria-label="Ujjwal Tech - Web Development Company in Mumbai"
        itemScope
        itemType="https://schema.org/WebApplication"
      >
        {/* ========== STICKY NAVBAR ========== */}
        <nav
          className={`w-full px-4 sm:px-6 lg:px-8 flex-shrink-0 sticky top-0 pt-4 md:pt-6 z-[100] transition-all duration-300 ${
            isScrolled ? 'bg-white/40 backdrop-blur-md pb-4 border-b border-zinc-200/50' : 'bg-transparent'
          }`}
          aria-label="Main Navigation"
        >
          <div className={`bg-[#111111] text-white rounded-full px-5 sm:px-8 py-3 grid grid-cols-3 items-center text-[13px] font-medium max-w-7xl mx-auto relative transition-all duration-300 border border-zinc-800/50 ${
            isScrolled
              ? 'shadow-[0_20px_40px_rgba(0,0,0,0.3)] bg-black scale-[0.98]'
              : 'shadow-[0_14px_45px_rgba(0,0,0,0.15)]'
          }`}>
            {/* ===== LEFT SIDE - DESKTOP NAV ===== */}
            <div className="hidden md:flex items-center justify-start gap-6 text-zinc-400 font-medium">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-all duration-300 hover:text-white ${
                    link.isActive ? 'text-brand-orange font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-brand-orange' : ''
                  }`}
                  aria-label={`Navigate to ${link.label}`}
                  aria-current={link.isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* ===== CENTER - LOGO ===== */}
            <div
              className="flex items-center gap-3 col-start-2 justify-center cursor-pointer group select-none"
              onClick={() => scrollToSection('home')}
              aria-label="Ujjwal Tech - Home"
            >
              <div className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Ujjwal Tech Logo - Web Development Company Mumbai"
                  fill
                  sizes="28px"
                  quality={75}
                  className="object-contain group-hover:brightness-110 transition-all"
                  priority
                />
              </div>
              <span className="font-extrabold tracking-tight text-white text-base whitespace-nowrap bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Ujjwal Tech
              </span>
            </div>

            {/* ===== RIGHT SIDE - DESKTOP NAV ===== */}
            <div className="flex items-center justify-end gap-4 md:gap-6 text-zinc-400 font-medium col-start-3">
              <div className="hidden md:flex items-center gap-6">
                {navLinks.slice(3).map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-white transition-colors duration-300 whitespace-nowrap"
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* ===== CONTACT BUTTON ===== */}
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="hidden md:block bg-zinc-900 border border-zinc-800 px-5 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#111111] hover:border-white hover:scale-105 active:scale-95 whitespace-nowrap"
                aria-label="Contact Ujjwal Tech for web development services"
              >
                Contact
              </Link>

              {/* ===== MOBILE MENU BUTTON ===== */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white hover:text-brand-orange transition-colors z-50 relative p-1.5 rounded-full hover:bg-zinc-800/50"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>

            {/* ===== MOBILE MENU ===== */}
            {isMenuOpen && (
              <div
                id="mobile-menu"
                ref={menuRef}
                className="absolute top-full left-0 right-0 mt-3 bg-[#111111]/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] md:hidden border border-zinc-800/80 mx-2"
                role="dialog"
                aria-label="Mobile navigation menu"
                aria-modal="true"
              >
                <nav className="flex flex-col p-3 gap-1" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => { scrollToSection(link.id); setIsMenuOpen(false); }}
                      className={`text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-colors w-full ${
                        link.isActive 
                          ? 'text-brand-orange font-bold' 
                          : 'text-zinc-300 font-medium hover:text-white'
                      }`}
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="border-t border-zinc-800/60 my-2 mx-2" aria-hidden="true"></div>
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                      setIsMenuOpen(false);
                    }}
                    className="bg-brand-orange text-white font-bold text-center px-4 py-3.5 rounded-xl hover:bg-orange-600 active:scale-[0.99] transition-all w-full shadow-lg shadow-brand-orange/20"
                    aria-label="Contact Ujjwal Tech"
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </nav>

        {/* ========== MAIN CONTENT ========== */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 w-full mx-auto relative mt-8 flex-1 z-10">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
            
            {/* ===== BADGE ===== */}
            <div 
              className="relative border border-zinc-200 bg-white rounded-full px-5 py-1.5 text-xs font-semibold text-zinc-800 mb-3 shadow-sm tracking-wide z-20"
              aria-label="Building Digital Dreams - Ujjwal Tech"
            >
              Building Digital Dreams
              <div className="absolute -top-2.5 -right-2.5" aria-hidden="true">
                <ArrowUpRight className="w-4 h-4 text-brand-orange" strokeWidth={3} />
              </div>
            </div>

            {/* ===== MAIN HEADING (H1) ===== */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-extrabold tracking-[-0.03em] max-w-5xl leading-[1.05] text-[#111111] text-center mb-3">
              Professional{" "}
              <span className="text-brand-orange inline-block">
                Web Development
              </span>{" "}
              <br />
              in Mumbai
            </h1>

            {/* ===== THREE COLUMN LAYOUT ===== */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 items-end relative z-10 mt-2">

              {/* ===== LEFT COLUMN - TESTIMONIAL ===== */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[250px] justify-self-center md:justify-self-start pb-4 order-2 md:order-1">
                <span className="text-5xl text-zinc-300 font-serif leading-none h-3 select-none mb-1 block" aria-hidden="true">"</span>
                <blockquote className="text-xs text-zinc-500 font-medium leading-relaxed">
                  <span className="sr-only">Client Testimonial: </span>
                  Ujjwal Tech delivered our corporate website on time with exceptional quality. Highly recommended!
                </blockquote>
                <div className="mt-5 md:mt-7">
                  <h2 className="text-3xl font-bold text-[#111111] tracking-tight">Quality First</h2>
                  <span className="text-[11px] text-zinc-400 font-bold block uppercase tracking-wider mt-0.5">Client Focused</span>
                </div>
              </div>

              {/* ===== CENTER COLUMN - IMAGE ===== */}
              <div className="relative w-full max-w-[290px] md:max-w-[320px] mx-auto flex flex-col items-center justify-end order-1 md:order-2 my-4 md:my-0">
                
                {/* Background Glow */}
                <div className="absolute inset-x-0 bottom-0 aspect-square bg-brand-orange rounded-full -z-10 shadow-[0_15px_45px_rgba(255,69,0,0.18)]" aria-hidden="true" />

                {/* Hero Image */}
                <div className="relative w-[110%] aspect-[1/1.05] -mb-1 select-none pointer-events-none overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/ddhotct77/image/upload/f_auto,q_70,w_800/v1781895667/Gemini_Generated_Image_ya591iya591iya59_1_hnydv0.png"
                    alt="Ujjwal Tech professional web developer in Mumbai - providing affordable website design and development services"
                    title="Ujjwal Tech - Web Development Company Mumbai"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    quality={70}
                    className="object-contain object-bottom scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/fallback-hero-image.png';
                    }}
                  />
                </div>

                {/* ===== CURVED DOTTED ARROW ===== */}
                <div className="absolute left-[-90px] bottom-20 hidden md:block z-20 pointer-events-none select-none" aria-hidden="true">
                  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path
                        d="M25 135 C 45 132, 60 128, 65 115 C 72 100, 48 70, 35 90 C 20 112, 60 135, 85 110 C 100 95, 100 50, 120 30 C 126 24, 134 22, 142 24"
                        stroke="#111111" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        fill="none"
                        strokeDasharray="6 6"
                      />
                      <g>
                        <path d="M132 18 L146 25 L134 32 Z" fill="#111111" stroke="#111111" strokeWidth="1" strokeLinejoin="round" />
                      </g>
                    </g>
                  </svg>
                </div>

                {/* ===== ACTION BUTTONS ===== */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center bg-white p-1 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-zinc-100 min-w-[280px] z-30">
                  <Link
                    href="#pricing"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('pricing');
                    }}
                    className="flex-1 bg-brand-orange text-white text-center py-3.5 px-5 rounded-full font-bold text-xs tracking-wide transition flex items-center justify-center gap-1 whitespace-nowrap hover:bg-orange-600 active:scale-95"
                    aria-label="View affordable web development pricing packages starting from ₹4,999"
                  >
                    View Pricing
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={3} aria-hidden="true" />
                  </Link>
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                    className="flex-1 text-[#111111] font-bold text-xs tracking-wide text-center py-3.5 px-5 transition hover:text-brand-orange whitespace-nowrap"
                    aria-label="Get a free quote for web development services in Mumbai"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>

              {/* ===== RIGHT COLUMN - STATS ===== */}
              <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-[240px] justify-self-center md:justify-self-end pb-4 order-3">
                <div className="flex gap-0.5 text-brand-orange text-xs mb-1 select-none" aria-label="5 star rating" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#111111] tracking-tight">Full Support</h2>
                  <span className="text-[11px] text-zinc-400 font-bold block uppercase tracking-wider mt-0.5">Always Available</span>
                </div>
                <div className="w-full border-t border-zinc-200 mt-7 md:mt-9" aria-hidden="true" />
              </div>

            </div>
          </div>
        </div>

        {/* ========== SR-ONLY HIDDEN CONTENT FOR SEO ========== */}
        <div className="sr-only" aria-hidden="false">
          <h2>Ujjwal Tech - Best Web Development Company in Mumbai</h2>
          <p>
            Ujjwal Tech is a professional web development company in Mumbai offering affordable website design, 
            e-commerce development, SEO services, Google Ads management, and Facebook Ads setup. 
            Our web development packages start from ₹4,999 with free hosting and SSL certificate.
          </p>
          <p>
            We serve small businesses, startups, corporate clients, and entrepreneurs in Mumbai, 
            Navi Mumbai, Thane, and Pune. Our services include responsive website design, 
            custom web development, Shopify development, WooCommerce development, and digital marketing.
          </p>
          <a href="https://www.ujjwaltech.site">Ujjwal Tech Website</a>
          <a href="tel:+917770074667">Contact Ujjwal Tech: +91-77700-74667</a>
        </div>
      </section>
    </>
  );
}