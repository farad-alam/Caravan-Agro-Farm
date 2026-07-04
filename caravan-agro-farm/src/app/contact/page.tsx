import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Mail, Clock, Globe, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description: "Caravan Agro Farm এর সাথে যোগাযোগ করুন। অর্ডার, পরামর্শ বা যেকোনো তথ্যের জন্য আমাদের কল করুন বা হোয়াটসঅ্যাপ করুন।",
};

export default function ContactPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Caravan Agro Farm",
    "image": "https://caravanagrofarm.com/images/og-image.jpg",
    "telephone": "+8801744715206",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bogura",
      "addressRegion": "Rajshahi",
      "addressCountry": "BD"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="bg-[var(--color-brand-offwhite)] min-h-screen pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      
      {/* Page Header */}
      <div className="bg-[var(--color-brand-dark)] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-bangla font-bold text-4xl md:text-5xl text-white mb-4">যোগাযোগ করুন</h1>
          <p className="font-bangla text-xl text-gray-300 max-w-2xl mx-auto">
            অর্ডার, পরামর্শ বা যেকোনো তথ্যের জন্য আমাদের সাথে সরাসরি যোগাযোগ করুন।
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information Cards */}
          <div className="space-y-6">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6 hover:border-[var(--color-brand-green)] transition-colors">
              <div className="bg-[var(--color-brand-beige)] p-4 rounded-xl shrink-0">
                <Phone className="text-[var(--color-brand-green)]" size={32} />
              </div>
              <div>
                <h2 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-2">কল করুন</h2>
                <p className="font-bangla text-gray-600 mb-4">যেকোনো সময় আমাদের সাথে সরাসরি কথা বলুন</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:01744715206" className="font-bangla font-semibold text-xl text-[var(--color-brand-green)] hover:underline">01744-715206</a>
                  <a href="tel:01788210335" className="font-bangla font-semibold text-xl text-[var(--color-brand-green)] hover:underline">01788-210335</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6 hover:border-[#25D366] transition-colors">
              <div className="bg-[#25D366]/10 p-4 rounded-xl shrink-0">
                <MessageCircle className="text-[#25D366]" size={32} />
              </div>
              <div>
                <h2 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-2">হোয়াটসঅ্যাপ</h2>
                <p className="font-bangla text-gray-600 mb-4">মেসেজ দিয়ে আপনার অর্ডার নিশ্চিত করুন</p>
                <a 
                  href="https://wa.me/8801744715206" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg font-bangla font-medium hover:bg-[#20b858] transition-colors"
                >
                  মেসেজ দিন
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6 hover:border-[var(--color-brand-green)] transition-colors">
              <div className="bg-[var(--color-brand-beige)] p-4 rounded-xl shrink-0">
                <Clock className="text-[var(--color-brand-green)]" size={32} />
              </div>
              <div>
                <h2 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-2">অফিস সময়</h2>
                <p className="font-bangla text-gray-600 mb-1"><strong>শনিবার - বৃহস্পতিবার:</strong> সকাল ৯:০০ - সন্ধ্যা ৬:০০</p>
                <p className="font-bangla text-red-500 text-sm">শুক্রবার বন্ধ</p>
              </div>
            </div>

          </div>

          {/* Map and Address */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col">
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-[var(--color-brand-beige)] p-4 rounded-xl shrink-0">
                  <MapPin className="text-[var(--color-brand-green)]" size={32} />
                </div>
                <div>
                  <h2 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-2">আমাদের খামার</h2>
                  <p className="font-bangla text-gray-600 leading-relaxed">
                    কারাভান এগ্রো ফার্ম,<br />
                    (এখানে আপনার খামারের পূর্ণাঙ্গ ঠিকানা বসবে),<br />
                    বাংলাদেশ।
                  </p>
                </div>
              </div>

              {/* Placeholder Map */}
              <div className="w-full flex-grow min-h-[300px] bg-gray-200 rounded-xl overflow-hidden relative border border-gray-200">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 font-bangla p-6 text-center">
                  <MapPin size={48} className="mb-4 opacity-50" />
                  <p className="text-lg">Google Map Embed (Placeholder)</p>
                  <p className="text-sm mt-2">লঞ্চের আগে এখানে খামারের আসল গুগল ম্যাপ লিংক যুক্ত করা হবে।</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-6">সোশ্যাল মিডিয়ায় আমরা</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-100 hover:scale-110 transition-transform">
              <Globe size={28} />
            </a>
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-600 shadow-sm border border-gray-100 hover:scale-110 transition-transform">
              <Video size={28} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
