import Image from "next/image";

export default function IntroSection() {
	return (
		<div className="w-full pt-8">
			<p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-primary">
				Flooring Guide · Wayne & North Jersey
			</p>
			<h2 className="mb-6 font-serif text-3xl leading-tight text-secondary-foreground md:text-5xl">
				Why Epoxy Flooring is a Smart Investment
			</h2>
			<p className="max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
				A seamless, long-lasting surface that resists damage, stains, and wear and is
				ideal for residential, commercial, and industrial spaces alike.
			</p>
			<p className="mt-5 max-w-4xl font-sans text-base leading-relaxed text-secondary-foreground/70 md:text-lg">
				Whether you&apos;re upgrading a garage, renovating a retail store, or improving
				an industrial facility, epoxy flooring delivers performance, aesthetics, and
				value in one solution. Its versatility, low maintenance, and modern finish
				make it a top choice across industries.
			</p>

			<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
					<div className="relative h-64">
						<Image
							src="/Images/Service-Epoxy-Flooring.webp"
							alt="Professional epoxy flooring application in commercial facility"
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</div>
				</div>
				<div className="overflow-hidden rounded-lg border border-charcoal-lighter bg-charcoal-light">
					<div className="relative h-64">
						<Image
							src="/Images/garage-floor.webp"
							alt="Epoxy coated garage floor with glossy finish"
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
