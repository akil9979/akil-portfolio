# Akil Rizwani — Developer Portfolio

A responsive, dark-themed developer portfolio built with React, TypeScript, Vite, Lucide icons and plain CSS. The design uses CSS/native browser animations (no animation framework), an optimized WebP portrait, lazy-on-scroll reveal effects, and reduced-motion support.

## Included

- Resume-backed profile, education (CGPA 8.4/10), internship and open-source contributions.
- Optimized portrait at `public/akil-portrait.webp`.
- Downloadable resume at `public/resume.pdf`.
- Project links for PlayHub, ConnectHub, Multiplayer Tic-Tac-Toe and Movie Explorer.
- Responsive navigation, project filters, contact links and copy-email interaction.
- Lightweight scroll reveal and CSS motion, disabled for users who request reduced motion.
- No server/backend is required.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy on Vercel

1. Push this project folder to a GitHub repository.
2. Import that repository in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

Netlify also works with build command `npm run build` and publish directory `dist`.

## Before publishing

- Check that the phone number and email are the exact contact details you want displayed publicly.
- Test each project source/demo link, particularly the PlayHub and Tic-Tac-Toe repositories.
- The portfolio does not track analytics or load an external web font. The hero portrait is served locally as WebP to avoid a third-party image request.
- This source was updated in an environment where npm package installation timed out. Run `npm install` and `npm run build` locally before deploying; a production build could not be verified here.
