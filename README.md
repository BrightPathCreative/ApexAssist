# Apex Assist — website

Next.js + Tailwind site for Apex Assist (Brighton Central). Deploy on [Vercel](https://vercel.com).

**Routes:** `/` (home + hub), `/about`, `/services`, `/services/[slug]`, `/pricing`, `/hours`, `/contact` (see `lib/services.ts` for service slugs).

## Workflow: one public site, localhost for drafts

| Where | URL | When |
|--------|-----|------|
| **On your PC** | [http://localhost:3000](http://localhost:3000) | After `npm run dev` — check every change **before** you push. |
| **Public** | Your **custom domain** (e.g. `www.yoursite.com`) | What you share with customers; it should point at **Production** only. |

**Goal:** one Vercel **project**, one **production branch** (`main`), **one domain** on that project. Ignore extra `*.vercel.app` links (branch previews / old deploy ids) for “the main site” — bookmark only your custom domain.

## Preview on your computer (localhost)

You need [Node.js LTS](https://nodejs.org) (includes `npm`). In this folder:

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

## Environment variables (optional)

Copy `.env.example` to `.env.local` and set your SMS number, or edit `lib/site.ts`. Never commit `.env.local` (it is gitignored).

## Push to GitHub

1. Install [Git for Windows](https://git-scm.com/download/win) if `git` is not recognized in PowerShell. Restart the terminal after installing.
2. Create a **new empty repository** on GitHub (no README/license if you will push an existing project), e.g. `apex-assist`.
3. In this folder run (replace `YOUR_USER` and `YOUR_REPO`):

```bash
git init
git add .
git commit -m "Initial commit: Apex Assist site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Use **GitHub Desktop** instead if you prefer a graphical flow.

## Deploy on Vercel (single production site)

1. Sign in at [vercel.com](https://vercel.com) with GitHub.
2. **One project only** for this repo (if you see two projects for the same GitHub repo, remove or pause the duplicate so you are not chasing two URLs).
3. **Add New Project** → import **BrightPathCreative/ApexAssist** (or your fork). Framework: **Next.js** (auto-detected). Deploy.
4. **Settings → Git → Production Branch** = `main` (default). Every **`git push` to `main`** updates **Production**.
5. **Settings → Domains** → add your **one** custom domain and follow the DNS steps Vercel shows. That domain is your **public** site; production `*.vercel.app` URLs are fallbacks, not what you need to hand out.
6. Optional: **Settings → Git** — if you want **no** extra preview sites for other branches, turn off or limit **Preview Deployments** so only `main` gets deploys (team/plan options may vary).

**Day to day:** edit locally → `npm run dev` on localhost → when happy → `git push` → Vercel rebuilds production → your domain updates.
