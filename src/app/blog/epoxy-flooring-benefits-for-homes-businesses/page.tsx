import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogPostHero from "@/components/Blog/Epoxy-Flooring/BlogPostHero";
import BlogPostContent from "@/components/Blog/Epoxy-Flooring/BlogPostContent";

const EpoxyBlogPostPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#0D0F12]">
				<BlogPostHero />
				<BlogPostContent />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default EpoxyBlogPostPage;
