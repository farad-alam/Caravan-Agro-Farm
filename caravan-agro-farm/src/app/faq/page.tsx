import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "সাধারণ জিজ্ঞাসা (FAQ)",
  description: "Caravan Agro Farm এবং আমাদের প্রোডাক্ট সম্পর্কিত আপনাদের সকল সাধারণ প্রশ্নের উত্তর।",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "ভার্মিকম্পোস্ট কী?",
      a: "ভার্মিকম্পোস্ট হলো এক প্রকার জৈব সার যা কেঁচোর সাহায্যে জৈব পদার্থ (যেমন: গোবর, লতাপাতা, তরকারির খোসা ইত্যাদি) পচিয়ে তৈরি করা হয়। এটি মাটির উর্বরতা বৃদ্ধিতে অত্যন্ত কার্যকর।"
    },
    {
      q: "রাসায়নিক সারের চেয়ে এটি কেন ভালো?",
      a: "রাসায়নিক সার দীর্ঘমেয়াদে মাটির ক্ষতি করে এবং মাটির অম্লত্ব বাড়ায়। অন্যদিকে, ভার্মিকম্পোস্ট মাটির গঠন উন্নত করে, পানি ধারণক্ষমতা বাড়ায়, উপকারি অনুজীবের সংখ্যা বাড়ায় এবং ফসলের প্রাকৃতিক গুণগত মান বজায় রাখে।"
    },
    {
      q: "টবের গাছে কি এই সার ব্যবহার করা যাবে?",
      a: "হ্যাঁ, টবের ফুল, ফল বা সবজি গাছের জন্য এটি একটি আদর্শ সার। এটি গাছের শিকড় শক্তিশালী করে এবং দ্রুত বৃদ্ধিতে সাহায্য করে। সাধারণ মাটিতে ২০-৩০% ভার্মিকম্পোস্ট মিশিয়ে টবের মাটি প্রস্তুত করা যায়।"
    },
    {
      q: "ডেলিভারি প্রক্রিয়া কেমন?",
      a: "আমরা নির্ভরযোগ্য কুরিয়ারের মাধ্যমে সারা বাংলাদেশে হোম ডেলিভারি দিয়ে থাকি। অর্ডারের পরিমাণ এবং আপনার লোকেশন অনুযায়ী ডেলিভারি চার্জ নির্ধারিত হয়।"
    },
    {
      q: "কতদিন পরপর এই সার গাছে দিতে হয়?",
      a: "গাছের বয়স ও ধরন অনুযায়ী ১৫-৩০ দিন পরপর টবে বা মাটিতে প্রয়োগ করা ভালো। তবে এটি যেহেতু সম্পূর্ণ প্রাকৃতিক, তাই সামান্য বেশি হলেও গাছের কোনো ক্ষতি হয় না।"
    },
    {
      q: "আপনাদের সার কি ল্যাব টেস্ট করা?",
      a: "হ্যাঁ, আমাদের উৎপাদিত সার নিয়মিত ল্যাবে পরীক্ষা করা হয় যাতে পুষ্টির সঠিক মান (নাইট্রোজেন, ফসফরাস, পটাশিয়াম ইত্যাদি) নিশ্চিত করা যায়।"
    },
    {
      q: "অর্ডার করার নিয়ম কী?",
      a: "আপনি সরাসরি আমাদের নাম্বারে (01744-715206) কল করে অথবা হোয়াটসঅ্যাপে মেসেজ দিয়ে অর্ডার করতে পারেন।"
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-[var(--color-brand-offwhite)] min-h-screen pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* Page Header */}
      <div className="bg-[var(--color-brand-dark)] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-bangla font-bold text-4xl md:text-5xl text-white mb-4">সাধারণ জিজ্ঞাসা</h1>
          <p className="font-bangla text-xl text-gray-300 max-w-2xl mx-auto">
            আপনাদের মনে থাকা কিছু সাধারণ প্রশ্নের উত্তর
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <HelpCircle className="text-[var(--color-brand-green)] shrink-0 mt-1" size={24} />
                <div>
                  <h2 className="font-bangla font-bold text-xl text-[var(--color-brand-dark)] mb-3">{faq.q}</h2>
                  <p className="font-bangla text-gray-600 leading-relaxed text-lg">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-white p-8 rounded-2xl border border-gray-200">
          <h3 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-4">আরও কোনো প্রশ্ন আছে?</h3>
          <p className="font-bangla text-gray-600 mb-6">আমাদের সাথে সরাসরি যোগাযোগ করুন, আমরা সাহায্য করতে প্রস্তুত।</p>
          <a 
            href="https://wa.me/8801744715206"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bangla font-semibold transition-transform hover:-translate-y-1"
          >
            হোয়াটসঅ্যাপে মেসেজ দিন
          </a>
        </div>
      </div>
    </div>
  );
}
