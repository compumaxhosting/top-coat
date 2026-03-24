This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form - Setup & Deployment Guide

### Overview
The contact form is a production-ready implementation with:
- **Client-side validation** using Zod schema
- **Server-side validation** for security
- **Email delivery** via Resend
- **Branded HTML email templates** matching the website theme
- **Multi-recipient support** (TO, CC, BCC)
- **Inline field error display**
- **User-friendly error messages** (no debug info exposed)

### Local Setup

1. **Install dependencies** (if not already done):
```bash
npm install
```

2. **Create environment file:**
   - Copy `.env.example` to `.env.local`
   - Fill in Resend API key and email recipients

3. **Start dev server:**
```bash
npm run dev
```

4. **Test the form:**
   - Visit http://localhost:3000/contact
   - Submit test form
   - Verify email delivery (check configured recipient inbox)

### Environment Variables

Required variables in `.env.local` or `.env`:

```env
# Resend API key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Primary recipient (required)
CONTACT_TO_EMAIL=admin@example.com

# Optional CC recipients
CONTACT_CC_EMAIL=

# Optional BCC recipients  
CONTACT_BCC_EMAIL=

# Sender email (required for production)
CONTACT_FROM_EMAIL=noreply@topcoat-llc.com
```

**Email Format Examples:**
- Single: `admin@example.com`
- Multiple: `admin@example.com; support@example.com` (semicolon/comma/space separated)

### Vercel Deployment Checklist

1. **Push code to GitHub**
2. **Connect to Vercel:**
   - Go to https://vercel.com/dashboard
   - Click "Add New" → "Project"
   - Import your GitHub repository
3. **Add Environment Variables:**
   - In project settings → "Environment Variables"
   - Add all variables from `.env.example`
4. **Domain Setup (for production):**
   - Verify your domain in Resend (https://resend.com/domains)
   - Update `CONTACT_FROM_EMAIL` to use verified domain
   - Point domain DNS to Vercel
5. **Deploy:**
   - Vercel automatically deploys on git push
   - Test form submission on production domain

### Code Files

- **Form Component:** `src/components/ContactUs/ContactSection.tsx`
- **Validation Schema:** `src/lib/contact-schema.ts`
- **Email Template:** `src/lib/email-template.ts`
- **API Route:** `src/app/api/contact/route.ts`

### Security Features

- ✅ Zod validation (client & server)
- ✅ Input escaping in HTML email
- ✅ No sensitive data in client responses
- ✅ Detailed errors in server logs only
- ✅ CSRF protection via Next.js
- ✅ Environment variables for secrets

### Production Checklist

- [ ] RESEND_API_KEY set and verified
- [ ] Domain verified in Resend dashboard
- [ ] CONTACT_FROM_EMAIL uses verified domain
- [ ] CONTACT_TO_EMAIL configured
- [ ] Test email submission on production
- [ ] Monitor Resend dashboard
- [ ] HTTPS enabled on domain
- [ ] Server logs accessible for debugging
