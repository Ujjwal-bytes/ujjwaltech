import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";



// Next.js Google Font Config loader
const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat", // Yeh exact variable globals.css me match hona chahiye
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ujjwal Tech | Web Development Company in Mumbai",
  description: "Ujjwal Tech - Professional web development, corporate website design, e-commerce solutions, Google Ads, Facebook Ads & SEO packages in Mumbai.",
  metadataBase: new URL('https://ujjwaltech.in'),
  openGraph: {
    title: "Ujjwal Tech | Web Development Company in Mumbai",
    description: "Ujjwal Tech - Professional web development, corporate website design, e-commerce solutions, Google Ads, Facebook Ads & SEO packages in Mumbai.",
    url: 'https://ujjwaltech.in',
    siteName: 'Ujjwal Tech',
    locale: 'en_IN',
    type: 'website',
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
    "Corporate Website Designers Mumbai"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", montserratFont.variable)}>
      {/* font-sans utility class dynamically matches theme parameters */}
      <body className="font-sans antialiased bg-[#f8f9fa] text-[#111111]">
        {children}
      </body>
    </html>
  );
}