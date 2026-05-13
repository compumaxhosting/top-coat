import { Label, SectionHeading } from "../SectionPrimitives";

export default function ChecklistSection() {
	return (
		<section className="border-b border-charcoal-lighter py-16">
			<Label>Checklist</Label>
			<SectionHeading>Before Starting a Facade Project</SectionHeading>
			<div className="rounded-lg border border-charcoal-lighter bg-charcoal-light p-6">
				<ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
					{[
						"Inspect existing exterior condition",
						"Define performance goals",
						"Choose appropriate materials",
						"Confirm local code compliance",
						"Set budget and timeline",
						"Hire experienced facade professionals",
						"Plan for maintenance strategy",
					].map((item) => (
						<li
							key={item}
							className="font-sans text-sm text-secondary-foreground/70"
						>
							• {item}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
