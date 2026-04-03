"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type PortfolioFilter =
  | "All"
  | "Commercial"
  | "Residential"
  | "Industrial"
  | "Decorative";

type Project = {
  id: string;
  name: string;
  type: Exclude<PortfolioFilter, "All">;
  image: string;
  description: string;
  alt: string;
  animationDelayClass: string;
};

const filters: PortfolioFilter[] = [
  "All",
  "Commercial",
  "Residential",
  "Industrial",
  "Decorative",
];

const projects: Project[] = [
  {
    id: "terrazzo-corporate-lobby-nj",
    name: "Commercial Terrazzo Flooring – NJ Corporate Lobby",
    type: "Commercial",
    image: "/Images/terrazzo.webp",
    description:
      "High-end terrazzo flooring installation for corporate office lobby in New Jersey.",
    alt: "Terrazzo flooring installation in New Jersey corporate lobby",
    animationDelayClass: "delay-0",
  },
  {
    id: "industrial-epoxy-warehouse-nj",
    name: "Industrial Epoxy Flooring – Warehouse NJ",
    type: "Industrial",
    image: "/Images/commercial-epoxy.webp",
    description:
      "Heavy-duty epoxy flooring system for large industrial warehouse in New Jersey.",
    alt: "Industrial epoxy flooring coating in New Jersey warehouse",
    animationDelayClass: "delay-75",
  },
  {
    id: "residential-decorative-concrete-floor",
    name: "Decorative Concrete Flooring – Modern Home NJ",
    type: "Residential",
    image: "/Images/Lawn.webp",
    description:
      "Polished decorative concrete flooring for modern residential home in NJ.",
    alt: "Decorative concrete flooring in New Jersey modern home interior",
    animationDelayClass: "delay-100",
  },
  {
    id: "metallic-epoxy-showroom-nj",
    name: "Metallic Epoxy Showroom Floor – NJ",
    type: "Commercial",
    image: "/Images/epoxy-flooring2.webp",
    description:
      "Mirror-finish metallic epoxy flooring for automotive showroom in New Jersey.",
    alt: "Metallic epoxy showroom floor in New Jersey with glossy finish",
    animationDelayClass: "delay-150",
  },
  {
    id: "building-facade-concrete-nj",
    name: "Decorative Concrete Facade – Office Building NJ",
    type: "Commercial",
    image: "/Images/Building-Facade-Renovation.webp",
    description:
      "Textured concrete facade finish for modern commercial building in NJ.",
    alt: "Decorative concrete building facade in New Jersey commercial project",
    animationDelayClass: "delay-200",
  },
  {
    id: "stamped-concrete-patio-nj",
    name: "Stamped Concrete Patio – Backyard NJ",
    type: "Decorative",
    image: "/Images/Decorative.webp",
    description:
      "Custom stamped concrete patio with natural stone texture in New Jersey.",
    alt: "Stamped concrete patio in New Jersey backyard with stone pattern",
    animationDelayClass: "delay-300",
  },
  {
    id: "garage-epoxy-floor-nj",
    name: "Garage Epoxy Flooring – Residential NJ",
    type: "Residential",
    image: "/Images/Car-parking.webp",
    description:
      "Durable garage epoxy coating with anti-slip flakes in New Jersey home.",
    alt: "Garage epoxy flooring with flakes in New Jersey residential garage",
    animationDelayClass: "delay-500",
  },
  {
    id: "vertical-decorative-concrete-wall",
    name: "Vertical Decorative Concrete Wall Finish",
    type: "Decorative",
    image: "/Images/concrete-home.webp",
    description:
      "Custom vertical concrete surface with artistic finish for interior design.",
    alt: "Decorative concrete wall finish with texture and design",
    animationDelayClass: "delay-700",
  },
  {
    id: "custom-textured-concrete-surface",
    name: "Custom Decorative Concrete Texture – NJ",
    type: "Decorative",
    image: "/Images/custom-home.webp",
    description:
      "Artisan decorative concrete surface with copper-infused texture.",
    alt: "Custom decorative concrete texture with artistic finish in New Jersey",
    animationDelayClass: "delay-800",
  },
  {
    id: "church-epoxy-flooring-nj",
    name: "Church Epoxy Flooring with Glass Aggregate – NJ",
    type: "Decorative",
    image: "/Images/church1.webp",
    description:
      "Eco-friendly epoxy flooring using recycled glass for vibrant church interior.",
    alt: "Church epoxy flooring with glass aggregate in New Jersey",
    animationDelayClass: "delay-900",
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState<PortfolioFilter>("All");
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="portfolio" className="bg-[#0D0F12] py-14 md:py-16" ref={ref}>
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">
            Our Projects
          </p>

          {/* 🔥 SEO H2 */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white/90">
            Epoxy Flooring & Decorative Concrete Projects{" "}
            <span className="text-gradient-copper">in New Jersey</span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-all cursor-pointer ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-white/90 hover:bg-secondary/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg break-inside-avoid transition-all duration-700
              ${project.animationDelayClass}
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                width={800}
                height={560}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 flex items-end bg-linear-to-t from-[#0D0F12]/95 via-[#0D0F12]/75 to-[#0D0F12]/20 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div>
                  <span className="text-primary text-xs font-sans uppercase tracking-widest">
                    {project.type}
                  </span>

                  <h2 className="mt-1 text-lg font-serif font-bold text-white/90">
                    {project.name}
                  </h2>

                  <p className="mt-1 text-sm font-sans text-white/75">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
