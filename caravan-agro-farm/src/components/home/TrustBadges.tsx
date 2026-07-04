import { ShieldCheck, Leaf, Truck, Users, Sprout } from "lucide-react";

const badges = [
  { icon: Leaf, title: "১০০% প্রাকৃতিক" },
  { icon: ShieldCheck, title: "রাসায়নিক মুক্ত" },
  { icon: Truck, title: "সারাদেশে ডেলিভারি" },
  { icon: Users, title: "কৃষকের আস্থা" },
  { icon: Sprout, title: "পরিবেশবান্ধব" },
];

export default function TrustBadges() {
  return (
    <section className="bg-[var(--color-brand-beige)] py-8 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <div className="bg-white p-3 rounded-full shadow-sm text-[var(--color-brand-green)] group-hover:bg-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300">
                <badge.icon size={24} />
              </div>
              <span className="font-bangla font-semibold text-[var(--color-brand-dark)] text-lg">
                {badge.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
