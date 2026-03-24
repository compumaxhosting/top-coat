import { Resend } from "resend";
import { contactFormSchema, mapZodIssuesToFieldErrors } from "@/lib/contact-schema";
import { generateContactEmailTemplate, generateContactEmailText } from "@/lib/email-template";

// Helper to parse comma/semicolon/whitespace separated email lists
function parseEmailList(emailString: string | undefined): string[] {
  if (!emailString) return [];
  return emailString
    .split(/[,;\s]+/)
    .map((email) => email.trim())
    .filter((email) => email.length > 0 && email.includes("@"));
}

// Helper to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate against schema
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      const fieldErrors = mapZodIssuesToFieldErrors(validationResult.error.issues);
      return Response.json(
        {
          error: "Validation failed. Please check the form fields.",
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Get email configuration from environment
    const toEmails = parseEmailList(process.env.CONTACT_TO_EMAIL);
    const ccEmails = parseEmailList(process.env.CONTACT_CC_EMAIL);
    const bccEmails = parseEmailList(process.env.CONTACT_BCC_EMAIL);
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "noreply@topcoat-llc.com";

    // Validate that at least one recipient is configured
    if (toEmails.length === 0) {
      console.error("[Contact Form] No TO email configured");
      return Response.json(
        {
          error: "Unable to send message right now. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Validate email addresses
    const invalidEmails = [
      ...toEmails,
      ...ccEmails,
      ...bccEmails,
      fromEmail,
    ].filter((email) => !isValidEmail(email));

    if (invalidEmails.length > 0) {
      console.error("[Contact Form] Invalid email addresses configured:", invalidEmails);
      return Response.json(
        {
          error: "Unable to send message right now. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Initialize Resend with API key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("[Contact Form] RESEND_API_KEY not configured");
      return Response.json(
        {
          error: "Unable to send message right now. Please try again later.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // Generate email content
    const htmlContent = generateContactEmailTemplate(formData);
    const textContent = generateContactEmailText(formData);

    // Send email via Resend
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmails,
      ...(ccEmails.length > 0 && { cc: ccEmails }),
      ...(bccEmails.length > 0 && { bcc: bccEmails }),
      ...(formData.email && { replyTo: formData.email }),
      subject: `New Contact Form Submission - ${formData.service}`,
      html: htmlContent,
      text: textContent,
    });

    // Check if email was sent successfully
    if (result.error) {
      console.error("[Contact Form] Resend error:", result.error);
      return Response.json(
        {
          error: "Unable to send message right now. Please try again later.",
        },
        { status: 500 }
      );
    }

    // Success response
    return Response.json(
      {
        success: true,
        message: "Message sent successfully! We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    // Log detailed error for debugging
    console.error("[Contact Form] Unexpected error:", error);

    // Return generic error to client
    return Response.json(
      {
        error: "Unable to send message right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}
