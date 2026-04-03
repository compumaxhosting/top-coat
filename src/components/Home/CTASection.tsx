"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section className="relative overflow-hidden py-24" ref={ref}>
      <div className="absolute inset-0 bg-linear-to-b from-[#14161A] via-[#1B1F27] to-[#14161A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div
        className={`relative container mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* 🔥 SEO H2 */}
        <h2 className="mb-6 font-serif text-4xl font-bold text-[#efece7] md:text-6xl">
          Get a Free Quote for Epoxy Flooring & Decorative Concrete{" "}
          <span className="text-gradient-copper">in New Jersey</span>
        </h2>

        {/* SEO PARAGRAPH */}
        <p className="mx-auto mb-10 max-w-xl font-sans text-lg text-[#818898]">
          Looking for a reliable epoxy flooring contractor in New Jersey?
          Contact our team today for a free consultation on terrazzo, stamped
          concrete, garage coatings, and custom decorative concrete solutions.
        </p>

        {/* CTA */}
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-primary px-10 py-7 text-lg font-sans tracking-wide text-primary-foreground hover:bg-copper-light cursor-pointer"
          >
            Get Free Quote Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        {/* New paragraph added after existing content */}
        <h3 className="mb-6 font-serif text-3xl font-bold text-[#efece7] md:text-4xl pt-4 md:pt-8">New Jersey’s Trusted Choice for Epoxy & Decorative Concrete.</h3>
        <p className="text-[#818898] leading-relaxed">
          TopCoat Artistry LLC provides expert epoxy flooring and decorative concrete services in Wayne, Newark,
          and Jersey City, NJ. Specializing in terrazzo, stamped concrete, and garage coatings, we offer durable,
          high-end finishes. With 20 years of experience, we deliver custom surface solutions for residential
          and commercial clients.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
