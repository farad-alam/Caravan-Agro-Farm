import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Share2, Globe, Link as LinkIcon, Navigation } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date, // Note: For real SEO, use ISO string dates
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://caravanagrofarm.com/blog/${post.slug}`
    },
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Caravan Agro Farm",
      "logo": {
        "@type": "ImageObject",
        "url": "https://caravanagrofarm.com/images/og-image.jpg"
      }
    },
    "datePublished": "2026-05-15T08:00:00+08:00", // Example ISO
    "dateModified": "2026-05-15T08:00:00+08:00", // Example ISO
    "description": post.excerpt
  };

  return (
    <div className="bg-[var(--color-brand-offwhite)] min-h-screen pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 font-bangla text-gray-500 hover:text-[var(--color-brand-green)] mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          ফিরে যান
        </Link>

        {/* Post Header */}
        <div className="mb-10 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-bangla text-[var(--color-brand-green)] mb-6">
            <span className="flex items-center gap-1 bg-[var(--color-brand-beige)] px-3 py-1 rounded-full font-semibold">
              <Tag size={14} />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-gray-500">
              <User size={14} />
              {post.author}
            </span>
          </div>
          <h1 className="font-bangla font-bold text-3xl md:text-5xl text-[var(--color-brand-dark)] leading-tight mb-6">
            {post.title}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-lg mb-12 border border-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Post Content */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <div 
            className="prose prose-lg max-w-none font-bangla prose-headings:font-bangla prose-headings:font-bold prose-headings:text-[var(--color-brand-dark)] prose-p:text-gray-700 prose-a:text-[var(--color-brand-green)] prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Share Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm gap-4">
          <div className="flex items-center gap-2 font-bangla font-bold text-[var(--color-brand-dark)]">
            <Share2 size={20} className="text-[var(--color-brand-green)]" />
            শেয়ার করুন:
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" aria-label="Share on Facebook">
              <Globe size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors" aria-label="Share on Twitter">
              <LinkIcon size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center hover:bg-indigo-700 hover:text-white transition-colors" aria-label="Share on LinkedIn">
              <Navigation size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
