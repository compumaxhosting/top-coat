"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function BlogPostContent() {
	const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

	const faqs = [
		{
			question: "How long does epoxy flooring last?",
			answer: "Epoxy flooring can last 10 to 20 years depending on usage, maintenance, and installation quality.",
		},
		{
			question: "Is epoxy flooring slippery?",
			answer: "It can be, but anti-slip additives can be added to improve safety.",
		},
		{
			question: "Can epoxy be applied over damaged concrete?",
			answer: "Yes, but proper surface preparation and repairs are necessary before application.",
		},
		{
			question: "How long does installation take?",
			answer: "Most projects are completed within 1 to 3 days depending on size and complexity.",
		},
		{
			question: "Is epoxy flooring good for garages?",
			answer: "Yes, it is one of the best options for garages due to its resistance to oil, stains, and heavy vehicles.",
		},
	];

	return (
		<article className="bg-[#0D0F12] py-16 md:py-24">
			<div className="container mx-auto px-4 md:px-8 max-w-4xl">
				{/* Introduction */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Why Epoxy Flooring is a Smart Investment
					</h2>
					<p className="text-white/80 text-lg leading-relaxed mb-4">
						Epoxy flooring is one of the most durable, cost-effective, and visually appealing flooring solutions available today. It creates a seamless, long-lasting surface that resists damage, stains, and wear, making it ideal for both residential and commercial spaces.
					</p>
					<p className="text-white/80 text-lg leading-relaxed">
						Whether you&apos;re upgrading a garage, renovating a retail store, or improving an industrial facility, epoxy flooring delivers performance, aesthetics, and value in one solution. Its versatility, low maintenance, and modern finish make it a top choice across industries.
					</p>
				</section>

				{/* What is Epoxy Flooring */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						What is Epoxy Flooring?
					</h2>
					<div className="space-y-4">
						<p className="text-white/80 text-lg leading-relaxed">
							Epoxy flooring is a surface coating made by mixing resin and hardener to create a strong, durable plastic-like material. Once applied, it bonds tightly to concrete floors, forming a seamless and resistant surface.
						</p>
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-6">
							<p className="text-white/80 text-base leading-relaxed">
								<span className="text-white/95 font-semibold">Definition:</span> Epoxy flooring is a protective and decorative coating applied over concrete surfaces, known for its durability, chemical resistance, and glossy finish.
							</p>
						</div>
					</div>
				</section>

				{/* Why Choose Epoxy Flooring */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Why Choose Epoxy Flooring?
					</h2>
					<p className="text-white/80 text-lg leading-relaxed mb-6">
						Epoxy flooring is chosen for its strength, longevity, and sleek appearance. It outperforms traditional flooring options like tiles or vinyl in demanding environments.
					</p>
					<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-6">
						<p className="text-white/80 text-base leading-relaxed">
							<span className="text-white/95 font-semibold">Why it matters:</span> Epoxy flooring is ideal because it offers durability, resistance to damage, easy maintenance, and a modern finish, making it suitable for both homes and businesses.
						</p>
					</div>
				</section>

				{/* Key Benefits */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Key Benefits of Epoxy Flooring
					</h2>
					<div className="grid md:grid-cols-2 gap-6 mb-8">
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8 hover:border-white/20 transition">
							<h3 className="text-white/95 font-semibold text-xl mb-3">Exceptional Durability</h3>
							<p className="text-white/70">Epoxy floors can withstand heavy traffic, machinery, and daily wear without cracking or peeling.</p>
						</div>
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8 hover:border-white/20 transition">
							<h3 className="text-white/95 font-semibold text-xl mb-3">Low Maintenance</h3>
							<ul className="text-white/70 space-y-2">
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Easy to clean</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Resistant to stains</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>No grout lines or gaps</span>
								</li>
							</ul>
						</div>
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8 hover:border-white/20 transition">
							<h3 className="text-white/95 font-semibold text-xl mb-3">Cost-Effective Solution</h3>
							<p className="text-white/70">Compared to frequent repairs of traditional flooring, epoxy offers long-term savings.</p>
						</div>
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8 hover:border-white/20 transition">
							<h3 className="text-white/95 font-semibold text-xl mb-3">Aesthetic Appeal</h3>
							<ul className="text-white/70 space-y-2">
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Metallic finishes</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Solid colors</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Decorative flakes</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8 hover:border-white/20 transition">
							<h3 className="text-white/95 font-semibold text-xl mb-3">Chemical & Water Resistance</h3>
							<p className="text-white/70">Perfect for garages, warehouses, and industrial areas.</p>
						</div>
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8">
							<h3 className="text-white/95 font-semibold text-xl mb-4">Summary of Benefits</h3>
							<ul className="text-white/70 space-y-2">
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>Long lifespan</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>High resistance</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>Modern look</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>Budget-friendly</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Types of Epoxy Flooring */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Types of Epoxy Flooring Systems
					</h2>
					<div className="overflow-x-auto">
						<table className="w-full text-white/80">
							<thead>
								<tr className="border-b border-[#282c33]">
									<th className="text-left py-4 px-4 font-semibold text-white/95">Type</th>
									<th className="text-left py-4 px-4 font-semibold text-white/95">Best For</th>
									<th className="text-left py-4 px-4 font-semibold text-white/95">Features</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-[#282c33] hover:bg-[#14161A] transition">
									<td className="py-4 px-4">Self-Leveling Epoxy</td>
									<td className="py-4 px-4">Commercial spaces</td>
									<td className="py-4 px-4">Smooth, seamless finish</td>
								</tr>
								<tr className="border-b border-[#282c33] hover:bg-[#14161A] transition">
									<td className="py-4 px-4">Epoxy Mortar Floors</td>
									<td className="py-4 px-4">Industrial environments</td>
									<td className="py-4 px-4">Heavy-duty durability</td>
								</tr>
								<tr className="border-b border-[#282c33] hover:bg-[#14161A] transition">
									<td className="py-4 px-4">Flake Epoxy</td>
									<td className="py-4 px-4">Garages & homes</td>
									<td className="py-4 px-4">Decorative and slip-resistant</td>
								</tr>
								<tr className="hover:bg-[#14161A] transition">
									<td className="py-4 px-4">Metallic Epoxy</td>
									<td className="py-4 px-4">Showrooms & interiors</td>
									<td className="py-4 px-4">High-end glossy appearance</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				{/* Where Can Epoxy Flooring Be Used */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Where Can Epoxy Flooring Be Used?
					</h2>
					<div className="grid md:grid-cols-3 gap-6 mb-8">
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8">
							<h3 className="text-white/95 font-semibold text-lg mb-4">Residential Applications</h3>
							<ul className="text-white/70 space-y-3">
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Garage floors</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Basements</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Kitchens</span>
								</li>
							</ul>
						</div>
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8">
							<h3 className="text-white/95 font-semibold text-lg mb-4">Commercial Applications</h3>
							<ul className="text-white/70 space-y-3">
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Retail stores</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Offices</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Restaurants</span>
								</li>
							</ul>
						</div>
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8">
							<h3 className="text-white/95 font-semibold text-lg mb-4">Industrial Applications</h3>
							<ul className="text-white/70 space-y-3">
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Warehouses</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Factories</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Manufacturing units</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-6">
						<p className="text-white/80 text-base leading-relaxed">
							<span className="text-white/95 font-semibold">Versatility:</span> Epoxy flooring can be used in homes, garages, offices, retail stores, and industrial facilities due to its durability and resistance to wear and chemicals.
						</p>
					</div>
				</section>

				{/* Cost of Epoxy Flooring */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Cost of Epoxy Flooring
					</h2>
					<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-6 mb-8">
						<p className="text-white/80 text-base mb-4">The cost depends on:</p>
						<ul className="text-white/70 space-y-2">
							<li className="flex items-start">
								<span className="mr-3">•</span>
								<span>Floor size</span>
							</li>
							<li className="flex items-start">
								<span className="mr-3">•</span>
								<span>Surface condition</span>
							</li>
							<li className="flex items-start">
								<span className="mr-3">•</span>
								<span>Type of epoxy used</span>
							</li>
						</ul>
					</div>
					<div className="mb-8">
						<h3 className="text-white/95 font-semibold text-lg mb-4">Average Pricing</h3>
						<div className="overflow-x-auto">
							<table className="w-full text-white/80">
								<thead>
									<tr className="border-b border-[#282c33]">
										<th className="text-left py-4 px-4 font-semibold text-white/95">Type</th>
										<th className="text-left py-4 px-4 font-semibold text-white/95">Cost per sq. ft</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b border-[#282c33] hover:bg-[#0D0F12] transition">
										<td className="py-4 px-4">Basic Epoxy</td>
										<td className="py-4 px-4">$3 – $7</td>
									</tr>
									<tr className="border-b border-[#282c33] hover:bg-[#0D0F12] transition">
										<td className="py-4 px-4">Decorative Epoxy</td>
										<td className="py-4 px-4">$7 – $12</td>
									</tr>
									<tr className="hover:bg-[#0D0F12] transition">
										<td className="py-4 px-4">Industrial Grade</td>
										<td className="py-4 px-4">$10 – $15+</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* Epoxy vs Traditional */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Epoxy Flooring vs Traditional Flooring
					</h2>
					<div className="overflow-x-auto">
						<table className="w-full text-white/80">
							<thead>
								<tr className="border-b border-[#282c33]">
									<th className="text-left py-4 px-4 font-semibold text-white/95">Feature</th>
									<th className="text-left py-4 px-4 font-semibold text-white/95">Epoxy Flooring</th>
									<th className="text-left py-4 px-4 font-semibold text-white/95">Tiles/Vinyl</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-[#282c33] hover:bg-[#14161A] transition">
									<td className="py-4 px-4 font-medium">Durability</td>
									<td className="py-4 px-4">High</td>
									<td className="py-4 px-4">Medium</td>
								</tr>
								<tr className="border-b border-[#282c33] hover:bg-[#14161A] transition">
									<td className="py-4 px-4 font-medium">Maintenance</td>
									<td className="py-4 px-4">Low</td>
									<td className="py-4 px-4">Medium</td>
								</tr>
								<tr className="border-b border-[#282c33] hover:bg-[#14161A] transition">
									<td className="py-4 px-4 font-medium">Lifespan</td>
									<td className="py-4 px-4">10–20 years</td>
									<td className="py-4 px-4">5–10 years</td>
								</tr>
								<tr className="border-b border-[#282c33] hover:bg-[#14161A] transition">
									<td className="py-4 px-4 font-medium">Water Resistance</td>
									<td className="py-4 px-4">Excellent</td>
									<td className="py-4 px-4">Moderate</td>
								</tr>
								<tr className="hover:bg-[#14161A] transition">
									<td className="py-4 px-4 font-medium">Appearance</td>
									<td className="py-4 px-4">Modern</td>
									<td className="py-4 px-4">Standard</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>

				{/* Installation Process */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						How is Epoxy Flooring Installed?
					</h2>
					<h3 className="text-white/95 font-semibold text-lg mb-6">Step-by-Step Process</h3>
					<div className="space-y-4">
						{[
							"Surface preparation (cleaning & grinding)",
							"Crack and damage repair",
							"Primer application",
							"Epoxy coating application",
							"Topcoat sealing",
						].map((step, idx) => (
							<div key={idx} className="flex gap-4">
								<div className="shrink-0 w-8 h-8 rounded-full bg-[#14161A] border border-[#282c33] flex items-center justify-center text-white/70 font-semibold">
									{idx + 1}
								</div>
								<div className="grow pt-1">
									<p className="text-white/80">{step}</p>
								</div>
							</div>
						))}
					</div>
					<div className="mt-8 bg-[#14161A] border border-[#282c33] rounded-lg p-6">
						<p className="text-white/80 text-base leading-relaxed">
							<span className="text-white/95 font-semibold">Installation Summary:</span> Epoxy flooring is installed by preparing the concrete surface, applying primer, adding epoxy layers, and sealing it for a durable finish.
						</p>
					</div>
				</section>

				{/* Maintenance */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Maintenance Tips for Epoxy Floors
					</h2>
					<div className="grid md:grid-cols-2 gap-4 mb-8">
						{[
							"Sweep regularly",
							"Mop with mild detergent",
							"Avoid harsh chemicals",
							"Clean spills quickly",
						].map((tip, idx) => (
							<div key={idx} className="bg-[#14161A] border border-[#282c33] rounded-lg p-6">
								<p className="text-white/80 flex items-center gap-3">
									<span className="text-lg">✓</span>
									{tip}
								</p>
							</div>
						))}
					</div>
					<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-6">
						<p className="text-white/80 text-base leading-relaxed">
							Epoxy floors require minimal upkeep and maintain their shine with basic cleaning.
						</p>
					</div>
				</section>

				{/* Local Region */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Epoxy Flooring in Wayne & North Jersey
					</h2>
					<p className="text-white/80 text-lg leading-relaxed mb-6">
						If you&apos;re located in Wayne or North Jersey, epoxy flooring is especially beneficial due to seasonal weather changes.
					</p>
					<div className="grid md:grid-cols-2 gap-6 mb-8">
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8">
							<h3 className="text-white/95 font-semibold text-lg mb-4">Why It Works Locally</h3>
							<ul className="text-white/70 space-y-3">
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Handles moisture and humidity</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Resistant to salt damage (winter)</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">•</span>
									<span>Ideal for garages and basements</span>
								</li>
							</ul>
						</div>
						<div className="bg-[#14161A] border border-[#282c33] rounded-lg p-8">
							<h3 className="text-white/95 font-semibold text-lg mb-4">Real-World Example</h3>
							<p className="text-white/70 mb-4">A retail store in North Jersey upgraded to epoxy flooring and saw:</p>
							<ul className="text-white/70 space-y-3">
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>40% reduction in maintenance costs</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>Improved customer experience</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>Increased durability under high foot traffic</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Conclusion */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-6">
						Conclusion
					</h2>
					<div className="space-y-4">
						<p className="text-white/80 text-lg leading-relaxed">
							Epoxy flooring is more than just a surface upgrade. It&apos;s a long-term investment in durability, style, and functionality. Whether for a home garage or a large commercial facility, it delivers unmatched performance and value.
						</p>
						<p className="text-white/80 text-lg leading-relaxed">
							If you&apos;re in Wayne or North Jersey, this flooring solution is particularly practical due to its resistance to weather, moisture, and wear.
						</p>
					</div>
				</section>

				{/* FAQ Section */}
				<section className="mb-16">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-8">
						Frequently Asked Questions
					</h2>
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className={`rounded-lg border bg-[#14161A] transition-all duration-300 ${
									openFAQIndex === index
										? "border-white/30"
										: "border-[#282c33]"
								}`}
							>
								<button
									onClick={() =>
										setOpenFAQIndex(openFAQIndex === index ? null : index)
									}
									aria-expanded={openFAQIndex === index}
									className="flex w-full items-center justify-between p-6 text-left font-medium text-white/90 transition-colors duration-300 hover:bg-white/5"
								>
									<span>{faq.question}</span>
									<ChevronRight
										className={`h-5 w-5 text-white/60 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
											openFAQIndex === index ? "rotate-90" : ""
										}`}
									/>
								</button>
								{openFAQIndex === index && (
									<div className="border-t border-[#282c33] px-6 py-4 text-white/70">
										{faq.answer}
									</div>
								)}
							</div>
						))}
					</div>
				</section>

				{/* CTA Section */}
				<section className="bg-linear-to-r from-[#14161A] to-[#1a1d23] border border-[#282c33] rounded-lg p-8 md:p-12 text-center">
					<h2 className="font-serif text-3xl md:text-4xl font-bold text-white/95 mb-4">
						Ready to Upgrade Your Floors?
					</h2>
					<p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
						Contact a professional epoxy flooring specialist today and transform your space with a durable, modern finish.
					</p>
					<a
						href="/services/epoxy-flooring"
						className="inline-block px-8 py-3 bg-white/10 border border-white/30 text-white/90 rounded-lg hover:bg-white/20 transition-all duration-300 font-medium"
					>
						Learn More About Our Services
					</a>
				</section>
			</div>
		</article>
	);
}
