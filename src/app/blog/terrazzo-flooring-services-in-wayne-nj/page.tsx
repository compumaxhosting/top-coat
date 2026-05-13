import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogPostHero from "@/components/Blog/Terrazzo-Flooring/BlogPostHero";
import BlogPostContent from "@/components/Blog/Terrazzo-Flooring/BlogPostContent";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";

const TerrazzoBlogPostPage = () => {
  return (
    <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="Complete Guide to Terrazzo Flooring Services in Wayne & North Jersey" />
      <main>
        <BlogPostHero />
        <BlogPostContent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default TerrazzoBlogPostPage;

