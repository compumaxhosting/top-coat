import type { ReactNode } from "react";

export function Label({ children }: { children: ReactNode }) {
	return (
		<p className="mb-3 font-sans text-xs uppercase tracking-[0.2em] text-primary">
			{children}
		</p>
	);
}

export function SectionHeading({ children }: { children: ReactNode }) {
	return (
		<h2 className="mb-5 font-serif text-3xl leading-tight text-secondary-foreground md:text-4xl">
			{children}
		</h2>
	);
}
