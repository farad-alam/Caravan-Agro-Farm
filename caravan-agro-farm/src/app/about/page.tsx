import Image from "next/image";
import { Target, Eye, Heart, ShieldCheck, Cpu, Leaf } from "lucide-react";

export const metadata = {
  title: "আমাদের সম্পর্কে",
  description: "Caravan Agro Farm এর লক্ষ্য, উদ্দেশ্য এবং আমাদের আধুনিক কৃষি প্রযুক্তি সম্পর্কে বিস্তারিত জানুন।",
};

export default function AboutPage() {
  const values = [
    { icon: Target, title: "আমাদের লক্ষ্য", desc: "দেশের প্রতিটি প্রান্তে নিরাপদ ও রাসায়নিক মুক্ত জৈব সার পৌঁছে দেওয়া এবং মাটির উর্বরতা বৃদ্ধি করা।" },
    { icon: Eye, title: "আমাদের ভিশন", desc: "বাংলাদেশের কৃষিতে আধুনিক প্রযুক্তি এবং প্রাকৃতিক উপাদানের সমন্বয় ঘটিয়ে টেকসই কৃষি ব্যবস্থা গড়ে তোলা।" },
    { icon: Heart, title: "মূল্যবোধ", desc: "সততা, স্বচ্ছতা এবং পরিবেশের প্রতি দায়বদ্ধতা আমাদের কাজের মূল চালিকাশক্তি।" },
  ];

  const features = [
    { icon: Cpu, title: "আধুনিক প্রযুক্তি", desc: "আমরা সর্বশেষ প্রযুক্তি ব্যবহার করে ভার্মিকম্পোস্ট উৎপাদন করি যা সারের গুণগত মান নিশ্চিত করে।" },
    { icon: ShieldCheck, title: "গুণগত মান নিয়ন্ত্রণ", desc: "ল্যাব টেস্টের মাধ্যমে প্রতিটি ব্যাচের গুণগত মান পরীক্ষা করা হয়।" },
    { icon: Leaf, title: "পরিবেশবান্ধব", desc: "আমাদের উৎপাদন প্রক্রিয়ার প্রতিটি ধাপ শতভাগ পরিবেশবান্ধব এবং নিরাপদ।" },
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] min-h-screen pb-20">
      
      {/* Page Header */}
      <div className="bg-[var(--color-brand-dark)] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-bangla font-bold text-4xl md:text-5xl text-white mb-4">আমাদের সম্পর্কে</h1>
          <p className="font-bangla text-xl text-gray-300 max-w-2xl mx-auto">
            প্রকৃতির আশীর্বাদকে আধুনিক প্রযুক্তির মাধ্যমে আপনার ফসলের জন্য ব্যবহারযোগ্য করে তুলছি আমরা।
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="w-full lg:w-1/2">
            <h2 className="font-bangla font-bold text-3xl text-[var(--color-brand-dark)] mb-6">
              আমাদের <span className="text-[var(--color-brand-green)]">গল্প</span>
            </h2>
            <div className="space-y-4 font-bangla text-lg text-gray-600 leading-relaxed">
              <p>
                Caravan Agro Farm এর যাত্রা শুরু হয়েছিল একটি সহজ কিন্তু শক্তিশালী চিন্তা থেকে - কীভাবে আমাদের কৃষিকে রাসায়নিক সারের ক্ষতিকর প্রভাব থেকে রক্ষা করা যায়। আমরা দেখেছি কীভাবে অতিরিক্ত রাসায়নিক সার ব্যবহারের ফলে আমাদের ফসলি জমির মাটি তার স্বাভাবিক প্রাণশক্তি হারাচ্ছে।
              </p>
              <p>
                সেই চিন্তা থেকেই আমরা ভার্মিকম্পোস্ট বা কেঁচো সার উৎপাদনের উদ্যোগ নিই। আমাদের খামারে সম্পূর্ণ প্রাকৃতিক উপায়ে, আধুনিক প্রযুক্তির সাহায্যে এবং নিবিড় পরিচর্যায় উৎকৃষ্ট মানের জৈব সার তৈরি করা হয়।
              </p>
              <p>
                আমরা শুধু সার বিক্রি করি না, আমরা কৃষকের সাথে কাঁধে কাঁধ মিলিয়ে কাজ করি। আমাদের বিশ্বাস, মাটি সুস্থ থাকলে ফসল ভালো হবে, আর নিরাপদ খাদ্যে নিশ্চিত হবে সুস্থ সমাজ।
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="https://images.unsplash.com/photo-1595841696650-6f41fc86a869?q=80&w=2070&auto=format&fit=crop"
                alt="Caravan Agro Farm Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision/Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[var(--color-brand-beige)] text-[var(--color-brand-green)] rounded-xl flex items-center justify-center mb-6">
                <val.icon size={28} />
              </div>
              <h3 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-3">{val.title}</h3>
              <p className="font-bangla text-gray-600 text-lg">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Why We Are Different */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-50">
          <div className="text-center mb-12">
            <h2 className="font-bangla font-bold text-3xl text-[var(--color-brand-dark)] mb-4">
              আমরা কেন <span className="text-[var(--color-brand-green)]">আলাদা?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {features.map((feat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <feat.icon size={48} className="text-[var(--color-brand-green)] mb-4" strokeWidth={1.5} />
                <h4 className="font-bangla font-bold text-xl text-[var(--color-brand-dark)] mb-2">{feat.title}</h4>
                <p className="font-bangla text-gray-600">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
