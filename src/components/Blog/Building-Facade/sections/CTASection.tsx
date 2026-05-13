import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20">
      <p className="mb-4 font-sans text-xs uppercase tracking-[0.2em] text-primary">
        Get Started
      </p>
      <h2 className="mb-5 max-w-2xl font-serif text-3xl leading-tight text-secondary-foreground md:text-5xl">
        Ready to Upgrade Your Building Exterior?
      </h2>
      <p className="mb-8 max-w-2xl font-sans text-base leading-relaxed text-secondary-foreground/70">
        Consult experienced facade professionals in New Jersey to choose the right
        system for performance, compliance, and design goals.
      </p>
      <Link
        href="/services/building-facade-contractors-wayne-nj"
        className="inline-flex items-center gap-3 rounded-lg border border-primary px-6 py-3 font-sans text-xs uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Learn More About Our Services
        <span className="text-base">→</span>
      </Link>
    </section>
  );
}
