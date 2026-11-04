"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Wrench,
  Sparkles,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-primary">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 font-serif text-3xl leading-tight text-secondary-foreground md:text-4xl">
      {children}
    </h2>
  );
}

function QuickAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-primary/30 bg-[#161a22] p-5 md:p-6 shadow-sm">
      <p className="font-sans text-sm md:text-base leading-relaxed text-white/90">
        <strong className="text-primary font-semibold">Quick Answer: </strong>
        {children}
      </p>
    </div>
  );
}

const faqs = [
  {
    question: "1. Is terrazzo floor restoration better than replacement?",
    answer:
      "Restoration is generally better when the existing floor is structurally sound and has primarily cosmetic damage. It preserves the original material, reduces demolition, and can cost less than replacement. However, extensive structural damage, widespread deterioration, or major renovation requirements may make replacement the more practical long-term option.",
  },
  {
    question: "2. How long does terrazzo floor restoration take?",
    answer:
      "The timeline depends on the floor's size, condition, repair requirements, and finishing process. Smaller residential areas may take a few days, while large commercial flooring projects can require longer. Your contractor should provide a project schedule after inspecting the floor.",
  },
  {
    question: "3. Can cracked terrazzo floors be restored?",
    answer:
      "Yes, many cracked terrazzo floors can be repaired. Professionals can fill and blend certain cracks using compatible materials. However, if cracks result from ongoing structural movement or significant substrate problems, those underlying issues must be addressed before restoration.",
  },
  {
    question: "4. How much does terrazzo floor restoration cost?",
    answer:
      "There is no universal price because costs depend on square footage, surface condition, crack repairs, grinding requirements, and polishing specifications. Restoration is often less expensive than replacement because it avoids extensive demolition and new installation. A professional inspection provides the most reliable estimate.",
  },
  {
    question: "5. How long does restored terrazzo flooring last?",
    answer:
      "Terrazzo is known for its exceptional longevity. A properly maintained terrazzo floor can last for several decades, and professionally installed systems may last 40–75 years or longer. Actual lifespan depends on installation quality, maintenance, traffic levels, and environmental conditions.",
  },
  {
    question: "6. Can old terrazzo floors regain their original shine?",
    answer:
      "Yes. Professional diamond grinding, honing, and polishing can significantly improve dull terrazzo surfaces. Repairs can also address minor chips and cracks before polishing. The final appearance depends on the condition of the original flooring and the extent of existing damage.",
  },
  {
    question: "7. Should I replace terrazzo flooring in a commercial building?",
    answer:
      "Not necessarily. Commercial terrazzo often experiences heavy foot traffic but can remain structurally sound for decades. Restoration may be a practical option for office buildings, hotels, schools, and retail spaces. An inspection helps determine whether restoration can meet the property's appearance and performance requirements.",
  },
];

const tocItems = [
  { title: "What Is Terrazzo Floor Restoration?", id: "what-is-terrazzo-floor-restoration" },
  { title: "When Should You Restore Terrazzo Flooring?", id: "when-should-you-restore-terrazzo-flooring" },
  { title: "When Is Terrazzo Floor Replacement Necessary?", id: "when-is-terrazzo-floor-replacement-necessary" },
  { title: "Restoration vs. Replacement: Key Differences", id: "restoration-vs-replacement-key-differences" },
  { title: "How Much Does Terrazzo Restoration Cost?", id: "how-much-does-terrazzo-restoration-cost" },
  { title: "Why Professional Terrazzo Services Matter", id: "why-professional-terrazzo-services-matter" },
  { title: "How to Maintain Restored Terrazzo Floors", id: "how-to-maintain-restored-terrazzo-floors" },
  { title: "Frequently Asked Questions", id: "frequently-asked-questions" },
  { title: "Why Choose TopCoat Artistry LLC?", id: "why-choose-topcoat-artistry" },
  { title: "Conclusion", id: "conclusion" },
];

