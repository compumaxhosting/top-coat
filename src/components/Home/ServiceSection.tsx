"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Service = {
  title: string;
  desc: string;
  image: string;
  path: string;
  alt: string;
  animationDelayClass: string;
};

const services: Service[] = [
  {
    title: "Epoxy Flooring NJ",
    desc: "High-performance epoxy flooring systems in New Jersey for commercial, industrial, and residential spaces. Durable, chemical-resistant, and built to last.",
    image: "/Images/Service-Epoxy-Flooring.webp",
    path: "/services/epoxy-flooring",
    alt: "Epoxy flooring contractor in New Jersey installing commercial epoxy floor coating",
    animationDelayClass: "delay-0",
  },
  {
    title: "Terrazzo Flooring Installation",
    desc: "Luxury terrazzo flooring installation in NJ for corporate lobbies, hotels, and high-end interiors with timeless durability and elegance.",
    image: "/Images/terrazzo.webp",
    path: "/services/terrazzo",
    alt: "Terrazzo flooring installation in New Jersey commercial building lobby",
    animationDelayClass: "delay-100",
  },
  {
    title: "Building Facade Concrete Finishes",
    desc: "Modern decorative concrete facade solutions in New Jersey using vertical overlays and textured finishes for architectural impact.",
    image: "/Images/Building-Facade-Renovation.webp",
    path: "/services/building-facades",
    alt: "Decorative concrete building facade finish in New Jersey modern architecture",
    animationDelayClass: "delay-200",
  },
  {
    title: "Garage Floor Epoxy Coatings",
    desc: "Garage epoxy flooring in NJ with anti-slip coatings, decorative flakes, and high durability for residential and commercial garages.",
    image: "/Images/garage-floor.webp",
    path: "/services/garage-floors",
    alt: "Garage epoxy flooring coating with flakes in New Jersey residential garage",
    animationDelayClass: "delay-300",
  },
  {
    title: "Stamped Concrete Patios & Driveways",
    desc: "Stamped concrete in New Jersey for patios, walkways, and driveways designed to replicate stone, brick, and tile finishes.",
    image: "/Images/Lawn.webp",
    path: "/services/stamped-concrete",
    alt: "Stamped concrete patio design in New Jersey backyard with natural stone pattern",
    animationDelayClass: "delay-500",
  },
  {
    title: "Custom Decorative Concrete",
    desc: "Bespoke decorative concrete solutions in NJ including overlays, resurfacing, and artistic finishes tailored to your vision.",
    image: "/Images/custom-concrete2.webp",
    path: "/services/custom-decorative-concrete",
    alt: "Custom decorative concrete surface finish in New Jersey with artistic texture",
    animationDelayClass: "delay-700",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="services" className=" py-16 md:py-20 bg-[#0D0F12]" ref={ref}>
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">
            Our Services
          </p>

          {/* 🔥 SEO H2 */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white/90">
            Epoxy Flooring & Decorative Concrete Services{" "}
            <span className="text-gradient-copper">in New Jersey</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.path}
              className={`group relative h-95 overflow-hidden rounded-lg transition-all duration-700 ${service.animationDelayClass}
                            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#0D0F12]/95 via-[#0D0F12]/75 to-transparent" />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 
                                bg-[#14161a99] backdrop-blur-[20px] border border-[hsl(0_72%_48%/.15)] rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-xl font-serif font-bold text-white/90 mb-2">
                  {service.title}
                </h2>

                <p className="text-muted-foreground text-sm font-sans mb-4 line-clamp-2">
                  {service.desc}
                </p>

                <span className="inline-flex items-center text-primary text-sm font-sans font-medium group-hover:gap-3 gap-1 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
