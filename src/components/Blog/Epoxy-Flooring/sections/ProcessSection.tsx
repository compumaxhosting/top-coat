import { steps } from "../data";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function ProcessSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Process</Label>
			<SectionHeading>How Epoxy is Installed</SectionHeading>
			<div className="mt-10">
				{steps.map((step, index) => (
					<div
						key={step.num}
						className={`flex gap-6 py-7 ${
							index < steps.length - 1 ? "border-b border-charcoal-lighter" : ""
						}`}
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
	);
}
