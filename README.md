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

Create a file named `.env.local` with the following values to enable the contact email feature:

```env
# SMTP (for Nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false # true for 465
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-pass
SMTP_FROM="SimpleSiteWorks <no-reply@example.com>"
CONTACT_EMAIL=you@yourdomain.com

# Optional: change dev port
# PORT=3001
```

Testing the contact API
-----------------------

With the dev server running, you can POST to the API route to test email sending:

```bash
curl -X POST http://localhost:3000/api/contact \
	-H "Content-Type: application/json" \
	-d '{"name":"Test","email":"test@example.com","phone":"123","business":"Demo","package":"Basic"}'
```

If SMTP is configured correctly the route should return JSON `{ "ok": true }` and an email will be sent to `CONTACT_EMAIL`.

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

