import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[var(--color-brand-dark)]">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#181e24] via-[#181e24]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bangla text-sm">
            <Leaf size={16} className="text-[var(--color-brand-green-accent)]" />
            <span>১০০% প্রাকৃতিক ও পরিবেশবান্ধব</span>
          </div>

          {/* Headline */}
          <h1 className="font-bangla text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            নিরাপদ কৃষির জন্য <span className="text-[var(--color-brand-green-accent)]">আধুনিক প্রযুক্তি</span> নির্ভর সমন্বিত কৃষি
          </h1>
          
          {/* Subheadline */}
          <p className="font-bangla text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
            Caravan Agro Farm নিরাপদ, প্রাকৃতিক এবং মানসম্মত ভার্মিকম্পোস্ট উৎপাদনে প্রতিশ্রুতিবদ্ধ। মাটির প্রাণ ফেরাতে আমরা আছি আপনার পাশে।
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="tel:01744715206"
              className="inline-flex justify-center items-center gap-2 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-accent)] text-white px-8 py-4 rounded-xl font-bangla font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-green-900/20"
            >
              এখনই অর্ডার করুন
              <ArrowRight size={20} />
            </a>
            <Link 
              href="/about"
              className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bangla font-medium text-lg transition-all hover:scale-105"
            >
              আমাদের সম্পর্কে জানুন
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}
