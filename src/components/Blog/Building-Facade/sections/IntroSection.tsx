import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <div className="w-full pt-8">
      <p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-primary">
        Building Facades · Wayne & New Jersey
      </p>
      <h2 className="mb-6 font-serif text-3xl leading-tight text-secondary-foreground md:text-5xl">
        Building Facade Solutions in New Jersey: Enhancing Durability, Design, and
        Curb Appeal
      </h2>
      <p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        <Link href="/services/building-facade-contractors-wayne-nj" className="text-primary">
          Building facade in New Jersey
        </Link>{" "} focus on improving the exterior performance, appearance, and longevity of commercial and residential properties. These solutions enhance durability, energy efficiency, safety, and curb appeal while protecting buildings from harsh weather conditions.
      </p> <br />
      <p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
        In a state like New Jersey, where properties face heavy rain, snow, humidity, coastal air, and temperature fluctuations, a strong facade system is essential. Professional facade design and restoration not only improve aesthetics but also extend the lifespan of the structure and reduce maintenance costs.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
          <div className="relative h-64">
            <Image
              src="/Images/building-facade-blog.webp"
              alt="Building facade restoration and upgrade"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
          <div className="relative h-64">
            <Image
              src="/Images/building-facade2.webp"
              alt="Commercial building facade cladding system"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
