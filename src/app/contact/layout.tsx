import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.topcoat-llc.com"),
	alternates: {
		canonical: "/contact",
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}