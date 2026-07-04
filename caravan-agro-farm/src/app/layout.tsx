import type { Metadata, Viewport } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2d7a47",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Caravan Agro Farm | আধুনিক প্রযুক্তি নির্ভর সমন্বিত কৃষি উদ্যোগ",
    template: "%s | Caravan Agro Farm",
  },
  description: "Caravan Agro Farm নিরাপদ, প্রাকৃতিক এবং মানসম্মত ভার্মিকম্পোস্ট উৎপাদনে প্রতিশ্রুতিবদ্ধ। আপনার ফসলের জন্য ১০০% প্রাকৃতিক এবং নিরাপদ সার।",
  keywords: ["Caravan Agro Farm", "ভার্মিকম্পোস্ট", "কেঁচো সার", "জৈব সার", "কৃষি উদ্যোগ", "নিরাপদ খাদ্য"],
  authors: [{ name: "Caravan Agro Farm" }],
  creator: "Caravan Agro Farm",
  publisher: "Caravan Agro Farm",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Caravan Agro Farm | আধুনিক প্রযুক্তি নির্ভর সমন্বিত কৃষি উদ্যোগ",
    description: "Caravan Agro Farm নিরাপদ, প্রাকৃতিক এবং মানসম্মত ভার্মিকম্পোস্ট উৎপাদনে প্রতিশ্রুতিবদ্ধ।",
    url: "https://caravanagrofarm.com",
    siteName: "Caravan Agro Farm",
    images: [
      {
        url: "/images/og-image.jpg", // Will be created later
        width: 1200,
        height: 630,
        alt: "Caravan Agro Farm",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caravan Agro Farm | আধুনিক প্রযুক্তি নির্ভর সমন্বিত কৃষি উদ্যোগ",
    description: "Caravan Agro Farm নিরাপদ, প্রাকৃতিক এবং মানসম্মত ভার্মিকম্পোস্ট উৎপাদনে প্রতিশ্রুতিবদ্ধ।",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${inter.variable} ${hindSiliguri.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-[88px]">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
