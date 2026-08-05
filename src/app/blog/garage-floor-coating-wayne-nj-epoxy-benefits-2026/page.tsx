import BackToTop from "@/components/Layout/BackToTop";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import BlogPostContent from "@/components/Blog/Garage-Floor-Coating-Wayne/BlogPostContent";
import BlogPostHero from "@/components/Blog/Garage-Floor-Coating-Wayne/BlogPostHero";

export default function GarageFloorCoatingWaynePage() {
  return (
    <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="Garage Floor Coating Wayne NJ" />
      <main>
        <BlogPostHero />
        <BlogPostContent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
