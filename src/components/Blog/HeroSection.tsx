export default function BlogHeroSection() {
	return (
		<section className="relative overflow-hidden bg-linear-to-b from-[#1a1d23] via-[#12151a] to-[#0D0F12] pt-14">
			<div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
			<div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

			<div className="container relative z-10 mx-auto px-4 md:px-8">
				<div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-3 text-center md:space-y-4">
					<p className="font-sans text-xs uppercase tracking-[0.35em] text-white/70 md:text-sm pt-20">
						TopCoat Journal
					</p>
					<h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
						Blog & Insights
					</h1>
					<p className="max-w-3xl text-base leading-relaxed text-white/75 md:text-xl">
						Expert tips, flooring trends, and real project knowledge for homeowners,
						architects, and businesses across New Jersey.
					</p>
					<div className="mt-1 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-white/70 md:text-sm">
						Practical guides, pricing insights, and professional recommendations
					</div>
				</div>
			</div>
		</section>
	);
}
