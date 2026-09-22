import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.topcoat-llc.com"),
	title: "Contact Us | Free Estimate for Epoxy & Concrete NJ | TopCoat Artistry LLC",
	description:
		"Contact TopCoat Artistry LLC for a free estimate on epoxy flooring, terrazzo, stamped concrete, and garage coatings in Wayne, Newark, Paterson & Jersey City, NJ. Call (201) 315-2633.",
	alternates: {
		canonical: "/contact",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}