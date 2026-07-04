import Image from "next/image";

export const metadata = {
  title: "গ্যালারি",
  description: "Caravan Agro Farm এর উৎপাদন প্রক্রিয়া, খামার এবং প্রোডাক্টের ছবি দেখুন।",
};

export default function GalleryPage() {
  const categories = ["খামার", "উৎপাদন", "প্যাকেজিং", "ডেলিভারি"];
  
  const images = [
    { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop", alt: "Farm view 1" },
    { src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop", alt: "Farm view 2" },
    { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop", alt: "Farm view 3" },
    { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop", alt: "Farm view 4" },
    { src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800&auto=format&fit=crop", alt: "Farm view 5" },
    { src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop", alt: "Farm view 6" },
    { src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800&auto=format&fit=crop", alt: "Farm view 7" },
    { src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop", alt: "Farm view 8" },
    { src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=800&auto=format&fit=crop", alt: "Farm view 9" },
  ];

  return (
    <div className="bg-[var(--color-brand-offwhite)] min-h-screen pb-24">
      
      {/* Page Header */}
      <div className="bg-[var(--color-brand-dark)] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-bangla font-bold text-4xl md:text-5xl text-white mb-4">গ্যালারি</h1>
          <p className="font-bangla text-xl text-gray-300 max-w-2xl mx-auto">
            আমাদের দৈনন্দিন কার্যক্রম এবং প্রাকৃতিক পরিবেশের কিছু ঝলক।
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Simple Filters (Visual only for MVP) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-[var(--color-brand-green)] text-white px-6 py-2 rounded-full font-bangla font-medium">সব ছবি</button>
          {categories.map((cat, idx) => (
            <button key={idx} className="bg-white text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-beige)] px-6 py-2 rounded-full font-bangla font-medium border border-gray-200 transition-colors">
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl overflow-hidden group bg-gray-100 ${
                idx === 0 ? 'md:row-span-2 md:col-span-2 aspect-video' : 'aspect-square'
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
