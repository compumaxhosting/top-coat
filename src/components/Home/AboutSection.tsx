"use client";

import Image from "next/image";
import {
  CalendarCheck,
  Clock,
  DollarSign,
  HeadphonesIcon,
  Users,
} from "lucide-react";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Clock, text: "20+ Years Experience" },
  { icon: Users, text: "Skilled Professional Team" },
  { icon: DollarSign, text: "Competitive Pricing" },
  { icon: CalendarCheck, text: "On-Time Delivery" },
  { icon: HeadphonesIcon, text: "Professional Aftersales" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section className="bg-[#14161a] py-24 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* IMAGE */}
          <div
            className={`relative transition-all duration-1000 ${
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
                className="h-125 w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/25 to-transparent" />
            </div>
            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-lg border-2 border-primary/30" />
          </div>

          {/* CONTENT */}
          <div
            className={`transition-all delay-200 duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <p className="mb-3 text-sm font-sans uppercase tracking-[0.3em] text-primary">
              About TopCoat Artistry LLC
            </p>

            {/* 🔥 SEO H2 */}
            <h2 className="mb-6 font-serif text-4xl font-bold text-white/90 md:text-5xl">
              Premium Epoxy Flooring & Decorative Concrete{" "}
              <span className="text-gradient-copper"> in New Jersey</span>
            </h2>

            {/* SEO CONTENT */}
            <p className="mb-4 font-sans leading-relaxed text-white/70">
              TopCoat Artistry LLC is New Jersey’s premier contractor for high-end surface transformations. With over 20 years of expertise, we deliver durable, artistic concrete solutions for residential and commercial properties. From industrial-grade garage coatings to elegant interior terrazzo, we turn functional surfaces into masterpieces.
            </p>
            <h3 className="mb-6 font-serif text-2xl font-bold text-white/90 md:text-3xl">Professional Surfacing & Masonry Services</h3>

            <p className="mb-8 font-sans leading-relaxed text-white/70">
              We solve common flooring issues—like cracking, moisture damage, and wear—using premium materials engineered for the Northeast climate.
            </p>
            <ul className="mb-8 list-disc space-y-2 pl-5 text-white/70">
              <li>
                <strong>Epoxy Flooring & Garage Coatings:</strong> High-performance,
                slip-resistant finishes for Newark garages and industrial basements.
              </li>
              <li>
                <strong>Decorative Stamped Concrete:</strong> Elegant patterns for patios
                and walkways that mimic stone or brick.
              </li>
              <li>
                <strong>Terrazzo & Custom Concrete:</strong> Seamless, high-end interior
                flooring for modern homes and retail spaces.
              </li>
              <li>
                <strong>Building Facades:</strong> Expert masonry restoration to enhance
                curb appeal and structural integrity.
              </li>
            </ul>

            {/* HIGHLIGHTS */}
            {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-lg border border-primary/40 bg-[#14161A] p-3"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-sans text-white">{text}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
