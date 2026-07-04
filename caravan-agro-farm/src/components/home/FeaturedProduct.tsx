import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShoppingBag } from "lucide-react";

export default function FeaturedProduct() {
  const features = [
    "মাটির উর্বরতা ও গুণগত মান বৃদ্ধি করে",
    "রাসায়নিক সারের ব্যবহার কমায়",
    "ফলন বৃদ্ধি ও ফসলের গুণগত মান উন্নত করে",
    "মাটির পানি ধারণ ক্ষমতা বৃদ্ধি করে",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-[var(--color-brand-green)] rounded-3xl transform -rotate-3 scale-105 opacity-10"></div>
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src="https://images.unsplash.com/photo-1592982537447-6f296d05f32b?q=80&w=2070&auto=format&fit=crop" 
                alt="Caravan Vermicompost"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full shadow-lg font-bangla font-bold text-[var(--color-brand-green)]">
                Best Seller
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="font-bangla font-bold text-4xl md:text-5xl text-[var(--color-brand-dark)]">
                ক্যারাভেন <span className="text-[var(--color-brand-green)]">ভার্মিকম্পোস্ট</span>
              </h2>
              <p className="font-bangla text-xl text-[var(--color-brand-muted)] leading-relaxed">
                আপনার ফসলের জন্য ১০০% প্রাকৃতিক এবং নিরাপদ সার। এটি মাটির উর্বরতা বৃদ্ধি করে, পানির ধারণক্ষমতা বাড়ায় এবং ফসলের গঠন উন্নত করে।
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-[var(--color-brand-green)] shrink-0 mt-1" size={24} />
                  <span className="font-bangla text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="tel:01744715206"
                className="inline-flex justify-center items-center gap-2 bg-[var(--color-brand-dark)] hover:bg-black text-white px-8 py-4 rounded-xl font-bangla font-medium text-lg transition-transform hover:-translate-y-1 shadow-lg"
              >
                <ShoppingBag size={20} />
                অর্ডার করতে কল করুন
              </a>
              <Link 
                href="/products/vermicompost"
                className="inline-flex justify-center items-center gap-2 bg-[var(--color-brand-beige)] text-[var(--color-brand-dark)] hover:bg-gray-200 px-8 py-4 rounded-xl font-bangla font-medium text-lg transition-colors"
              >
                বিস্তারিত জানুন
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
