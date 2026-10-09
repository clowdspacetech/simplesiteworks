# SimpleSiteWorks

## Project Overview

SimpleSiteWorks is the marketing website for a small web agency that builds fast, modern websites for local businesses such as trades, cafés, clinics, florists and professional services.

The site includes:

- A home page with a hero section, trust stats and packages (Starter, Growth, Automation).
- A swipeable showcase of live niche template demos.
- A guided "Strategy Brief" package builder.
- An enquiry form that sends submissions straight to the team's inbox.

## Features

- **Email-based enquiry form**: submissions are posted to `/api/contact` and delivered by email over SMTP (Nodemailer). Destination addresses are stored only on the server and are never shown on the site. An optional WhatsApp button opens a chat with a prefilled message.
- **Logo support**: brand logo, favicons and Open Graph image are served from `public/branding/` and are easy to swap out.
- **Responsive design**: mobile-first layouts built with Tailwind CSS, with smooth Framer Motion animations.
- **Live template demos**: standalone niche demo pages under `/demo/*`, each with a "Return to Agency Home" bar.
- **SEO ready**: page metadata, keywords and JSON-LD structured data are configured in `app/layout.tsx` and `lib/seo.ts`.
- **Simple setup**: install, add environment variables, run.
- **Easy deployment**: one-click deploys on Vercel.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router) with TypeScript
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Framer Motion](https://motion.dev/) for animation
- [Lucide](https://lucide.dev/) icons
- [Nodemailer](https://nodemailer.com/) for enquiry emails
- [Vercel](https://vercel.com/) for hosting

## Installation & Setup

### Prerequisites

- Node.js 20 or newer
- npm

### 1. Clone and install

```bash
git clone https://github.com/clowdspacetech/simplesiteworks.git
cd simplesiteworks
npm install
```

### 2. Add environment variables

Create a `.env.local` file in the project root and add the variables below **manually**.

> **Important:** Environment variables contain private credentials. Never commit `.env.local` (or any file containing real values) to git, and never paste real values into this README or other docs.

| Variable | Purpose |
| --- | --- |
| `CONTACT_EMAIL` | Inbox (or comma-separated inboxes) that receives enquiries. Server-only. |
| `SMTP_HOST` | SMTP server host |
| `SMTP_PORT` | SMTP server port (defaults to 587) |
| `SMTP_SECURE` | Optional. Set to `true` for TLS (automatic on port 465) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password or app password |
| `SMTP_FROM` | "From" address used for enquiry emails |
| `RESEND_API_KEY` | Optional. Use [Resend](https://resend.com/) instead of SMTP |
| `RESEND_FROM` | Optional. "From" address when using Resend |
| `NEXT_PUBLIC_CONTACT_WHATSAPP_NUMBERS` | Optional. WhatsApp number(s) for the chat button, in international format |

If the email variables are missing, the form will still render, but submissions won't be delivered.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Deployment

The site is designed to deploy on Vercel:

1. Push the repository to GitHub.
2. In the [Vercel dashboard](https://vercel.com/dashboard), click **Add New → Project** and import the repository. Vercel detects Next.js automatically.
3. Go to **Project → Settings → Environment Variables** and add the same variables listed in [Installation & Setup](#2-add-environment-variables). Environment variables must be added in the Vercel dashboard. They are not read from the repository.
4. Deploy. After changing any environment variable, redeploy for the change to take effect.

## Logo & Assets

Brand assets live in `public/branding/`:

| File | Used for |
| --- | --- |
| `logo-mark.png` | Logo on dark tiles and the Open Graph / social share image |
| `logo-mark-cropped.png` | Logo on transparent backgrounds (header and footer) |
| `favicon.ico`, `favicon-16.png`, `favicon-32.png` | Browser tab icons |
| `apple-touch-icon.png` | iOS home screen icon |

To update the logo:

- **Same file names**: replace the files in `public/branding/` with your new images.
- **New file names**: update the path constants at the top of `components/Logo.tsx`.
- **Favicons and social image**: update the paths in `app/layout.tsx` (`metadata.icons` and the Open Graph image).

Demo pages load stock photography from `images.unsplash.com`, which is allowed in `next.config.ts`.

## Contact

For enquiries about this project, contact: `your-email@example.com`

<!-- Replace the placeholder above with a public business address. Do not add personal emails or secrets. -->
