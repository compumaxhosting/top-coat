"use client";

import { useState } from "react";
import { Label, SectionHeading } from "../SectionPrimitives";

const faqs = [
  {
    question: "What are building facade solutions?",
    answer:
      "Exterior systems such as cladding, waterproofing, insulation, and restoration that improve durability, energy efficiency, and appearance.",
  },
  {
    question: "Why are facades important in New Jersey?",
    answer:
      "New Jersey weather includes snow, rain, humidity, and storms. Facades protect buildings from these environmental challenges.",
  },
  {
    question: "How long does a facade project take?",
    answer:
      "Timelines vary by project size and complexity. Small projects may take weeks, while larger renovations can take several months.",
  },
  {
    question: "Do facade upgrades increase property value?",
    answer:
      "Yes. Modern exteriors improve curb appeal, energy performance, and structural integrity, which can increase property value.",
  },
  {
    question: "What is the difference between cladding and curtain wall systems?",
    answer:
      "Cladding is an exterior protective layer, while a curtain wall is a lightweight, non-structural exterior wall system often used in commercial buildings.",
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
