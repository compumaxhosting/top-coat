import React from "react";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	title: "Building Facade Solutions in New Jersey | Durable & Modern Exteriors",
	description:
		"Professional building facade solutions in New Jersey. Improve durability, energy efficiency, design, and curb appeal with expert exterior services.",
	keywords: [
		"Building Facade Solutions in New Jersey",
		"facade contractors NJ",
		"exterior building renovation",
		"commercial facade services",
		"facade restoration",
		"building envelope systems",
		"energy efficient facades",
		"exterior cladding New Jersey",
	],
	authors: [{ name: "Topcoat LLC" }],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
	alternates: {
		canonical:
			"https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey",
	},
	appleWebApp: {
		capable: true,
		statusBarStyle: "black",
		title: "Building Facade Solutions NJ",
	},
	openGraph: {
		type: "website",
		title: "Building Facade Solutions in New Jersey",
		description:
			"Expert facade design, restoration, and exterior solutions in New Jersey to enhance durability, efficiency, and curb appeal.",
		url: "https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey",
		siteName: "Topcoat LLC",
		images: [
			{
				url: "https://www.topcoat-llc.com/Images/building-facade-blog.webp",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Building Facade Solutions in New Jersey",
		description:
			"Professional facade services in NJ for durability, energy efficiency, and modern building design.",
		images: ["https://www.topcoat-llc.com/Images/building-facade-blog.webp"],
	},
	referrer: "strict-origin-when-cross-origin",
	other: {
		"cache-control": "public",
		expires: "Wed, 01 Jan 2030 00:00:00 GMT",
	},
};

export const viewport: Viewport = {
	themeColor: "#ffffff",
};

const schemaData = {
	"@context": "https://schema.org",
	"@type": "HomeAndConstructionBusiness",
	name: "Topcoat LLC",
	url: "https://www.topcoat-llc.com/blog/building-facade-solutions-in-new-jersey",
	telephone: "+12013152633",
	email: "Almahairi@gmail.com",
	address: {
		"@type": "PostalAddress",
		streetAddress: "108 Fairfield Rd",
		addressLocality: "Wayne",
		addressRegion: "NJ",
		postalCode: "07470",
		addressCountry: "US",
	},
};

export default function BuildingFacadeBlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
			/>
			<main>{children}</main>
		</>
	);
}

