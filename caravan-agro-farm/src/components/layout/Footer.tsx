import Link from "next/link";
import { Phone, MapPin, Leaf, Globe, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-dark)] text-white pt-16 pb-8 border-t-[6px] border-[var(--color-brand-green)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[var(--color-brand-green)] rounded-full flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="font-bangla font-bold text-2xl">Caravan Agro Farm</span>
            </Link>
            <p className="text-gray-400 font-bangla text-sm leading-relaxed">
              Caravan Agro Farm একটি আধুনিক প্রযুক্তি নির্ভর সমন্বিত কৃষি উদ্যোগ। এখানে উদ্ভাবন, অগ্রগতি ও আধ্যাত্মিকতার সমন্বয়ে নিরাপদ খাদ্য উৎপাদন নিশ্চিত করা হয়।
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-brand-green)] transition-colors" aria-label="Facebook">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors" aria-label="YouTube">
                <Video size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bangla text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">গুরুত্বপূর্ণ লিংক</h3>
            <ul className="space-y-3 font-bangla text-gray-300">
              <li><Link href="/about" className="hover:text-[var(--color-brand-green-accent)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)]"></span>আমাদের সম্পর্কে</Link></li>
              <li><Link href="/products" className="hover:text-[var(--color-brand-green-accent)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)]"></span>প্রোডাক্টস</Link></li>
              <li><Link href="/gallery" className="hover:text-[var(--color-brand-green-accent)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)]"></span>গ্যালারি</Link></li>
              <li><Link href="/blog" className="hover:text-[var(--color-brand-green-accent)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)]"></span>ব্লগ</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--color-brand-green-accent)] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)]"></span>সাধারণ জিজ্ঞাসা</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bangla text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">আমাদের প্রোডাক্টস</h3>
            <ul className="space-y-3 font-bangla text-gray-300">
              <li>
                <Link href="/products/vermicompost" className="hover:text-[var(--color-brand-green-accent)] transition-colors flex items-center gap-2">
                  <Leaf size={16} className="text-[var(--color-brand-green)]" />
                  ক্যারাভেন ভার্মিকম্পোস্ট
                </Link>
              </li>
              <li className="text-gray-500 italic text-sm mt-4">আরও প্রোডাক্টস শীঘ্রই আসছে...</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bangla text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2 inline-block">যোগাযোগ</h3>
            <ul className="space-y-4 font-bangla text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[var(--color-brand-green)] shrink-0 mt-1" />
                <span>আমাদের খামার ঠিকানা এখানে হবে (Place holder)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[var(--color-brand-green)] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:01744715206" className="hover:text-white transition-colors">01744-715206</a>
                  <a href="tel:01788210335" className="hover:text-white transition-colors">01788-210335</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center font-bangla text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Caravan Agro Farm. সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
