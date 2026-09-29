"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ExternalLink } from "lucide-react";

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
    question: "How much does facade restoration cost in New Jersey?",
    answer:
      "A substantial facade restoration project may budget around $40–$100+ per square foot of affected facade area, but there is no standard statewide rate. Building height, access, material, deterioration, waterproofing, engineering, and repair quantities can substantially change the final price. A site inspection and detailed scope are necessary before relying on a project-specific number.",
  },
  {
    question: "Is facade restoration worth the cost?",
    answer:
      "Facade restoration can help protect the building envelope, address safety concerns, reduce moisture-related deterioration, preserve exterior materials, and maintain property appearance. Its value depends on the building's condition and the repairs required. Early intervention can also prevent localized defects from developing into larger restoration projects.",
  },
  {
    question: "How do I know if my building needs facade restoration?",
    answer:
      "Look for cracked masonry, deteriorated mortar, spalling concrete, loose materials, bulging walls, recurring leaks, failed sealants, rust staining, or significant surface deterioration. If these conditions are visible, arrange a professional assessment rather than assuming the problem is only cosmetic.",
  },
  {
    question: "Does building height affect restoration costs?",
    answer:
      "Yes. Taller buildings generally require more complex access, fall protection, staging, equipment, and logistics. These requirements can increase both labor and project-management costs. The condition of upper facade areas can also be more difficult to assess and repair than easily accessible low-rise elevations.",
  },
  {
    question: "How long does facade restoration take?",
    answer:
      "The timeline depends on building size, repair quantities, weather, access, permitting, engineering, material availability, and the complexity of the facade. A localized repair may take days or weeks, while a large commercial or multi-story restoration can require several months.",
  },
  {
    question: "Should I repair or replace a damaged facade?",
    answer:
      "That depends on the material's remaining service life and the cause of deterioration. Localized masonry or concrete defects may be repairable, while widespread deterioration may justify more extensive rehabilitation or replacement. A condition assessment helps determine which approach is appropriate.",
  },
  {
    question: "How can I get an accurate facade restoration estimate?",
    answer:
      "Start with a professional facade assessment. Provide the contractor with building drawings when available, approximate facade dimensions, photographs, information about previous repairs, and known water-intrusion problems. Ask for an itemized proposal that clearly separates repairs, access, waterproofing, materials, and other project costs.",
  },
];

