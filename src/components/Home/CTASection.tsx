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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary h-auto whitespace-normal px-6 py-3 text-center text-base font-sans leading-snug text-primary-foreground hover:bg-copper-light md:px-10 md:py-4 cursor-pointer"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="tel:+12013152633">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-primary/40 bg-primary/10 h-auto whitespace-normal px-6 py-3 text-center text-base font-sans leading-snug text-white hover:bg-primary/20 md:px-10 md:py-4 cursor-pointer"
            >
              Call (201) 315-2633
            </Button>
          </a>
        </div>
        {/* New paragraph added after existing content */}
        <h3 className="font-serif text-xl  font-bold text-[#efece7] md:text-4xl pt-8 md:pt-8">Premium Epoxy Flooring & Decorative Concrete in NJ & NYC </h3>
        <h3 className="mb-6 font-serif text-xl  font-bold text-[#efece7] md:text-3xl">– Serving Wayne, Newark, Paterson, Jersey City & Bergen County</h3>
        <p className="mx-auto  max-w-5xl font-sans text-lg text-[#818898]">
          TopCoat Artistry LLC serves Wayne, Newark, Paterson, Jersey City, New York City & Bergen County towns—Paramus, Ridgewood, Glen Rock, Saddle River, Upper Saddle River, Ramsey, Mahwah, Midland Park, Hillsdale, Teaneck, Montvale, River Vale, Westwood, Park Ridge—and Montville in Morris County, offering epoxy flooring, garage floor coatings, terrazzo, stamped concrete, and custom decorative surfaces in NJ & NYC.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
