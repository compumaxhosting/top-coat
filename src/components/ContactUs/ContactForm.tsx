"use client";

import { useState, useEffect } from "react";
import { Send, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactFormSchema } from "@/lib/contact-schema";
import type { ContactFormInput } from "@/lib/contact-schema";

type ContactFormProps = {
  submitLabel?: string;
  successMessage?: string;
  showPreferredDateField?: boolean;
};

const initialFormState: ContactFormInput = {
  name: "",
  email: "",
  phone: "",
  service: "",
  preferredDate: "",
  message: "",
  captchaInput: "",
  captchaCode: "",
};

const defaultSuccessMessage = "Message sent! We'll get back to you within 24 hours.";

const ContactForm = ({
  submitLabel = "Send Message",
  successMessage = defaultSuccessMessage,
  showPreferredDateField = false,
}: ContactFormProps) => {
  const [form, setForm] = useState<ContactFormInput>(initialFormState);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  // Generate a simple numeric code captcha (4 digits)
  const generateCaptcha = () => {
    const code = String(Math.floor(1000 + Math.random() * 9000));
    setForm((prev) => ({ ...prev, captchaCode: code, captchaInput: "" }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next.captchaInput;
      return next;
    });
  };

  useEffect(() => {
    generateCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    field: keyof ContactFormInput
  ) => {
    const rawValue = e.target.value;
    setForm((prev) => ({ ...prev, [field]: rawValue } as unknown as ContactFormInput));

    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[field];
        return nextErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setSubmitError("");
    setIsSubmitting(true);

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

    // Basic client-side captcha check to avoid an unnecessary round-trip
    if (String(form.captchaInput).trim() !== String(form.captchaCode).trim()) {
      setFieldErrors({ ...(fieldErrors || {}), captchaInput: "Incorrect captcha" });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }

        setSubmitError(data.error || "Unable to send message right now. Please try again later.");
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      setSubmitStatus("success");
      setForm(initialFormState);
      setFieldErrors({});
      generateCaptcha();

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
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === "error" && submitError && (
        <div className="flex items-start gap-3 rounded-md border border-red-500/30 bg-red-500/10 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
          <p className="text-sm text-red-400">{submitError}</p>
        </div>
      )}

      {submitStatus === "success" && (
        <div className="flex items-start gap-3 rounded-md border border-green-500/30 bg-green-500/10 p-4">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
          <p className="text-sm text-green-400">{successMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => handleChange(e, "name")}
            disabled={isSubmitting}
            className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-400">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => handleChange(e, "email")}
            disabled={isSubmitting}
            className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-400">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => handleChange(e, "phone")}
            disabled={isSubmitting}
            className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          />
          {fieldErrors.phone && (
            <p id="phone-error" className="mt-1 text-xs text-red-400">
              {fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <select
            value={form.service}
            onChange={(e) => handleChange(e, "service")}
            disabled={isSubmitting}
            className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            aria-invalid={!!fieldErrors.service}
            aria-describedby={fieldErrors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Select Service Interested In
            </option>
            <option value="Epoxy Flooring">Epoxy Flooring</option>
            <option value="Terrazzo">Terrazzo</option>
            <option value="Building Facades">Building Facades</option>
            <option value="Garage Floors">Garage Floors</option>
            <option value="Stamped Concrete">Stamped Concrete</option>
            <option value="Custom Decorative Concrete">Custom Decorative Concrete</option>
          </select>
          {fieldErrors.service && (
            <p id="service-error" className="mt-1 text-xs text-red-400">
              {fieldErrors.service}
            </p>
          )}
        </div>
      </div>

      {showPreferredDateField && (
        <div>
          <input
            type="date"
            value={form.preferredDate ?? ""}
            onChange={(e) => handleChange(e, "preferredDate")}
            disabled={isSubmitting}
            className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Preferred date"
          />
        </div>
      )}

      <div>
        <textarea
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={(e) => handleChange(e, "message")}
          disabled={isSubmitting}
          rows={11}
          className="w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-sans text-white/90">Please type the number shown below</label>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-md border border-[#282c33] bg-[#0d0f12] px-4 py-2 text-lg font-mono text-white" aria-hidden>
            {form.captchaCode}
          </div>

          <input
            type="text"
            inputMode="numeric"
            pattern="\d*"
            placeholder="Enter number"
            value={form.captchaInput}
            onChange={(e) => handleChange(e, "captchaInput")}
            disabled={isSubmitting}
            className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
            aria-invalid={!!fieldErrors.captchaInput}
            aria-describedby={fieldErrors.captchaInput ? "captcha-error" : undefined}
          />

          <button
            type="button"
            onClick={generateCaptcha}
            className="rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 text-sm text-white hover:opacity-90"
          >
            Refresh
          </button>
        </div>
        {fieldErrors.captchaInput && (
          <p id="captcha-error" className="mt-1 text-xs text-red-400">{fieldErrors.captchaInput}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full cursor-pointer bg-primary px-10 font-sans text-primary-foreground hover:bg-copper-light disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        <Send className="mr-2 h-4 w-4" />
        {isSubmitting ? "Sending..." : submitLabel}
      </Button>
    </form>
  );
};

export default ContactForm;