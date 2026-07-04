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
        <div className="text-center mb-16">
          <h2 className="font-bangla font-bold text-4xl text-white tracking-wide">
            কেন Caravan Agro Farm বেছে নিবেন?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300"
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
              
              <p className="font-bangla text-gray-500 text-sm leading-relaxed flex-grow">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
