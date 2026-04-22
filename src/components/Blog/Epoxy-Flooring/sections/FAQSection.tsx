"use client";

import { useState } from "react";
import { faqs } from "../data";
import { Label, SectionHeading } from "../SectionPrimitives";

export default function FAQSection() {
	const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

	return (
		<section className="border-b border-charcoal-lighter py-14">
			<Label>FAQ</Label>
			<SectionHeading>Frequently Asked Questions</SectionHeading>
			<div className="mt-8 flex flex-col">
				{faqs.map((faq, index) => (
					<div key={faq.question} className="border-b border-charcoal-lighter">
						<button
							onClick={() =>
								setOpenFAQIndex(openFAQIndex === index ? null : index)
							}
							className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-primary"
							aria-expanded={openFAQIndex === index}
						>
							<span
								className={`font-serif text-base leading-relaxed transition-colors ${
									openFAQIndex === index
										? "text-secondary-foreground"
										: "text-secondary-foreground/70"
								}`}
							>
								{faq.question}
							</span>
							<span
								className={`shrink-0 text-xl leading-none text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
									openFAQIndex === index ? "rotate-45" : "rotate-0"
								}`}
							>
								+
							</span>
						</button>
						<div
							className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
								openFAQIndex === index
									? "grid-rows-[1fr] opacity-100"
									: "grid-rows-[0fr] opacity-0"
							}`}
						>
							<div className="overflow-hidden">
								<div className="pb-6 font-sans text-sm leading-relaxed text-secondary-foreground/70 md:text-base">
									{faq.answer}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
