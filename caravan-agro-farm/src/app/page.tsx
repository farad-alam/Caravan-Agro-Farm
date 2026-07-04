import HeroSection from "@/components/home/HeroSection";
import TrustBadges from "@/components/home/TrustBadges";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import WhyCaravan from "@/components/home/WhyCaravan";
import Benefits from "@/components/home/Benefits";
import ProductionProcess from "@/components/home/ProductionProcess";
import GalleryPreview from "@/components/home/GalleryPreview";
import FAQPreview from "@/components/home/FAQPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <FeaturedProduct />
      <WhyCaravan />
      <Benefits />
      <ProductionProcess />
      <GalleryPreview />
      <FAQPreview />
      <ContactCTA />
    </>
  );
}
