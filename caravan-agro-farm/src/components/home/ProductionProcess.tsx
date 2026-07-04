export default function ProductionProcess() {
  const steps = [
    {
      num: "01",
      title: "কাঁচামাল সংগ্রহ",
      description: "খামার থেকে শতভাগ প্রাকৃতিক ও সতেজ গোবর এবং অন্যান্য জৈব উপাদান সংগ্রহ করা হয়।"
    },
    {
      num: "02",
      title: "ভার্মি প্রক্রিয়া",
      description: "বিশেষ প্রজাতির কেঁচোর সাহায্যে জৈব উপাদানগুলোকে নির্দিষ্ট আর্দ্রতা ও তাপমাত্রায় প্রক্রিয়াজাত করা হয়।"
    },
    {
      num: "03",
      title: "গুণগত মান পরীক্ষা",
      description: "প্রস্তুতকৃত সার ল্যাবে পরীক্ষা করে এর পুষ্টিমান এবং সঠিক আর্দ্রতা নিশ্চিত করা হয়।"
    },
    {
      num: "04",
      title: "প্যাকেজিং",
      description: "সার দীর্ঘকাল সতেজ ও কার্যকর রাখতে পরিবেশবান্ধব ও টেকসই উপায়ে প্যাকেজিং করা হয়।"
    },
    {
      num: "05",
      title: "ডেলিভারি",
      description: "আপনার দোরগোড়ায় দ্রুত এবং নিরাপদে সার পৌঁছে দেওয়া হয়।"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-brand-dark)] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-bangla font-bold text-4xl mb-4 text-white">
            আমাদের <span className="text-[var(--color-brand-green)]">উৎপাদন প্রক্রিয়া</span>
          </h2>
          <p className="font-bangla text-xl text-gray-400">
            প্রতিটি ধাপে সর্বোচ্চ সতর্কতা ও আধুনিক প্রযুক্তির ব্যবহার
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <h3 className="font-bangla font-bold text-2xl text-[var(--color-brand-green-accent)] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-bangla text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Node */}
                <div className="absolute left-0 md:left-1/2 w-9 h-9 rounded-full bg-[var(--color-brand-green)] border-4 border-[var(--color-brand-dark)] md:-translate-x-1/2 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_15px_rgba(63,163,94,0.5)] z-10">
                  {step.num}
                </div>
                
                {/* Empty Space for layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
