"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogPostContent() {
	const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

	const faqs = [
		{
			question: "How long does epoxy flooring last?",
			answer:
				"Epoxy flooring can last 10 to 20 years depending on usage, maintenance, and installation quality.",
		},
		{
			question: "Is epoxy flooring slippery?",
			answer:
				"It can be, but anti-slip additives can be added to improve safety.",
		},
		{
			question: "Can epoxy be applied over damaged concrete?",
			answer:
				"Yes, but proper surface preparation and repairs are necessary before application.",
		},
		{
			question: "How long does installation take?",
			answer:
				"Most projects are completed within 1 to 3 days depending on size and complexity.",
		},
		{
			question: "Is epoxy flooring good for garages?",
			answer:
				"Yes, it is one of the best options for garages due to its resistance to oil, stains, and heavy vehicles.",
		},
	];

	const benefits = [
		{
			icon: "◈",
			title: "Exceptional Durability",
			body: "Withstands heavy traffic, machinery, and daily wear without cracking or peeling.",
		},
		{
			icon: "◇",
			title: "Low Maintenance",
			body: "Easy to clean, resistant to stains, no grout lines or gaps to worry about.",
		},
		{
			icon: "◉",
			title: "Cost-Effective",
			body: "Long-term savings over traditional flooring through reduced repairs and replacements.",
		},
		{
			icon: "◎",
			title: "Aesthetic Appeal",
			body: "Available in metallic finishes, solid colors, and decorative flake systems.",
		},
		{
			icon: "◐",
			title: "Chemical Resistance",
			body: "Perfect for garages, warehouses, and industrial areas exposed to spills.",
		},
		{
			icon: "◑",
			title: "Water Resistant",
			body: "Seamless surface eliminates moisture ingress — ideal for basements and kitchens.",
		},
	];

	const steps = [
		{
			num: "01",
			title: "Surface Preparation",
			desc: "Cleaning, grinding, and profiling the concrete substrate.",
		},
		{
			num: "02",
			title: "Crack Repair",
			desc: "Filling damage and imperfections before coating begins.",
		},
		{
			num: "03",
			title: "Primer Application",
			desc: "Bonding primer seals the surface for adhesion.",
		},
		{
			num: "04",
			title: "Epoxy Coating",
			desc: "Main epoxy layers are applied at specified thickness.",
		},
		{
			num: "05",
			title: "Topcoat Sealing",
			desc: "UV-stable polyurethane seal for gloss and protection.",
		},
	];

	return (
		<article className="min-h-screen bg-charcoal text-secondary-foreground">
			<div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
				<div className="w-full pt-8">
					<p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-primary">
						Flooring Guide · Wayne & North Jersey
					</p>
					<h2 className="mb-6 font-serif text-3xl leading-tight text-secondary-foreground md:text-5xl">
						Why Epoxy Flooring is a Smart Investment
					</h2>
					<p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
						A seamless, long-lasting surface that resists damage, stains, and wear
						 and is ideal for residential, commercial, and industrial spaces alike.
					</p>
					<p className="mt-5 max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
						Whether you&apos;re upgrading a garage, renovating a retail store, or
						 improving an industrial facility, epoxy flooring delivers performance,
						 aesthetics, and value in one solution. Its versatility, low
						 maintenance, and modern finish make it a top choice across industries.
					</p>
				</div>

				<div className="w-full">
				<section className="border-b border-charcoal-lighter py-16">
					<Label>Definition</Label>
					<SectionHeading>What is Epoxy Flooring?</SectionHeading>
					<p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
						Epoxy flooring is a surface coating made by mixing resin and hardener to
						 create a strong, durable plastic-like material. Once applied, it bonds
						 tightly to concrete floors, forming a seamless and resistant surface.
					</p>
					<blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
						A protective and decorative coating applied over concrete surfaces,
						 known for its durability, chemical resistance, and high-gloss finish.
					</blockquote>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Why Choose</Label>
					<SectionHeading>Why Choose Epoxy Flooring?</SectionHeading>
					<p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
						Epoxy flooring is chosen for its strength, longevity, and sleek
						 appearance. It outperforms traditional flooring options like tiles or
						 vinyl in demanding environments.
					</p>
					<p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
						Epoxy flooring is ideal because it offers durability, resistance to
						 damage, easy maintenance, and a modern finish, making it suitable for
						 both homes and businesses.
					</p>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Advantages</Label>
					<SectionHeading>Key Benefits</SectionHeading>
					<p className="mb-10 font-sans text-base leading-relaxed text-secondary-foreground/70">
						Epoxy outperforms traditional flooring options like tiles or vinyl in demanding environments, combining resilience with a refined aesthetic.
					</p>
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
						{benefits.map((b, i) => (
							<div key={i} className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
								<span className="mb-4 block text-xl leading-none text-primary">
									{b.icon}
								</span>
								<h3 className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-secondary-foreground">
									{b.title}
								</h3>
								<p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
									{b.body}
								</p>
							</div>
						))}
					</div>
					<div className="mt-8 rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
						<p className="mb-4 font-sans text-xs uppercase tracking-[0.16em] text-primary">
							Summary of Benefits
						</p>
						<ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
							{[
								"Long lifespan",
								"High resistance",
								"Modern look",
								"Budget-friendly",
							].map((item) => (
								<li key={item} className="font-sans text-sm text-secondary-foreground/70">
									• {item}
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Systems</Label>
					<SectionHeading>Types of Epoxy Flooring</SectionHeading>
					<div className="mt-8 overflow-x-auto rounded-lg border border-charcoal-lighter bg-charcoal-light p-4">
						<table className="w-full border-collapse text-left font-sans text-sm text-secondary-foreground/70">
							<thead>
								<tr className="border-b border-charcoal-lighter">
									{["System", "Best For", "Key Feature"].map((h) => (
										<th key={h} className="px-0 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary">
											{h}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{[
									["Self-Leveling", "Commercial spaces", "Smooth, seamless finish"],
									["Epoxy Mortar Floors", "Industrial environments", "Heavy-duty durability"],
									["Flake Epoxy", "Garages & homes", "Decorative and slip-resistant"],
									["Metallic Epoxy", "Showrooms & interiors", "High-end gloss appearance"],
								].map(([type, best, feat], i) => (
									<tr key={i} className="border-b border-charcoal-lighter">
										<td className="px-0 py-4 font-medium text-secondary-foreground">
											{type}
										</td>
										<td className="px-0 py-4">{best}</td>
										<td className="px-0 py-4">{feat}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Applications</Label>
					<SectionHeading>Where It&apos;s Used</SectionHeading>
					<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
						{[
							{
								title: "Residential",
								items: ["Garage floors", "Basements", "Kitchens & laundry"],
							},
							{
								title: "Commercial",
								items: ["Retail stores", "Office lobbies", "Restaurants"],
							},
							{
								title: "Industrial",
								items: ["Warehouses", "Factories", "Manufacturing units"],
							},
						].map((col, i) => (
							<div key={i} className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
								<p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-primary">
									{col.title}
								</p>
								<ul className="space-y-3">
									{col.items.map((item, j) => (
										<li key={j} className="border-b border-charcoal-lighter pb-2 text-sm text-secondary-foreground/70 last:border-b-0 last:pb-0">
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<p className="mt-8 font-sans text-base leading-relaxed text-secondary-foreground/70">
						Epoxy flooring can be used in homes, garages, offices, retail stores,
						 and industrial facilities due to its durability and resistance to wear
						 and chemicals.
					</p>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Investment</Label>
					<SectionHeading>Cost of Epoxy Flooring</SectionHeading>
					<p className="mb-4 font-sans text-base leading-relaxed text-secondary-foreground/70">
						Pricing varies by floor size, surface condition, and epoxy type. Below is a general guide for budgeting your project.
					</p>
					<p className="mb-3 font-sans text-sm uppercase tracking-[0.12em] text-primary">
						The cost depends on:
					</p>
					<ul className="mb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
						{["Floor size", "Surface condition", "Type of epoxy used"].map((item) => (
							<li key={item} className="font-sans text-sm text-secondary-foreground/70">
								• {item}
							</li>
						))}
					</ul>
					<p className="mb-4 font-sans text-sm uppercase tracking-[0.12em] text-primary">
						Average Pricing
					</p>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						{[
							{ tier: "Basic Epoxy", price: "$3 – $7", note: "per sq. ft." },
							{ tier: "Decorative", price: "$7 – $12", note: "per sq. ft." },
							{ tier: "Industrial Grade", price: "$10 – $15+", note: "per sq. ft." },
						].map((row, i) => (
							<div key={i} className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
								<p className="mb-2 font-sans text-xs uppercase tracking-[0.16em] text-secondary-foreground/60">
									{row.tier}
								</p>
								<p className="mb-1 font-serif text-3xl text-primary">
									{row.price}
								</p>
								<p className="font-sans text-xs text-secondary-foreground/60">
									{row.note}
								</p>
							</div>
						))}
					</div>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Comparison</Label>
					<SectionHeading>Epoxy vs. Traditional Flooring</SectionHeading>
					<div className="mt-8 overflow-x-auto rounded-lg border border-charcoal-lighter bg-charcoal-light p-4">
						<table className="w-full border-collapse text-left font-sans text-sm text-secondary-foreground/70">
							<thead>
								<tr className="border-b border-charcoal-lighter">
									{["Feature", "Epoxy Flooring", "Tiles / Vinyl"].map((h, i) => (
										<th
											key={h}
											className={`px-0 py-3 text-xs font-medium uppercase tracking-[0.18em] ${i === 1 ? "text-primary" : "text-secondary-foreground/60"}`}
										>
											{h}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{[
									["Durability", "High", "Medium"],
									["Maintenance", "Low", "Medium"],
									["Lifespan", "10–20 years", "5–10 years"],
									["Water Resistance", "Excellent", "Moderate"],
									["Appearance", "Modern", "Standard"],
								].map(([feat, epoxy, trad], i) => (
									<tr key={i} className="border-b border-charcoal-lighter">
										<td className="px-0 py-4 text-xs uppercase tracking-[0.06em] text-secondary-foreground/60">
											{feat}
										</td>
										<td className="px-0 py-4 font-medium text-secondary-foreground">{epoxy}</td>
										<td className="px-0 py-4">{trad}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Process</Label>
					<SectionHeading>How Epoxy is Installed</SectionHeading>
					<div className="mt-10">
						{steps.map((step, i) => (
							<div
								key={i}
								className={`flex gap-6 py-7 ${i < steps.length - 1 ? "border-b border-charcoal-lighter" : ""}`}
							>
								<span className="min-w-8 pt-1 font-serif text-xs tracking-[0.06em] text-primary">
									{step.num}
								</span>
								<div>
									<p className="mb-1 font-sans text-sm font-semibold uppercase tracking-[0.04em] text-secondary-foreground">
										{step.title}
									</p>
									<p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
										{step.desc}
									</p>
								</div>
							</div>
						))}
					</div>
					<p className="mt-8 font-sans text-base leading-relaxed text-secondary-foreground/70">
						Epoxy flooring is installed by preparing the concrete surface, applying
						 primer, adding epoxy layers, and sealing it for a durable finish.
					</p>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Care</Label>
					<SectionHeading>Maintenance Tips</SectionHeading>
					<p className="mb-9 font-sans text-base leading-relaxed text-secondary-foreground/70">
						Epoxy floors require minimal upkeep and maintain their shine with basic cleaning routines.
					</p>
					<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
						{["Sweep regularly", "Mop with mild detergent", "Avoid harsh chemicals", "Clean spills quickly"].map(
							(tip, i) => (
								<div key={i} className="flex items-start gap-3 rounded-lg border border-charcoal-lighter bg-charcoal-light p-5">
									<span className="pt-1 text-primary">—</span>
									<p className="font-sans text-sm leading-relaxed text-secondary-foreground/70">
										{tip}
									</p>
								</div>
							)
						)}
					</div>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Local Context</Label>
					<SectionHeading>Epoxy in Wayne & North Jersey</SectionHeading>
					<p className="mb-12 font-sans text-base leading-relaxed text-secondary-foreground/70">
						If you&apos;re located in Wayne or North Jersey, epoxy flooring is especially
						 beneficial due to seasonal weather changes.
					</p>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
							<p className="mb-4 font-sans text-xs uppercase tracking-[0.16em] text-primary">
								Why It Works Here
							</p>
							<ul className="space-y-3">
								{["Handles moisture and humidity", "Resistant to salt damage (winter)", "Ideal for garages and basements"].map((item, i) => (
									<li key={i} className="flex gap-3 font-sans text-sm text-secondary-foreground/70">
										<span className="pt-1 text-primary">◆</span>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
							<p className="mb-4 font-sans text-xs uppercase tracking-[0.16em] text-secondary-foreground/60">
								Real-World Result
							</p>
							<p className="mb-5 font-serif text-base italic leading-relaxed text-secondary-foreground/70">
								A North Jersey retail store upgraded to epoxy and saw significant gains.
							</p>
							<ul className="space-y-2">
								{["40% reduction in maintenance costs", "Improved customer experience due to clean aesthetics", "Increased durability under high foot traffic"].map((item, i) => (
									<li key={i} className="flex gap-2 font-sans text-sm text-secondary-foreground/70">
										<span className="text-primary">↗</span>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section className="border-b border-charcoal-lighter py-16">
					<Label>Summary</Label>
					<SectionHeading>Conclusion</SectionHeading>
					<p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
						Epoxy flooring is more than just a surface upgrade. It&apos;s a long-term investment in durability, style, and functionality. Whether for a home garage or a large commercial facility, it delivers unmatched performance and value.
					</p>
					<p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
						If you&apos;re in Wayne or North Jersey, this flooring solution is particularly practical given its resilience against weather, moisture, and wear.
					</p>
				</section>

				<section className="border-b border-charcoal-lighter py-14">
					<Label>FAQ</Label>
					<SectionHeading>Frequently Asked Questions</SectionHeading>
					<div className="mt-8 flex flex-col">
						{faqs.map((faq, index) => (
							<div key={index} className="border-b border-charcoal-lighter">
								<button
									onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
									className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-primary"
									aria-expanded={openFAQIndex === index}
								>
									<span className={`font-serif text-base leading-relaxed transition-colors ${openFAQIndex === index ? "text-secondary-foreground" : "text-secondary-foreground/70"}`}>
										{faq.question}
									</span>
									<span className={`shrink-0 text-xl leading-none text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openFAQIndex === index ? "rotate-45" : "rotate-0"}`}>
										+
									</span>
								</button>
								<div
									className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
										openFAQIndex === index
											? "grid-rows-[1fr] opacity-100"
											: "grid-rows-[0fr] opacity-0"
									}`}
								>
									<div className="overflow-hidden">
										<div className="pb-6 font-sans text-sm leading-relaxed text-secondary-foreground/70 md:text-base">
											{faq.answer}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="py-16 md:py-20">
					<p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-primary">
						Get Started
					</p>
					<h2 className="mb-5 max-w-2xl font-serif text-3xl leading-tight text-secondary-foreground md:text-5xl">
						Ready to Upgrade Your Floors?
					</h2>
					<p className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-secondary-foreground/70">
						Contact a professional epoxy flooring specialist today and transform your space with a durable, modern finish.
					</p>
					<Link
						href="/services/epoxy-flooring"
						className="inline-flex items-center gap-3 rounded-lg border border-primary px-6 py-3 font-sans text-xs uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
					>
						Learn More About Our Services
						<span className="text-base">→</span>
					</Link>
				</section>
				</div>
			</div>
		</article>
	);
}

function Label({ children }: { children: React.ReactNode }) {
	return <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-primary">{children}</p>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="mb-5 font-serif text-3xl leading-tight text-secondary-foreground md:text-4xl">
			{children}
		</h2>
	);
}