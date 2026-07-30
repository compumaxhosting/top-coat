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
    slug: "why-wayne-homeowners-choose-epoxy-polyaspartic-garage-floor-coatings-2026",
    title:
      "Why Wayne, NJ Homeowners Are Choosing Epoxy & Polyaspartic Garage Floor Coatings in 2026",
    excerpt:
      "Discover why homeowners in Wayne, NJ are upgrading their garages with professional epoxy and polyaspartic floor coatings. Learn about the benefits, installation process, cost factors, maintenance, and why these durable flooring systems are a smart long-term investment.",
    image: "/Images/garage-floor2.webp",
    category: "Garage Floor Coating",
    date: "17 July 2026",
    readTime: "10 min read",
  },
  {
    slug: "epoxy-flooring-benefits-for-homes-businesses",
    title: "Why Epoxy Flooring is the Smart Choice for Homes and Businesses",
    excerpt:
      "Discover why epoxy flooring is the most durable, cost-effective, and visually appealing flooring solution for both residential and commercial spaces.",
    image: "/Images/Service-Epoxy-Flooring.webp",
    category: "Epoxy Flooring",
    date: "22 April 2026",
    readTime: "8 min read",
  },
  {
    slug: "building-facade-solutions-in-new-jersey",
    title:
      "Building Facade Solutions in New Jersey: Enhancing Durability, Design, and Curb Appeal",
    excerpt:
      "Explore building facade systems and restoration services in New Jersey — materials, benefits, and local considerations to protect and enhance your property.",
    image: "/Images/building-facade-blog.webp",
    category: "Building Facades",
    date: "13 May 2026",
    readTime: "8 min read",
  },
  {
    slug: "terrazzo-flooring-services-in-wayne-nj",
    title:
      "Complete Guide to Terrazzo Flooring Services in Wayne & North Jersey",
    excerpt:
      "Explore terrazzo flooring services in Wayne & North Jersey. Learn costs, benefits, installation, and expert tips for long-lasting floors.",
    image: "/Images/terrazzo-interior.webp",
    category: "Terrazzo Flooring",
    date: "6 May 2026",
    readTime: "8 min read",
  },
];
