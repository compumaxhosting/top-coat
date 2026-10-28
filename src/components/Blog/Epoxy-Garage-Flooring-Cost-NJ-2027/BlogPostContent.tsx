"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  ShieldCheck,
  Wrench,
  Layers,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
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
    question: "1. How much does it cost to epoxy a two-car garage in New Jersey?",
    answer:
      "A typical 400–600-square-foot two-car garage may cost approximately $1,600–$7,200 using an estimated installed rate of $4–$12 per square foot. Extensive concrete repairs, premium decorative finishes, and specialized moisture-control systems can increase the total.",
  },
  {
    question: "2. Is epoxy garage flooring cheaper than polyaspartic flooring?",
    answer:
      "Epoxy is often less expensive upfront, while polyaspartic systems may cost more because of their material properties and installation requirements. Polyaspartic products can offer faster return-to-service times and good UV stability, depending on the formulation. Compare complete systems rather than coating names alone.",
  },
  {
    question: "3. How long does epoxy garage flooring last?",
    answer:
      "Service life depends on preparation, coating thickness, product quality, vehicle traffic, maintenance, and moisture conditions. A professionally installed system may last several years or longer, but no single lifespan applies to every garage. Ask for product-specific performance expectations and warranty details.",
  },
  {
    question: "4. Can epoxy flooring withstand New Jersey winters?",
    answer:
      "A properly selected coating can help protect concrete against winter dirt, road salt, and routine automotive contamination. Prompt cleaning is still important, and wet floors can be slippery. Ask about slip-resistant additives and confirm that the selected system suits your garage's exposure conditions.",
  },
  {
    question: "5. How long does epoxy garage floor installation take?",
    answer:
      "Many residential projects require one or more days for preparation and application, followed by additional curing time. The exact schedule depends on repairs, coating chemistry, temperature, and humidity. Some fast-curing systems allow earlier vehicle access than conventional epoxy.",
  },
  {
    question: "6. Can epoxy be applied to cracked garage concrete?",
    answer:
      "Yes, in many cases, provided the concrete is structurally suitable and the cracks are assessed and repaired appropriately. Active movement, significant settlement, or moisture problems may require further investigation. Coatings can improve appearance, but they cannot correct underlying structural issues.",
  },
  {
    question: "7. How do I choose an epoxy flooring contractor in New Jersey?",
    answer:
      "Look for documented installation experience, clear preparation procedures, appropriate moisture evaluation, written warranties, and detailed estimates. Ask which products will be used, how many coats are included, when vehicles can return, and how the contractor handles existing cracks and previous coatings.",
  },
];

const costFactors = [
  {
    icon: Wrench,
    title: "1. Concrete Preparation",
    body: "Existing concrete may need diamond grinding, oil removal, crack filling, or patching. Damaged or contaminated surfaces require more work before a coating can adhere properly.",
  },
  {
    icon: Layers,
    title: "2. Coating System",
    body: "A simple epoxy coating generally costs less than a multi-layer decorative system with color flakes and a specialized protective finish.",
  },
  {
    icon: DollarSign,
    title: "3. Garage Size",
    body: "Larger floors require more materials and labor, although the price per square foot may decrease on bigger projects.",
  },
  {
    icon: AlertTriangle,
    title: "4. Moisture and Concrete Condition",
    body: "Moisture vapor moving through concrete can contribute to coating failure. Testing and appropriate moisture-mitigation measures may increase the initial cost but help protect the investment.",
  },
  {
    icon: ShieldCheck,
    title: "5. Decorative Finishes",
    body: "Custom colors, full-flake coverage, metallic effects, and specialized topcoats can increase material and labor expenses.",
  },
  {
    icon: HelpCircle,
    title: "6. Local Labor and Logistics",
    body: "Contractor availability, travel, access, and project complexity can influence pricing across North Jersey and other parts of the state.",
  },
];

