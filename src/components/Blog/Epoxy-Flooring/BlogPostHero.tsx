export default function BlogPostHero() {
	return (
		<section className="relative w-full border-b border-[#ffffff1a] bg-linear-to-b from-[#1a1d23] to-[#0D0F12] py-8 md:py-12">
			<div className="container mx-auto px-4 pt-10 md:px-8 md:pt-20">
				<div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-3 text-center md:space-y-4">
					<p className="text-sm uppercase tracking-[0.3em] text-white/70 pt-8">Featured Article</p>
					<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white/95 leading-tight">
						Why Epoxy Flooring is the Smart Choice for Homes and Businesses
					</h1>
					<p className="max-w-3xl text-lg text-white/70">
						Discover why epoxy flooring is the most durable, cost-effective, and visually appealing flooring solution for both residential and commercial spaces.
					</p>
					<div className="pt-1 text-sm text-white/60">
						Published April 2026 • 8 min read
					</div>
				</div>
			</div>
		</section>
	);
}
