"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterLinkGroup {
  title: string;
  links: { name: string; id?: string; href?: string }[];
}

export default function PortfolioFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id?: string) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Contact Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (successMessage) setSuccessMessage("");
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload: any = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      };

      if (formData.phone.trim()) {
        payload.phone = formData.phone.trim();
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        if (data.errors && data.errors.length > 0) {
          const errorMsg = data.errors.map((err: any) => {
            const key = Object.keys(err)[0];
            return `${err[key]}`;
          }).join(", ");
          setErrorMessage(`Validation failed: ${errorMsg}`);
        } else {
          setErrorMessage(data.message || "Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  // ========== FOOTER LINKS ==========
  const dynamicLinks: FooterLinkGroup[] = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Pricing", id: "pricing" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Portfolio", id: "process" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", id: "services" },
        { name: "E-commerce Solutions", id: "services" },
        { name: "SEO & Marketing", id: "services" },
        { name: "Corporate Websites", id: "services" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Book a Call", href: `https://wa.me/917770074667` },
        { name: "Contact Us", id: "contact" },
        { name: "Send Email", href: "mailto:ujjwalbytes@gmail.com" },
      ],
    },
  ];

  // ========== CONTACT PAGE SCHEMA ==========
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Ujjwal Tech - Web Development Company Mumbai",
    "description": "Contact Ujjwal Tech for professional web development, e-commerce solutions, and digital marketing services in Mumbai.",
    "url": "https://www.ujjwaltech.site/#contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ujjwal Tech",
      "telephone": "+91-77700-74667",
      "email": "ujjwalbytes@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-77700-74667",
        "contactType": "Sales",
        "availableLanguage": ["English", "Hindi"]
      }
    }
  };

  // ========== LOCAL BUSINESS SCHEMA (Footer) ==========
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ujjwal Tech",
    "description": "Professional web development company in Mumbai offering affordable website design, e-commerce solutions, SEO, Google Ads & Facebook Ads.",
    "url": "https://www.ujjwaltech.site",
    "telephone": "+91-77700-74667",
    "email": "ujjwalbytes@gmail.com",
    "priceRange": "₹4,999 - ₹30,000",
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
    "sameAs": [
      "https://facebook.com/ujjwaltech",
      "https://instagram.com/ujjwaltech",
      "https://linkedin.com/company/ujjwaltech"
    ]
  };

  return (
    <>
      {/* ========== SCHEMAS ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* ========== FOOTER ========== */}
      <footer 
        id="contact" 
        className="w-full bg-[#000000] py-24 px-6 md:px-16 flex flex-col items-center justify-center select-none"
        aria-label="Ujjwal Tech Footer - Contact Information"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="w-full max-w-[1440px] bg-[#000000] rounded-[32px] p-6 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          
          {/* ===== TOP SECTION - CONTACT FORM ===== */}
          <div className="w-full bg-[#0b0b0c] border border-zinc-900 rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
            
            {/* ===== LEFT SIDE - INFO ===== */}
            <div className="max-w-[480px] text-left">
              <span className="text-[11px] font-bold text-brand-orange uppercase tracking-[1.5px] mb-3 inline-block">
                Ujjwal Tech - Mumbai Web Development
              </span>
              <h2 className="text-3xl md:text-[42px] font-extrabold text-white tracking-[-1px] leading-[1.1] mb-4">
                Get Your Professional Website Today
              </h2>
              <p className="text-[14px] text-zinc-400 font-medium leading-relaxed mb-6">
                Fill out the form to discuss your web development project requirements. Serving businesses in Mumbai, Maharashtra.
              </p>
              
              {/* ===== CONTACT BADGES ===== */}
              <div className="flex flex-col gap-3 pt-2 text-[14px] font-medium text-zinc-300">
                <a 
                  href="mailto:ujjwalbytes@gmail.com" 
                  className="flex items-center gap-3 hover:text-brand-orange transition-colors"
                  aria-label="Email Ujjwal Tech"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  ujjwalbytes@gmail.com
                </a>
                <a 
                  href="tel:+917770074667" 
                  className="flex items-center gap-3 hover:text-brand-orange transition-colors"
                  aria-label="Call Ujjwal Tech"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  +91 77700 74667
                </a>
                <div className="flex items-center gap-3 text-zinc-400">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/>
                    <path d="M12 7v5l3 3"/>
                  </svg>
                  Mon-Sat: 9:00 AM - 6:00 PM
                </div>
              </div>
            </div>

            {/* ===== RIGHT SIDE - FORM ===== */}
            <div className="w-full max-w-[540px]">
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *" 
                    className="w-full bg-white/5 border border-zinc-800 outline-none rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-zinc-500 font-medium focus:bg-white/10 focus:border-zinc-700 transition-all"
                    required
                    aria-label="Your name"
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *" 
                    className="w-full bg-white/5 border border-zinc-800 outline-none rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-zinc-500 font-medium focus:bg-white/10 focus:border-zinc-700 transition-all"
                    required
                    aria-label="Your email address"
                  />
                </div>
                
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number (Optional)" 
                  className="w-full bg-white/5 border border-zinc-800 outline-none rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-zinc-500 font-medium focus:bg-white/10 focus:border-zinc-700 transition-all"
                  aria-label="Your phone number"
                />

                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *" 
                  rows={4}
                  className="w-full bg-white/5 border border-zinc-800 outline-none rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-zinc-500 font-medium focus:bg-white/10 focus:border-zinc-700 transition-all resize-none"
                  required
                  aria-label="Your message"
                ></textarea>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-brand-orange text-white font-bold text-[14px] tracking-wide uppercase px-8 py-4 rounded-2xl hover:bg-orange-600 transition-colors w-full shadow-lg shadow-orange-950/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={isLoading ? "Sending your message..." : "Send inquiry to Ujjwal Tech"}
                >
                  {isLoading ? "Sending..." : "Send Inquiry"}
                </button>

                {successMessage && (
                  <p className="text-green-400 text-[14px] font-medium mt-3 text-center" role="status">
                    ✅ {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-400 text-[14px] font-medium mt-3 text-center" role="alert">
                    ❌ {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* ===== BOTTOM SECTION - NAVIGATION ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 items-start text-left pt-2 w-full">
            
            {/* ===== BRAND SECTION ===== */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Ujjwal Tech Logo - Web Development Company Mumbai"
                    fill
                    className="object-contain"
                    sizes="40px"
                    quality={75}
                    loading="lazy"
                  />
                </div>
                <span className="text-[22px] font-extrabold text-white tracking-[-0.5px]">
                  Ujjwal Tech
                </span>
              </div>
              
              <p className="text-[14px] text-zinc-400 leading-[1.6] max-w-[360px] font-normal">
                Professional Web Development Company in Mumbai, offering affordable business websites, corporate e-commerce solutions, and digital marketing services.
              </p>

              {/* ===== SOCIAL MEDIA ===== */}
              <div className="flex items-center gap-4 mt-2">
                <a 
                  href="#" 
                  className="text-zinc-500 hover:text-brand-orange transition-colors" 
                  aria-label="Ujjwal Tech on LinkedIn"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-zinc-500 hover:text-brand-orange transition-colors" 
                  aria-label="Ujjwal Tech on X (Twitter)"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M20 4l-6.768 6.768"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-zinc-500 hover:text-brand-orange transition-colors" 
                  aria-label="Ujjwal Tech on Facebook"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-zinc-500 hover:text-brand-orange transition-colors" 
                  aria-label="Ujjwal Tech on Instagram"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* ===== DYNAMIC LINKS ===== */}
            {dynamicLinks.map((group, index) => (
              <div key={`link-group-${index}`} className="flex flex-col gap-4">
                <h4 className="text-[14px] font-bold text-white capitalize tracking-normal">
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-3 list-none">
                  {group.links.map((link, linkIdx) => (
                    <li key={`link-item-${linkIdx}`}>
                      {link.id ? (
                        <button 
                          onClick={() => scrollToSection(link.id)}
                          className="text-[14px] text-zinc-400 font-medium hover:text-brand-orange transition-all duration-200 block text-left"
                          aria-label={`Navigate to ${link.name}`}
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a 
                          href={link.href}
                          className="text-[14px] text-zinc-400 font-medium hover:text-brand-orange transition-all duration-200 block"
                          target={link.href?.startsWith('http') ? '_blank' : '_self'}
                          rel={link.href?.startsWith('http') ? 'noopener noreferrer' : ''}
                          aria-label={link.name}
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ===== LEGAL SEGMENT ===== */}
          <div className="border-t border-zinc-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-zinc-500 w-full">
            <span>© {currentYear} Ujjwal Tech. All Rights Reserved.</span>
            <div className="flex gap-6 font-medium">
              <Link 
                href="/terms" 
                className="hover:text-brand-orange transition-colors"
                aria-label="Terms and Conditions"
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/privacy" 
                className="hover:text-brand-orange transition-colors"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}