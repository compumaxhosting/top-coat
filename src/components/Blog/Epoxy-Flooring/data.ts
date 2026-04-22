import type { BenefitItem, FAQItem, StepItem } from "./types";

export const faqs: FAQItem[] = [
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

export const benefits: BenefitItem[] = [
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
		body: "Seamless surface eliminates moisture ingress - ideal for basements and kitchens.",
	},
];

export const steps: StepItem[] = [
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
