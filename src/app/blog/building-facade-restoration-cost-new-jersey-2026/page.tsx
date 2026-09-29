import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import BlogPostHero from "@/components/Blog/Building-Facade-Restoration/BlogPostHero";
import BlogPostContent from "@/components/Blog/Building-Facade-Restoration/BlogPostContent";

const BuildingFacadeRestorationCostBlogPage = () => {
  return (
    <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="How Much Does Building Facade Restoration Cost in New Jersey in 2026?" />
      <main>
        <BlogPostHero />
        <BlogPostContent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default BuildingFacadeRestorationCostBlogPage;
