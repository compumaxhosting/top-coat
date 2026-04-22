import { Label, SectionHeading } from "../SectionPrimitives";

export default function ConclusionSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Summary</Label>
			<SectionHeading>Conclusion</SectionHeading>
			<p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
				Epoxy flooring is more than just a surface upgrade. It&apos;s a long-term
				investment in durability, style, and functionality. Whether for a home
				garage or a large commercial facility, it delivers unmatched performance and
				value.
			</p>
			<p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
				If you&apos;re in Wayne or North Jersey, this flooring solution is particularly
				practical given its resilience against weather, moisture, and wear.
			</p>
		</section>
	);
}
