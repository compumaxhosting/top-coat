"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Label, SectionHeading } from "./SectionPrimitives";

const faqs = [
    {
        question: "What is custom decorative concrete?",
        answer:
            "Custom decorative concrete is concrete designed or finished for both function and appearance. It may include stamping, coloring, overlays, staining, texturing, polishing, engraving, or exposed aggregate. The specific technique depends on the existing surface, intended use, design goals, and site conditions.",
    },
    {
        question: "Is decorative concrete worth it?",
        answer:
            "It can be worthwhile when appearance, durability, and design flexibility are important. Decorative concrete can turn an ordinary patio, walkway, driveway, or pool deck into a coordinated outdoor feature. The value depends on proper design, substrate preparation, installation quality, and ongoing maintenance.",
    },
    {
        question: "Can old concrete be resurfaced?",
        answer:
            "Some existing concrete can be resurfaced with a suitable decorative overlay, but not every slab is a good candidate. Significant structural movement, extensive deterioration, drainage problems, or other underlying issues may require a different solution. A professional inspection should determine whether resurfacing is appropriate.",
    },
    {
        question: "Is stamped concrete good for New Jersey?",
        answer:
            "Stamped concrete can be a suitable option for New Jersey outdoor spaces when the system is properly designed, installed, cured, and maintained. Local climate conditions should be considered during planning, particularly temperature changes, moisture, drainage, and winter exposure.",
    },
    {
        question: "What decorative concrete designs are popular in 2026?",
        answer:
            "Popular approaches include natural-stone stamped patterns, modern geometric designs, exposed aggregate, custom overlays, subtle color combinations, and minimalist contemporary finishes. The best design is one that complements the property's architecture and remains practical for its intended use.",
    },
    {
        question: "Does decorative concrete require maintenance?",
        answer:
            "Yes. Maintenance requirements vary by finish and exposure. Regular cleaning, prompt attention to surface problems, proper drainage, and periodic sealing when recommended can help maintain appearance and performance.",
    },
];

