import { Lightbulb, ShieldCheck, Beaker, CheckSquare, UsersRound, Leaf, ChevronLeft, ChevronRight } from "lucide-react";

export default function WhyCaravan() {
  const reasons = [
    {
      icon: Lightbulb,
      title: "আধুনিক প্রযুক্তি",
      description: "সর্বশেষ কৃষি প্রযুক্তির সাহায্যে মানসম্মত সার উৎপাদন।"
    },
    {
      icon: ShieldCheck,
      title: "নিরাপদ উৎপাদন",
      description: "১০০% নিরাপদ এবং প্রাকৃতিক উপাদানে তৈরি।"
    },
    {
      icon: Beaker,
      title: "গবেষণাভিত্তিক",
      description: "ক্রমাগত গবেষণার মাধ্যমে পণ্যের মান উন্নয়ন।"
    },
    {
      icon: CheckSquare,
      title: "মান নিয়ন্ত্রণ",
      description: "প্রতিটি ধাপে কঠোরভাবে মান যাচাই করা হয়।"
    },
    {
      icon: UsersRound,
      title: "অভিজ্ঞ টিম",
      description: "কৃষি বিশেষজ্ঞদের তত্ত্বাবধানে পরিচালিত।"
    }
  ];

  return (
    <section className="py-24 bg-[#234524] relative overflow-hidden">
      {/* Decorative Background Leaves */}
      <div className="absolute top-20 -left-20 text-[#2a522b] opacity-50 transform -rotate-45">
        <Leaf size={400} strokeWidth={0.5} />
      </div>
      <div className="absolute bottom-10 -right-20 text-[#2a522b] opacity-50 transform rotate-45">
        <Leaf size={400} strokeWidth={0.5} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-bangla font-bold text-4xl text-white mb-8 tracking-wide">
            কেন Caravan Agro Farm বেছে নিবেন?
          </h2>
          
          {/* Decorative Tabs Line (Visual Match for the Image) */}
          <div className="flex justify-center items-center gap-8 text-white/70 font-bangla text-sm md:text-base border-b border-white/20 pb-4 max-w-2xl mx-auto">
            <span className="text-white font-semibold border-b-2 border-white pb-4 -mb-[18px]">প্রযুক্তি</span>
            <span className="hover:text-white cursor-pointer transition-colors">নিরাপত্তা</span>
            <span className="hover:text-white cursor-pointer transition-colors">গবেষণা</span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 md:p-8 rounded-3xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Circular Icon Container (Mimicking the image circles) */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-gray-200 p-2 mb-6 group">
                <div className="w-full h-full bg-[#f4efdd] rounded-full flex items-center justify-center group-hover:bg-[#a0c95a] transition-colors duration-500">
                  <reason.icon size={48} className="text-[#234524] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="font-bangla font-bold text-xl uppercase tracking-wider text-[#1E3F20] mb-4">
                {reason.title}
              </h3>
              
              <p className="font-bangla text-gray-500 text-sm md:text-base leading-relaxed flex-grow mb-8">
                {reason.description}
              </p>

              {/* Bottom Row (Mimicking Price & Button) */}
              <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                <span className="font-bangla font-bold text-lg text-[#1E3F20]">
                  ১০০%
                </span>
                <button className="bg-[#1E3F20] text-white px-6 py-2 rounded-lg font-bangla text-sm hover:bg-[#2a522b] transition-colors">
                  বিস্তারিত
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Pagination (from the image) */}
        <div className="flex justify-center items-center gap-4 mt-16 text-white/50">
          <button className="p-2 rounded-full border border-white/30 hover:bg-white/10 hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-3 font-medium text-sm">
            <span className="text-white">১</span>
            <span className="hover:text-white cursor-pointer">২</span>
            <span className="hover:text-white cursor-pointer">৩</span>
            <span className="hover:text-white cursor-pointer">...</span>
            <span className="hover:text-white cursor-pointer">৫</span>
          </div>
          <button className="p-2 rounded-full border border-white/30 hover:bg-white/10 hover:text-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
