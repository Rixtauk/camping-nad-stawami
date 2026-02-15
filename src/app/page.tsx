import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import StayOptionsSection from "@/components/StayOptionsSection";
import WhyUsSection from "@/components/WhyUsSection";
import FishingSection from "@/components/FishingSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import AreaSection from "@/components/AreaSection";
import BookingSection from "@/components/BookingSection";
import FaqSection from "@/components/FaqSection";
import GalleryStrip from "@/components/GalleryStrip";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ReviewsDrawer from "@/components/ReviewsDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <StayOptionsSection />
      <WhyUsSection />
      <FishingSection />
      <FacilitiesSection />
      <AreaSection />
      <BookingSection />
      <FaqSection />
      <GalleryStrip />
      <ContactFooter />
      <WhatsAppWidget />
      <ReviewsDrawer />
    </>
  );
}
