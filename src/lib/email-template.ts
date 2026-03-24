/**
 * Generates a branded HTML email template for contact form submissions
 * All user input is properly escaped to prevent XSS and email injection
 */

// Server-side HTML escape (avoids DOM dependencies)
function escapeHtmlServer(text: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapeMap[char] || char);
}

export interface EmailTemplateData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export function generateContactEmailTemplate(data: EmailTemplateData): string {
  // Escape all user inputs
  const escapedName = escapeHtmlServer(data.name);
  const escapedEmail = escapeHtmlServer(data.email);
  const escapedPhone = data.phone ? escapeHtmlServer(data.phone) : '';
  const escapedService = escapeHtmlServer(data.service);
  const escapedMessage = escapeHtmlServer(data.message).replace(/\n/g, '<br>');

  // Brand colors from theme
  const primaryColor = '#C84A2C'; // hsl(0 72% 48%) - copper
  const goldColor = '#E63C3C'; // hsl(0 80% 55%) - gold
  const charcoal = '#191F2E'; // hsl(220 15% 10%) - dark charcoal

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Contact Form Submission</title>
  <style type="text/css">
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, ${primaryColor} 0%, ${goldColor} 100%);
      padding: 30px 20px;
      text-align: center;
      color: #ffffff;
    }
    .header h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .header-subtitle {
      margin: 10px 0 0 0;
      font-size: 14px;
      opacity: 0.95;
      font-weight: 500;
    }
    .content {
      padding: 30px 20px;
    }
    .field-row {
      margin-bottom: 20px;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 15px;
    }
    .field-row:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    .field-label {
      font-weight: 600;
      color: ${primaryColor};
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .field-value {
      color: ${charcoal};
      font-size: 15px;
      word-break: break-word;
    }
    .message-block {
      background-color: #f9f9f9;
      border-left: 4px solid ${primaryColor};
      padding: 15px;
      margin: 20px 0;
      border-radius: 4px;
    }
    .message-block .field-label {
      margin-bottom: 10px;
    }
    .message-text {
      color: ${charcoal};
      font-size: 15px;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .footer {
      background-color: #f5f5f5;
      padding: 20px;
      text-align: center;
      border-top: 1px solid #e5e5e5;
      font-size: 12px;
      color: #666;
    }
    a {
      color: ${primaryColor};
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <h1>TopCoat Artistry LLC</h1>
      <p class="header-subtitle">New Contact Form Submission</p>
        <a style="margin: 5px 0 0 0; color: #FFFFFF; text-decoration: underline;" href="https://topcoat-llc.com">topcoat-llc.com</a>
    </div>

    <!-- Content -->
    <div class="content">
      <div class="field-row">
        <div class="field-label">Name</div>
        <div class="field-value">${escapedName}</div>
      </div>

      <div class="field-row">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:${escapedEmail}">${escapedEmail}</a></div>
      </div>

      ${escapedPhone ? `
      <div class="field-row">
        <div class="field-label">Phone Number</div>
        <div class="field-value"><a href="tel:${escapedPhone.replace(/\s+/g, '')}">${escapedPhone}</a></div>
      </div>
      ` : ''}

      <div class="field-row">
        <div class="field-label">Service Interested In</div>
        <div class="field-value">${escapedService}</div>
      </div>

      <div class="message-block">
        <div class="field-label">Project Details</div>
        <div class="message-text">${escapedMessage}</div>
      </div>

      <p style="text-align: center; color: #999; font-size: 13px; margin-top: 30px;">
        This message was submitted through the website contact form.
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p style="margin: 0;">TopCoat Artistry LLC | Contact Form</p>
      
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function generateContactEmailText(data: EmailTemplateData): string {
  return `NEW CONTACT FORM SUBMISSION
============================

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}\n` : ''}Service Interested In: ${data.service}

PROJECT DETAILS:
${data.message}

============================
This message was submitted through the website contact form.
Visit: https://topcoat-llc.com
  `.trim();
}
