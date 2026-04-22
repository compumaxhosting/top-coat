export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	image: string;
	category: string;
	date: string;
	readTime: string;
};

export const blogPosts: BlogPost[] = [
	{
		slug: "epoxy-flooring-benefits-for-homes-businesses",
		title: "Why Epoxy Flooring is the Smart Choice for Homes and Businesses",
		excerpt:
			"Discover why epoxy flooring is the most durable, cost-effective, and visually appealing flooring solution for both residential and commercial spaces.",
		image: "/Images/Service-Epoxy-Flooring.webp",
		category: "Epoxy Flooring",
		date: "April 2026",
		readTime: "8 min read",
	},
];
