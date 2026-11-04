import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import BlogPostHero from "@/components/Blog/Terrazzo-Restoration-vs-Replacement/BlogPostHero";
import BlogPostContent from "@/components/Blog/Terrazzo-Restoration-vs-Replacement/BlogPostContent";

const TerrazzoRestorationVsReplacementPage = () => {
  return (
    <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="Terrazzo Floor Restoration vs. Replacement: Which Is the Better Option?" />
      <main>
        <BlogPostHero />
        <BlogPostContent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default TerrazzoRestorationVsReplacementPage;

