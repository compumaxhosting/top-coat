import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 lg:pt-28 pb-5">
    {/* BACKGROUND IMAGE */}
    <div className="absolute inset-0">
      <Image
        src="/Images/Hero-section.webp"
        alt="Epoxy flooring installation in New Jersey luxury showroom with metallic finish"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/65" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black/70 to-transparent sm:h-36" />
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

    {/* CONTENT */}
    <div className="relative z-10 container mx-auto px-4 text-center">
      <div className="mx-auto max-w-4xl">
        {/* TOP TAGLINE */}
        <p className="mb-6 text-sm font-sans uppercase tracking-[0.3em] text-white/90">
          Epoxy Flooring & Decorative Concrete Experts in New Jersey
        </p>

        {/* 🔥 MAIN H1 (CRITICAL FOR SEO) */}
        <h1 className="mb-6 text-5xl leading-[1.08] font-bold font-serif text-white/95 md:text-7xl lg:text-8xl">
          Epoxy Flooring & Decorative Concrete{" "}
          <span className="text-gradient-copper">in New Jersey</span>
        </h1>

        {/* SUPPORTING TEXT (KEYWORD RICH) */}
        <p className="mx-auto mb-10 max-w-2xl text-lg font-sans text-white md:text-xl">
          20+ years of experience delivering premium epoxy flooring, terrazzo,
          stamped concrete, and custom decorative concrete solutions for
          residential, commercial, and industrial spaces.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary px-8 py-6 text-base font-sans tracking-wide text-primary-foreground hover:bg-copper-light cursor-pointer"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Link href="/#portfolio">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 bg-[#0d0f12] px-8 py-6 text-base font-sans tracking-wide text-white hover:border-primary hover:bg-transparent cursor-pointer"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Our Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