export default function BlogPostContent() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const tocItems = [
    { title: "What Is Building Facade Restoration?", id: "what-is-building-facade-restoration" },
    { title: "How Does Facade Restoration Work?", id: "how-does-facade-restoration-work" },
    { title: "What Does Facade Restoration Cost in NJ?", id: "what-does-facade-restoration-cost-in-nj" },
    { title: "Factors That Affect the Price", id: "factors-that-affect-the-price" },
    { title: "Common Facade Problems", id: "common-facade-problems" },
    { title: "Why Professional Restoration Matters", id: "why-professional-restoration-matters" },
    { title: "Promotion: TopCoat Artistry LLC", id: "building-facade-restoration-in-wayne-nj" },
    { title: "Frequently Asked Questions", id: "frequently-asked-questions" },
    { title: "Authoritative Sources for Further Reading", id: "authoritative-sources-for-further-reading" },
    { title: "Conclusion", id: "conclusion" },
  ];

  return (
    <article className="min-h-screen bg-charcoal text-secondary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
        <div className="w-full pt-8">

          {/* INTRO PARAGRAPH & FEATURED IMAGE */}
          <section className="border-b border-charcoal-lighter pb-12">
            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/90">
              Building{" "}
              <Link
                href="/services/building-facade-contractors-wayne-nj"
                className="text-primary hover:underline font-medium"
              >
                facade restoration in New Jersey
              </Link>{" "}
              can cost anywhere from tens of thousands to several hundred thousand dollars, depending on the facade area, material, building height, deterioration, access requirements, and scope of repairs. For budgeting purposes, a moderate commercial restoration project may fall around $40–$100+ per square foot of affected facade area, but this is a planning range—not a fixed New Jersey market rate. A professional inspection and detailed scope are essential for an accurate quote.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <div className="relative h-72 w-full md:h-[450px]">
                <Image
                  src="/Images/building-facade-restoration-new-jersey.webp"
                  alt="Building facade restoration in New Jersey"
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

          {/* 1. WHAT IS BUILDING FACADE RESTORATION? */}
          <section id="what-is-building-facade-restoration" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Overview & Fundamentals</Label>
            <SectionHeading>What Is Building Facade Restoration?</SectionHeading>

            <QuickAnswer>
              Building facade restoration is the repair, rehabilitation, waterproofing, and preservation of a building&apos;s exterior envelope. Depending on the property, work can include masonry repointing, brick replacement, concrete repair, crack treatment, sealant replacement, waterproofing, coatings, and restoration of architectural elements.
            </QuickAnswer>

            <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <p>
                A facade protects the building from rain, snow, freeze-thaw cycles, moisture intrusion, temperature changes, and environmental wear. When deterioration is ignored, a relatively small defect can develop into a much more expensive structural or water-infiltration problem.
              </p>
              <p>
                New Jersey regulations also require applicable exterior surfaces to be maintained against deterioration and hazardous loose material.{" "}
                <a
                  href="https://www.nj.gov/dca/codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                >
                  NJ.gov <ExternalLink size={14} />
                </a>
              </p>
            </div>
          </section>

          {/* 2. HOW DOES FACADE RESTORATION WORK? */}
          <section id="how-does-facade-restoration-work" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Process & Steps</Label>
            <SectionHeading>How Does Facade Restoration Work?</SectionHeading>

            <QuickAnswer>
              A professional facade restoration project normally starts with a condition assessment, followed by identifying defective areas, developing a repair specification, completing repairs, waterproofing vulnerable locations, and performing a final inspection. The exact process varies according to building type and facade material.
            </QuickAnswer>

            <p className="mb-6 font-sans text-base font-semibold text-white/90">
              A typical project includes:
            </p>

            <ul className="space-y-3 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="text-white">Facade assessment:</strong> Inspect masonry, concrete, joints, coatings, windows, and other exterior components.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="text-white">Documentation:</strong> Identify cracks, spalling, leaks, loose materials, staining, and failed sealants.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="text-white">Repair planning:</strong> Determine which areas require localized repair versus broader restoration.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="text-white">Access and protection:</strong> Plan scaffolding, lifts, swing stages, or other safe access methods.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="text-white">Restoration:</strong> Complete masonry repair, concrete rehabilitation, repointing, crack repair, or material replacement.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="text-white">Waterproofing:</strong> Address joints, penetrations, coatings, and other moisture-entry points.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="text-white">Final review:</strong> Verify workmanship and remaining maintenance requirements.
                </span>
              </li>
            </ul>
          </section>

          {/* 3. WHAT DOES FACADE RESTORATION COST IN NJ? */}
          <section id="what-does-facade-restoration-cost-in-nj" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Cost Analysis & Pricing Ranges</Label>
            <SectionHeading>What Does Facade Restoration Cost in NJ?</SectionHeading>

            <QuickAnswer>
              There is no universal New Jersey price because facade restoration is highly site-specific. As a preliminary planning figure, property owners may encounter roughly $40–$100+ per square foot of affected facade area for substantial restoration work, while complex structural repairs, difficult access, premium materials, or extensive replacement can push costs considerably higher.
            </QuickAnswer>

            <div className="my-8 overflow-hidden rounded-xl border border-white/10 bg-[#121418]">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-sm md:text-base">
                  <thead className="border-b border-white/10 bg-[#1b1f26] text-primary uppercase text-xs tracking-wider">
                    <tr>
                      <th className="py-4 px-6 font-semibold">Project condition</th>
                      <th className="py-4 px-6 font-semibold">Typical budget impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80">
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6">Minor localized repairs</td>
                      <td className="py-4 px-6 font-medium text-emerald-400">Lower</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6">Repointing and brick replacement</td>
                      <td className="py-4 px-6 font-medium text-yellow-400">Moderate</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6">Concrete spall and structural repairs</td>
                      <td className="py-4 px-6 font-medium text-amber-400">Moderate to high</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6">Extensive waterproofing</td>
                      <td className="py-4 px-6 font-medium text-amber-400">Moderate to high</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6">Large-scale masonry restoration</td>
                      <td className="py-4 px-6 font-medium text-orange-400">High</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6">High-rise or difficult-access restoration</td>
                      <td className="py-4 px-6 font-medium text-orange-400">High</td>
                    </tr>
                    <tr className="hover:bg-white/[0.02]">
                      <td className="py-4 px-6">Historic or highly detailed facade</td>
                      <td className="py-4 px-6 font-medium text-rose-400">High to very high</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="font-sans text-base leading-relaxed text-secondary-foreground/80">
              These figures should be treated as budgetary guidance rather than a contractor quote. Published restoration estimates from other markets demonstrate how dramatically scope and access can change pricing; for example, one detailed restoration assessment priced stucco and stone facade work at approximately $60 per square foot, including scaffolding.
            </p>
          </section>

          {/* 4. FACTORS THAT AFFECT THE PRICE */}
          <section id="factors-that-affect-the-price" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Variables & Drivers</Label>
            <SectionHeading>What Factors Affect Facade Restoration Cost?</SectionHeading>

            <p className="mb-6 font-sans text-base text-secondary-foreground/80">
              Several variables can change the final project price:
            </p>

            <ul className="space-y-3 font-sans text-base leading-relaxed text-secondary-foreground/80 mb-6">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">Facade size:</strong> More square footage generally means more labor and materials.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">Building height:</strong> Taller structures may require specialized access equipment and additional safety measures.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">Material:</strong> Brick, concrete, stucco, stone, architectural panels, and coatings require different repair methods.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">Extent of deterioration:</strong> Surface cracking is very different from widespread spalling, corrosion, or structural movement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">Water damage:</strong> Hidden moisture intrusion can require additional investigation and waterproofing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">Access:</strong> Scaffolding, lifts, swing stages, or rope-access systems can substantially affect the budget.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">Design and engineering:</strong> Some projects require architectural or structural engineering before repairs begin.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">Permits and code requirements:</strong> Applicable New Jersey and local requirements must be considered.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span><strong className="text-white">Historic requirements:</strong> Matching existing materials and preserving architectural details can increase labor and material costs.</span>
              </li>
            </ul>

            <p className="font-sans text-base leading-relaxed text-secondary-foreground/80">
              New Jersey&apos;s current construction-code framework was updated in August 2026, including adoption of the 2024 International Building Code as the building subcode, so project requirements should be confirmed for the property&apos;s jurisdiction and scope.{" "}
              <a
                href="https://www.nj.gov/dca/codes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
              >
                NJ.gov <ExternalLink size={14} />
              </a>
            </p>
          </section>

          {/* 5. COMMON FACADE PROBLEMS */}
          <section id="common-facade-problems" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Warning Signs & Inspection</Label>
            <SectionHeading>Common Facade Problems in New Jersey</SectionHeading>

            <QuickAnswer>
              Common warning signs include cracking, spalling concrete, deteriorated mortar joints, loose bricks or stone, failed sealants, staining, bulging masonry, and recurring water infiltration. These problems should be evaluated promptly, particularly when loose material could fall from the building.
            </QuickAnswer>

            <p className="my-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              New Jersey&apos;s weather can be demanding on exterior assemblies. Freeze-thaw cycles, moisture, thermal movement, and aging sealants can gradually weaken facade systems.
            </p>

            <p className="mb-4 font-sans text-base font-semibold text-white/90">
              Look for:
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-base leading-relaxed text-secondary-foreground/80 mb-6">
              {[
                "Cracked or missing mortar",
                "Bulging or displaced masonry",
                "Concrete spalling",
                "Rust staining",
                "Failed expansion joints",
                "Water stains inside or outside the building",
                "Peeling or failing coatings",
                "Loose facade materials",
                "Repeated leaks around windows",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-[#121418] p-3 rounded-lg border border-white/5">
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="font-sans text-base leading-relaxed text-secondary-foreground/80">
              Some municipalities also have additional inspection requirements. For example, Jersey City requires periodic facade inspections for certain buildings, including buildings over six stories and certain masonry buildings four stories or higher.{" "}
              <a
                href="https://library.municode.com/nj/jersey_city"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
              >
                Municode Library <ExternalLink size={14} />
              </a>
            </p>
          </section>

          {/* 6. WHY PROFESSIONAL RESTORATION MATTERS */}
          <section id="why-professional-restoration-matters" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Quality & Longevity</Label>
            <SectionHeading>Why Professional Facade Restoration Matters</SectionHeading>

            <QuickAnswer>
              Professional restoration helps property owners address the underlying cause of deterioration rather than simply covering visible defects. A properly planned project can improve building safety, reduce water intrusion, preserve exterior materials, improve appearance, and potentially reduce the cost of repeated emergency repairs.
            </QuickAnswer>

            <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <p>
                The cheapest repair is not necessarily the most economical repair. Replacing failed sealant without addressing surrounding water intrusion, for example, may only postpone the problem.
              </p>
              <p>
                A qualified contractor should provide a clear scope, explain the repair methods, identify exclusions, and distinguish cosmetic improvements from structural or building-envelope repairs.
              </p>
            </div>
          </section>

          {/* 7. PROMOTION: TOPCOAT ARTISTRY LLC */}
          <section id="building-facade-restoration-in-wayne-nj" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Local Expert Contractor</Label>
            <SectionHeading>Building Facade Restoration in Wayne, NJ</SectionHeading>

            <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <p>
                For property owners searching for{" "}
                <Link
                  href="/services/building-facade-contractors-wayne-nj"
                  className="text-primary hover:underline font-medium"
                >
                  building facade contractors in Wayne, NJ
                </Link>
                , TopCoat Artistry LLC provides facade restoration and exterior building-envelope services throughout Wayne and North Jersey. Its published services include brick facade repair, exterior wall restoration, waterproofing, masonry rehabilitation, expansion-joint replacement, crack and spall repairs, sealant replacement, and exterior coating systems.
              </p>
              <p>
                TopCoat Artistry LLC also states that it has more than 20 years of experience serving New Jersey property owners with concrete, surface, and facade-related services.{" "}
                <Link href="/" className="text-primary hover:underline font-medium">
                  TopCoat Artistry LLC
                </Link>
              </p>
            </div>

            {/* CTA CARD */}
            <div className="mt-8 rounded-2xl border border-primary/40 bg-gradient-to-r from-[#171b22] to-[#101216] p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Building Facade Contractors Wayne NJ — TopCoat LLC
                  </h3>
                  <p className="font-sans text-sm md:text-base text-white/70">
                    Get in touch with TopCoat Artistry LLC for a comprehensive facade assessment and tailored restoration proposal.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="shrink-0 rounded-xl bg-primary px-6 py-3 font-sans text-sm font-semibold text-black transition-all hover:bg-primary/90 hover:scale-105"
                >
                  Request an Estimate
                </Link>
              </div>
            </div>
          </section>

          {/* 8. FREQUENTLY ASKED QUESTIONS */}
          <section id="frequently-asked-questions" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
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
                    className="flex w-full items-center justify-between p-5 text-left font-serif text-lg font-medium text-white/90 hover:text-primary transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`ml-4 h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                        openFAQIndex === index ? "rotate-180" : ""
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

          {/* 9. AUTHORITATIVE SOURCES FOR FURTHER READING */}
          <section id="authoritative-sources-for-further-reading" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>References & Codes</Label>
            <SectionHeading>Authoritative Sources for Further Reading</SectionHeading>

            <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <p>
                For regulatory and code information, property owners should consult the New Jersey Department of Community Affairs, including its current construction codes and Uniform Construction Code resources.{" "}
                <a
                  href="https://www.nj.gov/dca/codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                >
                  NJ.gov <ExternalLink size={14} />
                </a>
              </p>
              <p>
                Local requirements should also be checked with the applicable municipal construction official, because cities such as Jersey City may impose additional facade inspection requirements.{" "}
                <a
                  href="https://library.municode.com/nj/jersey_city"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                >
                  Municode Library <ExternalLink size={14} />
                </a>
              </p>
            </div>
          </section>

          {/* 10. CONCLUSION */}
          <section id="conclusion" className="py-12 scroll-mt-24">
            <Label>Summary</Label>
            <SectionHeading>Conclusion</SectionHeading>

            <div className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              <p>
                The cost of building facade restoration in New Jersey in 2026 depends far more on scope and building conditions than on a single per-square-foot number. Material type, deterioration, height, access, waterproofing, engineering, and local requirements can all affect the final budget.
              </p>
              <p>
                For the most reliable estimate, have the facade professionally assessed before requesting bids. A detailed scope makes it easier to compare contractors, control unexpected costs, and address the underlying cause of deterioration rather than repeatedly treating the symptoms.
              </p>
              <p>
                If your property is in Wayne or elsewhere in North Jersey, a professional facade contractor can help determine whether you need localized repairs, comprehensive restoration, waterproofing, or ongoing facade maintenance.
              </p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
