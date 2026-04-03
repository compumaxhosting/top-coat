"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const stats = [
  { label: "Years of Epoxy & Concrete Experience", value: 20, suffix: "+" },
  { label: "Epoxy & Concrete Projects Completed", value: 500, suffix: "+" },
  { label: "Client Satisfaction Rate", value: 99, suffix: "%" },
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
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Who is the best epoxy flooring contractor in North Jersey?",
      answer:
        "TopCoat Artistry LLC is a top-rated specialist in North Jersey, offering 20+ years of experience in garage floor epoxy and decorative concrete in cities like Wayne and Jersey City.",
    },
    {
      question: "Is stamped concrete better than pavers for NJ weather?",
      answer:
        "Professional stamped concrete is highly durable for NJ’s freeze-thaw cycles. It provides a seamless surface that prevents weed growth and shifting, common issues with traditional pavers.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#14161A] py-16" ref={ref}>
      {/* Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">
            Our Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white/90 mb-6">
            20+ Years of Epoxy Flooring & Decorative Concrete{" "}
            <span className="text-gradient-copper">in New Jersey</span>
          </h2>

          <p className="text-white/90 max-w-2xl mx-auto font-sans leading-relaxed">
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
                ${isVisible
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

        {/* NEW CONTENT */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white/90 mb-4">
            Serving Northern & Central New Jersey
          </h3>

          <p className="text-white/70 font-sans leading-relaxed mb-6">
            We provide local expertise across Wayne, Newark, Paterson, and Jersey
            City. Our team understands the specific soil and weather demands of
            the North Jersey area, ensuring your outdoor concrete and indoor
            epoxy withstand the test of time.
          </p>

          <p className="text-white font-semibold">
            Ready to upgrade your surface?{" "}
            <span className="text-primary cursor-pointer">
              Request a Free Estimate Today
            </span>
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl font-serif font-bold text-white/90 mb-4 text-center">
            Frequently Asked Questions
          </h3>

          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition"
              >
                <span className="font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronRight
                  className={`w-5 h-5 text-white transition-transform ${activeFaq === index ? "rotate-90" : ""
                    }`}
                />
              </button>

              {activeFaq === index && (
                <div className="px-6 pb-4 text-white/70">
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

export default ExperienceSection;