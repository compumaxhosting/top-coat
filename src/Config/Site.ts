import type { ServiceHighlight, ServiceNavItem } from "@/types/service";

export const siteConfig = {
  name: "TopCoat Artistry LLC",
  description:
    "Work experience & Professional Contracting Services And started our business by doing decorative painting and stenciled wood floors. The company then expanded into decorative stamped concrete floors. Topcoat artisans experimented with polymered concrete and modified concrete to apply to vertical surfaces and ceilings; they used a variety of techniques including spraying, troweling, and brushing , we are also professionals in all types of floors such as epoxy and terrazzo works.",
  url: "https://topcoat-llc.com",
  phone: "201 315 2633",
  email: "Almahairi@gmail.com",
  address: "86 Lackawanna Ave, Suite 215, Woodland Park, NJ 07424",
  services: [
    { name: "Epoxy Flooring", slug: "epoxy-flooring-wayne-new-jersey" },
    { name: "Terrazzo", slug: "terrazzo-flooring-contractors-wayne-nj" },
    { name: "Building Facades", slug: "building-facade-contractors-wayne-nj" },
    { name: "Garage Floors", slug: "garage-floor-coating-contractors-in-wayne-nj" },
    { name: "Stamped Concrete", slug: "stamped-concrete-contractors-wayne-nj" },
    { name: "Custom Decorative Concrete", slug: "custom-decorative-concrete-contractors-wayne-nj" },
  ] as ServiceNavItem[],
  serviceHighlights: [
    {
      title: "Epoxy Flooring",
      description: "Industrial-grade epoxy systems with mirror-finish quality for commercial and industrial spaces.",
      image: "/Images/Service-Epoxy-Flooring.webp",
      slug: "epoxy-flooring-wayne-new-jersey",
    },
    {
      title: "Terrazzo",
      description: "Elegant, timeless terrazzo flooring for luxury interiors — from corporate lobbies to hospitality venues.",
      image: "/Images/terrazzo.webp",
      slug: "terrazzo-flooring-contractors-wayne-nj",
    },
    {
      title: "Building Facades",
      description: "Innovative vertical concrete finishes that redefine modern architectural aesthetics.",
      image: "/Images/building-facade2.webp",
      slug: "building-facade-contractors-wayne-nj",
    },
    {
      title: "Garage Floors",
      description: "Premium anti-slip coatings that transform residential and commercial garages into showrooms.",
      image: "/Images/garage-floor.webp",
      slug: "garage-floor-coating-contractors-in-wayne-nj",
    },
    {
      title: "Stamped Concrete",
      description: "Decorative patterns and textures that bring artistry to outdoor patios and walkways.",
      image: "/Images/stampedconcrete.webp",
      slug: "stamped-concrete-contractors-wayne-nj",
    },
    {
      title: "Custom Decorative Concrete",
      description: "Bespoke polymer-modified surfaces tailored to your unique design vision.",
      image: "/Images/custom-concrete2.webp",
      slug: "custom-decorative-concrete-contractors-wayne-nj",
    },
  ] as ServiceHighlight[],
  social: {
    facebook: "https://www.facebook.com/topcoatllc.net/",
    instagram: "https://www.instagram.com/top.coat.artistry",
    tiktok: "https://www.tiktok.com/@top.coat.artistry",
  },
};