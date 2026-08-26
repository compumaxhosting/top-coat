import BackToTop from "@/components/Layout/BackToTop";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import BlogPostContent from "@/components/Blog/Epoxy-Flooring-NYC/BlogPostContent";
import BlogPostHero from "@/components/Blog/Epoxy-Flooring-NYC/BlogPostHero";
import TableOfContents from "@/components/Blog/Epoxy-Flooring-NYC/sections/TableOfContent";

export default function EpoxyFlooringNYCBlogPage() {
  return (
    <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="Is Epoxy Flooring a Good Choice for NYC Homes and Businesses?" />
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
