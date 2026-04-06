"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const details = [
	"Garage Epoxy Floor Coating Newark NJ",
	"Garage Floor Repair Paterson NJ",
	"Garage Floor Installation Wayne NJ",
	"Commercial & Industrial epoxy flooring",
	"Weather-resistant moisture barriers",
	"Diamond-grinding surface preparation",
];

const faqs = [
	{
		question:
			"What is the best garage floor coating for New Jersey winters?",
		answer:
			"A professional epoxy floor coating with a polyaspartic topcoat is best. It resists salt corrosion from Garden State Parkway driving and prevents concrete spalling during North Jersey's freeze-thaw cycles.",
	},
	{
		question: "How much does epoxy flooring cost in North Jersey?",
		answer:
			"Epoxy flooring cost varies by square footage and surface prep needs. We offer competitive, transparent pricing for all Wayne and Essex County projects.",
	},
];

const Details = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="bg-[#0D0F12] py-20">
			<div className="container mx-auto px-4">

				{/* ✅ Technical Details */}
				<h2 className="mb-4 text-center font-serif text-3xl font-bold text-white/90">
					Trusted Epoxy Flooring Services in <span className="text-gradient-copper">Wayne, NJ</span>
				</h2>
				<p className="mx-auto mb-10 max-w-4xl text-center font-sans leading-relaxed text-white/70">
					TopCoat Artistry LLC provides expert epoxy flooring in Wayne, NJ, for homeowners and commercial businesses seeking durable, chemical-resistant surfaces. Our professional epoxy floor coating transforms damaged concrete into a seamless, high-performance floor. We serve Newark, Paterson, and Jersey City with reliable, long-lasting installations.
				</p>

				<div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
					{details.map((item) => (
						<div
							key={item}
							className="rounded-lg border border-[#282c33] bg-[#14161A] p-6 text-center hover:border-copper/40 transition"
						>
							<p className="font-sans text-sm text-white/90">{item}</p>
						</div>
					))}
				</div>

				{/* ✅ FAQ Section */}
				<div className="max-w-3xl mx-auto space-y-4">
					<h3 className="text-xl font-serif font-bold text-white/90 mb-6 text-center">
						Frequently Asked Questions
					</h3>

					{faqs.map((faq, index) => (
						<div
							key={index}
									className={`rounded-lg border bg-[#14161A] transition-all duration-300 ${
								openIndex === index
									? "border-primary/40"
									: "border-[#282c33]"
							}`}
						>
							<button
								onClick={() =>
									setOpenIndex(openIndex === index ? null : index)
								}
								aria-expanded={openIndex === index}
								aria-controls={`epoxy-faq-answer-${index}`}
								className="flex w-full items-center justify-between p-4 text-left font-medium text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-white"
							>
								<span>{faq.question}</span>
								<ChevronRight
									className={`h-5 w-5 text-white/80 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
										openIndex === index ? "rotate-90" : "rotate-0"
									}`}
								/>
							</button>

							<div
								id={`epoxy-faq-answer-${index}`}
								className={`origin-top overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
									openIndex === index
										? "max-h-40 opacity-100"
										: "max-h-0 opacity-0"
								}`}
							>
								<div className="px-4 pb-4 text-sm leading-relaxed text-white/70">
									{faq.answer}
								</div>
							</div>
						</div>
					))}
				</div>

			</div>
		</section>
	);
};

export default Details;