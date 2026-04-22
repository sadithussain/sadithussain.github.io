# sadithussain.github.io

Personal portfolio for **Sadit Hussain** — a full-stack developer and AI engineer studying Computer Science at the Rochester Institute of Technology.

Built with:

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- Deployed as a **static export** to **GitHub Pages**

---

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Main files:

- `app/page.tsx` — all portfolio sections (hero, projects, about, experience, skills, contact)
- `app/layout.tsx` — root layout, fonts, and site metadata
- `app/globals.css` — Tailwind v4 import and design tokens

Update the three constants at the top of `app/page.tsx` (`EMAIL`, `GITHUB_URL`, `LINKEDIN_URL`) to point to your own accounts.

---

## Building for Production

The project is configured for a static export via `next.config.ts` (`output: "export"`). Build the static site locally with:

```bash
npm run build
```

Next.js will emit the full site into the `out/` directory, which can be hosted on any static host.

---

## Deploying to GitHub Pages

This repository is named `sadithussain.github.io`, so it is hosted as a **user site** at the root URL `https://sadithussain.github.io` (no `basePath` required).

Deployment is automated through GitHub Actions via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Push to `main`
2. The workflow installs dependencies, runs `npm run build`, and emits the `out/` directory
3. A `.nojekyll` marker is added so Jekyll does not drop `_next/` assets
4. The `out/` directory is uploaded and published via the official GitHub Pages actions

**One-time setup in the repo:**

- Go to **Settings → Pages**
- Under **Build and deployment**, set **Source** to **GitHub Actions**

After the first successful run, the site will be live at `https://sadithussain.github.io`.
