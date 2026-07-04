import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1b3b27] text-[#f4efdd] pt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        {/* Top Huge Text */}
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-serif text-[#f4efdd] mb-8 drop-shadow-sm tracking-wide">
            Caravan Agro Farm
          </h2>
          <p className="text-[#f4efdd]/80 font-bangla text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Caravan Agro Farm একটি আধুনিক প্রযুক্তি নির্ভর সমন্বিত কৃষি উদ্যোগ। এখানে উদ্ভাবন, অগ্রগতি ও আধ্যাত্মিকতার সমন্বয়ে নিরাপদ খাদ্য উৎপাদন নিশ্চিত করা হয়।
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-4 text-center font-bangla text-lg md:text-xl text-[#f4efdd]/90 mb-32">
          <Link href="/about" className="hover:text-white hover:scale-105 transition-all duration-300">আমাদের সম্পর্কে</Link>
          <Link href="/products" className="hover:text-white hover:scale-105 transition-all duration-300">প্রোডাক্টস</Link>
          <Link href="/gallery" className="hover:text-white hover:scale-105 transition-all duration-300">গ্যালারি</Link>
          <Link href="/blog" className="hover:text-white hover:scale-105 transition-all duration-300">ব্লগ</Link>
          <Link href="/faq" className="hover:text-white hover:scale-105 transition-all duration-300">সাধারণ জিজ্ঞাসা</Link>
          <Link href="/products/vermicompost" className="hover:text-white hover:scale-105 transition-all duration-300">ভার্মিকম্পোস্ট</Link>
          
          <a href="#" className="hover:text-white hover:scale-105 transition-all duration-300">Facebook</a>
          <a href="#" className="hover:text-white hover:scale-105 transition-all duration-300">YouTube</a>
          <a href="tel:01744715206" className="hover:text-white hover:scale-105 transition-all duration-300">01744-715206</a>
          <a href="tel:01788210335" className="hover:text-white hover:scale-105 transition-all duration-300">01788-210335</a>
          <span className="col-span-2 lg:col-span-2 px-4 hover:text-white transition-all duration-300 text-sm md:text-lg flex items-center justify-center">
            আমাদের খামার ঠিকানা এখানে হবে (Place holder)
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-[#f4efdd]/60 font-bangla text-sm">
          <div className="flex items-center gap-2 mb-8 lg:mb-0">
            <span>Caravan Agro Farm</span>
            <span className="border border-[#f4efdd]/30 px-1.5 py-0.5 rounded text-[10px] font-sans">C</span>
          </div>
          
          <div className="flex items-center gap-4 italic font-serif text-xl md:text-2xl text-[#f4efdd]/90 mb-8 lg:mb-0">
            <Leaf size={16} className="opacity-60" />
            <span className="tracking-wide">প্রকৃতির আশীর্বাদ, আপনার ফসলের জন্য সেরা উপহার</span>
            <Leaf size={16} className="opacity-60" />
          </div>
          
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} সর্বস্বত্ব সংরক্ষিত</span>
            <span className="border border-[#f4efdd]/30 px-1.5 py-0.5 rounded text-[10px] font-sans">R</span>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Pattern (Checkerboard style) */}
      <div 
        className="h-4 w-full opacity-10" 
        style={{ 
          backgroundImage: `linear-gradient(45deg, #f4efdd 25%, transparent 25%, transparent 75%, #f4efdd 75%, #f4efdd), linear-gradient(45deg, #f4efdd 25%, transparent 25%, transparent 75%, #f4efdd 75%, #f4efdd)`, 
          backgroundSize: '16px 16px', 
          backgroundPosition: '0 0, 8px 8px' 
        }}
      ></div>
    </footer>
  );
}
