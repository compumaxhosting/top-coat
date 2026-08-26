import { Label, SectionHeading } from "../SectionPrimitives";

export default function ProfessionalInstallationSection() {
  return (
    <section className="border-b border-charcoal-lighter py-16" id="why-professional">
      <Label>Expert Installation</Label>
      <SectionHeading>Why Does Professional Epoxy Flooring Installation Matter?</SectionHeading>
      
      <div className="max-w-4xl space-y-5 font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        <p>
          Professional installation is important because epoxy flooring is more than simply applying a coating to concrete. Surface preparation, moisture evaluation, crack repair, product selection, mixing, application thickness, curing conditions, and topcoat selection can all affect the final result.
        </p>
        <p>
          An experienced flooring contractor can evaluate the existing concrete and recommend an appropriate system based on how the floor will actually be used.
        </p>
        <blockquote className="border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75 my-6">
          For commercial and industrial properties, this evaluation becomes even more important because the flooring may need to withstand heavy traffic, equipment, chemicals, impacts, or frequent cleaning.
        </blockquote>
      </div>
    </section>
  );
}
