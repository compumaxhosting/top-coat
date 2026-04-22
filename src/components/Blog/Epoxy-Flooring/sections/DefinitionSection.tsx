import { Label, SectionHeading } from "../SectionPrimitives";

export default function DefinitionSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Definition</Label>
			<SectionHeading>What is Epoxy Flooring?</SectionHeading>
			<p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
				Epoxy flooring is a surface coating made by mixing resin and hardener to
				create a strong, durable plastic-like material. Once applied, it bonds
				tightly to concrete floors, forming a seamless and resistant surface.
			</p>
			<blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
				A protective and decorative coating applied over concrete surfaces, known
				for its durability, chemical resistance, and high-gloss finish.
			</blockquote>
		</section>
	);
}
