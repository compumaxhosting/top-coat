import { Label, SectionHeading } from "../SectionPrimitives";

export default function DefinitionSection() {
  return (
    <section>
      <Label>Definition</Label>
      <SectionHeading>What is Terrazzo Flooring?</SectionHeading>
      <p>
        Terrazzo is a composite flooring made from marble, glass, or stone chips set
        in a cementitious or resin binder, then ground and polished to a smooth,
        seamless finish.
      </p>
      <p className="mt-4 font-sans text-base leading-relaxed text-secondary-foreground/70">
        Terrazzo dates back centuries but has evolved into a modern flooring system used in homes, offices, airports, and retail spaces.
      </p>
      <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-lg italic leading-relaxed text-secondary-foreground/75">
        A long-lasting, decorative floor that combines durability with customizable aesthetics.
      </blockquote>
    </section>
  );
}
