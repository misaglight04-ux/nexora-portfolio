# NEXORA — Developer Portfolio

A responsive, animated React portfolio starter aimed at international clients. The site copy is in English and presents three service areas: web development, Python automation, and custom software.

## Run locally

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Personalize before publishing

Open `src/App.jsx` and update the constants at the top:

```js
const BRAND = 'NEXORA';
const CONTACT_EMAIL = 'YOUR_EMAIL@example.com';
const GITHUB_URL = 'https://github.com/';
const LINKEDIN_URL = 'https://www.linkedin.com/';
```

- Replace the brand name with the name you choose.
- Replace the email with an address you can receive client inquiries at. The contact form opens the visitor's email app using `mailto:`; it does not send data to a server.
- Replace the GitHub and LinkedIn links with your actual profiles, or remove the icons until those profiles are ready.

## Project showcase honesty

The first and third showcase items are clearly labeled concept demos. The Telegram example is labeled as a personal project. They are visual representations of the kind of work you can build, not claims of paid client work. Replace each with your real deployed projects, screenshots, source repositories and short case studies as they become available.

## Deploy free

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel or Netlify.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Connect a custom domain later if/when you buy one.

## Notes

- Built with React, Vite, Framer Motion and Lucide icons.
- Responsive desktop, tablet and mobile layouts.
- Includes reduced-motion support for visitors who request less animation.
- No database or backend is required for the current portfolio.
