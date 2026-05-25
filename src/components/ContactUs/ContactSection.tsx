import ContactForm from "@/components/ContactUs/ContactForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/Config/Site";

const formatPhoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

const ContactSection = () => {
  return (
    <section className="bg-[#14161A] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.3em] text-primary">Get in Touch</p>
          <h1 className="text-4xl font-serif font-bold text-white/90 md:text-6xl">
            Contact <span className="text-gradient-copper">Us</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-16 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-2xl font-serif font-bold text-white/90">Let&apos;s Build Something Extraordinary</h2>
              <p className="font-sans leading-relaxed text-muted-foreground">
                Whether you&apos;re planning a new construction project or renovating an existing space,
                our team is ready to bring your vision to life. Reach out for a free consultation.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, label: siteConfig.phone, href: formatPhoneHref(siteConfig.phone) },
                { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
                {
                  icon: MapPin,
                  label: siteConfig.address,
                  href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`,
                },
                { icon: Clock, label: "Mon – Fri: 7AM – 6PM | Sat: 8AM – 2PM" },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4 rounded-lg border border-[#282c33] bg-[#14161A] p-4">
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  {href ? (
                    <a
                      href={href}
                      className="font-sans text-sm text-white/90 transition-colors hover:text-primary"
                      target={Icon === MapPin ? "_blank" : undefined}
                      rel={Icon === MapPin ? "noopener noreferrer" : undefined}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="font-sans text-sm text-white/90">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
