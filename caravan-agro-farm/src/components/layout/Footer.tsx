import Link from "next/link";
import Image from "next/image";
import { Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f9f6ef] p-4 md:p-6 lg:p-8">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-4 md:gap-6">
        
        {/* Left Dark Box */}
        <div className="w-full lg:w-[70%] bg-[#344C35] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row justify-between gap-12 z-10">
            
            {/* Left Column (Desc & Contact) */}
            <div className="flex-1 md:max-w-md space-y-12">
              <div>
                <h3 className="font-bangla font-semibold text-[#CDE1A5] mb-4 uppercase tracking-wider text-sm">আমাদের সম্পর্কে</h3>
                <p className="font-bangla text-[#F9F5EC] text-[17px] leading-relaxed">
                  Caravan Agro Farm একটি আধুনিক প্রযুক্তি নির্ভর সমন্বিত কৃষি উদ্যোগ। এখানে উদ্ভাবন, অগ্রগতি ও আধ্যাত্মিকতার সমন্বয়ে নিরাপদ খাদ্য উৎপাদন নিশ্চিত করা হয়।
                </p>
              </div>

              <div>
                <h3 className="font-bangla font-semibold text-[#CDE1A5] mb-4 uppercase tracking-wider text-sm">যোগাযোগ</h3>
                <div className="font-bangla text-[#F9F5EC] space-y-2 text-[17px]">
                  <p>আমাদের খামার ঠিকানা এখানে হবে (Place holder)</p>
                  <p className="pt-2">
                    <a href="tel:01744715206" className="underline underline-offset-4 decoration-[#F9F5EC]/30 hover:text-[#CDE1A5] transition-colors">01744-715206</a>
                    <span className="mx-3">|</span>
                    <a href="tel:01788210335" className="underline underline-offset-4 decoration-[#F9F5EC]/30 hover:text-[#CDE1A5] transition-colors">01788-210335</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (Links & Socials) */}
            <div className="flex gap-8 md:gap-16">
              <div className="flex flex-col gap-5 font-bangla text-[#F9F5EC] text-[17px]">
                <Link href="/about" className="hover:text-[#CDE1A5] transition-colors">আমাদের সম্পর্কে</Link>
                <Link href="/products" className="hover:text-[#CDE1A5] transition-colors">প্রোডাক্টস</Link>
                <Link href="/products/vermicompost" className="hover:text-[#CDE1A5] transition-colors">ক্যারাভেন ভার্মিকম্পোস্ট</Link>
                <Link href="/gallery" className="hover:text-[#CDE1A5] transition-colors">গ্যালারি</Link>
                <Link href="/blog" className="hover:text-[#CDE1A5] transition-colors">ব্লগ</Link>
                <Link href="/faq" className="hover:text-[#CDE1A5] transition-colors">সাধারণ জিজ্ঞাসা</Link>
              </div>
              
              <div className="flex flex-col gap-4">
                <a href="#" className="w-10 h-10 bg-[#CDE1A5] rounded-full flex items-center justify-center text-[#344C35] hover:bg-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} className="fill-current" />
                </a>
                <a href="#" className="w-10 h-10 bg-[#CDE1A5] rounded-full flex items-center justify-center text-[#344C35] hover:bg-white transition-colors" aria-label="YouTube">
                  <Youtube size={20} className="fill-current" />
                </a>
              </div>
            </div>
          </div>

          {/* Huge Logo Text at bottom */}
          <div className="mt-20 z-10 w-full overflow-hidden flex flex-col">
            <h1 className="text-[15vw] lg:text-[9rem] xl:text-[10rem] font-serif font-bold text-[#405941] leading-none tracking-tight select-none">
              CARAVAN
            </h1>
            
            {/* Copyright Row */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center font-bangla text-[#F9F5EC]/60 text-sm border-t border-[#405941] pt-6">
              <p>&copy; {new Date().getFullYear()} Caravan Agro Farm. সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
          </div>
        </div>

        {/* Right Image Box */}
        <div className="w-full lg:w-[30%] min-h-[400px] lg:min-h-auto rounded-[32px] overflow-hidden relative">
          <Image 
            src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop"
            alt="Caravan Agro Farm Background"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

      </div>
    </footer>
  );
}
