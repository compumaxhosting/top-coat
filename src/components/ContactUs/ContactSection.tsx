"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, AlertCircle, CheckCircle } from "lucide-react";
import { siteConfig } from "@/Config/Site";
import { contactFormSchema } from "@/lib/contact-schema";
import type { ContactFormInput } from "@/lib/contact-schema";

const formatPhoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

const Contact = () => {
  const [form, setForm] = useState<ContactFormInput>({ name: "", email: "", phone: "", service: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    field: keyof ContactFormInput
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setSubmitError("");
    setIsSubmitting(true);

    // Client-side validation
    const validationResult = contactFormSchema.safeParse(form);

    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      validationResult.error.issues.forEach((issue) => {
        const path = issue.path.join(".");
        if (path) {
          errors[path] = issue.message;
        }
      });
      setFieldErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle server-side validation errors
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }

        // Show error message
        setSubmitError(data.error || "Unable to send message right now. Please try again later.");
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmitStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setFieldErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Failed to submit form:", error);
      setSubmitError("Unable to send message right now. Please try again later.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section className="pt-32 pb-20 bg-[#14161A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white/90">
              Contact <span className="text-gradient-copper">Us</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-16 lg:grid-cols-2">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Server Error Alert */}
              {submitStatus === "error" && submitError && (
                <div className="flex items-start gap-3 p-4 rounded-md bg-red-500/10 border border-red-500/30">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-400">{submitError}</p>
                </div>
              )}

              {/* Success Alert */}
              {submitStatus === "success" && (
                <div className="flex items-start gap-3 p-4 rounded-md bg-green-500/10 border border-green-500/30">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-green-400">Message sent! We&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => handleChange(e, "name")}
                    disabled={isSubmitting}
                    className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="text-xs text-red-400 mt-1">{fieldErrors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => handleChange(e, "email")}
                    disabled={isSubmitting}
                    className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="text-xs text-red-400 mt-1">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => handleChange(e, "phone")}
                    disabled={isSubmitting}
                    className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-invalid={!!fieldErrors.phone}
                    aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                  />
                  {fieldErrors.phone && (
                    <p id="phone-error" className="text-xs text-red-400 mt-1">{fieldErrors.phone}</p>
                  )}
                </div>

                <div>
                  <select
                    value={form.service}
                    onChange={(e) => handleChange(e, "service")}
                    disabled={isSubmitting}
                    className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-invalid={!!fieldErrors.service}
                    aria-describedby={fieldErrors.service ? "service-error" : undefined}
                  >
                    <option value="" disabled>Select Service Interested In</option>
                    <option value="Epoxy Flooring">Epoxy Flooring</option>
                    <option value="Terrazzo">Terrazzo</option>
                    <option value="Building Facades">Building Facades</option>
                    <option value="Garage Floors">Garage Floors</option>
                    <option value="Stamped Concrete">Stamped Concrete</option>
                    <option value="Custom Decorative Concrete">Custom Decorative Concrete</option>
                  </select>
                  {fieldErrors.service && (
                    <p id="service-error" className="text-xs text-red-400 mt-1">{fieldErrors.service}</p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => handleChange(e, "message")}
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                />
                {fieldErrors.message && (
                  <p id="message-error" className="text-xs text-red-400 mt-1">{fieldErrors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-primary hover:bg-copper-light text-primary-foreground font-sans w-full sm:w-auto px-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-white/90 mb-6">Let&apos;s Build Something Extraordinary</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Whether you&apos;re planning a new construction project or renovating an existing space,
                  our team is ready to bring your vision to life. Reach out for a free consultation.
                </p>
              </div>

              <div className="space-y-4 ">
                {[
                  { icon: Phone, label: siteConfig.phone, href: formatPhoneHref(siteConfig.phone) },
                  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: MapPin, label: siteConfig.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}` },
                  { icon: Clock, label: "Mon – Fri: 7AM – 6PM | Sat: 8AM – 2PM" },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-lg bg-[#14161A] border border-[#282c33]">
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    {href ? (
                      <a
                        href={href}
                        className="text-white/90 hover:text-primary transition-colors font-sans text-sm"
                        target={Icon === MapPin ? "_blank" : undefined}
                        rel={Icon === MapPin ? "noopener noreferrer" : undefined}
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-white/90 font-sans text-sm">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-sans font-semibold text-white/90 uppercase tracking-widest text-sm mb-3">Service Areas</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  We serve commercial, industrial, and residential clients across the region.
                  Contact us to confirm availability in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
