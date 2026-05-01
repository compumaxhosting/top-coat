import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.topcoat-llc.com"),
	title: "Blog | TopCoat Artistry LLC",
	description: "Expert tips, industry trends, and project showcases from TopCoat Artistry LLC. Learn about epoxy flooring, decorative concrete, and more.",
	alternates: {
		canonical: "/blog",
	},
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
