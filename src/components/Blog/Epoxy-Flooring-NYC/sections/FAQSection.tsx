"use client";

import { useState } from "react";
import { Label, SectionHeading } from "../SectionPrimitives";

const faqs = [
  {
    question: "Is epoxy flooring suitable for industrial facilities?",
    answer:
      "Yes. Heavy-duty epoxy flooring systems can be suitable for warehouses, manufacturing facilities, automotive spaces, workshops, and other demanding environments. The system should be selected according to the facility's traffic, impact, chemical exposure, slip-resistance, and cleaning requirements.",
  },
  {
    question: "What is the best flooring for concrete garages in Wayne, NJ?",
    answer:
      "Epoxy and polyaspartic coatings are both popular choices for concrete garages. Epoxy offers durability and numerous decorative options, while polyaspartic systems can provide fast curing and excellent UV resistance. The best option depends on the garage's condition, use, and performance requirements.",
  },
  {
    question: "Can epoxy flooring handle heavy traffic and chemicals?",
    answer:
      "Yes. Properly selected epoxy systems can handle significant pedestrian and vehicle traffic and provide resistance to many common chemicals. Industrial facilities should use a system specifically designed for their particular chemical and mechanical exposure.",
  },
  {
    question: "What is the difference between epoxy and other floor coatings?",
    answer:
      "Epoxy is a resin-based coating that chemically cures into a durable surface bonded to prepared concrete. Polyaspartic coatings generally cure faster and offer strong UV resistance, while polished concrete uses mechanical grinding and polishing rather than a resin coating. The right choice depends on the property's needs.",
  },
  {
    question: "Is epoxy flooring worth it for an NYC-area property?",
    answer:
      "For many properties, yes. Epoxy can provide a combination of durability, appearance, stain resistance, and easy maintenance. It can be particularly valuable for garages, commercial facilities, workshops, and other areas where concrete receives heavy use.",
  },
  {
    question: "How do I know if I need epoxy flooring?",
    answer:
      "Consider epoxy if you have a concrete floor that experiences vehicle traffic, heavy foot traffic, stains, chemicals, moisture, or significant daily wear. A professional flooring contractor can inspect the concrete and determine whether epoxy or another coating system is the better solution.",
  },
];

export default function FAQSection() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  return (
    <section className="border-b border-charcoal-lighter py-16" id="faq">
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