export default function BlogPostContent() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const tocItems = [
    { title: "What Is Epoxy Garage Flooring?", id: "what-is-epoxy-garage-flooring" },
    { title: "Average Epoxy Garage Floor Cost in NJ", id: "average-epoxy-garage-floor-cost-nj" },
    { title: "Factors That Affect Installation Costs", id: "factors-that-affect-installation-costs" },
    { title: "Benefits of Epoxy Garage Flooring", id: "benefits-of-epoxy-garage-flooring" },
    { title: "How Professional Installation Works", id: "how-professional-installation-works" },
    { title: "Common Problems to Avoid", id: "common-problems-to-avoid" },
    { title: "Is Epoxy Garage Flooring Worth It?", id: "is-epoxy-garage-flooring-worth-it" },
    { title: "Frequently Asked Questions", id: "frequently-asked-questions" },
    { title: "Professional Garage Flooring Services", id: "professional-garage-flooring-services" },
  ];

  return (
    <article className="min-h-screen bg-charcoal text-secondary-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
        <div className="w-full pt-8">

          {/* INTRO PARAGRAPH & FEATURED IMAGE */}
          <section className="border-b border-charcoal-lighter pb-12">
            <p className="font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/90">
              <Link
                href="/services/epoxy-flooring-wayne-new-jersey"
                className="text-primary hover:underline font-medium"
              >
                Epoxy garage flooring in New Jersey
              </Link>{" "}
              is estimated to cost approximately $4–$12 per square foot for professional installation, depending on concrete condition, surface preparation, coating type, and project size. A typical 400–600-square-foot garage could cost around $1,600–$7,200, although premium decorative systems and extensive concrete repairs may cost more. These are planning estimates for 2027, not guaranteed contractor quotes.
            </p>
            <p className="mt-4 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/90">
              The best way to determine your actual cost is to compare flooring systems, understand what&apos;s included in installation, and evaluate how well each option will withstand New Jersey&apos;s changing weather and everyday garage use.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <div className="relative h-72 w-full md:h-112.5">
                <Image
                  src="/Images/epoxy-garage-flooring-new-jersey.webp"
                  alt="Professional epoxy garage flooring with a durable decorative finish in New Jersey"
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

          {/* 1. WHAT IS EPOXY GARAGE FLOORING? */}
          <section id="what-is-epoxy-garage-flooring" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Overview &amp; Fundamentals</Label>
            <SectionHeading>What Is Epoxy Garage Flooring?</SectionHeading>

            <QuickAnswer>
              Epoxy garage flooring is a protective coating system applied over prepared concrete. It combines epoxy resin and a hardener to create a durable surface that resists abrasion, stains, and many common automotive fluids.
            </QuickAnswer>

            <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <p>
                Depending on the system, installers may incorporate decorative color flakes, a pigmented base coat, and a protective clear topcoat. Some contractors also offer polyaspartic or polyurethane finishes, which are different coating technologies often used alongside or instead of epoxy.
              </p>
            </div>
          </section>

          {/* 2. AVERAGE COST IN NJ */}
          <section id="average-epoxy-garage-floor-cost-nj" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Pricing &amp; Investment</Label>
            <SectionHeading>Average Epoxy Garage Floor Cost in New Jersey</SectionHeading>

            <p className="mb-6 font-sans text-base leading-relaxed text-secondary-foreground/80">
              For budgeting purposes, the following ranges can help New Jersey homeowners estimate the potential investment.
            </p>

            <div className="my-8 overflow-hidden rounded-xl border border-white/10 bg-[#121418]">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-sm md:text-base">
                  <thead className="border-b border-white/10 bg-[#1b1f26] text-primary uppercase text-xs tracking-wider">
                    <tr>
                      <th className="py-4 px-6 font-semibold">Garage size</th>
                      <th className="py-4 px-6 font-semibold">Estimated installed cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80">
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">1-car garage, 200–300 sq. ft.</td>
                      <td className="py-4 px-6">$800–$3,600</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">2-car garage, 400–600 sq. ft.</td>
                      <td className="py-4 px-6">$1,600–$7,200</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">3-car garage, 600–900 sq. ft.</td>
                      <td className="py-4 px-6">$2,400–$10,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <p>
                These estimates use a planning range of $4–$12 per square foot. Actual minimum project charges, regional labor rates, coating specifications, and repair requirements can change the final price.
              </p>
              <p>
                Basic coating systems generally cost less than decorative flake systems or premium multi-coat installations. A contractor should explain whether the quote includes diamond grinding, crack repairs, moisture testing, primer, topcoat, and cleanup.
              </p>
            </div>
          </section>

          {/* 3. FACTORS THAT AFFECT COSTS */}
          <section id="factors-that-affect-installation-costs" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Cost Drivers</Label>
            <SectionHeading>What Factors Affect Epoxy Garage Flooring Costs?</SectionHeading>

            <p className="mb-8 font-sans text-base leading-relaxed text-secondary-foreground/80">
              Several factors determine how much homeowners pay for epoxy flooring in New Jersey.
            </p>

            <div className="space-y-4">
              {costFactors.map((factor, index) => {
                const Icon = factor.icon;
                return (
                  <div key={index} className="rounded-xl border border-white/10 bg-[#121418] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-white">
                        {factor.title}
                      </h3>
                    </div>
                    <p className="font-sans text-base leading-relaxed text-secondary-foreground/80">
                      {factor.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. BENEFITS */}
          <section id="benefits-of-epoxy-garage-flooring" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Value &amp; Advantages</Label>
            <SectionHeading>Benefits of Epoxy Garage Flooring</SectionHeading>

            <p className="mb-6 font-sans text-base leading-relaxed text-secondary-foreground/80">
              A professionally installed garage floor coating offers several practical advantages.
            </p>

            <ul className="space-y-3 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                <span>
                  <strong className="text-white">Durability:</strong> Properly selected and installed systems withstand regular vehicle traffic and everyday wear.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                <span>
                  <strong className="text-white">Stain resistance:</strong> A suitable coating helps protect concrete against oil, grease, dirt, and many automotive fluids.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                <span>
                  <strong className="text-white">Easier cleaning:</strong> A seamless-looking coated surface is generally easier to sweep and maintain than unfinished concrete.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                <span>
                  <strong className="text-white">Improved appearance:</strong> Decorative flakes and color choices create a cleaner, more finished garage.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                <span>
                  <strong className="text-white">Concrete protection:</strong> Coatings help reduce surface dusting and protect the concrete from routine exposure to contaminants.
                </span>
              </li>
            </ul>

            <div className="mt-6 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <p>
                In New Jersey, winter road salt and deicing chemicals make garage floor protection especially useful. However, no coating is completely maintenance-free, and resistance depends on the specific product and installation quality.
              </p>
            </div>
          </section>

          {/* 5. HOW PROFESSIONAL INSTALLATION WORKS */}
          <section id="how-professional-installation-works" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Installation Process</Label>
            <SectionHeading>How Professional Epoxy Garage Floor Installation Works</SectionHeading>

            <p className="mb-6 font-sans text-base leading-relaxed text-secondary-foreground/80">
              A quality installation involves more than rolling paint over concrete.
            </p>

            <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <div className="rounded-xl border border-white/10 bg-[#121418] p-6 space-y-3">
                {[
                  { step: "Inspection", detail: "The installer examines the concrete for cracks, previous coatings, contamination, and signs of moisture." },
                  { step: "Surface preparation", detail: "Mechanical diamond grinding typically creates the profile needed for reliable adhesion." },
                  { step: "Repairs", detail: "Cracks, pits, and other defects are repaired where appropriate." },
                  { step: "Coating application", detail: "The installer applies the specified primer or base coat and any decorative flakes." },
                  { step: "Protective finish", detail: "A compatible topcoat may be applied to improve wear resistance, cleanability, and appearance." },
                  { step: "Curing", detail: "The coating needs adequate time to cure before foot traffic, heavy items, or vehicles return to the garage." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="font-mono text-xs text-primary/80 mt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p>
                      <strong className="text-white">{item.step}:</strong>{" "}
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p>
                Installation and return-to-service times depend on the product, temperature, humidity, and concrete conditions. Always follow the contractor&apos;s instructions.
              </p>
            </div>
          </section>

          {/* 6. COMMON PROBLEMS TO AVOID */}
          <section id="common-problems-to-avoid" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Troubleshooting &amp; Prevention</Label>
            <SectionHeading>Common Epoxy Garage Flooring Problems to Avoid</SectionHeading>

            <p className="mb-6 font-sans text-base leading-relaxed text-secondary-foreground/80">
              The biggest risk is choosing a contractor based only on the lowest price.
            </p>

            <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-[#121418]">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-sm md:text-base">
                  <thead className="border-b border-white/10 bg-[#1b1f26] text-primary uppercase text-xs tracking-wider">
                    <tr>
                      <th className="py-4 px-6 font-semibold">Common problem</th>
                      <th className="py-4 px-6 font-semibold">Potential cause</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80">
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Peeling or delamination</td>
                      <td className="py-4 px-6">Poor surface preparation</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Bubbling or blisters</td>
                      <td className="py-4 px-6">Unaddressed moisture problems</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Poor adhesion between layers</td>
                      <td className="py-4 px-6">Incompatible products</td>
                    </tr>
                    <tr className="hover:bg-white/2">
                      <td className="py-4 px-6 font-medium text-white">Uneven or poor finish</td>
                      <td className="py-4 px-6">Unsuitable temperature or humidity during application</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="font-sans text-base leading-relaxed text-secondary-foreground/80">
              Ask prospective installers whether they mechanically prepare the concrete, evaluate moisture conditions, repair defects, and provide written warranty terms. Request a detailed scope of work so you can compare quotes accurately.
            </p>
          </section>

          {/* 7. IS IT WORTH IT? */}
          <section id="is-epoxy-garage-flooring-worth-it" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Return on Investment</Label>
            <SectionHeading>Is Epoxy Garage Flooring Worth the Cost?</SectionHeading>

            <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <p>
                For homeowners who want a cleaner, more attractive garage and better protection for their concrete, epoxy flooring can be a worthwhile long-term improvement.
              </p>
              <p>
                The best value isn&apos;t necessarily the lowest upfront price. A properly prepared floor with a coating system suited to the garage&apos;s conditions may deliver better performance than a cheaper application that requires premature repairs.
              </p>
              <p>
                Compare the expected service life, maintenance requirements, warranty, and total installed cost before deciding.
              </p>
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

          {/* 9. PROFESSIONAL SERVICES */}
          <section id="professional-garage-flooring-services" className="border-b border-charcoal-lighter py-12 scroll-mt-24">
            <Label>Local Expert Contractor</Label>
            <SectionHeading>Professional Epoxy Garage Flooring Services in New Jersey</SectionHeading>

            <div className="space-y-4 font-sans text-base leading-relaxed text-secondary-foreground/80">
              <p>
                If you&apos;re considering{" "}
                <Link
                  href="/services/epoxy-flooring-wayne-new-jersey"
                  className="text-primary hover:underline font-medium"
                >
                  epoxy garage flooring in New Jersey
                </Link>
                , working with an experienced flooring contractor can help you choose a system that fits your budget, concrete condition, and intended use. A thorough assessment should account for surface preparation, moisture concerns, coating performance, decorative preferences, and the demands of New Jersey&apos;s seasonal weather.
              </p>
              <p>
                TopCoat LLC offers epoxy flooring services in Wayne, New Jersey. Homeowners can explore the company&apos;s service information to learn more about available flooring solutions and discuss their project requirements. Before committing, request a customized estimate that identifies the preparation process, coating layers, warranty coverage, and expected curing schedule.
              </p>
            </div>

            {/* CTA CARD */}
            <div className="mt-8 rounded-2xl border border-primary/40 bg-linear-to-r from-[#171b22] to-[#101216] p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Epoxy Garage Flooring in New Jersey — TopCoat LLC
                  </h3>
                  <p className="font-sans text-sm md:text-base text-white/70">
                    Contact TopCoat LLC to discuss your garage flooring project and request a quote tailored to your property.
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

          {/* 10. CONCLUSION */}
          <section className="py-12 scroll-mt-24">
            <Label>Summary</Label>
            <SectionHeading>Conclusion</SectionHeading>

            <div className="space-y-4 font-sans text-base md:text-lg leading-relaxed text-secondary-foreground/80">
              <p>
                <Link href="/" className="text-primary hover:underline font-medium">
                  Epoxy garage flooring in New Jersey
                </Link>{" "}
                may cost approximately $4–$12 per square foot in 2027, with the final price determined by garage size, concrete preparation, coating selection, and installation complexity. For the best results, prioritize proper surface preparation, moisture assessment, and a coating system designed for your garage&apos;s conditions.
              </p>
              <p>
                Whether you&apos;re upgrading a single-car garage or a larger residential space, compare detailed estimates and installation specifications before making a decision. A professional assessment is the most reliable way to establish the right flooring solution and budget for your home.
              </p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}

