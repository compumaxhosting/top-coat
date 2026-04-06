"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Stamped Concrete Services New Jersey with authentic slate, wood-plank, and cobblestone textures",
	"Stamped Concrete Installation New Jersey near Wayne, High Mountain Park Preserve, and the Passaic River",
	"Salt-resistant sealers designed to protect against NJ winter road salts and freeze-thaw cycles",
	"Stamped Concrete Patio Contractors NJ for elegant and durable outdoor living spaces",
	"Stamped Concrete Driveway NJ installations built for heavy use and long-term curb appeal",
	"Custom border and accent inlay options for distinctive outdoor designs",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h1 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Top-Rated Stamped Concrete Services in <span className="text-gradient-copper">Wayne & North Jersey</span>
						</h1>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							TopCoat Artistry LLC is the leading name for premium stamped concrete in Wayne, NJ. We provide decorative and durable outdoor solutions tailored for the North Jersey climate. From elegant stamped concrete patio contractors NJ to high-traffic stamped concrete driveway NJ installations, our team serves Newark, Paterson, Jersey City, and all of Passaic County.
						</p>

						<h2 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
							Decorative Outdoor Surfaces & Installation
						</h2>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Our &quot;weather-resistant&quot; and &quot;cost-effective&quot; systems transform boring exteriors into high-end architectural features:
						</p>

						<ul className="mb-6 space-y-3 text-sm text-white/70">
							<li>• Stamped Concrete Services New Jersey: Authentic textures including slate, wood-plank, and cobblestone to complement your home’s aesthetic.</li>
							<li>• Stamped Concrete Installation New Jersey: Precision-poured surfaces near landmarks like High Mountain Park Preserve and the Passaic River.</li>
							<li>• Salt-Resistant Sealers: Every project includes industrial-grade sealing to protect against NJ winter road salts and freeze-thaw cycles.</li>
						</ul>

						<h3 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
							Why Hire Our Local Concrete Contractors?
						</h3>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							As locally-owned stamped concrete contractors near me, we combine artistic craftsmanship with structural engineering. Whether you need stamped concrete Newark NJ or stamped concrete Paterson NJ, we deliver E-E-A-T-certified quality that boosts your curb appeal.
						</p>

						<h3 className="mt-6 mb-3 font-serif text-lg font-semibold text-gradient-copper">
							Expert Stamped Concrete in Wayne, NJ for Stunning Outdoor Spaces
						</h3>

						<p className="mb-6 font-sans leading-relaxed text-white/70">
							TopCoat Artistry LLC offers expert stamped concrete in Wayne, NJ, for homeowners seeking beautiful, durable patios and driveways. Our professional stamped concrete services provide weather-resistant, decorative finishes that enhance curb appeal. We serve Newark, Paterson, and Jersey City with high-quality, local installations.
						</p>
						<Button asChild className="bg-primary text-primary-foreground hover:bg-copper-light">
							<Link href="/contact">
								Get a Free Stamped Concrete Quote in Wayne or Jersey City!
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className={`transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
						<h3 className="mb-6 font-serif text-xl font-semibold text-white/90">Why Homeowners Choose TopCoat</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{benefits.map((benefit, index) => (
								<div key={benefit} className="group relative rounded-lg bg-[#0d0f12] border border-[#282c33] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-[#111316]">
									<div className="absolute top-0 left-0 h-0.5 w-0 rounded-tl-lg bg-linear-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
									<span className="mb-3 block font-serif text-2xl font-bold text-primary/60 leading-none">
										{String(index + 1).padStart(2, "0")}
									</span>
									<span className="font-sans text-sm leading-relaxed text-white/80">{benefit}</span>
								</div>
							))}
						</div>
						<p className="mt-6 font-sans text-sm leading-relaxed text-white/65">
							Upgrade your outdoor living space with decorative concrete built for North Jersey weather and daily use.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
