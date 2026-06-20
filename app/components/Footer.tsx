"use client";

import React, { useState } from "react";
import Link from "next/link";

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
    // Clear messages when user starts typing
    if (successMessage) setSuccessMessage("");
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Prepare payload - phone is optional
      const payload: any = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim()
      };

      // Only add phone if it's not empty
      if (formData.phone.trim()) {
        payload.phone = formData.phone.trim();
      }

      console.log("📤 Sending payload:", payload);

      // Send POST request to Next.js API Route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("📥 Response:", data);

      if (response.ok && data.success) {
        // Success
        setSuccessMessage(data.message || "Message sent successfully!");
        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // Handle validation errors
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
      // Network or server error
      console.error("❌ Error sending message:", error);
      setErrorMessage(
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const dynamicLinks: FooterLinkGroup[] = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Pricing", id: "pricing" },
        { name: "Testimonials", id: "testimonials" },
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

  return (
    <>
      <footer 
        id="contact" 
        className="w-full bg-[#000000] py-24 px-6 md:px-16 flex flex-col items-center justify-center select-none"
      >
        <div className="w-full max-w-[1440px] bg-[#000000] rounded-[32px] p-6 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          
          {/* Top Section - Interactive 4-Field Capture Box */}
          <div className="w-full bg-[#0b0b0c] border border-zinc-900 rounded-[32px] p-8 md:p-12 flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
            
            {/* Left Side - Info & Contact Badges */}
            <div className="max-w-[480px] text-left">
              <span className="text-[11px] font-bold text-[#ff4500] uppercase tracking-[1.5px] mb-3 inline-block">Ujjwal Tech - Mumbai Web Development</span>
              <h2 className="text-3xl md:text-[42px] font-extrabold text-white tracking-[-1px] leading-[1.1] mb-4">
                Get Your Professional Website Today
              </h2>
              <p className="text-[14px] text-zinc-400 font-medium leading-relaxed mb-6">
                Fill out the form to discuss your web development project requirements. Serving businesses in Mumbai, Maharashtra.
              </p>
              
              {/* Core Contact Badges */}
              <div className="flex flex-col gap-3 pt-2 text-[14px] font-medium text-zinc-300">
                <a href="mailto:ujjwalbytes@gmail.com" className="flex items-center gap-3 hover:text-[#ff4500] transition-colors">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  ujjwalbytes@gmail.com
                </a>
                <a href="tel:+917770074667" className="flex items-center gap-3 hover:text-[#ff4500] transition-colors">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M2.25 6.622k7.115 7.115 0 01-.115 4.793c-.804 2.378-2.52 4.413-4.8 5.48a10.495 10.495 0 01-10.4 0c-2.28-1.067-3.996-3.102-4.8-5.48a10.498 10.498 0 01-.115-4.793M2.25 6.622V4.5a2.25 2.25 0 012.25-2.25h2.25m1.234 4.872l1.1 2.335a1.226 1.226 0 01-.295 1.411L7.545 11.23c1.455 2.872 3.824 5.24 6.696 6.695l1.012-1.013a1.226 1.226 0 011.412-.295l2.335 1.1A2.25 2.25 0 0121.75 19.5v2.25A2.25 2.25 0 0119.5 24h-2.25" />
                  </svg>
                  +91 77700 74667
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="w-full max-w-[540px]">
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *" 
                    className="w-full bg-white/5 border border-zinc-800 outline-none rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-zinc-500 font-medium focus:bg-white/10 focus:border-zinc-700 transition-all"
                    required
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *" 
                    className="w-full bg-white/5 border border-zinc-800 outline-none rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-zinc-500 font-medium focus:bg-white/10 focus:border-zinc-700 transition-all"
                    required
                  />
                </div>
                
                {/* Phone Field - Optional */}
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number (Optional)" 
                  className="w-full bg-white/5 border border-zinc-800 outline-none rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-zinc-500 font-medium focus:bg-white/10 focus:border-zinc-700 transition-all"
                />

                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message *" 
                  rows={4}
                  className="w-full bg-white/5 border border-zinc-800 outline-none rounded-2xl px-5 py-4 text-[14px] text-white placeholder:text-zinc-500 font-medium focus:bg-white/10 focus:border-zinc-700 transition-all resize-none"
                  required
                ></textarea>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-[#ff4500] text-white font-bold text-[14px] tracking-wide uppercase px-8 py-4 rounded-2xl hover:bg-orange-600 transition-colors w-full shadow-lg shadow-orange-950/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Inquiry Blueprint"}
                </button>

                {/* Success/Error Messages */}
                {successMessage && (
                  <p className="text-green-400 text-[14px] font-medium mt-3 text-center">
                    ✅ {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-400 text-[14px] font-medium mt-3 text-center">
                    ❌ {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Bottom Section - Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 items-start text-left pt-2 w-full">
            
            {/* Brand Section */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-[22px] font-extrabold text-white tracking-[-0.5px]">
                <svg width="18" height="22" viewBox="0 0 13 22" fill="currentColor" className="text-[#ff4500]">
                  <path d="M12.1 8.5H7.7L10.7.7C10.8.4 10.6 0 10.2 0H2.2C1.8 0 1.5.3 1.4.7L.0 11.7C-.1 12.1.2 12.5.6 12.5h4.4l-3 8.8c-.1.4.1.8.5.8.2 0 .3-.1.4-.2l9.6-12.2c.3-.4 0-.9-.4-.9z"/>
                </svg>
                <span>Ujjwal Tech</span>
              </div>
              
              <p className="text-[14px] text-zinc-400 leading-[1.6] max-w-[360px] font-normal">
                Professional Web Development Company in Mumbai, offering affordable business websites, corporate e-commerce solutions, and digital marketing services.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="text-zinc-500 hover:text-[#ff4500] transition-colors" aria-label="Linkedin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="#" className="text-zinc-500 hover:text-[#ff4500] transition-colors" aria-label="X">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z M4 20l6.768 -6.768 M20 4l-6.768 6.768"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Dynamic Links */}
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
                          className="text-[14px] text-zinc-400 font-medium hover:text-[#ff4500] transition-all duration-200 block text-left"
                        >
                          {link.name}
                        </button>
                      ) : (
                        <a 
                          href={link.href}
                          className="text-[14px] text-zinc-400 font-medium hover:text-[#ff4500] transition-all duration-200 block"
                          target={link.href?.startsWith('http') ? '_blank' : '_self'}
                          rel={link.href?.startsWith('http') ? 'noopener noreferrer' : ''}
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

          {/* Legal Segment Bar */}
          <div className="border-t border-zinc-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-zinc-500 w-full">
            <span>© {currentYear} Ujjwal Tech. All Rights Reserved.</span>
            <div className="flex gap-6 font-medium">
              <Link href="/terms" className="hover:text-[#ff4500] transition-colors">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:text-[#ff4500] transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}