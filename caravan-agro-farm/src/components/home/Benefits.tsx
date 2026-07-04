import { Leaf, Droplets, ShieldPlus, ArrowUpRight, TestTube2, Sprout, ArrowRightCircle } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "মাটির উর্বরতা বৃদ্ধি",
      description: "মাটিতে প্রয়োজনীয় পুষ্টি উপাদান যোগ করে উর্বরতা বাড়ায়।",
      icon: Sprout,
    },
    {
      title: "শিকড় শক্তিশালী করে",
      description: "গাছের শিকড় বৃদ্ধিতে সহায়তা করে যা গাছকে মজবুত করে।",
      icon: Leaf,
    },
    {
      title: "ফলন বৃদ্ধি",
      description: "ফসলের উৎপাদন বৃদ্ধি করে এবং গুণগত মান উন্নত করে।",
      icon: ArrowUpRight,
    },
    {
      title: "পানির ধারণক্ষমতা বাড়ায়",
      description: "মাটিতে পানি ধরে রাখার ক্ষমতা বাড়িয়ে সেচের প্রয়োজনীয়তা কমায়।",
      icon: Droplets,
    },
    {
      title: "মাটির গঠন উন্নত করে",
      description: "মাটির গঠন ঝুরঝুরে করে, ফলে বাতাস চলাচল সহজ হয়।",
      icon: TestTube2,
    },
    {
      title: "রাসায়নিক সারের প্রয়োজন কমায়",
      description: "দীর্ঘমেয়াদে রাসায়নিক সারের ওপর নির্ভরশীলতা হ্রাস করে।",
      icon: ShieldPlus,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f4efdd] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3a5933] rounded-full blur-3xl opacity-10 translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-bangla font-bold text-4xl text-[var(--color-brand-dark)] mb-4">
            ভার্মিকম্পোস্ট এর <span className="text-[#3a5933]">উপকারিতা</span>
          </h2>
          <p className="font-bangla text-xl text-gray-500">
            প্রকৃতির আশীর্বাদ, আপনার ফসলের জন্য সেরা উপহার।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8 mt-12">
          {benefits.map((benefit, idx) => {
            const isDark = idx % 3 === 1; // Middle column in 3-col layout is dark
            
            return (
              <div 
                key={idx}
                className={`relative px-8 pb-10 pt-14 rounded-3xl border-2 border-dashed transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${
                  isDark 
                    ? 'bg-[#3a5933] border-[#3a5933]' 
                    : 'bg-[#f4efdd] border-[#d1c9b1]'
                }`}
              >
                {/* Icon Circle (Top Offset) */}
                <div className={`absolute -top-8 left-8 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                  isDark 
                    ? 'bg-[#a0c95a] text-[#3a5933]' 
                    : 'bg-[#3f5a34] text-white'
                }`}>
                  <benefit.icon size={28} />
                </div>

                <h3 className={`font-bangla font-bold text-2xl mb-4 ${isDark ? 'text-white' : 'text-[#3a5035]'}`}>
                  {benefit.title}
                </h3>
                
                <p className={`font-bangla text-lg leading-relaxed mb-8 ${isDark ? 'text-[#e0e5de]' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>
                
                <div className="flex items-center gap-2 font-bangla font-semibold cursor-pointer group/link mt-auto w-max">
                  <ArrowRightCircle size={18} className={`${isDark ? 'text-white' : 'text-[#3f5a34]'} group-hover/link:translate-x-1 transition-transform`} />
                  <span className={`${isDark ? 'text-white' : 'text-[#3f5a34]'}`}>বিস্তারিত জানুন</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
