"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section className="relative overflow-hidden py-14 md:pt-16 md:pb-12" ref={ref}>
      <div className="absolute inset-0 bg-linear-to-b from-[#14161A] via-[#1B1F27] to-[#14161A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div
        className={`relative container mx-auto px-4 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* 🔥 SEO H2 */}
        <h2 className="mb-6 font-serif text-3xl font-bold text-[#efece7] md:text-4xl">
          Get a Free Quote for Epoxy Flooring & <br />Decorative Concrete{" "}
          <span className="text-gradient-copper">in New Jersey</span>
        </h2>

        {/* SEO PARAGRAPH */}
        <p className="mx-auto mb-10 max-w-3xl font-sans text-lg text-[#818898]">
          Looking for a reliable epoxy flooring contractor in New Jersey?
          Contact our team today for a free consultation on terrazzo, stamped
          concrete, garage coatings, and custom decorative concrete solutions.
        </p>

        {/* CTA */}
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-primary h-auto whitespace-normal px-6 py-3 text-center text-base font-sans leading-snug text-primary-foreground hover:bg-copper-light md:px-10 md:py-4 cursor-pointer"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        {/* New paragraph added after existing content */}
        <h3 className="mb-6 font-serif text-3xl  font-bold text-[#efece7] md:text-4xl pt-8 md:pt-8">New Jersey’s Trusted Choice for Epoxy & <br />Decorative Concrete.</h3>
        <p className="mx-auto mb-10 max-w-5xl font-sans text-lg text-[#818898]">
          TopCoat Artistry LLC provides expert epoxy flooring and decorative concrete services in Wayne, Newark,
          and Jersey City, NJ. Specializing in terrazzo, stamped concrete, and garage coatings, we offer durable,
          high-end finishes. With 20 years of experience, we deliver custom surface solutions for residential
          and commercial clients.
        </p><br />
        <p className="text-copper-light leading-relaxed">Proudly serving Wayne, Newark, Paterson, Jersey City & nearby NJ communities</p>
      </div>
    </section>
  );
};

export default CTASection;
