"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Years of Epoxy & Concrete Experience", value: 20, suffix: "+" },
  { label: "Epoxy & Concrete Projects Completed", value: 500, suffix: "+" },
  { label: "Client Satisfaction Rate", value: 99, suffix: "%" },
];

// ✅ Expanded 10-question FAQ matching the FAQPage schema
const faqs = [
  {
    question: "What is epoxy flooring?",
    answer:
      "Epoxy flooring is a coating system applied to properly prepared concrete surfaces. It creates a durable, seamless finish that can improve floor appearance and help protect against everyday wear, stains, and moisture exposure.",
  },
  {
    question: "How long does epoxy flooring last?",
    answer:
      "The lifespan of epoxy flooring depends on surface preparation, coating quality, installation, traffic, and maintenance. A professionally installed and properly maintained system can provide many years of service.",
  },
  {
    question: "Is epoxy flooring suitable for residential garages?",
    answer:
      "Yes. Epoxy flooring is a popular option for residential garages because it creates an attractive, durable surface that is generally easier to clean than untreated concrete.",
  },
  {
    question: "Can epoxy flooring be customized?",
    answer:
      "Yes. Depending on the selected coating system, epoxy floors can be customized with different colors, decorative flakes, metallic effects, and finish options.",
  },
  {
    question: "Is epoxy flooring suitable for commercial properties?",
    answer:
      "Yes. Epoxy flooring can be suitable for many commercial environments. The appropriate system depends on traffic levels, operational requirements, chemical exposure, and the condition of the existing concrete.",
  },
  {
    question:
      "What is the difference between epoxy flooring and decorative concrete?",
    answer:
      "Epoxy flooring uses a resin-based coating system applied to concrete, while decorative concrete focuses on enhancing the appearance of concrete through colors, textures, patterns, and specialized finishes.",
  },
  {
    question: "Does epoxy flooring require special maintenance?",
    answer:
      "Epoxy flooring generally requires regular sweeping and cleaning with suitable cleaning products. Avoiding harsh chemicals and abrasive cleaning methods can help maintain its appearance.",
  },
  {
    question: "How should concrete be prepared before epoxy installation?",
    answer:
      "Concrete preparation may involve cleaning, removing contaminants, repairing cracks, and mechanically preparing the surface. Proper preparation is essential for coating adhesion and performance.",
  },
  {
    question: "Can existing concrete floors be coated?",
    answer:
      "Many existing concrete floors can be coated after proper inspection and preparation. The condition, moisture level, contamination, and previous coatings must be evaluated before selecting a suitable system.",
  },
  {
    question:
      "Does TopCoat Artistry LLC provide flooring services in New Jersey?",
    answer:
      "TopCoat Artistry LLC offers epoxy flooring and decorative concrete solutions in New Jersey. Contact the company to discuss your location and project requirements.",
  },
];

const delayClasses = ["delay-0", "delay-200", "delay-300"];

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span className="text-5xl md:text-6xl font-serif font-bold text-gradient-copper">
      {count}
      {suffix}
    </span>
  );
}

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#14161A] py-14 md:py-16" ref={ref}>
      {/* Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">
            Our Experience
          </p>

          <h2
            id="our-experience"
            className="text-3xl md:text-4xl font-serif font-bold text-white/90 mb-6"
          >
            20+ Years of Epoxy Flooring &amp; Decorative Concrete{" "}
            <span className="text-gradient-copper">in New Jersey</span>
          </h2>

          <p className="text-white/90 max-w-3xl mx-auto font-sans leading-relaxed">
            With over two decades of experience in epoxy flooring, terrazzo
            installation, and decorative concrete services in New Jersey, we
            have completed hundreds of residential, commercial, and industrial
            projects with precision and durability.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`bg-[#14161A] border border-white/10 text-center p-8 rounded-lg transition-all duration-700
                ${delayClasses[i] ?? "delay-0"}
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                active={isVisible}
              />

              <p className="text-muted-foreground font-sans text-sm mt-3 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* SERVICE AREA */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white/90 mb-4">
            Serving Northern &amp; Central New Jersey
          </h3>

          <p className="text-white/70 font-sans leading-relaxed mb-6">
            We provide local expertise across Wayne, Newark, Paterson, and Jersey
            City. Our team understands the specific soil and weather demands of
            the North Jersey area, ensuring your outdoor concrete and indoor
            epoxy withstand the test of time.
          </p>

          <p className="text-white font-semibold">
            Ready to upgrade your surface?{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline transition-colors"
            >
              Request a Free Estimate Today &rarr;
            </Link>
          </p>
        </div>

        {/* ✅ EXPANDED FAQ SECTION – 10 questions */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h2
            id="faq"
            className="text-2xl md:text-3xl font-serif font-bold text-white/90 mb-6 text-center"
          >
            Frequently Asked Questions About Epoxy Flooring and Decorative
            Concrete
          </h2>

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-lg border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/40 bg-white/3"
                    : "border-white/10 bg-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-6 py-4 flex justify-between items-center text-left transition-colors duration-300 hover:bg-white/5"
                >
                  <span className="font-semibold text-white">
                    {faq.question}
                  </span>

                  <ChevronRight
                    className={`h-5 w-5 text-white/90 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex-shrink-0 ml-3 ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={`origin-top overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "max-h-56 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-white/70 leading-relaxed">
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

export default ExperienceSection;
