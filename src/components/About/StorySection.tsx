"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const StorySection = () => {
	const { ref, isVisible } = useScrollAnimation<HTMLElement>();

	return (
		<section className="bg-[#14161A] py-20" ref={ref}>
			<div className="container mx-auto grid grid-cols-1 gap-16 px-4 lg:grid-cols-2 lg:items-center">
				{/* Text Content */}
				<div className="space-y-8">
					{/* Who We Are */}
					<div
						className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
							}`}
					>
						<p className="mb-3 font-sans text-sm uppercase tracking-widest text-primary">
							Who We Are
						</p>
						<h2 className="mb-6 font-serif text-3xl font-bold text-white/90 md:text-4xl">
							20+ Years of Excellence in NJ Epoxy Flooring & Decorative Concrete
						</h2>
						<p className="mb-4 font-sans leading-relaxed text-white/70">
							At TopCoat Artistry LLC, we transform ordinary surfaces into durable, high-end masterpieces. With two decades of hands-on experience, we provide New Jersey homeowners and businesses with premium flooring solutions that combine industrial-strength protection with sophisticated aesthetics.
						</p>
					</div>

					{/* Professional Concrete & Epoxy Services */}
					<div className="space-y-4 text-white/70">
						<h2 className="text-2xl font-semibold text-white/90">
							Professional Concrete & Epoxy Services
						</h2>
						<p className="leading-relaxed text-white/70">
							We address common flooring frustrations—such as cracking and staining—using advanced materials engineered for the Northeast climate.
						</p>
						<ul className="list-disc list-inside space-y-2 pl-4">
							<li><strong>Garage Floor Epoxy:</strong> Slip-resistant, chemical-proof coatings built for NJ winters.</li>
							<li><strong>Decorative Stamped Concrete:</strong> The beauty of natural stone with superior concrete durability.</li>
							<li><strong>Terrazzo & Custom Surfaces:</strong> Elegant, seamless interior flooring tailored to your vision.</li>
							<li><strong>Building Facades:</strong> Expert masonry and aesthetic restoration for lasting curb appeal.</li>
						</ul>
					</div>
				</div>

				{/* Image */}
				<div
					className={`transition-all delay-200 duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
						}`}
				>
					<div className="relative h-[450px] w-full overflow-hidden rounded-xl">
						<Image
							src="/Images/About.webp"
							alt="TopCoat artisan crafting a decorative floor"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 50vw"
						/>
					</div>
				</div>
			</div>

			{/* Full-width Local Expertise Section */}
			<div className="container mx-auto mt-16 px-4 space-y-4 text-white/70">
				<h2 className="text-2xl font-semibold text-white/90">
					Local Expertise Across North Jersey
				</h2>
				<p className="leading-relaxed">
					Based in Wayne, NJ, we proudly serve Newark, Paterson, and Jersey City. Our local knowledge ensures your surfaces withstand regional humidity and temperature shifts.
				</p>
				<p className="leading-relaxed">
					Ready for a surface upgrade?{" "}
					<Link
						href="/contact"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline"
					>
						Contact Us for a Free Estimate
					</Link>
				</p>
			</div>
		</section>
	);
};

export default StorySection;