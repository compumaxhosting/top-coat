"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown } from "lucide-react"; // Added ChevronDown
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { NavLink } from "./types";

const servicesLinks = [
	{ title: "Epoxy Flooring NJ", path: "/services/epoxy-flooring" },
	{ title: "Terrazzo Flooring Installation", path: "/services/terrazzo" },
	{ title: "Building Facade Concrete Finishes", path: "/services/building-facades" },
	{ title: "Garage Floor Epoxy Coatings", path: "/services/garage-floors" },
	{ title: "Stamped Concrete Patios & Driveways", path: "/services/stamped-concrete" },
	{ title: "Custom Decorative Concrete", path: "/services/custom-decorative-concrete" },
];

type DesktopNavProps = {
	links: NavLink[];
};

export function DesktopNav({ links }: DesktopNavProps) {
	const pathname = usePathname();
	const [openDropdown, setOpenDropdown] = useState(false);

	const isActiveLink = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	return (
		<nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
			{links.map((link) => {
				const isActive = isActiveLink(link.href);
				const isServices = link.label === "Services";

				return (
					<div
						key={link.label}
						className="relative"
						onMouseEnter={() => isServices && setOpenDropdown(true)}
						onMouseLeave={() => isServices && setOpenDropdown(false)}
					>
						<Link
							href={link.href}
							aria-current={isActive ? "page" : undefined}
							className={cn(
								"group relative inline-flex items-center gap-1 text-sm font-sans font-medium tracking-wide uppercase",
								"transition-all duration-300 active:scale-95",
								isActive
									? "text-primary"
									: "text-[#efece7cc] hover:text-primary"
							)}
						>
							<span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
								{link.label}
							</span>

							{/* Dropdown Icon */}
							{isServices && (
								<ChevronDown
									className={cn(
										"w-3 h-3 md:w-4 md:h-4 transition-transform duration-300",
										openDropdown ? "rotate-180" : "rotate-0"
									)}
									aria-hidden="true"
								/>
							)}

							<span
								className={cn(
									"absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300",
									isActive ? "w-full" : "w-0 group-hover:w-full"
								)}
							/>
						</Link>

						{/* SERVICES DROPDOWN */}
						{isServices && openDropdown && (
							<div className="absolute top-full left-[-4px] w-72 bg-white/90 border border-white/10 shadow-xl rounded-md z-50">
								{servicesLinks.map((item) => (
									<Link
										key={item.title}
										href={item.path}
										className="block px-4 py-2 text-sm text-copper-light hover:text-primary hover:bg-copper-light hover:text-white transition"
									>
										{item.title}
									</Link>
								))}
							</div>
						)}
					</div>
				);
			})}

			<Button
				asChild
				className="bg-primary font-sans text-sm tracking-wide text-primary-foreground hover:bg-copper-light"
			>
				<Link href="/contact" className="inline-flex items-center gap-2">
					<Phone className="size-4" aria-hidden="true" />
					<span>Get a Quote</span>
				</Link>
			</Button>
		</nav>
	);
}