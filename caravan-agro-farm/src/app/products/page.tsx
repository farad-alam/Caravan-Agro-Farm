import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export const metadata = {
  title: "আমাদের প্রোডাক্টস",
  description: "Caravan Agro Farm এর সকল প্রাকৃতিক ও জৈব সার প্রোডাক্ট সম্পর্কে জানুন।",
};

export default function ProductsPage() {
  const products = [
    {
      id: "vermicompost",
      name: "ক্যারাভেন ভার্মিকম্পোস্ট",
      shortDesc: "আপনার ফসলের জন্য ১০০% প্রাকৃতিক এবং নিরাপদ সার। এটি মাটির উর্বরতা বৃদ্ধি করে ও পানির ধারণক্ষমতা বাড়ায়।",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop",
      badge: "Best Seller",
    },
    // Add more products here later
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] min-h-screen pb-24">
      
      {/* Page Header */}
      <div className="bg-[var(--color-brand-dark)] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-bangla font-bold text-4xl md:text-5xl text-white mb-4">আমাদের প্রোডাক্টস</h1>
          <p className="font-bangla text-xl text-gray-300 max-w-2xl mx-auto">
            পরিবেশবান্ধব ও শতভাগ প্রাকৃতিক উপাদানে তৈরি আমাদের সকল প্রোডাক্ট।
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md font-bangla font-bold text-sm text-[var(--color-brand-green)]">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-bangla text-[var(--color-brand-green)] mb-3">
                  <Leaf size={14} />
                  <span>১০০% প্রাকৃতিক</span>
                </div>
                <h2 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-3">
                  {product.name}
                </h2>
                <p className="font-bangla text-gray-600 mb-6 line-clamp-2">
                  {product.shortDesc}
                </p>
                <Link 
                  href={`/products/${product.id}`}
                  className="inline-flex items-center gap-2 font-bangla font-semibold text-[var(--color-brand-green)] hover:text-[var(--color-brand-green-accent)] transition-colors"
                >
                  বিস্তারিত জানুন <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
