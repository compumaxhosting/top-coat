import Image from "next/image";
import ContactForm from "@/components/ContactUs/ContactForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/Config/Site";
import Link from "next/link";

const formatPhoneHref = (phone: string) =>
  `tel:${phone.replace(/\s+/g, "")}`;

const ContactSection = () => {
  return (
    <section className="bg-[#14161A] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.3em] text-primary">
            Get in Touch
          </p>

          <h1 className="text-4xl font-serif font-bold text-white/90 md:text-6xl">
            Contact <span className="text-gradient-copper">Us</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-16 lg:grid-cols-2">
         

          <div className="space-y-4">
             <div className="mx-auto w-full max-w-xs overflow-hidden rounded-3xl border border-[#d32222]/20 bg-linear-to-br from-[#0d0f12] via-[#14181d] to-[#d32222]/30 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
  
  {/* Header */}
  <div className="mb-4 text-center">
    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-red-400/80">
      Customer Reviews
    </p>
    <h3 className="mt-1 text-lg font-bold text-white">
      Share Your Experience
    </h3>
  </div>

  {/* QR Code */}
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
        width={180}
        height={180}
        className="mx-auto h-44 w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-red-600/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  </Link>

  {/* CTA */}
  <div className="mt-4 rounded-2xl border border-red-500/30 bg-gradient-to-r from-[#d32222] via-red-800/30 to-red-900/40 px-4 py-3 text-center">
    <p className="text-sm font-semibold text-white">
      ⭐ Click or Scan to Leave a
    </p>
    <p className="mt-1 text-base font-extrabold tracking-wide text-red-300">
      5-Star Google Review
    </p>
  </div>

  {/* Trust Badge */}
  <div className="mt-3 text-center">
    <span className="inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-200">
      Trusted by Homeowners Across New Jersey
    </span>
  </div>

</div>
            <h2 className="mb-6 pt-2 md:pt-16 text-2xl font-serif font-bold text-white/90">
                Let&apos;s Build Something Extraordinary
              </h2>

              <p className="font-sans leading-relaxed text-muted-foreground">
                Whether you&apos;re planning a new construction project or
                renovating an existing space, our team is ready to bring your
                vision to life. Reach out for a free consultation.
              </p>
            

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
                    siteConfig.address
                  )}`,
                },
                {
                  icon: Clock,
                  label: "Mon – Fri: 7AM – 6PM | Sat: 8AM – 2PM",
                },
              ].map(({ icon: Icon, label, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-lg border border-[#282c33] bg-[#14161A] p-4"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" />

                  {href ? (
                    <Link
                      href={href}
                      className="font-sans text-sm text-white/90 transition-colors hover:text-primary"
                      target={Icon === MapPin ? "_blank" : undefined}
                      rel={
                        Icon === MapPin
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {label}
                    </Link>
                  ) : (
                    <span className="font-sans text-sm text-white/90">
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Review QR Section */}
           
          </div>
           <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;