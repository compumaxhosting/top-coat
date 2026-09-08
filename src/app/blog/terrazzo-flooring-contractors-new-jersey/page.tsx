import BackToTop from "@/components/Layout/BackToTop";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import BlogPostContent from "@/components/Blog/Terrazzo-Contractors/BlogPostContent";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function TerrazzoContractorsBlogPage() {
  return (
    <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="Terrazzo Flooring Contractors in New Jersey" />
      <BlogPostContent />
      <Footer />
      <BackToTop />
    </div>
  );
}