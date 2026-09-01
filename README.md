SimpleSiteWorks — clean, modern starter for building sites for local businesses.

Quick start
-----------

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` in the project root (see example below).

3. Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

Environment variables (`.env.local`)
-------------------------------

Create a file named `.env.local` (copy from `.env.example`) to enable contact email delivery:

```env
NEXT_PUBLIC_ENQUIRY_EMAIL=clowdspace98@gmail.com
CONTACT_EMAIL=clowdspace98@gmail.com

# Gmail: use an App Password (not your normal password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=clowdspace98@gmail.com
SMTP_PASS=Clowdspace@123
SMTP_FROM="SimpleSiteWorks <clowdspace98@gmail.com>"

# Optional alternative to SMTP:
# RESEND_API_KEY=re_xxxxxxxx
# RESEND_FROM="SimpleSiteWorks <onboarding@resend.dev>"
```

**Important:** Without `SMTP_*` (or `RESEND_API_KEY`), the API accepts the enquiry but does **not** send email. The form will show a clear “not delivered” state and a mailto fallback.

Testing the contact API
-----------------------

With the dev server running, you can POST to the API route to test email sending:

```bash
curl -X POST http://localhost:3000/api/contact \
	-H "Content-Type: application/json" \
	-d '{"name":"Test","email":"test@example.com","phone":"123","business":"Demo","package":"Basic"}'
```

If SMTP (or Resend) is configured correctly the route should return JSON `{ "ok": true, "delivered": true }`. If mailer env vars are missing it returns `{ "ok": true, "delivered": false }` and the UI prompts a mailto fallback.

Common dev issues & fixes
-------------------------

- "1 high severity vulnerability" after `npm install` — run `npm audit` and then:

```bash
npm audit fix
# if needed (may introduce breaking changes):
npm audit fix --force
```

- Dev server port in use — set `PORT` in `.env.local` or run `PORT=3001 npm run dev`.
- Nodemailer errors (auth, connection) — confirm `SMTP_*` env vars and that your SMTP provider allows SMTP connections from your machine.
- Missing env vars cause API 500s — check terminal logs for errors and ensure `.env.local` is present, then restart the dev server.
- Tailwind not applying — ensure `app/globals.css` contains the `@tailwind` directives and `tailwind.config.cjs` includes the `app/` and `components/` paths.
- Images not loading / optimization errors — local SVGs are used; if adding remote images, configure `next.config.ts` domains.

Project structure
-----------------

- `app/` — Next.js app router pages and layout.
- `components/` — reusable UI components (`Header`, `Footer`, `PackageCard`, `ContactForm`, etc.).
- `public/` — logo and demo thumbnails.
- `app/api/contact/route.ts` — API route that sends form submissions via Nodemailer.

Running production build
------------------------

```bash
npm run build
npm start
```

Next steps / optional
---------------------

- Add Supabase or your preferred DB to persist submissions — I can scaffold this if you want.
- Configure a hosted SMTP (e.g., SendGrid, Mailgun, or Resend) and update `.env.local`.
- Run `npm audit` and fix vulnerabilities as needed.

If you want, I can run `npm audit fix` and test SMTP using your credentials (you can add them to `.env.local`).

