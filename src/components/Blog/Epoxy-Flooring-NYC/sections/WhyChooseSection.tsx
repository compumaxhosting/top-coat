import { Label, SectionHeading } from "../SectionPrimitives";

export default function WhyChooseSection() {
  const locations = [
    "Wayne", "Newark", "Paterson", "Jersey City", "Bergen County",
    "Paramus", "Ridgewood", "Glen Rock", "Saddle River", "Upper Saddle River",
    "Ramsey", "Mahwah", "Midland Park", "Hillsdale", "Teaneck",
    "Montvale", "River Vale", "Westwood", "Park Ridge", "Montville"
  ];

  return (
    <section className="border-b border-charcoal-lighter py-16" id="why-choose">
      <Label>Why Us</Label>
      <SectionHeading>Why Choose TopCoat Artistry?</SectionHeading>
      
      <div className="max-w-4xl space-y-6 font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        <p>
          TopCoat Artistry LLC provides professional epoxy flooring and decorative concrete solutions for residential, commercial, and industrial properties throughout New Jersey and the NYC area.
        </p>
        <p>
          For customers in Wayne, Newark, Paterson, Jersey City, Bergen County, and surrounding communities, the company focuses on providing flooring systems suited to each property&apos;s specific requirements. Services can include garage floor coatings, epoxy flooring, decorative finishes, and other concrete flooring solutions.
        </p>

        <div className="mt-8 rounded-xl border border-charcoal-lighter bg-charcoal-light/10 p-6">
          <h4 className="font-serif text-lg font-bold text-white/95 mb-4">
            Service Areas in NJ &amp; NYC Include:
          </h4>
          <div className="flex flex-wrap gap-2">
            {locations.map((loc) => (
              <span 
                key={loc} 
                className="px-3 py-1 rounded-full text-xs font-medium border border-charcoal-lighter bg-charcoal-light/20 text-secondary-foreground/80 hover:border-primary/45 transition-colors"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        <p className="pt-4">
          If you&apos;re considering epoxy flooring in Wayne, NJ, or the surrounding NYC and North Jersey area, contact TopCoat Artistry LLC to discuss your project and request a professional consultation or quote.
        </p>
      </div>
    </section>
  );
}
