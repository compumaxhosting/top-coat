import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import BackToTop from "@/components/Layout/BackToTop";
import BlogHeroSection from "../../components/Blog/HeroSection";
import BlogCard from "@/components/Blog/BlogCard";
import { blogPosts } from "@/Config/blog";

const BlogPage = () => {
	return (
		<>
			<Navbar />
			<main className="bg-[#0D0F12]">
				<BlogHeroSection />
				<section className="py-10 md:py-14">
					<div className="container mx-auto px-4 md:px-8">
						<div className="mb-6 flex flex-col items-start justify-between gap-3 border-b border-white/10 pb-4 md:flex-row md:items-end">
							<div>
								<p className="mb-2 font-sans text-xs uppercase tracking-[0.28em] text-primary md:text-sm">
									Latest Articles
								</p>
								<h2 className="font-serif text-3xl font-bold text-white/95 md:text-4xl">
									Industry Knowledge Library
								</h2>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
							{blogPosts.map((post) => (
								<BlogCard key={post.slug} post={post} />
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default BlogPage;
