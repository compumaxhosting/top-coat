"use client";

import { useState } from "react";
import { Label, SectionHeading } from "../SectionPrimitives";

const faqs = [
    {
        question: "What is the best garage floor coating in Wayne NJ?",
        answer:
            "Epoxy combined with a polyaspartic topcoat provides excellent durability, chemical resistance, UV protection, and long-term performance for most residential garages.",
    },
    {
        question: "How long does epoxy garage flooring last?",
        answer:
            "Professionally installed epoxy flooring can last 10 to 20 years depending on traffic, maintenance, and coating quality.",
    },
    {
        question: "Is garage floor coating worth the investment?",
        answer:
            "Yes. It protects concrete, improves appearance, increases property value, reduces maintenance, and extends the life of your garage floor.",
    },
    {
        question: "Can damaged concrete be coated?",
        answer:
            "Yes. Most cracks and surface imperfections can be repaired before coating through professional concrete restoration and preparation.",
    },
    {
        question: "How long before I can park my car?",
        answer:
            "Most polyaspartic systems allow vehicle traffic within 24 to 48 hours, although curing time varies by product and weather conditions.",
    },
    {
        question: "Are epoxy floors slippery?",
        answer:
            "Professional systems include textured finishes or decorative flakes that improve slip resistance while maintaining an attractive appearance.",
    },
];

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
                            onClick={() => setOpenFAQIndex(openFAQIndex === index ? null : index)}
                            className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-primary"
                            aria-expanded={openFAQIndex === index}
                        >
                            <span
                                className={`font-serif text-base leading-relaxed transition-colors ${openFAQIndex === index
                                        ? "text-secondary-foreground"
                                        : "text-secondary-foreground/70"
                                    }`}
                            >
                                {faq.question}
                            </span>
                            <span
                                className={`shrink-0 text-xl leading-none text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openFAQIndex === index ? "rotate-45" : "rotate-0"
                                    }`}
                            >
                                +
                            </span>
                        </button>
                        <div
                            className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openFAQIndex === index
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