export default function BlogContent() {
    const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
    return (
        <article className="min-h-screen bg-charcoal text-secondary-foreground">
            <div className="mx-auto flex w-full max-w-7xl flex-col justify-center px-4">
                <div className="w-full pt-8">

                    {/* TABLE OF CONTENTS */}

                    <section className="bg-[#14161A] pb-10">
                        <div className="rounded-2xl border border-[#282c33] bg-[#0d0f12] p-6">
                            <h2 className="mb-6 font-serif text-2xl font-bold text-white/90 md:text-3xl">
                                Table of Contents
                            </h2>

                            <ul className="space-y-3">
                                {[
                                    ["What Is Custom Decorative Concrete?", "one"],
                                    ["10 Decorative Concrete Ideas for 2026", "two"],
                                    ["How Decorative Concrete Installation Works", "three"],
                                    ["Benefits & Common Challenges", "four"],
                                    ["Cost Considerations", "five"],
                                    ["Why Professional Installation Matters", "six"],
                                    ["Maintenance Tips", "seven"],
                                    ["Frequently Asked Questions", "eight"],
                                    ["Why Choose TopCoat Artistry", "nine"],
                                    ["Conclusion", "Conclusion"],
                                ].map(([title, id], index) => (
                                    <li key={id}>
                                        <a
                                            href={`#${id}`}
                                            className="block text-md text-white/70 transition-colors hover:text-primary md:text-lg"
                                        >
                                            <span className="mr-2 font-mono text-primary/90">
                                                {String(index + 1).padStart(2, "0")}.
                                            </span>
                                            {title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* INTRO */}

                    <section className="border-b border-charcoal-lighter py-16">
                        <Label>Decorative Concrete Guide · Wayne NJ</Label>

                        <SectionHeading>
                            Custom Decorative Concrete in Wayne NJ: 10 Stunning Ideas
                            Transforming Outdoor Spaces in 2026
                        </SectionHeading>

                        <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
                            <Link href="/services/custom-decorative-concrete-contractors-wayne-nj" className="text-primary hover:underline">
                                Custom decorative concrete in Wayne, NJ
                            </Link>, gives homeowners and businesses a practical way to upgrade patios, walkways, driveways, pool decks, and other outdoor surfaces. From stamped patterns that resemble natural stone to decorative overlays and artistic finishes, concrete can be customized for both appearance and performance.
                        </p>

                        <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
                            For properties across Wayne, Newark, Paterson, Jersey City, Bergen County, and nearby communities, the right decorative concrete design can improve curb appeal while creating a durable outdoor surface suited to the local climate.
                        </p>

                        <div className="mt-8 overflow-hidden rounded-lg">
                            <div className="relative h-72 w-full md:h-96">
                                <Image
                                    src="/Images/custom-decorative-concrete-wayne-nj-ideas-2026.webp"
                                    alt="Custom Decorative Concrete Wayne NJ"
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* ONE */}

                    <section
                        id="one"
                        className="border-b border-charcoal-lighter py-16"
                    >
                        <Label>Definition</Label>

                        <SectionHeading>
                            What Is Custom Decorative Concrete?
                        </SectionHeading>

                        <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
                            Decorative concrete is conventional concrete enhanced with color, texture, patterns, stains, stamping, overlays, polishing, engraving, or other finishing techniques. The American Concrete Institute recognizes decorative concrete as concrete treated to create aesthetic effects while maintaining its underlying functional purpose.
                        </p>

                        <p className="mt-5 font-sans text-base leading-relaxed text-secondary-foreground/70">
                            Instead of accepting plain gray concrete, property owners can select finishes that complement their architecture, landscaping, and personal style.
                        </p>
                    </section>

                    {/* TWO */}

                    <section
                        id="two"
                        className="border-b border-charcoal-lighter py-16"
                    >
                        <Label>Design Inspiration</Label>

                        <SectionHeading>
                            10 Decorative Concrete Ideas for 2026
                        </SectionHeading>

                        <ul className="mt-8 space-y-10">
                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    1. Natural Stone-Style Stamped Concrete
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    Stamped concrete can recreate the appearance of slate, flagstone,
                                    cobblestone, or other masonry patterns. It is a popular choice for
                                    patios, walkways, and outdoor entertaining areas.
                                </p>
                            </li>

                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    2. Modern Geometric Patterns
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    For contemporary homes, geometric scoring and contrasting sections can
                                    create a clean architectural appearance without the cost and maintenance
                                    associated with some individual paver systems.
                                </p>
                            </li>

                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    3. Decorative Concrete Overlays
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    If an existing concrete surface is structurally suitable but looks worn,
                                    a concrete overlay in Wayne, NJ can provide a new decorative surface
                                    without necessarily replacing the entire slab. Proper evaluation and
                                    substrate preparation are essential.
                                </p>
                            </li>

                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    4. Natural-Looking Pool Decks
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    Decorative finishes can transform pool surrounds into visually
                                    coordinated outdoor spaces. Textured surfaces can also be considered
                                    where slip resistance is an important design requirement.
                                </p>
                            </li>

                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    5. Elegant Driveway Finishes
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    A decorative driveway can make a strong first impression. Borders,
                                    patterns, and complementary colors can create a more sophisticated
                                    entrance while retaining concrete&apos;s practical characteristics.
                                </p>
                            </li>

                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    6. Custom Patio Designs
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    A custom patio can combine multiple colors, textures, borders, and
                                    patterns. Homeowners in Wayne, Paramus, Ridgewood, Glen Rock, and
                                    surrounding Bergen County communities can use decorative concrete to
                                    create outdoor living areas that feel tailored to the property.
                                </p>
                            </li>

                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    7. Decorative Walkways
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    A walkway does not have to look like an afterthought. Stamped patterns,
                                    exposed aggregate, or carefully selected textures can connect
                                    driveways, entrances, gardens, and patios into one cohesive landscape
                                    design.
                                </p>
                            </li>

                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    8. Artistic Concrete Finishes
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    For homeowners seeking something different, artistic concrete finishes
                                    can incorporate custom textures, stains, scoring, engraving, and other
                                    decorative techniques. These approaches are particularly useful when
                                    the goal is a one-of-a-kind surface.
                                </p>
                            </li>

                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    9. Exposed Aggregate
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    Exposed aggregate reveals decorative stone within the concrete surface,
                                    creating texture and visual depth. It can work especially well for
                                    walkways, patios, and other outdoor areas where a natural appearance is
                                    desired.
                                </p>
                            </li>

                            <li>
                                <h3 className="mb-3 font-serif text-2xl text-secondary-foreground">
                                    10. Seamless Contemporary Finishes
                                </h3>
                                <p className="font-sans leading-relaxed text-secondary-foreground/70">
                                    Minimalist concrete surfaces can complement modern architecture. Subtle
                                    color variations and refined textures create a sophisticated look
                                    without overwhelming the surrounding landscape.
                                </p>
                            </li>
                        </ul>
                    </section>

                    {/* THREE */}

                    <section
                        id="three"
                        className="border-b border-charcoal-lighter py-16"
                    >
                        <Label>Installation Process</Label>

                        <SectionHeading>
                            How Decorative Concrete Installation Works
                        </SectionHeading>

                        <ol className="ml-6 list-decimal space-y-3 font-sans text-secondary-foreground/70">
                            <li>Site inspection and consultation</li>
                            <li>Surface preparation and repairs</li>
                            <li>Design and finish selection</li>
                            <li>Concrete placement or resurfacing</li>
                            <li>Coloring, stamping, or texturing</li>
                            <li>Curing and sealing</li>
                            <li>Final inspection and project completion</li>
                        </ol>
                    </section>

                    {/* FOUR */}

                    <section
                        id="four"
                        className="border-b border-charcoal-lighter py-16"
                    >
                        <Label>Advantages</Label>

                        <SectionHeading>
                            Benefits & Common Challenges
                        </SectionHeading>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h3 className="mb-4 font-serif text-2xl text-secondary-foreground">
                                    Benefits
                                </h3>

                                <ul className="ml-6 list-disc space-y-2 font-sans text-secondary-foreground/70">
                                    <li>Custom appearance</li>
                                    <li>Wide variety of colors and textures</li>
                                    <li>Improved curb appeal</li>
                                    <li>Versatile applications</li>
                                    <li>Long-term durability</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 font-serif text-2xl text-secondary-foreground">
                                    Challenges
                                </h3>

                                <ul className="ml-6 list-disc space-y-2 font-sans text-secondary-foreground/70">
                                    <li>Improper drainage can affect performance</li>
                                    <li>Surface preparation is critical</li>
                                    <li>Poor installation may lead to cracking</li>
                                    <li>Periodic maintenance is recommended</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FIVE */}

                    <section
                        id="five"
                        className="border-b border-charcoal-lighter py-16"
                    >
                        <Label>Budgeting</Label>

                        <SectionHeading>
                            Cost Considerations
                        </SectionHeading>

                        <ul className="ml-6 list-disc space-y-2 font-sans text-secondary-foreground/70">
                            <li>Project size</li>
                            <li>Existing surface condition</li>
                            <li>Preparation requirements</li>
                            <li>Pattern complexity</li>
                            <li>Color options</li>
                            <li>Accessibility of the work area</li>
                            <li>Repair or resurfacing needs</li>
                        </ul>
                    </section>

                    {/* SIX */}

                    <section
                        id="six"
                        className="border-b border-charcoal-lighter py-16"
                    >
                        <Label>Professional Expertise</Label>

                        <SectionHeading>
                            Why Professional Installation Matters
                        </SectionHeading>

                        <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
                            <Link href="/services/custom-decorative-concrete-contractors-wayne-nj" className="text-primary hover:underline">Decorative concrete</Link> combines construction knowledge with finishing skill. A visually attractive pattern will not compensate for poor preparation or drainage.
                        </p> <br />
                        <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
                            TopCoat Artistry LLC reports more than 20 years of experience in epoxy flooring and decorative concrete and serves communities including Wayne, Newark, Paterson, Jersey City, New York City, and Bergen County. Its portfolio includes stamped concrete patios, custom decorative surfaces, vertical decorative finishes, and other specialty projects
                        </p><br />
                        <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
                            For projects subject to applicable construction requirements, homeowners should also confirm local requirements with the appropriate New Jersey authority.
                        </p>
                    </section>

                    {/* SEVEN */}

                    <section
                        id="seven"
                        className="border-b border-charcoal-lighter py-16"
                    >
                        <Label>Maintenance</Label>

                        <SectionHeading>
                            Maintenance Tips
                        </SectionHeading>

                        <ul className="ml-6 list-disc space-y-2 font-sans text-secondary-foreground/70">
                            <li>Keep surfaces clean</li>
                            <li>Address drainage issues promptly</li>
                            <li>Follow sealing recommendations</li>
                            <li>Inspect surfaces periodically</li>
                        </ul>
                    </section>

                    {/* EIGHT */}

                    <section
                        id="eight"
                        className="border-b border-charcoal-lighter py-16"
                    >
                        <Label>FAQ</Label>

                        <SectionHeading>
                            Frequently Asked Questions
                        </SectionHeading>

                        <div className="mt-8 flex flex-col">
                            {faqs.map((faq, index) => (
                                <div
                                    key={faq.question}
                                    className="border-b border-charcoal-lighter"
                                >
                                    <button
                                        onClick={() =>
                                            setOpenFAQIndex(
                                                openFAQIndex === index ? null : index
                                            )
                                        }
                                        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors duration-300 hover:text-primary"
                                        aria-expanded={openFAQIndex === index}
                                    >
                                        <span
                                            className={`font-serif text-base leading-relaxed transition-colors ${openFAQIndex === index
                                                    ? "text-secondary-foreground"
                                                    : "text-secondary-foreground/70"
                                                }`}
                                        >
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`shrink-0 text-xl leading-none text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openFAQIndex === index
                                                    ? "rotate-45"
                                                    : "rotate-0"
                                                }`}
                                        >
                                            +
                                        </span>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${openFAQIndex === index
                                                ? "grid-rows-[1fr] opacity-100"
                                                : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="pb-6 font-sans text-sm leading-relaxed text-secondary-foreground/70 md:text-base">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* NINE */}

                    <section
                        id="nine"
                        className="border-b border-charcoal-lighter py-16"
                    >
                        <Label>Why TopCoat</Label>

                        <SectionHeading>
                            Why Choose TopCoat Artistry LLC?
                        </SectionHeading>

                        <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
                            <Link href='/' className="text-primary hover:underline">
                                TopCoat Artistry LLC
                            </Link> combines more than two decades of experience with custom surface design for residential, commercial, and industrial properties. The company provides decorative concrete, stamped concrete, terrazzo, garage floor coatings, and related surface solutions across North and Central New Jersey. Its stated approach emphasizes quality materials, detailed workmanship, transparent communication, and solutions designed for Northeast climate conditions.
                        </p>
                        <br />
                        <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
                            Whether you are considering Custom Decorative Concrete Wayne NJ, decorative concrete in Newark, Paterson, Jersey City, Bergen County, Paramus, Ridgewood, Glen Rock, Saddle River, Upper Saddle River, Ramsey, Mahwah, Midland Park, Hillsdale, Teaneck, Montvale, River Vale, Westwood, Park Ridge, Montville, or New York City, the first step is evaluating your existing surface and defining the result you want.
                        </p>
                    </section>

                    {/* CONCLUSION */}

                    <section id="Conclusion" className="py-16">
                        <Label>Conclusion</Label>

                        <SectionHeading>
                            Decorative Concrete Solutions for New Jersey Properties
                        </SectionHeading>

                        <p className="font-sans text-base leading-relaxed text-secondary-foreground/70">
                            Custom decorative concrete offers far more than a basic gray slab. With stamped patterns, overlays, resurfacing, exposed aggregate, artistic finishes, and contemporary designs, homeowners and businesses can create outdoor spaces that are distinctive, functional, and easier to coordinate with the surrounding property. <br /> <br />
                            The key is choosing the right system for the existing surface and having the preparation, installation, curing, and finishing handled correctly. If you are planning a decorative concrete project in Wayne, NJ, or throughout NJ and NYC, a professional site evaluation can help turn your design idea into a practical long-term solution.
                        </p>

                        <section className="pt-16">
                            <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-primary">
                                Get Started
                            </p>

                            <h2 className="mb-5 max-w-2xl font-serif text-3xl leading-tight text-secondary-foreground md:text-5xl">
                                Ready to Transform Your Outdoor Space?
                            </h2>

                            <p className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-secondary-foreground/70">
                                Contact TopCoat Artistry LLC today to discuss decorative concrete
                                patios, driveways, walkways, resurfacing systems, overlays, and
                                custom outdoor concrete solutions. From Wayne and Bergen County
                                to surrounding New Jersey communities, our team helps property
                                owners create beautiful and durable concrete surfaces.
                            </p>

                            <Link
                                href="/services/custom-decorative-concrete-contractors-wayne-nj"
                                className="inline-flex items-center gap-3 rounded-lg border border-primary px-6 py-3 font-sans text-xs uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                                Learn More About Our Services
                                <span className="text-base">→</span>
                            </Link>
                        </section>
                    </section>

                </div>
            </div>
        </article>
    );
}