# Project Brief: Apex Assist Website

## Overview
**Project Name:** Apex Assist  
**Owner / voice:** Lucas (Year 9, Brighton VIC)  
**Goal:** Clean, modern, professional, hyper-local site for a student-run assistance business.  
**Target Audience:** Busy families, parents, and older residents within ~10 minutes of Dendy Street, Brighton.  
**Tone:** Friendly, calm, simple, professional.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Font:** Outfit (Google Fonts)
- **Hosting:** Vercel (GitHub integration)

## Design System
- **Primary colour:** Pale green (`#E8F5E9` / sage accents)
- **Text / accents:** Black (`ink`)
- **Background:** White / very light
- **Typography:** Outfit for headings and body
- **UI:** Minimal, rounded cards, simple icons (Lucide)

## Site structure (multi-page)

### Home (`/`)
1. **Hero** — Value proposition, “Text me”, local radius (Dendy St).
2. **About Lucas (biography)** — Personal intro, credibility (school leadership, Da Vinci / Ethics programs, tutoring focus), sports/hobbies where appropriate, note about growing the team with trusted friends.
3. **Services preview** — Cards linking to **individual service URLs** (not full service copy on the home page).
4. **Pricing** — Tiered placeholder rates (confirm with Lucas).
5. **Availability** — **Thursday** afternoons, finish before **6:00 pm**. **Every second Saturday** from about **1:00 pm** (afternoons).
6. **Contact** — SMS-first + short form (opens SMS).

### Services index (`/services`)
- List of all services with links to detail pages.

### Service detail pages (`/services/[slug]`)
Each page includes: intro, **why choose Lucas**, **what’s included**, optional note, CTA to contact, prev/next links.

| Slug | Focus |
|------|--------|
| `home-organisation` | Decluttering, sorting, light tidy-ups |
| `tutoring` | **Primary only** — **maths**, **science**, **reading**; **in-home OR online** |
| `tech-help` | Devices, Wi‑Fi, email — senior-friendly tone |
| `gardening` | Light outdoor / gardening work |
| `pet-house` | Feeding, short walks (meet first), mail, plants |

### Future / operations (copy may mention)
- Plan to involve **trusted friends** for tutoring and hands-on help when Lucas is unavailable (client agreement first).

## Key requirements
- **Mobile-first**
- **Hyper-local** (10-minute radius from Dendy St)
- **Brand:** “Apex Assist” throughout
- **Separate pages** for each service; **biography lives on the home page**

## Content source of truth (code)
- Service titles, blurbs, and long-form service copy: `lib/services.ts`
- SMS placeholders: `lib/site.ts` / `.env.local` (`NEXT_PUBLIC_SMS_*`)

---
*Pricing figures on the site are placeholders until final rates are confirmed.*
