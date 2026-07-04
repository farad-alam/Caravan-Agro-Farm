import { Phone, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-[var(--color-brand-green)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-bangla font-bold text-4xl md:text-5xl text-white mb-6">
          অর্ডার করতে বা যেকোনো তথ্যের জন্য
        </h2>
        <p className="font-bangla text-xl text-green-100 mb-10 max-w-2xl mx-auto">
          আমাদের কৃষি বিশেষজ্ঞরা আপনার যেকোনো প্রশ্নের উত্তর দিতে প্রস্তুত। সরাসরি কল করুন অথবা হোয়াটসঅ্যাপে মেসেজ পাঠান।
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a 
            href="tel:01744715206"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[var(--color-brand-green)] hover:bg-gray-100 px-8 py-4 rounded-xl font-bangla font-bold text-xl transition-transform hover:-translate-y-1 shadow-lg"
          >
            <Phone size={24} />
            01744-715206
          </a>
          
          <a 
            href="https://wa.me/8801744715206"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-4 rounded-xl font-bangla font-bold text-xl transition-transform hover:-translate-y-1 shadow-lg"
          >
            <MessageCircle size={24} />
            হোয়াটসঅ্যাপ
          </a>
        </div>
      </div>
    </section>
  );
}
