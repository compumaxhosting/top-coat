import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogPostHero from "@/components/Blog/Epoxy-Flooring/BlogPostHero";
import BlogPostContent from "@/components/Blog/Epoxy-Flooring/BlogPostContent";

const EpoxyBlogPostPage = () => {
	return (
		<>
			<Navbar />
			<main>
				<BlogPostHero />
				<BlogPostContent />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default EpoxyBlogPostPage;
