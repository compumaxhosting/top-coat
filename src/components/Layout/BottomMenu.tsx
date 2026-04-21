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
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <nav
        aria-label="Quick contact actions"
        className="w-full border-t border-black/10 bg-primary shadow-[0_-6px_16px_rgba(0,0,0,0.18)] pb-[env(safe-area-inset-bottom)]"
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
                  className="group flex min-h-16 flex-col items-center justify-center gap-1 border-r border-black/10 text-[#0d0f12] transition-colors duration-300 last:border-r-0 hover:bg-[#0d0f12] hover:text-primary"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
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