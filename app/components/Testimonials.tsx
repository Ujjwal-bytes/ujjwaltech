"use client";
import Image from "next/image";
import Link from "next/link";

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
  rating?: number;
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
      quoteIconColor: "#ccd2dc",
      rating: 5
    },
    {
      id: "client-2",
      name: "Megha Patel",
      role: "Director",
      company: "Mumbai Corporate Services",
      quote: "Working with Ujjwal Tech was a game-changer for our business. They delivered a sleek, responsive corporate website with seamless backend integration—all ahead of schedule. Their problem-solving skills are exceptional.",
      imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
      alignClass: "md:self-start md:w-[85%]",
      isActive: true,
      quoteIconColor: "#4d3df5",
      rating: 5
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
      quoteIconColor: "#ccd2dc",
      rating: 5
    },
  ];

  // ========== AGGREGATE RATING SCHEMA ==========
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ujjwal Tech",
    "description": "Best web development company in Mumbai with 150+ satisfied clients.",
    "url": "https://www.ujjwaltech.site",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating || 5,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": t.name
      },
      "reviewBody": t.quote,
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Ujjwal Tech"
      }
    }))
  };

  // ========== ITEM LIST SCHEMA ==========
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Client Testimonials for Ujjwal Tech",
    "description": "Real feedback from clients who have worked with Ujjwal Tech, a professional web development company in Mumbai.",
    "numberOfItems": testimonials.length,
    "itemListElement": testimonials.map((t, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.rating || 5,
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": t.name
        },
        "reviewBody": t.quote
      }
    }))
  };

  return (
    <>
      {/* ========== SCHEMAS ========== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
        }}
      />

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section 
        id="testimonials" 
        className="w-full bg-white py-28 px-6 md:px-12 select-none flex items-center justify-center"
        aria-label="Client Testimonials - Ujjwal Tech Reviews"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-[60px] items-center">
          
          {/* ===== LEFT SIDE - INTRO ===== */}
          <div className="w-full max-w-[440px] text-left mx-auto lg:mx-0">
            <span className="text-[11px] font-bold text-brand-orange uppercase tracking-[1.5px] mb-3 inline-block">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-[48px] font-extrabold text-[#0b0f19] tracking-[-1.5px] leading-[1.15] mb-6">
              Trusted by<br className="hidden md:block" /> Mumbai Businesses
            </h2>
            
            {/* ===== RATING SUMMARY ===== */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1 text-brand-orange" aria-label="4.8 out of 5 stars rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm font-bold text-zinc-700">4.8/5</span>
              <span className="text-sm text-zinc-400">(150+ reviews)</span>
            </div>

            <p className="text-[15px] text-[#666e80] leading-[1.65] mb-9 font-normal">
              Real feedback from real clients who've experienced the difference of working with Ujjwal Tech, a professional web development company in Mumbai.
            </p>
            
            {/* ===== CTA BUTTON ===== */}
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="inline-block bg-brand-orange text-white font-semibold text-[14px] px-[36px] py-[16px] rounded-[30px] shadow-[0_10px_24px_rgba(255,69,0,0.25)] transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(255,69,0,0.35)]"
              aria-label="Start your project with Ujjwal Tech - Get a free quote"
            >
              Start Your Project
            </Link>
          </div>

          {/* ===== RIGHT SIDE - TESTIMONIALS ===== */}
          <div className="flex flex-col gap-6 relative w-full cards-side">
            {testimonials.map((card, index) => (
              <div
                key={card.id}
                className={`w-full relative bg-white border border-[#f0f2f5] rounded-md p-6 md:px-8 md:py-6 flex items-center gap-6 transition-all duration-300 overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] ${
                  card.isActive ? "shadow-[0_20px_40px_rgba(0,0,0,0.04)]" : ""
                } ${card.alignClass}`}
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                {/* ===== SCHEMA META ===== */}
                <meta itemProp="position" content={(index + 1).toString()} />
                <meta itemProp="name" content={`Review by ${card.name}`} />

                {/* ===== ACTIVE INDICATOR ===== */}
                {card.isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-brand-orange rounded-tl-md rounded-bl-md" aria-hidden="true" />
                )}

                {/* ===== QUOTE ICON ===== */}
                <svg 
                  className={`absolute top-6 right-6 w-6 h-6 pointer-events-none transition-opacity duration-300 ${
                    card.isActive ? "opacity-100" : "opacity-20"
                  }`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path 
                    d="M10 11H5c0-2.5 1.5-4 4-4.5V5c-4 .5-6 3-6 7v6h7v-7zm11 0h-5c0-2.5 1.5-4 4-4.5V5c-4 .5-6 3-6 7v6h7v-7z" 
                    fill={card.isActive ? "#ff4500" : "#ccd2dc"}
                  />
                </svg>

                {/* ===== AVATAR ===== */}
                <div className="w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0 border border-zinc-100 bg-zinc-50 shadow-sm relative">
                  <Image
                    src={card.imageUrl} 
                    alt={`${card.name} - ${card.role} at ${card.company} - Ujjwal Tech client review`} 
                    title={`${card.name} - Client Testimonial for Ujjwal Tech`}
                    fill
                    className="object-cover" 
                    sizes="72px"
                    quality={75}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* ===== CONTENT ===== */}
                <div className="flex-grow pr-5 text-left">
                  {/* ===== RATING ===== */}
                  <div className="flex gap-0.5 text-brand-orange mb-1" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>

                  <h4 className="text-[17px] font-bold text-[#0b0f19] mb-0.5 tracking-tight" itemProp="name">
                    {card.name}
                  </h4>
                  <p className="text-[12px] font-medium text-brand-orange mb-1.5">
                    {card.role} • {card.company}
                  </p>
                  <blockquote className="text-[14px] text-[#666e80] leading-[1.55] font-normal" itemProp="reviewBody">
                    "{card.quote}"
                  </blockquote>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* ========== SR-ONLY CONTENT FOR SEO ========== */}
        <div className="sr-only" aria-hidden="false">
          <h3>Ujjwal Tech Client Reviews and Testimonials</h3>
          <p>
            Ujjwal Tech has received excellent reviews from clients across Mumbai. 
            With an average rating of 4.8 out of 5 from 150+ clients, we are a trusted 
            web development company in Mumbai.
          </p>
          <ul>
            {testimonials.map((t, index) => (
              <li key={index}>
                <strong>{t.name}</strong> - {t.role} at {t.company}
                <p>Rating: {t.rating}/5</p>
                <p>Review: {t.quote}</p>
              </li>
            ))}
          </ul>
          <p>
            Contact Ujjwal Tech at +91-77700-74667 or email info@ujjwaltech.site 
            to join our 150+ satisfied clients.
          </p>
          <a href="https://www.ujjwaltech.site/testimonials">View all client testimonials</a>
        </div>
      </section>
    </>
  );
}