"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "ভার্মিকম্পোস্ট কী?",
      a: "ভার্মিকম্পোস্ট হলো এক প্রকার জৈব সার যা কেঁচোর সাহায্যে জৈব পদার্থ (যেমন: গোবর, লতাপাতা) পচিয়ে তৈরি করা হয়। এটি মাটির উর্বরতা বৃদ্ধিতে অত্যন্ত কার্যকর।"
    },
    {
      q: "রাসায়নিক সারের চেয়ে এটি কেন ভালো?",
      a: "রাসায়নিক সার দীর্ঘমেয়াদে মাটির ক্ষতি করে, কিন্তু ভার্মিকম্পোস্ট মাটির গঠন উন্নত করে, পানি ধারণক্ষমতা বাড়ায় এবং ফসলের প্রাকৃতিক গুণগত মান বজায় রাখে।"
    },
    {
      q: "টবের গাছে কি এই সার ব্যবহার করা যাবে?",
      a: "হ্যাঁ, টবের ফুল, ফল বা সবজি গাছের জন্য এটি একটি আদর্শ সার। এটি গাছের শিকড় শক্তিশালী করে এবং দ্রুত বৃদ্ধিতে সাহায্য করে।"
    },
    {
      q: "ডেলিভারি প্রক্রিয়া কেমন?",
      a: "আমরা কুরিয়ারের মাধ্যমে সারা বাংলাদেশে হোম ডেলিভারি দিয়ে থাকি। অর্ডারের পরিমাণ অনুযায়ী ডেলিভারি চার্জ নির্ধারিত হয়।"
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-offwhite)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-bangla font-bold text-4xl text-[var(--color-brand-dark)] mb-4">
            সাধারণ <span className="text-[var(--color-brand-green)]">জিজ্ঞাসা</span>
          </h2>
          <p className="font-bangla text-xl text-[var(--color-brand-muted)]">
            আপনাদের মনে থাকা কিছু সাধারণ প্রশ্নের উত্তর
          </p>
        </div>

        <div className="space-y-4 mb-10">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'border-[var(--color-brand-green)] shadow-md' : 'border-gray-200'}`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between font-bangla font-semibold text-lg text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className={openIndex === idx ? 'text-[var(--color-brand-green)]' : 'text-[var(--color-brand-dark)]'}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-[var(--color-brand-green)]' : 'text-gray-400'}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="font-bangla text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/faq"
            className="inline-flex items-center gap-2 font-bangla font-semibold text-[var(--color-brand-green)] hover:text-[var(--color-brand-green-accent)] transition-colors group"
          >
            আরও প্রশ্নোত্তর দেখুন 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
