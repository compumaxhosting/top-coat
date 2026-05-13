import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogPostHero from "@/components/Blog/Building-Facade/BlogPostHero";
import BlogPostContent from "@/components/Blog/Building-Facade/BlogPostContent";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";

const BuildingFacadeBlogPage = () => {
  return (
      <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="Building Facade Solutions in New Jersey: Enhancing Durability, Design, and Curb Appeal" />
      <main>
        <BlogPostHero />
        <BlogPostContent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default BuildingFacadeBlogPage;
