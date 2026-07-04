import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Leaf, Box, Truck, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ক্যারাভেন ভার্মিকম্পোস্ট",
  description: "আপনার ফসলের জন্য ১০০% প্রাকৃতিক এবং নিরাপদ সার। এটি মাটির উর্বরতা বৃদ্ধি করে, পানির ধারণক্ষমতা বাড়ায় এবং ফসলের গঠন উন্নত করে।",
};

export default function VermicompostPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Caravan Vermicompost",
    "image": "https://images.unsplash.com/photo-1592982537447-6f296d05f32b?q=80&w=2070&auto=format&fit=crop",
    "description": "১০০% প্রাকৃতিক এবং নিরাপদ ভার্মিকম্পোস্ট সার। মাটির উর্বরতা বৃদ্ধি করে এবং ফলন বাড়ায়।",
    "brand": {
      "@type": "Brand",
      "name": "Caravan Agro Farm"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "124"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BDT",
      "availability": "https://schema.org/InStock",
      "url": "https://caravanagrofarm.com/products/vermicompost"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "এই সার কি সব গাছে দেওয়া যাবে?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "হ্যাঁ, এটি সবজি, ফুল, ফল, এবং ছাদ বাগানের যেকোনো গাছের জন্য সম্পূর্ণ উপযোগী।"
        }
      },
      {
        "@type": "Question",
        "name": "কতদিন পরপর দিতে হবে?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "গাছের বয়স ও ধরন অনুযায়ী ১৫-৩০ দিন পরপর টবে বা মাটিতে প্রয়োগ করা ভালো।"
        }
      }
    ]
  };

  const features = [
    "মাটির উর্বরতা ও গুণগত মান বৃদ্ধি করে",
    "রাসায়নিক সারের ব্যবহার কমায়",
    "ফলন বৃদ্ধি ও ফসলের গুণগত মান উন্নত করে",
    "মাটির পানি ধারণ ক্ষমতা বৃদ্ধি করে",
    "শিকড়ের দ্রুত বৃদ্ধিতে সহায়তা করে",
    "পরিবেশের ভারসাম্য রক্ষা করে"
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <div className="bg-white py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative border border-gray-100 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1592982537447-6f296d05f32b?q=80&w=2070&auto=format&fit=crop"
                  alt="Caravan Vermicompost"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-beige)] text-[var(--color-brand-green)] font-bangla text-sm mb-6 w-max border border-[var(--color-brand-green)]/20">
                <Leaf size={14} />
                <span>১০০% প্রাকৃতিক</span>
              </div>
              
              <h1 className="font-bangla font-bold text-4xl md:text-5xl text-[var(--color-brand-dark)] mb-4">
                ক্যারাভেন ভার্মিকম্পোস্ট
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex text-[#e6b820]">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-bangla text-gray-500">(১২৪+ রিভিউ)</span>
              </div>

              <p className="font-bangla text-lg text-gray-600 mb-8 leading-relaxed">
                উন্নত প্রজাতির কেঁচো ও নির্বাচিত জৈব উপাদানের মিশ্রণে তৈরি আমাদের এই ভার্মিকম্পোস্ট। এটি শুধু একটি সার নয়, আপনার ফসলি জমির মাটির প্রাণ ফেরানোর একটি প্রাকৃতিক উপায়।
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href="tel:01744715206"
                  className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-accent)] text-white px-6 py-4 rounded-xl font-bangla font-semibold text-lg transition-colors shadow-sm"
                >
                  <PhoneCall size={20} />
                  কল করে অর্ডার করুন
                </a>
                <a 
                  href="https://wa.me/8801744715206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-4 rounded-xl font-bangla font-semibold text-lg transition-colors shadow-sm"
                >
                  <MessageCircle size={20} />
                  হোয়াটসঅ্যাপ
                </a>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="text-[var(--color-brand-green)] shrink-0 mt-0.5" size={18} />
                    <span className="font-bangla text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-4 flex items-center gap-2">
                <Leaf className="text-[var(--color-brand-green)]" />
                কীভাবে ব্যবহার করবেন?
              </h2>
              <div className="prose font-bangla text-gray-600 prose-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>টবের ক্ষেত্রে:</strong> ছোট টবে ১০০-২০০ গ্রাম এবং বড় টবে ২৫০-৫০০ গ্রাম প্রয়োগ করুন।</li>
                  <li><strong>মাঠের ফসলে:</strong> প্রতি শতাংশ জমিতে ১৫-২০ কেজি সার প্রয়োগ করতে পারেন।</li>
                  <li><strong>প্রয়োগের নিয়ম:</strong> গাছের গোড়া থেকে একটু দূরে মাটির সাথে মিশিয়ে দিন। প্রয়োগের পর হালকা সেচ দেওয়া ভালো।</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-4 flex items-center gap-2">
                <Box className="text-[var(--color-brand-green)]" />
                প্যাকেজিং ও সংরক্ষণ
              </h2>
              <div className="prose font-bangla text-gray-600 prose-lg">
                <p>
                  আমাদের ভার্মিকম্পোস্ট টেকসই পলি ব্যাগে প্যাকেজিং করা হয় যা সারের আর্দ্রতা বজায় রাখে।
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>শুকনো ও ঠান্ডা স্থানে সংরক্ষণ করুন।</li>
                  <li>সরাসরি সূর্যের আলো থেকে দূরে রাখুন।</li>
                  <li>প্যাকেট খোলার পর মুখ ভালোভাবে বন্ধ করে রাখুন।</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-4 flex items-center gap-2">
                <HelpCircle className="text-[var(--color-brand-green)]" />
                সাধারণ জিজ্ঞাসা
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="font-bangla font-bold text-lg text-[var(--color-brand-dark)] mb-2">{faq.name}</h3>
                    <p className="font-bangla text-gray-600">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
              <h3 className="font-bangla font-bold text-xl text-[var(--color-brand-dark)] mb-6 border-b pb-4">
                ডেলিভারি তথ্য
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-[var(--color-brand-beige)] p-3 rounded-full h-fit">
                    <Truck className="text-[var(--color-brand-green)]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bangla font-bold text-gray-800 mb-1">সারাদেশে ডেলিভারি</h4>
                    <p className="font-bangla text-gray-500 text-sm">যেকোনো জেলায় কুরিয়ারের মাধ্যমে হোম ডেলিভারি।</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-[var(--color-brand-beige)] p-3 rounded-full h-fit">
                    <CheckCircle className="text-[var(--color-brand-green)]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bangla font-bold text-gray-800 mb-1">গুণগত মানের নিশ্চয়তা</h4>
                    <p className="font-bangla text-gray-500 text-sm">সঠিক আর্দ্রতা ও শতভাগ খাঁটি সারের প্রতিশ্রুতি।</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="font-bangla text-center text-sm text-gray-500 mb-4">
                  যেকোনো প্রয়োজনে আমাদের কল করুন
                </p>
                <a 
                  href="tel:01744715206"
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand-dark)] text-white px-4 py-3 rounded-xl font-bangla font-medium hover:bg-black transition-colors"
                >
                  <PhoneCall size={18} />
                  01744-715206
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
