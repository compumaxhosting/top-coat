import { Label, SectionHeading } from "../SectionPrimitives";

export default function EEATSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>EEAT Signals</Label>
			<SectionHeading>How to Demonstrate Expertise and Trust</SectionHeading>
			<p className="mb-8 font-sans text-base leading-relaxed text-secondary-foreground/70">
				Use these trust signals to strengthen authority for facade-related content
				and services.
			</p>
			<div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
				<ul className="space-y-2 font-sans text-sm text-secondary-foreground/70">
					<li>• Use certified contractors with licensed experience.</li>
					<li>• Follow NJ building regulations.</li>
					<li>• Use quality-tested materials.</li>
					<li>• Document project stages with reports and inspections.</li>
					<li>• Maintain safety compliance during installation.</li>
				</ul>
				<p className="mt-4 font-sans text-sm leading-relaxed text-secondary-foreground/70">
					Including case studies, project photos, and client testimonials
					strengthens authority and trust.
				</p>
			</div>
		</section>
	);
}
