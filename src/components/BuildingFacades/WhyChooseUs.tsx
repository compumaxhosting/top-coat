"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Facade Restoration Contractors NJ for comprehensive cleaning, structural repair, and aesthetic renewal",
	"Facade Waterproofing Services New Jersey to protect against freeze-thaw cycles near the Hudson River and Passaic Falls",
	"Building Exterior Facade Repair NJ for cracks, masonry issues, and modern exterior renovation needs",
	"Industrial-grade materials selected for long-term durability and weather resistance",
	"Local NJ building code knowledge and architectural awareness for Essex and Hudson Counties",
	"Commercial and residential facade solutions tailored to the property and the environment",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 gap-6 md:gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h1 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Expert Building Facade Contractors in <span className="text-gradient-copper">New Jersey</span>
						</h1>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							TopCoat Artistry LLC is the premier choice for professional building facade contractors in New Jersey. We specialize in high-performance facade restoration services near me for commercial and residential properties. Serving Wayne, Newark, Paterson, and Jersey City, our team protects your investment from the harsh Passaic County elements with durable, aesthetic solutions.
						</p>

						<h2 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
							Specialized Exterior Restoration & Repair
						</h2>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Our North Jersey experts address common building pain points with &quot;industrial-grade&quot; materials:
						</p>

						<ul className="mb-6 space-y-3 text-sm text-white/70">
							<li>• Facade Restoration Contractors NJ: Comprehensive cleaning, structural repair, and aesthetic renewal for aging structures.</li>
							<li>• Facade Waterproofing Services New Jersey: Essential protection against freeze-thaw cycles near the Hudson River and Passaic Falls.</li>
							<li>• Building Exterior Facade Repair NJ: Professional handling of cracks, masonry issues, and modern exterior building renovation services NJ.</li>
						</ul>

						<h3 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
							Why Partner with TopCoat Artistry LLC?
						</h3>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							As local building facade contractors near me, we demonstrate E-E-A-T through precision craftsmanship and &quot;weather-resistant&quot; coatings. We understand local NJ building codes and the specific architectural needs of Essex and Hudson Counties.
						</p>

						<h3 className="mt-6 mb-3 font-serif text-lg font-semibold text-gradient-copper">
							Expert Facade Restoration & Exterior Building Renovation Services NJ
						</h3>

						<p className="mb-6 font-sans leading-relaxed text-white/70">
							TopCoat Artistry LLC is a leading building facade contractor in New Jersey, providing homeowners and commercial managers with expert facade restoration services. We offer durable exterior building renovation services NJ to enhance aesthetics and structural integrity in Wayne, Newark, Paterson, and Jersey City.
						</p>

						<Button asChild className="bg-primary h-auto whitespace-normal py-3 text-center leading-snug text-primary-foreground hover:bg-copper-light">
							<Link href="/contact">
								Get a Free Quote
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className={`transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
						<h3 className="mb-6 font-serif text-xl font-semibold text-white/90">Why Partner with TopCoat Artistry LLC?</h3>
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
