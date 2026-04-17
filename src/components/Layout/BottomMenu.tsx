import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/Config/Site";

const formatPhoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

const bottomMenuItems = [
  {
    label: "Phone",
    href: formatPhoneHref(siteConfig.phone),
    icon: Phone,
    ariaLabel: `Call ${siteConfig.name}`,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    ariaLabel: `Email ${siteConfig.name}`,
  },
  {
    label: "Location",
    href: "https://maps.app.goo.gl/kAzRomcnvKNRFmjK8",
    icon: MapPin,
    ariaLabel: `${siteConfig.name} location on Google Maps`,
    external: true,
  },
];

const BottomMenu = () => {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+0.5rem)]">
      <nav
        aria-label="Quick contact actions"
        className="mx-auto max-w-md rounded-2xl border border-white/10 bg-[#0d0f12f2] shadow-[0_-8px_24px_rgba(0,0,0,0.28)] backdrop-blur-md"
      >
        <ul className="grid grid-cols-3">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-label={item.ariaLabel}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex min-h-16 flex-col items-center justify-center gap-1 border-r border-white/10 text-[#efece7] transition-colors duration-300 last:border-r-0 hover:bg-white/5 hover:text-primary"
                >
                  <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default BottomMenu;