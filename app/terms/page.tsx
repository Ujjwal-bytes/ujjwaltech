"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const TermsAndConditionsPage = () => {
  return (
    <section className="w-full bg-white min-h-screen pt-32 pb-24 px-6 md:px-12 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[14px] text-zinc-500 mb-6 font-medium">
          <Link href="/" className="hover:text-[#ff4500] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff4500]">Terms & Conditions</span>
        </div>

        <h1 className="text-4xl md:text-[48px] font-extrabold text-[#111111] tracking-[-1.5px] mb-8">
          Terms & Conditions
        </h1>

        <div className="text-[15px] text-zinc-600 leading-[1.8] space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">1. Agreement to Terms</h2>
            <p>
              Welcome to Ujjwal Tech. These Terms & Conditions constitute a legally binding agreement between you and Ujjwal Tech regarding your use of our website and services. By accessing or using our website, you agree to be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">2. Services Description</h2>
            <p>
              Ujjwal Tech provides professional web development, e-commerce solutions, digital marketing, and related services to businesses in Mumbai, Maharashtra, and beyond. Specific service details are outlined in individual project agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">3. Payment Terms</h2>
            <p>
              Payment schedules for our services are outlined in each project proposal. Unless otherwise specified, 50% of the total project cost is due upfront to commence work, with the remaining balance payable upon project completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">4. Intellectual Property</h2>
            <p>
              All original designs, code, and content created by Ujjwal Tech for your project will become your property only after full payment has been received. We retain the right to display completed work in our portfolio for promotional purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">5. Limitation of Liability</h2>
            <p>
              Ujjwal Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">6. Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, please contact us at: ujjwalbytes@gmail.com or +91 77700 74667.
            </p>
          </section>
        </div>

        <Link 
          href="/" 
          className="mt-12 inline-flex items-center gap-2 bg-[#ff4500] text-white px-8 py-[15px] rounded-[30px] font-semibold text-[14px] shadow-[0_10px_24px_rgba(255,69,0,0.25)] hover:-translate-y-0.5 transition-all"
        >
          Back to Home
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default TermsAndConditionsPage;
