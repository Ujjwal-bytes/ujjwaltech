import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Next.js Google Font Config loader
const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ujjwal Tech | Web Development Company in Mumbai",
  description:
    "Ujjwal Tech - Professional web development, corporate website design, e-commerce solutions, Google Ads, Facebook Ads & SEO packages in Mumbai.",
  metadataBase: new URL("https://ujjwaltech.in"),
  
  // ========== UPDATED ICONS SECTION ==========
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  // ==========================================

  openGraph: {
    title: "Ujjwal Tech | Web Development Company in Mumbai",
    description:
      "Ujjwal Tech - Professional web development, corporate website design, e-commerce solutions, Google Ads, Facebook Ads & SEO packages in Mumbai.",
    url: "https://ujjwaltech.in",
    siteName: "Ujjwal Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ujjwal Tech",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Tech | Web Development Company in Mumbai",
    description:
      "Ujjwal Tech - Professional web development, corporate website design, e-commerce solutions, Google Ads, Facebook Ads & SEO packages in Mumbai.",
    images: ["/og-image.png"],
  },

  keywords: [
    "Web Development Company in Mumbai",
    "Affordable Corporate Website Packages",
    "Professional E-commerce Web Design",
    "Ujjwal Tech",
    "Mumbai Web Development",
    "E-commerce Development Mumbai",
    "Google Ads Setup Mumbai",
    "Facebook Ads Mumbai",
    "SEO Services Mumbai",
    "Corporate Website Designers Mumbai",
  ],

  authors: [{ name: "Ujjwal Tech" }],
  creator: "Ujjwal Tech",
  publisher: "Ujjwal Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
  alternates: {
    canonical: "https://ujjwaltech.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", montserratFont.variable)}>
      {/* ========== ADDED FALLBACK HEAD TAGS ========== */}
      <head>
        {/* Favicon Fallbacks - Multiple formats for maximum compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Additional Meta Tags for better SEO */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/logo.png" />
        
        {/* Preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      {/* ============================================= */}
      
      <body className="font-sans antialiased bg-[#f8f9fa] text-[#111111]">
        {children}
      </body>
    </html>
  );
}