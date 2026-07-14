import Image from "next/image";
import ContactForm from "@/components/ContactUs/ContactForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/Config/Site";
import Link from "next/link";

const formatPhoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

const ContactSection = () => {
  return (
    <section className="bg-[#14161A] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 px-4 md:px-28 xl:px-32">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Heading */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary">
            Get in Touch
          </p>

          <h1 className="text-4xl font-serif font-bold text-white/90 sm:text-5xl lg:text-6xl">
            Contact <span className="text-gradient-copper">Us</span>
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Review QR Card */}
            <div className="mx-auto lg:mx-0 w-full max-w-sm overflow-hidden rounded-3xl border border-[#d32222]/20 bg-gradient-to-br from-[#0d0f12] via-[#14181d] to-[#d32222]/30 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              <div className="mb-5 text-center">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-red-400/80">
                  Customer Reviews
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  Share Your Experience
                </h3>
              </div>

              <Link
                href="https://g.page/r/CVYgqsvhWOZWEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-white p-3 transition-all duration-300 group-hover:border-red-400/50 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.35)]">
                  <Image
                    src="/images/scanner.jpg"
                    alt="Scan QR Code to Leave a Review"
                    width={400}
                    height={400}
                    priority
                    className="mx-auto h-auto w-full max-w-[250px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Link>

              <div className="mt-5 rounded-2xl border border-red-500/30 bg-gradient-to-r from-[#d32222] via-red-800/30 to-red-900/40 px-4 py-3 text-center">
                <p className="text-sm font-semibold text-white">
                  ⭐ Click or Scan to Leave a
                </p>

                <p className="mt-1 text-base font-extrabold tracking-wide text-red-300">
                  5-Star Google Review
                </p>
              </div>

              <div className="mt-4 text-center">
                <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-200">
                  Trusted by Homeowners Across New Jersey
                </span>
              </div>
            </div>

            {/* Contact Text */}
            <div>
              <h2 className="mb-4 text-2xl md:text-3xl font-serif font-bold text-white/90">
                Let&apos;s Build Something Extraordinary
              </h2>

              <p className="leading-8 text-muted-foreground">
                Whether you&apos;re planning a new construction project or
                renovating an existing space, our team is ready to bring your
                vision to life. Reach out today for a free consultation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: siteConfig.phone,
                  href: formatPhoneHref(siteConfig.phone),
                },
                {
                  icon: Mail,
                  label: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: MapPin,
                  label: siteConfig.address,
                  href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    siteConfig.address,
                  )}`,
                },
                {
                  icon: Clock,
                  label: "Mon – Fri: 7AM – 6PM | Sat: 8AM – 2PM",
                },
              ].map(({ icon: Icon, label, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl border border-[#282c33] bg-[#1a1d22] p-4 transition-all hover:border-primary/40"
                >
                  <div className="mt-1">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {href ? (
                    <Link
                      href={href}
                      target={Icon === MapPin ? "_blank" : undefined}
                      rel={Icon === MapPin ? "noopener noreferrer" : undefined}
                      className="text-sm leading-6 text-white/90 transition-colors hover:text-primary break-words"
                    >
                      {label}
                    </Link>
                  ) : (
                    <span className="text-sm leading-6 text-white/90">
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
