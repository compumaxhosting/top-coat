import Image from "next/image";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function ApplicationsSection() {
	return (
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
				].map((col) => (
					<div
						key={col.title}
						className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6"
					>
						<p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-primary">
							{col.title}
						</p>
						<ul className="space-y-3">
							{col.items.map((item) => (
								<li
									key={item}
									className="border-b border-charcoal-lighter pb-2 text-sm text-secondary-foreground/70 last:border-b-0 last:pb-0"
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<p className="mt-8 font-sans text-base leading-relaxed text-secondary-foreground/70">
				Epoxy flooring can be used in homes, garages, offices, retail stores, and
				industrial facilities due to its durability and resistance to wear and
				chemicals.
			</p>
		</section>
	);
}
