import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const CTASection = () => {
	return (
		<section className="bg-[#0D0F12] py-20 text-center">
			<div className="container mx-auto px-4">
				<h2 className="mb-6 font-serif text-3xl font-bold text-white/90 md:text-4xl">Elevate your interiors today.</h2>
				<Button
					asChild
					size="lg"
					className="bg-primary h-auto whitespace-normal px-6 py-3 text-center text-base font-sans leading-snug text-primary-foreground hover:bg-copper-light md:px-10 md:py-4"
				>
					<Link href="/contact">
						Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
					</Link>
				</Button>
			</div>
		</section>
	);
};

export default CTASection;
