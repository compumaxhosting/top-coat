import dynamic from "next/dynamic";
import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Home/HeroSection";

// Lazy load below-the-fold
const AboutSection = dynamic(() => import("@/components/Home/AboutSection"));
const ServicesSection = dynamic(
  () => import("@/components/Home/ServiceSection"),
);
const ExperienceSection = dynamic(
  () => import("@/components/Home/ExperienceSection"),
);
const PortfolioSection = dynamic(
  () => import("@/components/Home/PortfolioSection"),
);
const CTASection = dynamic(() => import("@/components/Home/CTASection"));
const Footer = dynamic(() => import("@/components/Layout/Footer"));
const BackToTop = dynamic(() => import("@/components/Layout/BackToTop")); // ✅ FIXED

const Page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />

      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Page;
