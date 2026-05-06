import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogPostHero from "@/components/Blog/Terrazzo-Flooring/BlogPostHero";
import BlogPostContent from "@/components/Blog/Terrazzo-Flooring/BlogPostContent";

const TerrazzoBlogPostPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <BlogPostHero />
        <BlogPostContent />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default TerrazzoBlogPostPage;

