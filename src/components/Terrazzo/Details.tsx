"use client";

import { useState } from "react";

const details = [
	"Residential and commercial terrazzo",
	"Terrazzo floor installation services",
	"Terrazzo floor restoration services",
	"Diamond-grinding polishing",
	"Recycled glass and stone aggregates",
	"Polished and honed finishes",
];

const faqs = [
	{
		question: "Can old terrazzo floors be restored?",
		answer:
			"Yes. Our terrazzo floor restoration services in Newark and Paterson can repair cracks and use professional-grade terrazzo polishing services to bring dull, covered floors back to a mirror-like finish.",
	},
	{
		question: "How much does terrazzo flooring cost per square foot in NJ?",
		answer:
			"Costs vary based on the aggregate (marble, glass, or stone) and the complexity of the design. We provide competitive, detailed estimates for all Wayne, NJ projects.",
	},
];

const Details = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="bg-[#0D0F12] py-20">
			<div className="container mx-auto px-4">
				<h2 className="mb-4 text-center font-serif text-3xl font-bold text-white/90">
					Professional Terrazzo Floor Installation & Restoration in <span className="text-gradient-copper">Wayne, NJ</span>
				</h2>
				<p className="mx-auto mb-10 max-w-4xl text-center font-sans leading-relaxed text-white/70">
					TopCoat Artistry LLC offers expert terrazzo flooring in Wayne, NJ, for homeowners and commercial businesses. Our team provides high-end terrazzo floor installation services and restoration to ensure a durable, elegant finish. We serve Newark, Paterson, and Jersey City with professional, long-lasting flooring solutions.
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
						FAQ
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
									aria-controls={`terrazzo-faq-${index}`}
									className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-medium text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-white"
								>
									<span>{faq.question}</span>
									<span className={`text-primary transition-transform duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`}>
										›
									</span>
								</button>
								<div
									id={`terrazzo-faq-${index}`}
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
