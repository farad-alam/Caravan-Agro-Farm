import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export const metadata = {
  title: "ব্লগ",
  description: "কৃষি বিষয়ক নানা টিপস, ভার্মিকম্পোস্ট ব্যবহারের নিয়ম এবং আধুনিক কৃষি সম্পর্কে জানতে আমাদের ব্লগ পড়ুন।",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-[var(--color-brand-offwhite)] min-h-screen pb-24">
      
      {/* Page Header */}
      <div className="bg-[var(--color-brand-dark)] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-bangla font-bold text-4xl md:text-5xl text-white mb-4">কৃষি ব্লগ</h1>
          <p className="font-bangla text-xl text-gray-300 max-w-2xl mx-auto">
            কৃষি বিষয়ক নানা টিপস ও পরামর্শ
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-bangla text-gray-500 mb-4">
                  <div className="flex items-center gap-1 text-[var(--color-brand-green)]">
                    <Tag size={14} />
                    <span>{post.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2 className="font-bangla font-bold text-2xl text-[var(--color-brand-dark)] mb-3 group-hover:text-[var(--color-brand-green)] transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="font-bangla text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm font-bangla text-gray-500">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-bangla font-semibold text-[var(--color-brand-green)] hover:text-[var(--color-brand-green-accent)] transition-colors"
                  >
                    পড়ুন <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </div>
  );
}