export default function BlogPostContent() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <article className="min-h-screen bg-charcoal text-secondary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
        <div className="w-full pt-8">

          {/* INTRO PARAGRAPH & FEATURED IMAGE */}
          <section className="border-b border-charcoal-lighter pb-12">
            <Label>Introduction</Label>
            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/90">
              When{" "}
              <Link
                href="/services/terrazzo-flooring-contractors-wayne-nj"
                className="text-primary hover:underline font-medium"
              >
                terrazzo floors
              </Link>{" "}
              become dull, scratched, cracked, or stained, property owners often face an important decision: should they restore the existing floor or replace it completely? In most cases, terrazzo floor restoration is the better option when the existing flooring remains structurally sound, while replacement makes more sense when extensive damage, severe deterioration, or major design changes are involved.
            </p>
            <p className="mt-4 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/90">
              Terrazzo is known for its durability, timeless appearance, and long service life. With professional restoration, an aging floor can regain its original shine without the expense and disruption of installing an entirely new flooring system. For homeowners and commercial property managers in Wayne, NJ, understanding both options can help protect their investment.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <div className="relative h-72 w-full md:h-112.5">
                <Image
                  src="/Images/terrazzo-floor-restoration-vs-replacement-nj.webp"
                  alt="Professionally restored and polished terrazzo flooring in Wayne, New Jersey"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
          </section>

          {/* TABLE OF CONTENTS */}
          <section className="py-10">
            <div className="rounded-2xl border border-[#282c33] bg-[#0d0f12] p-6 md:p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold text-white/90 md:text-3xl">
                Table of Contents
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tocItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex items-center text-sm md:text-base text-white/70 transition-colors hover:text-primary"
                    >
                      <span className="mr-2.5 font-mono text-xs md:text-sm text-primary/90">
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                      <span className="group-hover:underline">{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 1. WHAT IS TERRAZZO FLOOR RESTORATION? */}
          <section
            id="what-is-terrazzo-floor-restoration"
            className="border-b border-charcoal-lighter py-12 scroll-mt-24"
          >
            <Label>Overview &amp; Definition</Label>
            <SectionHeading>What Is Terrazzo Floor Restoration?</SectionHeading>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Terrazzo floor restoration is the process of repairing, grinding, honing, polishing, and protecting an existing terrazzo surface to improve its appearance and performance.
            </p>
            <p className="mt-4 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Terrazzo consists of decorative aggregates such as marble, quartz, granite, or recycled glass embedded in a cement-based or epoxy binder. Over time, everyday foot traffic, improper cleaning, moisture, and physical impacts can affect its finish.
            </p>

            <QuickAnswer>
              Professional terrazzo restoration removes surface imperfections, repairs localized damage, and renews the floor&apos;s polished appearance. It preserves the original terrazzo material instead of removing and replacing the entire flooring system.
            </QuickAnswer>

            <div className="mt-6">
              <h3 className="font-serif text-xl font-semibold text-white mb-4">
                Typical restoration services include:
              </h3>
              <ul className="space-y-3 font-sans text-base leading-relaxed text-secondary-foreground/80">
                {[
                  "Diamond grinding and surface refinement.",
                  "Crack and chip repairs.",
                  "Stain removal and surface treatment.",
                  "Honing and polishing.",
                  "Protective sealing where appropriate.",
                ].map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. WHEN SHOULD YOU RESTORE TERRAZZO FLOORING? */}
          <section
            id="when-should-you-restore-terrazzo-flooring"
            className="border-b border-charcoal-lighter py-12 scroll-mt-24"
          >
            <Label>Candidate Assessment</Label>
            <SectionHeading>When Should You Restore Terrazzo Flooring?</SectionHeading>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Restoration is generally recommended when the floor has cosmetic damage but remains structurally stable.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#121418] p-6">
              <h3 className="font-serif text-xl font-semibold text-white mb-4">
                Common signs that your terrazzo floor may benefit from restoration include:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-base text-secondary-foreground/80">
                {[
                  "Dullness and loss of shine.",
                  "Light scratches and surface abrasions.",
                  "Minor chips or localized cracks.",
                  "Stubborn stains and discoloration.",
                  "Uneven surface appearance.",
                  "Worn protective finishes.",
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-primary font-bold">•</span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              For example, a commercial lobby in Wayne with decades-old terrazzo may look worn because of constant foot traffic. Professional grinding and polishing can often restore its smooth, attractive finish without requiring complete replacement.
            </p>

            <div className="mt-8">
              <h3 className="font-serif text-xl font-semibold text-white mb-4">
                Benefits of restoration:
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Preserves original flooring materials.",
                  "Reduces demolition and disposal.",
                  "Maintains the property's existing design.",
                  "Often costs less than replacement.",
                  "Minimizes construction disruption.",
                  "Extends the useful life of the floor.",
                ].map((benefit, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-charcoal-lighter bg-white/3 px-4 py-3.5 text-secondary-foreground/90 transition-colors hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span className="mr-2 text-primary font-bold">+</span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. WHEN IS TERRAZZO FLOOR REPLACEMENT NECESSARY? */}
          <section
            id="when-is-terrazzo-floor-replacement-necessary"
            className="border-b border-charcoal-lighter py-12 scroll-mt-24"
          >
            <Label>Structural &amp; Design Factors</Label>
            <SectionHeading>When Is Terrazzo Floor Replacement Necessary?</SectionHeading>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Although terrazzo is extremely durable, some conditions make restoration impractical.
            </p>

            <div className="my-6 rounded-xl border border-white/10 bg-[#121418] p-6 space-y-3">
              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                Replacement may be necessary when:
              </h3>
              <ul className="space-y-3 font-sans text-base leading-relaxed text-secondary-foreground/80">
                {[
                  "Extensive cracking indicates significant substrate movement.",
                  "Large sections of terrazzo are missing or severely deteriorated.",
                  "Moisture-related damage has compromised the flooring system.",
                  "The underlying concrete requires substantial reconstruction.",
                  "The existing floor cannot meet new functional or design requirements.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="mt-1 h-5 w-5 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              A professional inspection is important because visible cracks do not automatically mean replacement is necessary. Some cracks can be repaired, depending on their cause, movement, and severity.
            </p>
            <p className="mt-4 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              If the existing terrazzo can be stabilized and repaired, restoration may still be the more economical solution.
            </p>
          </section>

          {/* 4. RESTORATION VS REPLACEMENT: KEY DIFFERENCES */}
          <section
            id="restoration-vs-replacement-key-differences"
            className="border-b border-charcoal-lighter py-12 scroll-mt-24"
          >
            <Label>Side-by-Side Comparison</Label>
            <SectionHeading>Terrazzo Restoration vs. Replacement: Key Differences</SectionHeading>

            <div className="my-8 overflow-hidden rounded-xl border border-white/10 bg-[#121418]">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-sm md:text-base">
                  <thead className="border-b border-white/10 bg-[#1b1f26] text-primary uppercase text-xs tracking-wider">
                    <tr>
                      <th className="py-4 px-6 font-semibold">Factor</th>
                      <th className="py-4 px-6 font-semibold">Restoration</th>
                      <th className="py-4 px-6 font-semibold">Replacement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80">
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Initial investment</td>
                      <td className="py-4 px-6">Generally lower</td>
                      <td className="py-4 px-6">Generally higher</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Construction disruption</td>
                      <td className="py-4 px-6">Usually less</td>
                      <td className="py-4 px-6">Usually more</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Existing material</td>
                      <td className="py-4 px-6">Preserved</td>
                      <td className="py-4 px-6">Removed</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Appearance</td>
                      <td className="py-4 px-6">Renews existing design</td>
                      <td className="py-4 px-6">Allows complete redesign</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Environmental impact</td>
                      <td className="py-4 px-6">Less demolition waste</td>
                      <td className="py-4 px-6">More material disposal</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Best for</td>
                      <td className="py-4 px-6">Structurally sound floors</td>
                      <td className="py-4 px-6">Severely damaged floors</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-[#161a22] p-5 md:p-6">
              <p className="font-sans text-base leading-relaxed text-white/90">
                <strong className="text-primary font-semibold">Expert recommendation: </strong>
                Do not choose replacement simply because a terrazzo floor looks old. Have the surface and underlying substrate evaluated first. A professional assessment can identify whether polishing, repairs, or complete replacement offers better long-term value.
              </p>
            </div>
          </section>

          {/* 5. HOW MUCH DOES RESTORATION COST? */}
          <section
            id="how-much-does-terrazzo-restoration-cost"
            className="border-b border-charcoal-lighter py-12 scroll-mt-24"
          >
            <Label>Cost Analysis</Label>
            <SectionHeading>How Much Does Terrazzo Floor Restoration Cost?</SectionHeading>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Terrazzo restoration costs vary depending on the floor&apos;s condition, size, and required repair work. In many situations, restoring an existing floor is more affordable than removing and installing a new terrazzo system.
            </p>

            <div className="my-6 space-y-3 font-sans text-base text-secondary-foreground/80">
              <p className="font-semibold text-white">Important cost factors include:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                  <span>
                    <strong className="text-white">Floor size:</strong> Larger areas require more labor and materials.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                  <span>
                    <strong className="text-white">Surface condition:</strong> Deep scratches, cracks, and stains require additional preparation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                  <span>
                    <strong className="text-white">Repair requirements:</strong> Missing chips, damaged sections, and substrate problems can increase costs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                  <span>
                    <strong className="text-white">Polishing requirements:</strong> Different finishes may require multiple grinding and polishing stages.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                  <span>
                    <strong className="text-white">Sealing and protection:</strong> The selected protective treatment affects the overall project price.
                  </span>
                </li>
              </ul>
            </div>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Replacement also involves demolition, debris removal, substrate preparation, new materials, installation, and finishing.
            </p>
            <p className="mt-4 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              The best way to compare costs is to request separate restoration and replacement estimates based on an actual floor inspection.
            </p>
          </section>

          {/* 6. WHY PROFESSIONAL SERVICES MATTER */}
          <section
            id="why-professional-terrazzo-services-matter"
            className="border-b border-charcoal-lighter py-12 scroll-mt-24"
          >
            <Label>Quality &amp; Precision</Label>
            <SectionHeading>Why Professional Terrazzo Restoration Services Matter</SectionHeading>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Terrazzo requires specialized equipment, materials, and installation knowledge. Improper grinding or unsuitable cleaning chemicals can permanently damage the surface.
            </p>

            <div className="my-8 rounded-xl border border-white/10 bg-[#121418] p-6 space-y-4">
              <h3 className="font-serif text-xl font-semibold text-white mb-2">
                A professional restoration process typically includes:
              </h3>
              {[
                { step: "Inspection", detail: "Assess the terrazzo, identify cracks, stains, and existing damage." },
                { step: "Surface preparation", detail: "Remove contaminants and prepare the floor." },
                { step: "Grinding", detail: "Use diamond abrasives to remove surface imperfections." },
                { step: "Repair", detail: "Address cracks, chips, and damaged sections." },
                { step: "Honing and polishing", detail: "Refine the surface to achieve the desired finish." },
                { step: "Protection", detail: "Apply an appropriate sealer or protective treatment when required." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <span className="font-mono text-xs text-primary/90 mt-1 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-base leading-relaxed text-secondary-foreground/80">
                    <strong className="text-white">{item.step}:</strong> {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Professional contractors also determine whether the terrazzo is cement-based or epoxy-based because each system may require different restoration methods.
            </p>
          </section>

          {/* 7. HOW TO MAINTAIN RESTORED TERRAZZO FLOORS */}
          <section
            id="how-to-maintain-restored-terrazzo-floors"
            className="border-b border-charcoal-lighter py-12 scroll-mt-24"
          >
            <Label>Floor Care Guidelines</Label>
            <SectionHeading>How to Maintain Restored Terrazzo Floors</SectionHeading>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Proper maintenance helps preserve the appearance and performance of restored terrazzo.
            </p>

            <div className="my-6 rounded-xl border border-white/10 bg-[#121418] p-6">
              <h3 className="font-serif text-xl font-semibold text-white mb-4">
                Follow these practical recommendations:
              </h3>
              <ul className="space-y-3 font-sans text-base leading-relaxed text-secondary-foreground/80">
                {[
                  "Sweep or dust-mop regularly to remove abrasive dirt.",
                  "Clean with a neutral-pH cleaner suitable for terrazzo.",
                  "Avoid acidic products such as vinegar and harsh chemical cleaners.",
                  "Wipe spills promptly, particularly acidic liquids.",
                  "Use protective mats in high-traffic entrances.",
                  "Avoid dragging heavy furniture across the floor.",
                  "Schedule professional maintenance when the finish begins to deteriorate.",
                ].map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              Consistent cleaning and appropriate care can help maintain terrazzo&apos;s attractive appearance for many years.
            </p>
          </section>

          {/* 8. FREQUENTLY ASKED QUESTIONS */}
          <section
            id="frequently-asked-questions"
            className="border-b border-charcoal-lighter py-12 scroll-mt-24"
          >
            <Label>FAQ</Label>
            <SectionHeading>Frequently Asked Questions</SectionHeading>

            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-[#121418] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between p-5 text-left font-serif text-lg font-medium text-white/90 hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`ml-4 h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${openFAQIndex === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  {openFAQIndex === index && (
                    <div className="border-t border-white/5 bg-[#0a0b0d] p-5 font-sans text-base leading-relaxed text-secondary-foreground/80">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 9. WHY CHOOSE TOPCOAT ARTISTRY LLC */}
          <section
            id="why-choose-topcoat-artistry"
            className="border-b border-charcoal-lighter py-12 scroll-mt-24"
          >
            <Label>TopCoat Artistry LLC</Label>
            <SectionHeading>Why Choose TopCoat Artistry LLC for Terrazzo Flooring in Wayne, NJ?</SectionHeading>

            <div className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              <p>
                <Link
                  href="/"
                  className="text-primary hover:underline font-medium"
                >
                  TopCoat Artistry LLC
                </Link>{" "}
                provides specialized terrazzo flooring solutions for residential and commercial properties throughout Wayne and North Jersey. With over 20 years of experience in decorative concrete and specialty flooring, the company focuses on quality craftsmanship, premium materials, and customized flooring solutions.
              </p>
              <p>
                Whether your existing terrazzo needs professional restoration or your property requires a completely new flooring system, the team can help evaluate your project requirements and recommend an appropriate solution. From corporate lobbies and retail spaces to luxury residences and hospitality environments, TopCoat Artistry is committed to delivering attractive, durable flooring results.
              </p>
            </div>

            {/* CTA CARD */}
            <div className="mt-8 rounded-2xl border border-primary/40 bg-linear-to-r from-[#171b22] to-[#101216] p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Professional Terrazzo Flooring Services in Wayne, NJ
                  </h3>
                  <p className="font-sans text-sm md:text-base text-white/70">
                    Call (201) 315-2633 to discuss your restoration project or request a free estimate.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="tel:2013152633"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-sans text-sm font-semibold text-white transition-all hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    (201) 315-2633
                  </a>
                  <Link
                    href="/services/terrazzo-flooring-contractors-wayne-nj"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-sans text-sm font-semibold text-black transition-all hover:bg-primary/90 hover:scale-105"
                  >
                    Explore Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* 10. CONCLUSION */}
          <section id="conclusion" className="py-12 scroll-mt-24">
            <Label>Conclusion</Label>
            <SectionHeading>Conclusion</SectionHeading>

            <div className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              <p>
                Choosing between terrazzo floor restoration and replacement depends primarily on the existing floor&apos;s condition, structural integrity, and your renovation goals.
              </p>
              <p>
                Restoration is usually the more practical choice when the original terrazzo remains sound but needs repairs, polishing, or surface refinishing. Replacement is appropriate when extensive deterioration or structural problems make restoration impractical.
              </p>
              <p>
                Before investing in a new floor, arrange a professional inspection to understand your options. For property owners in Wayne, NJ, TopCoat Artistry LLC can help identify the right terrazzo flooring solution for lasting performance and appearance.
              </p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}

