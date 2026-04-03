"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Residential & Commercial Terrazzo: Custom-poured floors perfect for high-traffic lobbies, modern kitchens, and retail hubs.",
	"Terrazzo Polishing Services: Utilize diamond-grinding technology to restore the original luster of aged or stained surfaces.",
	"Sustainable Durability: Achieve a weather-resistant and industrial-grade finish that lasts a lifetime.",
	"Unlimited design flexibility with custom color and aggregate combinations",
	"Exceptional durability — lasts decades with minimal maintenance",
	"Eco-friendly options using recycled glass and natural stone",
	"Seamless installation for expansive, uninterrupted floor designs",
	"Ideal for high-traffic commercial environments",
	"Polished finish that enhances natural lighting in any space",
	"Available in epoxy and cementitious systems to suit any substrate",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					{/* Left Column - Main Content */}
					<div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90">
							Professional Terrazzo Flooring Services in <br />
							<span className="text-gradient-copper">Wayne & North Jersey</span>
						</h2>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							<strong>TopCoat Artistry LLC</strong> is the premier choice for elegant, high-performance 	terrazzo flooring in Wayne, NJ. We specialize in both modern 	terrazzo floor installation services and precision	 terrazzo floor restoration services for residential and commercial properties. Serving 	Newark, Paterson, Jersey City, and the greater Passaic County area, we bring artistry and durability to every square foot.
						</p>

						<h3 className="mb-4 font-serif text-xl font-semibold text-white/80">Expert Terrazzo Solutions for Every Space</h3>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Our team provides specialized finishes designed for the North Jersey lifestyle:
						</p>
						<ul className="mb-4 ml-5 list-disc font-sans leading-relaxed text-white/70">
							<li>Residential & Commercial Terrazzo: Custom-poured floors perfect for high-traffic lobbies, modern kitchens, and retail hubs.</li>
							<li>Terrazzo Polishing Services: We utilize diamond-grinding technology to restore the original luster of aged or stained surfaces.</li>
							<li>Sustainable Durability: Achieve a &quot;weather-resistant&quot; and &quot;industrial-grade&quot; finish that lasts a lifetime.</li>
						</ul>

						<h3 className="mb-4 font-serif text-xl font-semibold text-white/80">Why Choose Our Local NJ Specialists?</h3>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							As locally-owned terrazzo flooring contractors near me, we understand the architectural heritage of Essex and Hudson Counties. From historic restorations near the Passaic Falls to new installations in Jersey City, we offer transparent terrazzo flooring cost per square foot and expert craftsmanship.
						</p>

						<p className="mb-8 font-sans leading-relaxed text-white/70">
							Elevate your interiors today. <Link href="/contact" className="text-primary underline">Request a Free Terrazzo Consultation in Wayne or Newark!</Link>
						</p>

						<h3 className="mb-4 font-serif text-xl font-semibold px-2 bg-red-400 inline text-white">Professional Terrazzo Floor Installation & Restoration in Wayne, NJ</h3>
						<p className="mb-8 font-sans leading-relaxed text-white/70">
							TopCoat Artistry LLC offers expert terrazzo flooring in Wayne, NJ, for homeowners and commercial businesses. Our team provides high-end terrazzo floor installation services and restoration to ensure a durable, elegant finish. We serve Newark, Paterson, and Jersey City with professional, long-lasting flooring solutions.
						</p>

						<Button asChild className="bg-primary text-primary-foreground hover:bg-copper-light">
							<Link href="/contact">
								Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>

					{/* Right Column - Key Benefits */}
					<div className={`transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
						<h3 className="mb-6 font-serif text-xl font-semibold text-white/90">Key Benefits</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{benefits.map((benefit, index) => (
								<div key={index} className="group relative rounded-lg bg-[#0d0f12] border border-[#282c33] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-[#111316]">
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