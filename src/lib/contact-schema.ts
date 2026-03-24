import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[\d\s\+\-\(\)\.]*$/, "Phone number contains invalid characters")
    .optional()
    .or(z.literal("")),
  service: z
    .string()
    .min(1, "Please select a service"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export function mapZodIssuesToFieldErrors(
  issues: z.ZodIssue[]
): Record<string, string> {
  const fieldErrors: Record<string, string> = {};
  issues.forEach((issue) => {
    const path = issue.path.join(".");
    if (path) {
      fieldErrors[path] = issue.message;
    }
  });
  return fieldErrors;
}
