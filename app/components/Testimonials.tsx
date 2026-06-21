"use client";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
  alignClass: string;
  isActive: boolean;
  quoteIconColor: string;
}

export default function PortfolioTestimonials() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials: Testimonial[] = [
    {
      id: "client-1",
      name: "Priya Mehta",
      role: "Owner",
      company: "Mumbai Fashion Store",
      quote: "Ujjwal Tech transformed our showroom into an online store with their premium e-commerce system. Our sales increased by 40% within the first month. Their attention to detail and technical expertise is unmatched.",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      alignClass: "md:self-end md:w-[85%]",
      isActive: false,
      quoteIconColor: "#ccd2dc"
    },
    {
      id: "client-2",
      name: "Rajesh Patel",
      role: "Director",
      company: "Mumbai Corporate Services",
      quote: "Working with Ujjwal Tech was a game-changer for our business. They delivered a sleek, responsive corporate website with seamless backend integration—all ahead of schedule. Their problem-solving skills are exceptional.",
      imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
      alignClass: "md:self-start md:w-[85%]",
      isActive: true,
      quoteIconColor: "#4d3df5"
    },
    {
      id: "client-3",
      name: "Anita Shah",
      role: "Marketing Head",
      company: "Mumbai Retail Chain",
      quote: "The corporate website Ujjwal Tech developed outperformed all our expectations. Their ability to blend stunning visuals with clean, optimized code is rare. I've already recommended them to three other businesses in Mumbai.",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      alignClass: "md:self-end md:w-[85%]",
      isActive: false,
      quoteIconColor: "#ccd2dc"
    },
  ];

  return (
    <>
      <section 
        id="testimonials" 
        className="w-full bg-white py-28 px-6 md:px-12 select-none flex items-center justify-center"
      >
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-[60px] items-center">
          
          {/* Left Side Content Intro block Column */}
          <div className="w-full max-w-[440px] text-left mx-auto lg:mx-0">
            <span className="text-[11px] font-bold text-[#ff4500] uppercase tracking-[1.5px] mb-3 inline-block">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-[48px] font-extrabold text-[#0b0f19] tracking-[-1.5px] leading-[1.15] mb-6">
              Trusted by<br className="hidden md:block" /> Mumbai Businesses
            </h2>
            <p className="text-[15px] text-[#666e80] leading-[1.65] mb-9 font-normal">
              Real feedback from real clients who've experienced the difference of working with Ujjwal Tech, a professional web development company in Mumbai.
            </p>
            
            {/* Beautiful Linear Custom Gradient Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-block bg-[#ff4500] text-white font-semibold text-[14px] px-[36px] py-[16px] rounded-[30px] shadow-[0_10px_24px_rgba(255,69,0,0.25)] transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(255,69,0,0.35)]"
              aria-label="Contact Ujjwal Tech for services"
            >
              Start Your Project
            </button>
          </div>

          {/* Right Side Testimonials Staggered Stack Frame */}
          <div className="flex flex-col gap-6 relative w-full cards-side">
            {testimonials.map((card) => (
              <div
                key={card.id}
                className={`w-full relative bg-white border border-[#f0f2f5] rounded-md p-6 md:px-8 md:py-6 flex items-center gap-6 transition-all duration-300 overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${
                  card.isActive ? "shadow-[0_20px_40px_rgba(0,0,0,0.04)]" : ""
                } ${card.alignClass}`}
              >
                {/* Active Middle Indicator Left Gradient Line Highlight */}
                {card.isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#ff4500] rounded-tl-md rounded-bl-md" />
                )}

                {/* Absolute Top-Right Positioned Quote Graphics Vector */}
                <svg 
                  className={`absolute top-6 right-6 w-6 h-6 pointer-events-none transition-opacity duration-300 ${
                    card.isActive ? "opacity-100" : "opacity-20"
                  }`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M10 11H5c0-2.5 1.5-4 4-4.5V5c-4 .5-6 3-6 7v6h7v-7zm11 0h-5c0-2.5 1.5-4 4-4.5V5c-4 .5-6 3-6 7v6h7v-7z" 
                    fill={card.isActive ? "#ff4500" : "#ccd2dc"}
                  />
                </svg>

                {/* Avatar Display Rounded Structure Layer */}
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0 border border-zinc-100 bg-zinc-50 shadow-sm">
                  <img 
                    src={card.imageUrl} 
                    alt={`${card.name} profile`} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Content Text Details Wrapper Layout */}
                <div className="flex-grow pr-5 text-left">
                  <h4 className="text-[17px] font-bold text-[#0b0f19] mb-0.5 tracking-tight">
                    {card.name}
                  </h4>
                  <p className="text-[12px] font-medium text-[#ff4500] mb-1.5">
                    {card.role} • {card.company}
                  </p>
                  <p className="text-[14px] text-[#666e80] leading-[1.55] font-normal">
                    "{card.quote}"
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