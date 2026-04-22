import { Label, SectionHeading } from "../SectionPrimitives";

export default function WhyChooseSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Why Choose</Label>
			<SectionHeading>Why Choose Epoxy Flooring?</SectionHeading>
			<p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
				Epoxy flooring is chosen for its strength, longevity, and sleek appearance.
				It outperforms traditional flooring options like tiles or vinyl in demanding
				environments.
			</p>
			<p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
				Epoxy flooring is ideal because it offers durability, resistance to damage,
				easy maintenance, and a modern finish, making it suitable for both homes
				and businesses.
			</p>
		</section>
	);
}
