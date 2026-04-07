"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  "Colored Decorative Concrete Services NJ with UV-stable pigments for fade-resistant patios and walkways",
  "Decorative Concrete Installation Wayne NJ with slate, stone, and hardwood-inspired finishes",
  "Custom Concrete Patio Contractors NJ for bespoke outdoor living environments",
  "Weather-resistant decorative concrete engineered for Passaic and Essex County climate",
  "High-performance artisan-grade systems that balance luxury appearance with durability",
  "Custom design options for homes, commercial spaces, and outdoor entertaining areas",
];

const WhyChooseUs = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
    <section className="bg-[#14161A] py-20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:gap-16 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <h1 className="mb-6 font-serif text-3xl font-bold text-white/90">
              Premier Custom Decorative Concrete in <span className="text-gradient-copper">New Jersey</span>
            </h1>
            <p className="mb-4 font-sans leading-relaxed text-white/70">
              TopCoat Artistry LLC sets the gold standard for high-end custom decorative concrete in NJ. As the leading decorative concrete contractors near me, we specialize in transforming standard concrete into architectural centerpieces. Serving Wayne, Newark, Paterson, and Jersey City, our &quot;artisan-grade&quot; finishes offer a seamless blend of aesthetic luxury and &quot;industrial-grade&quot; durability.
            </p>

            <h2 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
              Tailored Solutions for Elite Outdoor Living
            </h2>

            <p className="mb-4 font-sans leading-relaxed text-white/70">
              Our decorative concrete services New Jersey provide &quot;weather-resistant&quot; beauty engineered to withstand the Passaic and Essex County climate:
            </p>

            <ul className="mb-6 space-y-3 text-sm text-white/70">
              <li>• Colored Decorative Concrete Services NJ: We utilize UV-stable pigments to create vibrant, fade-resistant patios and walkways.</li>
              <li>• Decorative Concrete Installation Wayne NJ: Precision-crafted designs that authentically replicate the texture of natural slate, hand-cut stone, or hardwood.</li>
              <li>• Custom Concrete Patio Contractors NJ: We design bespoke outdoor living environments that significantly enhance property value near landmarks like Eagle Rock Reservation.</li>
            </ul>

            <h3 className="mt-6 mb-3 font-serif text-lg font-semibold text-white/90">
              The Distinction of Professional Concrete Artistry
            </h3>

            <p className="mb-8 font-sans leading-relaxed text-white/70">
              As the preferred stamped and decorative concrete contractors NJ, we bring E-E-A-T-certified expertise to every project. Whether you require decorative concrete Newark NJ or a specialized finish in Jersey City, we deliver &quot;cost-effective&quot; luxury that outperforms traditional pavers in longevity and maintenance.
            </p>
            <Button
              asChild
              className="bg-primary h-auto whitespace-normal py-3 text-center leading-snug text-primary-foreground hover:bg-copper-light"
            >
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div
            className={`transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h3 className="mb-6 font-serif text-xl font-semibold text-white/90">
              Why Homeowners and Designers Choose TopCoat
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="group relative rounded-lg bg-[#0d0f12] border border-[#282c33] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-[#111316]"
                >
                  <div className="absolute top-0 left-0 h-0.5 w-0 rounded-tl-lg bg-linear-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full" />
                  <span className="mb-3 block font-serif text-2xl font-bold text-primary/60 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm leading-relaxed text-white/80">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 font-sans text-sm leading-relaxed text-white/65">
              We combine bespoke design with long-lasting concrete performance for homes and businesses across North Jersey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
