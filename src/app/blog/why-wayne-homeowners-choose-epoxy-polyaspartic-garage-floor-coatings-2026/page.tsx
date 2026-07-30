import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogPostHero from "@/components/Blog/garage-floor-coatings-2026/BlogPostHero";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import ContentSection from "@/components/Blog/garage-floor-coatings-2026/table-content/ContentSection";
import TableOfContents from "@/components/Blog/garage-floor-coatings-2026/table-content/TableOfContent";

const GarageFloorCoatingsBlogPage = () => {
  return (
      <div className="bg-[#17191E]">
      <Navbar />
      <BlogBreadcrumbs title="Why Wayne Homeowners Choose Epoxy and Polyaspartic Garage Floor Coatings" />
      <main>
        <BlogPostHero />
        <TableOfContents />
        <ContentSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default GarageFloorCoatingsBlogPage;
