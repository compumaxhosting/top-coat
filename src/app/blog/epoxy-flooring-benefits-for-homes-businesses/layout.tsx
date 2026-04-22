export const metadata = {
	title: "Epoxy Flooring Benefits for Homes & Businesses | TopCoat Artistry LLC",
	description:
		"Discover why epoxy flooring is durable, cost-effective, and ideal for homes and businesses in Wayne & North Jersey. Learn benefits, costs, and uses.",
	keywords:
		"Epoxy Flooring, Epoxy flooring benefits, Residential epoxy flooring, Commercial epoxy flooring, Garage epoxy floors, Industrial epoxy flooring, Epoxy floor coating cost, Epoxy flooring in Wayne & North Jersey, Durable flooring solutions, Low maintenance flooring",
};

const schemaData = {
	"@context": "https://schema.org",
	"@type": "HomeAndConstructionBusiness",
	name: "Topcoat LLC",
	url: "https://www.topcoat-llc.com/",
	telephone: "+1-201-315-2633",
	email: "Almahairi@gmail.com",
	address: {
		"@type": "PostalAddress",
		streetAddress: "108 Fairfield Rd",
		addressLocality: "Wayne",
		addressRegion: "NJ",
		postalCode: "07470",
		addressCountry: "US",
	},
	areaServed: [
		"Wayne, NJ",
		"Newark, NJ",
		"Paterson, NJ",
		"Jersey City, NJ",
		"Northern New Jersey",
		"Central New Jersey",
	],
};

export default function BlogPostLayout({
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
			{children}
		</>
	);
}
