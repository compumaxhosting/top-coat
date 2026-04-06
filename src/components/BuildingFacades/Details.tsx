"use client";

import { useState } from "react";

const details = [
	"Facade restoration contractors NJ",
	"Facade waterproofing services New Jersey",
	"Building exterior facade repair NJ",
	"Exterior building renovation services NJ",
	"Commercial and residential facade repair",
	"Weather-resistant exterior solutions",
];

const faqs = [
	{
		question: "How do I find reliable building facade repair near me?",
		answer:
			"Look for building facade contractors New Jersey with local expertise in facade waterproofing services New Jersey. TopCoat Artistry LLC offers specialized local repair for Wayne and Newark businesses to ensure long-term structural integrity.",
	},
	{
		question: "How often does a building need facade restoration?",
		answer:
			"In North Jersey, facades should be inspected every 5–10 years due to humidity and road salt. Our facade restoration contractors NJ provide cost-effective maintenance to prevent expensive structural damage.",
	},
];

const Details = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="bg-[#0D0F12] py-20">
			<div className="container mx-auto px-4">
				<h2 className="mb-4 text-center font-serif text-3xl font-bold text-white/90">
					Expert Facade Restoration & Exterior Building Renovation Services <span className="text-gradient-copper">NJ</span>
				</h2>
				<p className="mx-auto mb-10 max-w-4xl text-center font-sans leading-relaxed text-white/70">
					TopCoat Artistry LLC is a leading building facade contractor in New Jersey, providing homeowners and commercial managers with expert facade restoration services. We offer durable exterior building renovation services NJ to enhance aesthetics and structural integrity in Wayne, Newark, Paterson, and Jersey City.
				</p>
				<div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{details.map((item) => (
						<div key={item} className="rounded-lg border border-[#282c33] bg-[#14161A] p-6 text-center">
							<p className="font-sans text-sm text-white/90">{item}</p>
						</div>
					))}
				</div>

				<div className="mx-auto mt-16 max-w-3xl space-y-4">
					<h3 className="mb-6 text-center font-serif text-xl font-bold text-white/90">
						Frequently Asked Questions
					</h3>

					{faqs.map((faq, index) => {
						const isOpen = openIndex === index;

						return (
							<div
								key={faq.question}
								className={`rounded-lg border bg-[#14161A] transition-all duration-300 ${
									isOpen ? "border-primary/40" : "border-[#282c33]"
								}`}
							>
								<button
									onClick={() => setOpenIndex(isOpen ? null : index)}
									aria-expanded={isOpen}
									aria-controls={`facade-faq-${index}`}
									className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-medium text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-white"
								>
									<span>{faq.question}</span>
									<span className={`text-primary transition-transform duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`}>
										›
									</span>
								</button>
								<div
									id={`facade-faq-${index}`}
									className={`origin-top overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
										isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
									}`}
								>
									<div className="px-4 pb-4 text-sm leading-relaxed text-white/70">
										{faq.answer}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Details;
