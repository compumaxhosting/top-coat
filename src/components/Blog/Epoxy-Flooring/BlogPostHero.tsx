export default function BlogPostHero() {
	return (
		<section className="relative w-full py-16 md:py-24 bg-linear-to-b from-[#1a1d23] to-[#0D0F12] border-b border-[#ffffff1a]">
			<div className="container mx-auto px-4 md:px-8">
				<div className="flex flex-col items-center justify-center text-center space-y-4 max-w-4xl mx-auto">
					<p className="text-sm uppercase tracking-[0.3em] text-white/70">Featured Article</p>
					<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white/95 leading-tight">
						Why Epoxy Flooring is the Smart Choice for Homes and Businesses
					</h1>
					<p className="text-lg text-white/70 max-w-2xl">
						Discover why epoxy flooring is the most durable, cost-effective, and visually appealing flooring solution for both residential and commercial spaces.
					</p>
					<div className="pt-4 text-sm text-white/60">
						Published April 2026 • 8 min read
					</div>
				</div>
			</div>
		</section>
	);
}
