'use client';

import Image from "next/image";
import { ArrowUpRight, Star, Menu, X } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
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
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
  };
  const navbarVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 } },
  };
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.5 } },
  };
  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 1 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };
  const statsVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
    }),
  };

  const menuVariants: Variants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen bg-white text-[#111111] font-sans flex flex-col pt-5 pb-8 overflow-hidden select-none">

      {/* Sticky Navbar */}
      <motion.div
        className={`w-full px-4 sm:px-6 lg:px-8 flex-shrink-0 sticky top-0 pt-4 md:pt-6 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/40 backdrop-blur-md pb-4 border-b border-zinc-200/50' : 'bg-transparent'
          }`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <header className={`bg-[#111111] text-white rounded-full px-5 sm:px-8 py-3 grid grid-cols-3 items-center text-[13px] font-medium max-w-7xl mx-auto relative transition-all duration-500 border border-zinc-800/50 ${isScrolled
            ? 'shadow-[0_20px_40px_rgba(0,0,0,0.3)] bg-black scale-[0.98]'
            : 'shadow-[0_14px_45px_rgba(0,0,0,0.15)]'
          }`}>

          {/* Left Side Navigation */}
          <div className="hidden md:flex items-center justify-start gap-6 text-zinc-400 font-medium">
            <button
              onClick={() => scrollToSection('home')}
              className="text-brand-orange font-semibold transition-all duration-300 hover:brightness-115 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-brand-orange"
              aria-label="Navigate to home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="hover:text-white transition-colors duration-300 whitespace-nowrap"
              aria-label="Navigate to services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="hover:text-white transition-colors duration-300 whitespace-nowrap"
              aria-label="Navigate to pricing"
            >
              Pricing
            </button>
          </div>

          {/* Center - Logo */}
          <div
            className="flex items-center gap-3 col-start-2 justify-center cursor-pointer group select-none"
            onClick={() => scrollToSection('home')}
            aria-label="Ujjwal Tech Home"
          >
            <motion.div
              className="relative w-7 h-7 flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/logo.png"
                alt="Ujjwal Tech Logo"
                fill
                sizes="28px"
                quality={85}
                className="object-contain group-hover:brightness-110 transition-all"
                priority
              />
            </motion.div>
            <span className="font-extrabold tracking-tight text-white text-base whitespace-nowrap bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Ujjwal Tech
            </span>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center justify-end gap-4 md:gap-6 text-zinc-400 font-medium col-start-3">
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('process')} 
                className="hover:text-white transition-colors duration-300 whitespace-nowrap"
                aria-label="Navigate to portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="hover:text-white transition-colors duration-300 whitespace-nowrap"
                aria-label="Navigate to testimonials"
              >
                Testimonials
              </button>
            </nav>

            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-zinc-900 border border-zinc-800 px-5 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:bg-white hover:text-[#111111] hover:border-white hover:scale-105 active:scale-95 whitespace-nowrap"
              aria-label="Contact us"
            >
              Contact
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-brand-orange transition-colors z-50 relative p-1.5 rounded-full hover:bg-zinc-800/50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <motion.div
            ref={menuRef}
            className="absolute top-full left-0 right-0 mt-3 bg-[#111111]/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.5)] md:hidden border border-zinc-800/80 mx-2 grid-cols-1"
            variants={menuVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            exit="exit"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col p-3 gap-1">
              <button
                onClick={() => { scrollToSection('home'); setIsMenuOpen(false); }}
                className="text-brand-orange font-bold text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-colors w-full"
                role="menuitem"
              >
                Home
              </button>
              {['services', 'pricing', 'process', 'testimonials'].map((section) => (
                <button
                  key={section}
                  onClick={() => { scrollToSection(section); setIsMenuOpen(false); }}
                  className="text-zinc-300 font-medium text-left px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors w-full capitalize"
                  role="menuitem"
                >
                  {section === 'process' ? 'Portfolio' : section}
                </button>
              ))}
              <div className="border-t border-zinc-800/60 my-2 mx-2" aria-hidden="true"></div>
              <button
                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}
                className="bg-brand-orange text-white font-bold text-center px-4 py-3.5 rounded-xl hover:bg-orange-600 active:scale-[0.99] transition-all w-full shadow-lg shadow-brand-orange/20"
                role="menuitem"
              >
                Contact
              </button>
            </nav>
          </motion.div>

        </header>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 w-full mx-auto relative mt-8 flex-1 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          {/* Hello Badge */}
          <motion.div
            className="relative border border-zinc-200 bg-white rounded-full px-5 py-1.5 text-xs font-semibold text-zinc-800 mb-3 shadow-sm tracking-wide z-20"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Welcome to Ujjwal Tech
            <motion.div
              className="absolute -top-2.5 -right-2.5"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              aria-hidden="true"
            >
              <ArrowUpRight className="w-4 h-4 text-brand-orange" strokeWidth={3} />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-extrabold tracking-[-0.03em] max-w-5xl leading-[1.05] text-[#111111] text-center mb-3"
            variants={itemVariants}
          >
            Professional{" "}
            <motion.span
              className="text-brand-orange inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Web Development
            </motion.span>{" "}
            <br />
            in Mumbai
          </motion.h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 items-end relative z-10 mt-2">

            {/* Left Column - Testimonial */}
            <motion.div
              className="flex flex-col items-center md:items-start text-center md:text-left max-w-[250px] justify-self-center md:justify-self-start pb-4 order-2 md:order-1"
              variants={statsVariants}
              custom={0.8}
            >
              <span className="text-5xl text-zinc-300 font-serif leading-none h-3 select-none mb-1 block" aria-hidden="true">"</span>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed">
                Ujjwal Tech delivered our corporate website on time with exceptional quality. Highly recommended!
              </p>
              <motion.div
                className="mt-5 md:mt-7"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-3xl font-extrabold text-[#111111] tracking-tight">450+</h3>
                <span className="text-[11px] text-zinc-400 font-bold block uppercase tracking-wider mt-0.5">Mumbai Clients</span>
              </motion.div>
            </motion.div>

            {/* Center Column - Image */}
            <motion.div
              className="relative w-full max-w-[290px] md:max-w-[320px] mx-auto flex flex-col items-center justify-end order-1 md:order-2 my-4 md:my-0"
              variants={imageVariants}
            >
              <div className="absolute inset-x-0 bottom-0 aspect-square bg-brand-orange rounded-full -z-10 shadow-[0_15px_45px_rgba(255,69,0,0.18)]" />

              <motion.div
                className="relative w-[110%] aspect-[1/1.05] -mb-1 select-none pointer-events-none overflow-hidden"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="https://res.cloudinary.com/ddhotct77/image/upload/f_auto,q_85,w_800/v1781895667/Gemini_Generated_Image_ya591iya591iya59_1_hnydv0.png"
                  alt="Ujjwal Jha - Web Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={85}
                  className="object-contain object-bottom scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/fallback-hero-image.png';
                  }}
                />
              </motion.div>

              {/* Curved Dotted Arrow */}
              <div className="absolute left-[-90px] bottom-20 hidden md:block z-20 pointer-events-none select-none" aria-hidden="true">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <style>
                      {`
                        @keyframes revealDotsSequential {
                          0% { stroke-dasharray: 0 400; opacity: 0; }
                          1% { opacity: 1; }
                          100% { stroke-dasharray: 6 7; opacity: 1; }
                        }
                        @keyframes fadeInArrowHead {
                          0%, 95% { opacity: 0; }
                          100% { opacity: 1; }
                        }
                        .dot-by-dot-curve { animation: revealDotsSequential 2.2s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
                        .arrow-tip-static { opacity: 0; animation: fadeInArrowHead 0.15s ease-out 2s forwards; }
                      `}
                    </style>
                  </defs>
                  <g>
                    <path
                      className="dot-by-dot-curve"
                      d="M25 135 C 45 132, 60 128, 65 115 C 72 100, 48 70, 35 90 C 20 112, 60 135, 85 110 C 100 95, 100 50, 120 30 C 126 24, 134 22, 142 24"
                      stroke="#111111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
                    />
                    <g className="arrow-tip-static">
                      <path d="M132 18 L146 25 L134 32 Z" fill="#111111" stroke="#111111" strokeWidth="1" strokeLinejoin="round" />
                    </g>
                  </g>
                </svg>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center bg-white p-1 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-zinc-100 min-w-[280px] z-30"
                variants={buttonVariants}
              >
                <motion.button
                  onClick={() => scrollToSection('pricing')}
                  className="flex-1 bg-brand-orange text-white text-center py-3.5 px-5 rounded-full font-bold text-xs tracking-wide transition flex items-center justify-center gap-1 whitespace-nowrap"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  aria-label="View our pricing plans"
                >
                  View Pricing
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={3} aria-hidden="true" />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="flex-1 text-[#111111] font-bold text-xs tracking-wide text-center py-3.5 px-5 transition whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Get a free quote"
                >
                  Get a Quote
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              className="flex flex-col items-center md:items-end text-center md:text-right max-w-[240px] justify-self-center md:justify-self-end pb-4 order-3"
              variants={statsVariants}
              custom={1}
            >
              <motion.div
                className="flex gap-0.5 text-brand-orange text-xs mb-1 select-none"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                aria-hidden="true"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <h3 className="text-3xl font-extrabold text-[#111111] tracking-tight">10 Years</h3>
                <span className="text-[11px] text-zinc-400 font-bold block uppercase tracking-wider mt-0.5">Experts</span>
              </motion.div>
              <div className="w-full border-t border-zinc-200 mt-7 md:mt-9" aria-hidden="true" />
            </motion.div>

          </div>
        </div>
      </motion.div>

    </section>
  );
}