import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogPostHero from "@/components/Blog/Epoxy-Flooring/BlogPostHero";
import BlogPostContent from "@/components/Blog/Epoxy-Flooring/BlogPostContent";
import BlogBreadcrumbs from "@/components/Blog/BlogBreadcrumbs";

const EpoxyBlogPostPage = () => {
	return (
		<div className="bg-[#17191E]">
			<Navbar />
			<BlogBreadcrumbs title="Why Epoxy Flooring is the Smart Choice for Homes and Businesses" />
			<main>
				<BlogPostHero />
				<BlogPostContent />
			</main>
			<Footer />
			<BackToTop />
		</div>
	);
};

export default EpoxyBlogPostPage;
