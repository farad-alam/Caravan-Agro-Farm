import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

export default function GalleryPreview() {
  const images = [
    { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop", alt: "Farm view 1" },
    { src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop", alt: "Farm view 2" },
    { src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop", alt: "Farm view 3" },
    { src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop", alt: "Farm view 4" },
    { src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800&auto=format&fit=crop", alt: "Farm view 5" },
    { src: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=800&auto=format&fit=crop", alt: "Farm view 6" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-bangla font-bold text-4xl text-[var(--color-brand-dark)] mb-4">
              খামারের <span className="text-[var(--color-brand-green)]">গ্যালারি</span>
            </h2>
            <p className="font-bangla text-xl text-[var(--color-brand-muted)]">
              আমাদের দৈনন্দিন কার্যক্রম এবং প্রাকৃতিক পরিবেশের কিছু ঝলক।
            </p>
          </div>
          <Link 
            href="/gallery"
            className="inline-flex items-center gap-2 font-bangla font-semibold text-[var(--color-brand-green)] hover:text-[var(--color-brand-green-accent)] transition-colors group"
          >
            সম্পূর্ণ গ্যালারি দেখুন 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-2xl overflow-hidden group bg-gray-100 ${idx === 0 || idx === 3 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ImageIcon size={32} className="text-white opacity-70" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
