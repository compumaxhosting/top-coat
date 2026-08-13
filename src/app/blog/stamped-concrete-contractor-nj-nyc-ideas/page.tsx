import BackToTop from "@/components/Layout/BackToTop";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import BlogPostContent from "@/components/Blog/Stamped-Concrete-NJ-NYC/BlogPostContent";
import BlogPostHero from "@/components/Blog/Stamped-Concrete-NJ-NYC/BlogPostHero";
import TableOfContents from "@/components/Blog/Stamped-Concrete-NJ-NYC/sections/TableOfContent";


export default function StampedConcreteBlogPage() {
  return (
    <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="Stamped Concrete Contractor NJ & NYC: Driveway, Patio & Walkway Ideas" />
      <main>
        <BlogPostHero />
        <TableOfContents />
        <BlogPostContent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
