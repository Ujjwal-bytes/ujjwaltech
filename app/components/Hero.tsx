'use client';

import Image from "next/image";
import { ArrowUpRight, Star, Menu, X } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 flex-shrink-0 relative z-[100] sticky top-0 pt-5 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : ''
        }`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <header className={`bg-[#111111] text-white rounded-full px-6 sm:px-8 md:px-10 py-3.5 md:py-4.5 flex items-center justify-between text-[13px] font-semibold shadow-[0_14px_45px_rgba(0,0,0,0.14)] max-w-7xl mx-auto relative transition-all duration-300 ${
          isScrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.12)]' : ''
        }`}>
          
          {/* Left - Desktop Navigation */}
          <div className="flex items-center min-w-[50px] md:min-w-[200px]">
            <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-zinc-400 tracking-wide">
              <button onClick={() => scrollToSection('home')} className="text-brand-orange font-bold transition">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-white transition">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition">Pricing</button>
            </nav>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center gap-2.5 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <motion.span 
              className="bg-brand-orange w-6 h-6 rounded-full flex items-center justify-center font-extrabold text-xs text-white shadow-[0_2px_10px_rgba(255,69,0,0.3)]"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              U
            </motion.span>
            <span className="font-extrabold tracking-tight text-white text-base">Ujjwal Tech</span>
          </div>

          {/* Right - Desktop Navigation & Contact */}
          <div className="flex items-center justify-end gap-4 md:gap-8 lg:gap-10 text-zinc-400 tracking-wide min-w-[50px] md:min-w-[200px]">
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              <button onClick={() => scrollToSection('process')} className="hover:text-white transition">Portfolio</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition">Testimonials</button>
            </nav>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white font-bold transition hidden md:block">Contact</button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-brand-orange transition-colors z-50 relative p-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <motion.div 
            className="absolute top-full left-2 right-2 mt-3 bg-[#111111] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:hidden border border-zinc-800"
            variants={menuVariants}
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            exit="exit"
          >
            <nav className="flex flex-col p-4 gap-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-brand-orange font-bold text-left px-4 py-3 rounded-xl hover:bg-white/5 transition-colors w-full"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-zinc-300 text-left px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors w-full"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-zinc-300 text-left px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors w-full"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-zinc-300 text-left px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors w-full"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-zinc-300 text-left px-4 py-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors w-full"
              >
                Testimonials
              </button>
              <div className="border-t border-zinc-800 my-2"></div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-orange text-white font-bold text-center px-4 py-3.5 rounded-xl hover:bg-orange-600 transition-colors w-full"
              >
                Contact
              </button>
            </nav>
          </motion.div>

        </header>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 w-full mx-auto relative mt-8 flex-1"
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
            >
              <ArrowUpRight className="w-4 h-4 text-brand-orange" strokeWidth={3} />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-extrabold tracking-[-0.03em] max-w-5xl leading-[1.05] text-[#111111] text-center mb-3"
            variants={itemVariants}
          >
            Professional
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
              <span className="text-5xl text-zinc-300 font-serif leading-none h-3 select-none mb-1 block">"</span>
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
                className="relative w-[110%] aspect-[1/1.05] -mb-1 select-none pointer-events-none"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="https://res.cloudinary.com/ddhotct77/image/upload/v1781895667/Gemini_Generated_Image_ya591iya591iya59_1_hnydv0.png"
                  alt="Ujjwal Jha"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-bottom scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                />
              </motion.div>

              {/* Curved Dotted Arrow */}
              <div className="absolute left-[-90px] bottom-20 hidden md:block z-20 pointer-events-none select-none">
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
                  className="flex-1 bg-brand-orange text-white text-center py-3.5 px-5 rounded-full font-bold text-xs tracking-wide transition flex items-center justify-center gap-1"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View Pricing
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={3} />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="flex-1 text-[#111111] font-bold text-xs tracking-wide text-center py-3.5 px-5 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <h3 className="text-3xl font-extrabold text-[#111111] tracking-tight">10 Years</h3>
                <span className="text-[11px] text-zinc-400 font-bold block uppercase tracking-wider mt-0.5">Experts</span>
              </motion.div>
              <div className="w-full border-t border-zinc-200 mt-7 md:mt-9" />
            </motion.div>

          </div>
        </div>
      </motion.div>
      
    </section>
  );
}