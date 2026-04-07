"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Garage Epoxy Floor Coating Newark NJ for seamless, chemical-resistant finishes",
	"Garage Floor Repair Paterson NJ and professional resurfacing to restore structural integrity",
	"Garage Floor Installation Wayne NJ with custom flake and metallic designs",
	"Weather-resistant systems engineered for New Jersey salt corrosion and cracking",
	"Diamond-grinding preparation for maximum adhesion and long-term performance",
	"Transparent pricing and expert E-E-A-T-certified craftsmanship across North Jersey",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 gap-6 md:gap-16 lg:grid-cols-2">
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h1 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Top-Rated Garage Floor Coating in <span className="text-gradient-copper">Wayne & North Jersey</span>
						</h1>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							TopCoat Artistry LLC is your local authority for high-performance garage floor coating near me. We specialize in transforming worn concrete into &quot;industrial-grade&quot; surfaces that withstand the harsh New Jersey climate. Serving Wayne, Newark, Paterson, and Jersey City, our garage flooring contractors New Jersey deliver durability that outlasts standard DIY kits.
						</p>

						<h2 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
							Expert Garage Epoxy & Resurfacing
						</h2>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							New Jersey winters are brutal on concrete. Our &quot;weather-resistant&quot; systems solve common local pain points like salt corrosion and cracking:
						</p>

						<ul className="mb-6 space-y-3 text-sm text-white/70">
							<li>• Garage Epoxy Floor Coating Newark NJ: Seamless, chemical-resistant finishes for urban residential and commercial hubs.</li>
							<li>• Garage Floor Repair Paterson NJ: Professional garage floor resurfacing near me NJ to restore structural integrity.</li>
							<li>• Garage Floor Installation Wayne NJ: Custom flake and metallic designs that instantly boost property value.</li>
						</ul>

						<h3 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
							Why Choose Our NJ Flooring Services?
						</h3>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							As premier epoxy garage floor contractors NJ, we use diamond-grinding preparation to ensure a lifetime bond. Whether you need affordable garage floor coating New Jersey or garage flooring services Jersey City NJ, we provide transparent pricing and expert E-E-A-T-certified craftsmanship.
						</p>

						<h3 className="mt-6 mb-3 font-serif text-lg font-semibold text-gradient-copper">
							Transform Your Garage with Premium Epoxy Floor Coating
						</h3>

						<p className="mb-6 font-sans leading-relaxed text-white/70">
							TopCoat Artistry LLC provides professional garage floor coating near me for New Jersey homeowners seeking durable, salt-resistant surfaces. Our expert garage epoxy floor coating transforms damaged concrete into a seamless, high-performance floor. We serve Wayne, Newark, and Jersey City with reliable, long-lasting garage resurfacing.
						</p>
						<Button asChild className="bg-primary h-auto whitespace-normal py-3 text-center leading-snug text-primary-foreground hover:bg-copper-light">
							<Link href="/contact">
								Get a Free Quote
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className={`transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
						<h3 className="mb-6 font-serif text-xl font-semibold text-white/90">Why Local Homeowners Choose TopCoat</h3>
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
							Protect your garage today with systems designed specifically for North Jersey weather and daily use demands.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
