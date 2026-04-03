"use client";

import { useState } from "react";

const details = [
	"Self-leveling epoxy systems",
	"Metallic epoxy coatings",
	"Anti-static flooring",
	"Chemical-resistant coatings",
	"High-build mortar systems",
	"Decorative flake systems",
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
				<h2 className="mb-8 text-center font-serif text-3xl font-bold text-white/90">
					Technical <span className="text-gradient-copper">Details</span>
				</h2>

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
							className="border border-[#282c33] rounded-lg bg-[#14161A]"
						>
							<button
								onClick={() =>
									setOpenIndex(openIndex === index ? null : index)
								}
								className="w-full text-left p-4 font-medium text-white/90 hover:text-white transition"
							>
								{faq.question}
							</button>

							{openIndex === index && (
								<div className="px-4 pb-4 text-sm text-white/70 leading-relaxed">
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>

			</div>
		</section>
	);
};

export default Details;