import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/Config/Site";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "Epoxy Flooring", href: "/services/epoxy-flooring" },
  { label: "Terrazzo Flooring", href: "/services/terrazzo" },
  { label: "Building Facade", href: "/services/building-facades" },
  { label: "Garage Floor Epoxy", href: "/services/garage-floors" },
  { label: "Stamped Concrete", href: "/services/stamped-concrete" },
  {
    label: "Decorative Concrete",
    href: "/services/custom-decorative-concrete",
  },
];

const formatPhoneHref = (phone: string) =>
  `tel:${phone.replace(/\s+/g, "")}`;

const Footer = () => (
  <footer className="bg-secondary border-t border-[#282c33]">
    <div className="container mx-auto px-4 pt-16 pb-6 md:pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <Link
            href="/"
            className="inline-flex mb-4"
            aria-label="TopCoat Artistry LLC - Epoxy Flooring Contractor New Jersey Home"
          >
            <Image
              src="/Images/TopCoat-white-logo.webp"
              alt="TopCoat Artistry LLC logo - Epoxy Flooring and Decorative Concrete Contractor in New Jersey"
              width={300}
              height={112}
              className="h-13 w-auto sm:h-14 lg:h-20"
            />
          </Link>

          <p className="text-[#818898] text-sm leading-relaxed mb-6">
            TopCoat Artistry LLC is a leading epoxy flooring and decorative
            concrete contractor in New Jersey, specializing in terrazzo,
            stamped concrete, garage floor coatings, and custom surface
            solutions. Over 20 years of experience delivering durable,
            high-end finishes.
          </p>

          <p className="text-primary italic font-serif text-sm">
            &quot; If&nbsp;You Can Imagine It, We Can Build It. &quot;
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-sans font-semibold text-[#efece7] uppercase tracking-widest text-sm mb-4">
            Services
          </h4>
          <ul className="space-y-2">
            {servicesLinks.map((service) => (
              <li key={service.label}>
                <Link
                  href={service.href}
                  className="text-[#818898] hover:text-primary transition-colors text-sm"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-sans font-semibold text-[#efece7] uppercase tracking-widest text-sm mb-4">
            Company
          </h4>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#818898] hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-sans font-semibold text-[#efece7] uppercase tracking-widest text-sm mb-4">
            Contact
          </h4>

          <div className="space-y-3">
            <Link
              href={formatPhoneHref(siteConfig.phone)}
              className="flex items-center gap-3 text-[#818898] hover:text-primary transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              {siteConfig.phone}
            </Link>

            <Link
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-[#818898] hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4 text-primary" />
              {siteConfig.email}
            </Link>

            <Link
              href="https://maps.app.goo.gl/kAzRomcnvKNRFmjK8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-[#818898] hover:text-primary transition-colors text-sm"
            >
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>{siteConfig.address}</span>
            </Link>

            {/* SOCIAL */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-sm border border-white/12 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Instagram className="size-4" />
              </Link>

              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-sm border border-white/12 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <Facebook className="size-4" />
              </Link>

              <Link
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-sm border border-white/12 bg-white/5 text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M12.75 2.25a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75c0 1.52.44 2.68 1.18 3.5.74.82 1.8 1.25 2.82 1.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75c-1.13 0-2.23-.23-3.18-.7v6.7a5.25 5.25 0 1 1-5.25-5.25.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75 1.5 1.5 0 1 0 1.5 1.5V2.25Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CENTERED */}
      <div className="border-t border-[#282c33] mt-12 pt-6 text-center">
        <Link
          href="https://www.topcoat-llc.com/"
          className="text-copper-light text-xs hover:underline"
        >
          © {new Date().getFullYear()} TopCoat Artistry LLC.
        </Link>

      </div>
    </div>
  </footer>
);

export default Footer;