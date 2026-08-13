"use client";

import { useState } from "react";
import { Label, SectionHeading } from "../SectionPrimitives";

const faqs = [
  {
    question: "Is stamped concrete good for New Jersey weather?",
    answer:
      "Yes. Stamped concrete can be suitable for New Jersey properties when it is properly designed and installed. Drainage, base preparation, control joints, curing, and appropriate sealing are important considerations because outdoor surfaces are exposed to seasonal temperature changes and freeze-thaw conditions.",
  },
  {
    question: "Is stamped concrete good for a driveway?",
    answer:
      "Yes. Stamped concrete can be used to create decorative driveways that resemble brick, slate, stone, or cobblestone. Because driveways receive vehicle traffic, the project should be designed around the property's soil, drainage, base conditions, concrete requirements, and expected loads.",
  },
  {
    question: "Can stamped concrete be used for patios?",
    answer:
      "Yes. Patios are a popular application for stamped concrete. Homeowners can select patterns, colors, textures, and borders to create an outdoor surface that complements the home's architecture and landscaping.",
  },
  {
    question: "How long does stamped concrete last?",
    answer:
      "A properly installed and maintained stamped concrete surface can provide many years of service. Its lifespan depends on installation quality, soil conditions, drainage, weather exposure, traffic, maintenance, and the condition of the concrete.",
  },
  {
    question: "Can existing concrete be resurfaced?",
    answer:
      "In some situations, concrete resurfacing services may be possible. However, the existing slab should be evaluated first. Significant structural problems, movement, moisture issues, or extensive deterioration may require a different solution rather than simply applying a decorative overlay.",
  },
  {
    question: "What stamped concrete patterns are available?",
    answer:
      "Popular patterns include slate, flagstone, ashlar slate, cobblestone, brick, tile, and natural-stone designs. Patterns can also be combined with different colors and borders for a more customized result.",
  },
  {
    question: "Does stamped concrete need sealing?",
    answer:
      "Exterior stamped concrete can benefit from an appropriate sealer. Sealing can help protect the decorative surface from moisture, stains, UV exposure, and general wear. The correct sealer and maintenance schedule depend on the surface and application.",
  },
  {
    question: "How do I choose a stamped concrete contractor?",
    answer:
      "Look for a contractor with relevant project experience, clear communication, appropriate preparation methods, examples of completed work, and a detailed estimate explaining what is included. Ask questions about drainage, joints, curing, sealing, maintenance, and the materials being used.",
  },
];

export default function FAQSection() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  return (
    <section className="border-b border-charcoal-lighter py-16" id="nine">
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
