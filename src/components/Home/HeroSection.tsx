import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-18 lg:pt-28 pb-5">
    {/* Background Image */}
    <div className="absolute inset-0 -z-10">
      <Image
        src="/Images/Hero-section.webp"
        alt="Epoxy Flooring & Decorative Concrete in New Jersey"
        fill
        priority
        quality={55}
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent sm:h-36" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 text-center">
      <div className="mx-auto max-w-5xl">
        {/* Top Tagline */}
        <p className="py-6 text-sm uppercase tracking-[0.3em] text-white/90">
          Epoxy Flooring & Decorative Concrete in New Jersey
        </p>

        {/* Main Heading */}
        <h1 className="mb-6 text-4xl font-bold leading-[1.08] text-amber-300 md:text-5xl lg:text-6xl">
          Epoxy Flooring & Decorative Concrete
          <br />
          <span className="text-white text-3xl md:text-4xl lg:text-5xl">Experts in New Jersey</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mb-4 max-w-6xl text-md text-white md:text-xl">
         We provide epoxy flooring and decorative concrete solutions for residential, commercial, and industrial spaces across New Jersey.
        </p>

        <p className="mx-auto mb-4 max-w-6xl text-md text-white/90 md:text-lg">
          With 20+ years of experience, we deliver epoxy garage floors, commercial coatings, terrazzo, stamped, and decorative concrete built for durability and design.

        </p>

        <p className="mx-auto mb-6 max-w-6xl text-md text-white/90 md:text-lg">
          Serving Newark, Jersey City, Trenton, and surrounding areas.

        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <Link href="/contact" prefetch={false}>
            <Button
              size="lg"
              className="bg-primary px-8 py-6 text-base font-medium text-primary-foreground hover:bg-primary/90"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
