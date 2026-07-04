import { Lightbulb, ShieldCheck, Beaker, CheckSquare, UsersRound } from "lucide-react";

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
    <section className="py-24 bg-[var(--color-brand-offwhite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bangla font-bold text-4xl text-[var(--color-brand-dark)] mb-4">
            কেন <span className="text-[var(--color-brand-green)]">Caravan Agro Farm</span> বেছে নিবেন?
          </h2>
          <p className="font-bangla text-xl text-[var(--color-brand-muted)]">
            আমরা বিশ্বাস করি নিরাপদ খাদ্য উৎপাদনের শুরুটা হয় নিরাপদ সার থেকে।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-[var(--color-brand-green-accent)] transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[var(--color-brand-beige)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-brand-green)] transition-colors duration-300">
                <reason.icon size={32} className="text-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bangla font-bold text-xl text-[var(--color-brand-dark)] mb-3">
                {reason.title}
              </h3>
              <p className="font-bangla text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
