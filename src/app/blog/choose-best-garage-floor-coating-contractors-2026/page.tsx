import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import BlogPostHero from "@/components/Blog/Garage-Floor-Coating-Contractors-2026/BlogPostHero";
import BlogPostContent from "@/components/Blog/Garage-Floor-Coating-Contractors-2026/BlogPostContent";

const GarageFloorCoatingContractors2026BlogPage = () => {
  return (
    <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="How to Choose the Best Garage Floor Coating Contractors in 2026" />
      <main>
        <BlogPostHero />
        <BlogPostContent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default GarageFloorCoatingContractors2026BlogPage;
