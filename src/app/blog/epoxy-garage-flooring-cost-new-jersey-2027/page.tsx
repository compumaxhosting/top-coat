import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import BlogPostHero from "@/components/Blog/Epoxy-Garage-Flooring-Cost-NJ-2027/BlogPostHero";
import BlogPostContent from "@/components/Blog/Epoxy-Garage-Flooring-Cost-NJ-2027/BlogPostContent";

const EpoxyGarageFlooringCostNJ2027BlogPage = () => {
  return (
    <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="How Much Does Epoxy Garage Flooring Cost in New Jersey in 2027?" />
      <main>
        <BlogPostHero />
        <BlogPostContent />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default EpoxyGarageFlooringCostNJ2027BlogPage;

