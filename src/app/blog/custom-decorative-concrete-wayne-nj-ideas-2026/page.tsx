import BackToTop from "@/components/Layout/BackToTop";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";
import BlogHero from "@/components/Blog/Custom-Decorative-Concrete/BlogHero";
import BlogContent from "@/components/Blog/Custom-Decorative-Concrete/BlogContent";


export default function DecorativeConcreteBlogPage() {
    return (
        <div className="bg-[#17191E]">
            <Navbar />
            <BlogBreadcrumbs title="Custom Decorative Concrete in Wayne NJ: 10 Stunning Ideas Transforming Outdoor Spaces in 2026" />
            <main>
                <BlogHero />
                <BlogContent />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}