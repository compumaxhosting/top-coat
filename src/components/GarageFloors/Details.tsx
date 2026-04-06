"use client";

import { useState } from "react";

const details = [
	"Garage epoxy floor coating Newark NJ",
	"Garage floor repair Paterson NJ",
	"Garage floor installation Wayne NJ",
	"Weather-resistant epoxy systems",
	"Diamond-grinding concrete preparation",
	"Garage floor resurfacing near me NJ",
];

const faqs = [
	{
		question: "What is the best garage floor coating for NJ weather?",
		answer:
			"For the Garden State, a multi-layer epoxy system with a polyaspartic topcoat is ideal. It resists road salt, prevents moisture peeling, and handles the \"hot-tire pickup\" common during humid Jersey summers.",
	},
	{
		question: "How long does garage floor installation take?",
		answer:
			"Most garage floor installation Wayne NJ projects are completed in just 24–48 hours, providing a rapid return-to-service for local homeowners.",
	},
];

const Details = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="bg-[#0D0F12] py-20">
			<div className="container mx-auto px-4">
				<h2 className="mb-4 text-center font-serif text-3xl font-bold text-white/90">
					Technical <span className="text-gradient-copper">Details</span>
				</h2>
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
									aria-controls={`garage-faq-${index}`}
									className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-medium text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-white"
								>
									<span>{faq.question}</span>
									<span className={`text-primary transition-transform duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`}>
										›
									</span>
								</button>
								<div
									id={`garage-faq-${index}`}
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
