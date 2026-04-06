"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
	"Garage Epoxy Flooring: Superior protection against road salt, oil spills, and hot-tire pickup",
	"Commercial & Industrial: USDA-compliant, slip-resistant epoxy floor installation for warehouses and retail hubs",
	"Weather-Resistant Finishes: Advanced moisture-vapor barriers to prevent peeling during humid NJ summers",
	"Industrial-grade resins and precision diamond-grinding preparation",
	"Transparent pricing and expert epoxy flooring cost estimates",
	"Durability that significantly increases property value",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
					<div
						className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
							}`}
					>
						<h1 className="mb-6 font-serif text-3xl font-bold text-white/90">
							TopCoat Artistry LLC: {" "}
							<span className="text-gradient-copper">
								Premier Epoxy Flooring in Wayne & North Jersey
							</span>
						</h1>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Upgrade your property with TopCoat Artistry LLC, the leading authority for epoxy flooring in Wayne, NJ. We provide high-performance epoxy floor coating solutions specifically engineered to withstand the unique New Jersey climate. From heavy-duty industrial epoxy flooring in Newark to elegant residential epoxy flooring in Jersey City, our surfaces offer unmatched durability and bespoke style.
						</p>

						<h2 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
							High-Performance Coating Solutions
						</h2>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							Stop struggling with dusty, cracked concrete. Our locally-owned team specializes in:
						</p>

						<ul className="mb-6 space-y-3 text-white/70 text-sm">
							<li>• Garage Epoxy Flooring: Superior protection against road salt, oil spills, and &quot;hot-tire pickup&quot; common in Passaic County.</li>
							<li>• Commercial & Industrial: USDA-compliant, slip-resistant epoxy floor installation for warehouses and retail hubs in Paterson.</li>
							<li>• Weather-Resistant Finishes: Advanced moisture-vapor barriers to prevent peeling during humid NJ summers.</li>
						</ul>

						<h3 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
							Why Choose Our North Jersey Team?
						</h3>

						<p className="mb-4 font-sans leading-relaxed text-white/70">
							We prioritize E-E-A-T by using industrial-grade resins and precision diamond-grinding preparation. Whether you&apos;re searching for epoxy flooring near me or need a detailed epoxy flooring cost estimate, we provide transparent, expert service that significantly increases your property value.
						</p>
						<h3 className="mt-6 mb-3 font-serif text-lg font-semibold text-gradient-copper">
							Trusted Epoxy Flooring Services in Wayne, NJ 
						</h3>
						<p className="mb-6 font-sans leading-relaxed text-white/70">
							TopCoat Artistry LLC provides expert epoxy flooring in Wayne, NJ, for homeowners and commercial businesses seeking durable, chemical-resistant surfaces. Our professional epoxy floor coating transforms damaged concrete into a seamless, high-performance floor. We serve Newark, Paterson, and Jersey City with reliable, long-lasting installations.
						</p>

						<Button
							asChild
							className="bg-primary text-primary-foreground hover:bg-copper-light"
						>
							<Link href="/contact">
								Schedule your free on-site estimate in Wayne or surrounding NJ areas today!
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className={`transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
						<h3 className="mb-6 font-serif text-xl font-semibold text-white/90">Why North Jersey Property Owners Choose TopCoat</h3>
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
							Our epoxy systems are built for the demands of New Jersey winters, daily vehicle traffic, and long-term performance.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
