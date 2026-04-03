"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "@/Config/Site";
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

type MobileDrawerProps = {
	isOpen: boolean;
	links: NavLink[];
	onClose: () => void;
};

export function MobileDrawer({ isOpen, links, onClose }: MobileDrawerProps) {
	const pathname = usePathname();
	const [servicesOpen, setServicesOpen] = useState(false);

	const isActiveLink = (href: string) => {
		if (href === "/") return pathname === "/";
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	const toggleServices = () => setServicesOpen(!servicesOpen);

	return (
		<div
			id="mobile-navigation"
			role="dialog"
			aria-modal="true"
			aria-label="Mobile navigation"
			className={cn(
				"fixed top-0 left-0 z-60 h-dvh w-75 sm:w-85 lg:hidden flex flex-col bg-[#0d0f12] border-r border-white/6 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
				isOpen ? "translate-x-0" : "-translate-x-full"
			)}
		>
			<div className="absolute top-0 right-0 h-full w-px bg-linear-to-b from-transparent via-primary/40 to-transparent" />

			{/* Logo */}
			<div className="flex items-center border-b border-white/6 px-6 pt-5 pb-4">
				<Link href="/" onClick={onClose} aria-label={`${siteConfig.name} Home`}>
					<Image
						src="/Images/TopCoat-white-logo.webp"
						alt={siteConfig.name}
						width={160}
						height={70}
						className="h-9 w-auto"
					/>
				</Link>
			</div>

			{/* Navigation Links */}
			<nav className="flex flex-1 flex-col gap-0 px-5 py-3">
				{links.map((link, index) => {
					const isActive = isActiveLink(link.href);
					const isServices = link.label === "Services";

					return (
						<div key={link.label} className="flex flex-col">
							{/* Main link button */}
							<button
								onClick={isServices ? toggleServices : onClose}
								className={cn(
									"group relative flex items-center justify-between w-full gap-3 rounded-sm px-2 py-2.5 text-sm font-sans font-medium tracking-widest uppercase border-b border-white/6 last:border-b-0 transition-all duration-300 active:scale-95",
									isActive ? "bg-primary/10 text-primary" : "text-white/50 hover:text-white hover:bg-white/5"
								)}
							>
								<span className="transition-transform duration-300 group-hover:translate-x-1">{link.label}</span>
								{isServices && (
									<ChevronDown
										className={cn(
											"w-3 h-3 transition-transform duration-300",
											servicesOpen ? "rotate-180" : "rotate-0"
										)}
									/>
								)}
							</button>

							{/* Services Dropdown */}
							{isServices && servicesOpen && (
								<div className="flex flex-col pl-4 border-l border-white/10 bg-black/90 z-50 relative">
									{servicesLinks.map((item) => (
										<Link
											key={item.title}
											href={item.path}
											onClick={onClose}
											className="block px-2 py-2 text-sm text-copper-light hover:text-primary hover:bg-white/5 transition"
										>
											{item.title}
										</Link>
									))}
								</div>
							)}
						</div>
					);
				})}

				{/* Call & Quote Buttons */}
				<div className="mt-4 flex flex-col gap-2">
					<Link
						href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
						onClick={onClose}
						className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-sm border border-primary/40 text-primary bg-primary/8 text-xs font-sans font-semibold tracking-[0.16em] uppercase hover:border-primary/60 hover:bg-primary/15 transition-colors duration-300"
					>
						<Phone className="size-4" aria-hidden="true" />
						<span>Call Now</span>
					</Link>

					<Link
						href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
						onClick={onClose}
						className="flex items-center justify-center gap-2.5 w-full py-3 px-5 rounded-sm bg-primary text-primary-foreground text-xs font-sans font-semibold tracking-[0.16em] uppercase hover:bg-copper-light transition-colors duration-300 ring-1 ring-primary/30"
					>
						<Phone className="size-4" aria-hidden="true" />
						<span>Get a Quote</span>
					</Link>
				</div>

				{/* Social Links */}
				<div className="mt-4 border-t border-white/6 pt-3">
					<p className="mb-2 text-[10px] font-mono tracking-[0.18em] uppercase text-white/25">
						Follow Us
					</p>
					<div className="flex items-center gap-3">
						<a
							href={siteConfig.social.instagram}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Follow us on Instagram"
							className="group flex h-9 w-9 items-center justify-center rounded-sm border border-white/12 bg-white/5 text-white shadow-[0_10px_24px_-18px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
						>
							<Instagram className="size-4 transition-transform duration-300 group-hover:scale-105" />
						</a>
						<a
							href={siteConfig.social.facebook}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Follow us on Facebook"
							className="group flex h-9 w-9 items-center justify-center rounded-sm border border-white/12 bg-white/5 text-white shadow-[0_10px_24px_-18px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
						>
							<Facebook className="size-4 transition-transform duration-300 group-hover:scale-105" />
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}