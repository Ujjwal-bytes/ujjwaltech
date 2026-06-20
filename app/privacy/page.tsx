"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <section className="w-full bg-white min-h-screen pt-32 pb-24 px-6 md:px-12 select-none">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[14px] text-zinc-500 mb-6 font-medium">
          <Link href="/" className="hover:text-[#ff4500] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff4500]">Privacy Policy</span>
        </div>

        <h1 className="text-4xl md:text-[48px] font-extrabold text-[#111111] tracking-[-1.5px] mb-8">
          Privacy Policy
        </h1>

        <div className="text-[15px] text-zinc-600 leading-[1.8] space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">1. Introduction</h2>
            <p>
              Ujjwal Tech respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us through our contact form, including your name, email address, phone number, and any message content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">3. How We Use Your Information</h2>
            <p>
              The information we collect is used solely for the purpose of responding to your inquiries, providing our services, and communicating with you about your project. We do not sell, share, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">4. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can set your browser to refuse all or some cookies if you prefer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">6. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal information that we hold. To make such a request, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111111] mb-4">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at: ujjwalbytes@gmail.com or +91 77700 74667.
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

export default PrivacyPolicyPage;
