import { Leaf, Droplets, ShieldPlus, ArrowUpRight, TestTube2, Sprout } from "lucide-react";

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
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-brand-beige)] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-brand-green)] rounded-full blur-3xl opacity-10 translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bangla font-bold text-4xl text-[var(--color-brand-dark)] mb-4">
            ভার্মিকম্পোস্ট এর <span className="text-[var(--color-brand-green)]">উপকারিতা</span>
          </h2>
          <p className="font-bangla text-xl text-[var(--color-brand-muted)]">
            প্রকৃতির আশীর্বাদ, আপনার ফসলের জন্য সেরা উপহার।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[var(--color-brand-beige)] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-green)] group-hover:rotate-12 transition-all duration-300">
                <benefit.icon size={28} className="text-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-3">
                {benefit.title}
              </h3>
              <p className="font-bangla text-gray-600 text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
