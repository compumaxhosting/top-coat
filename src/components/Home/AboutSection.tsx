"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section className="bg-[#14161a] py-14 md:py-16" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 items-center gap-6 md:gap-16 lg:grid-cols-2">
          {/* IMAGE */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/Images/building-facade2.webp"
                alt="Decorative concrete contractor applying textured surface finish in New Jersey"
                width={900}
                height={1000}
                quality={60}
                loading="lazy"
                className="h-125 w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-transparent" />
            </div>
            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-lg border-2 border-primary/30" />
          </div>

          {/* CONTENT */}
          <div
            className={`order-1 lg:order-2 transition-all delay-200 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <p className="mb-3 text-sm font-sans uppercase tracking-[0.3em] text-primary">
              About TopCoat Artistry LLC
            </p>

            {/* ✅ SEO H2 */}
            <h2
              id="about-topcoat"
              className="mb-6 font-serif text-4xl font-bold text-white/90 md:text-5xl"
            >
              About TopCoat Artistry LLC
            </h2>

            {/* ✅ Updated SEO content */}
            <p className="mb-4 font-sans leading-relaxed text-white/70">
              TopCoat Artistry LLC provides professional epoxy flooring and
              decorative concrete solutions for residential and commercial
              properties throughout New Jersey. We focus on creating attractive,
              durable, and functional flooring surfaces that complement each
              property&apos;s design and everyday requirements.
            </p>

            <p className="mb-4 font-sans leading-relaxed text-white/70">
              From custom garage floor coatings to commercial flooring systems
              and decorative concrete finishes, our team offers flooring
              solutions designed around different spaces, surface conditions, and
              aesthetic preferences.
            </p>

            <p className="mb-4 font-sans leading-relaxed text-white/70">
              Whether you are upgrading your garage, improving a commercial
              facility, or looking for a distinctive decorative flooring finish,
              TopCoat Artistry LLC can help you explore suitable options for
              your project.
            </p>

            <p className="mb-8 font-sans leading-relaxed text-white/70">
              Our goal is to deliver quality workmanship, attention to detail,
              and flooring solutions that combine appearance, durability, and
              practical performance.
            </p>

            <h3 className="mb-4 font-serif text-2xl font-bold text-white/90 md:text-3xl">
              Professional Surfacing &amp; Masonry Services
            </h3>

            <ul className="mb-8 list-disc space-y-2 pl-5 text-white/70">
              <li>
                <strong>
                  <Link href="/services/epoxy-flooring-wayne-new-jersey">
                    Epoxy Flooring &amp; Garage Coatings
                  </Link>
                  :
                </strong>{" "}
                High-performance, slip-resistant finishes for Newark garages and
                industrial basements.
              </li>
              <li>
                <strong>
                  <Link href="/services/stamped-concrete-contractors-wayne-nj">
                    Decorative Stamped Concrete
                  </Link>
                  :
                </strong>{" "}
                Elegant patterns for patios and walkways that mimic stone or
                brick.
              </li>
              <li>
                <strong>
                  <Link href="/services/terrazzo-flooring-contractors-wayne-nj">
                    Terrazzo &amp; Custom Concrete
                  </Link>
                  :
                </strong>{" "}
                Seamless, high-end interior flooring for modern homes and retail
                spaces.
              </li>
              <li>
                <strong>
                  <Link href="/services/building-facade-contractors-wayne-nj">
                    Building Facades
                  </Link>
                  :
                </strong>{" "}
                Expert masonry restoration to enhance curb appeal and structural
                integrity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
