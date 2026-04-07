"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown } from "lucide-react"; // Added ChevronDown
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { NavLink } from "./types";

const servicesLinks = [
	{ title: "Epoxy Flooring", path: "/services/epoxy-flooring" },
	{ title: "Terrazzo Flooring", path: "/services/terrazzo" },
	{ title: "Building Facade", path: "/services/building-facades" },
	{ title: "Garage Floor", path: "/services/garage-floors" },
	{ title: "Stamped Concrete", path: "/services/stamped-concrete" },
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
						{isServices && (
							<div
								className={cn(
									"absolute top-full left-0 z-50 w-72 pt-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
									openDropdown
										? "translate-y-0 opacity-100 pointer-events-auto"
										: "-translate-y-1 opacity-0 pointer-events-none"
								)}
							>
								<div className="overflow-hidden rounded-sm border border-white/12 bg-[#14161A]/96 backdrop-blur-md shadow-[0_24px_60px_-24px_rgba(0,0,0,0.75)] ring-1 ring-primary/20">
									<div className="h-px w-full bg-linear-to-r from-transparent via-primary/45 to-transparent" />
									<div className="p-2">
										{servicesLinks.map((item) => (
											<Link
												key={item.title}
												href={item.path}
												className="group flex items-center justify-between rounded-sm px-3 py-2.5 text-sm font-sans text-[#efece7cc] transition-colors duration-200 hover:bg-white/6 hover:text-primary"
											>
												<span>{item.title}</span>
												<span className="text-[10px] tracking-[0.2em] uppercase text-primary/0 transition-colors duration-200 group-hover:text-primary/80">
													View
												</span>
											</Link>
										))}
									</div>
								</div>
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