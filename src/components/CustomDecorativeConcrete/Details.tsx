"use client";

import { useState } from "react";

const details = [
	"Custom decorative concrete installation",
	"Colored decorative concrete",
	"Custom concrete patio construction",
	"Artisan stamped concrete",
	"Weather-resistant sealing systems",
	"Decorative surface artistry",
];

const faqs = [
	{
		question: "What are the primary benefits of custom decorative concrete in NJ?",
		answer:
			"Unlike traditional masonry, custom decorative concrete NJ is structurally reinforced and sealed to resist North Jersey’s harsh freeze-thaw cycles. It provides a seamless, slip-resistant surface that eliminates weed growth and shifting.",
	},
	{
		question: "How do I select the best decorative concrete contractors near me?",
		answer:
			"Look for specialists like TopCoat Artistry LLC who offer comprehensive decorative concrete installation Wayne NJ. Our process includes advanced color matching and texture stamping to complement your home’s specific architectural style.",
	},
];

const Details = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="bg-[#0D0F12] py-20">
			<div className="container mx-auto px-4">
				<h2 className="mb-4 text-center font-serif text-3xl font-bold text-white/90">
					Bespoke Decorative Concrete Solutions for Homes & Businesses in <span className="text-gradient-copper">NJ</span>
				</h2>
				<p className="mx-auto mb-10 max-w-4xl text-center font-sans leading-relaxed text-white/70">
					TopCoat Artistry LLC provides premium custom decorative concrete in NJ, offering homeowners and commercial designers bespoke outdoor surfaces. Our expert decorative concrete services include colored, stamped, and artisan-textured finishes. We serve Wayne, Newark, and Jersey City with professional, high-performance concrete artistry.
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
									aria-controls={`custom-decorative-faq-${index}`}
									className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left font-medium text-white/90 transition-colors duration-300 hover:bg-white/5 hover:text-white"
								>
									<span>{faq.question}</span>
									<span className={`text-primary transition-transform duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`}>
										›
									</span>
								</button>
								<div
									id={`custom-decorative-faq-${index}`}
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
