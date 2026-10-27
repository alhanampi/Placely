# Placely

A full-stack property rental and sale marketplace built with Next.js 16, React 19, and Sass Modules.

## Tech Stack

- **Framework:** Next.js 16.2 (App Router)
- **UI:** React 19 with React Compiler
- **Styling:** Sass Modules (one `.module.scss` per component/page) + design tokens in `styles/`
- **Accessible primitives:** Radix (`radix-ui`) for the profile dropdown and mobile menu
- **Icons:** `react-icons` (Lucide set)
- **Language:** TypeScript 5
- **Fonts:** Manrope (headings) and Inter (body) via `next/font/google`
- **Linting:** ESLint 9 + Prettier

## Project Structure

```
placely/
├── app/
│   ├── layout.tsx             # Root layout: fonts, Navbar, Footer, global styles
│   ├── page.tsx               # Home
│   ├── loading.tsx / not-found.tsx
│   └── properties/
│       ├── page.tsx           # Listing
│       ├── [id]/page.tsx      # Property detail
│       └── add/page.tsx       # Add property form
├── components/                # Navbar, Footer, Hero, PropertyCard, PropertySearchForm, ...
│                              # each X.tsx has its X.module.scss next to it
├── styles/
│   ├── _tokens.scss           # Colors, radii, layout, breakpoints, fonts
│   ├── _mixins.scss           # container, respond, focus-ring, card, pill, input, ...
│   └── globals.scss           # Reset, :root variables (--accent), base typography
├── data/                      # properties.json (mock data), propertyTypes.ts
├── types/                     # Property type
├── assets/images/             # Logo, profile
├── public/images/properties/  # Property listing photos
├── redesign/                  # Design handoff and HTML mockups (reference only)
├── .prettierrc.json
├── eslint.config.mjs
├── next.config.ts             # React Compiler enabled
└── tsconfig.json
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start dev server          |
| `npm run build`        | Production build          |
| `npm run lint`         | Run ESLint                |
| `npm run lint:fix`     | Fix ESLint issues         |
| `npm run format`       | Format with Prettier      |
| `npm run format:check` | Check Prettier formatting |

## Notes

- Import shared Sass with `@use "@/styles/mixins" as *;` (it also forwards the tokens). Inside `styles/`, use the `@/styles/...` alias too: Turbopack does not resolve relative paths in a file loaded through the alias.
- The accent color lives in `--accent` (`styles/globals.scss`), so it can be swapped in one place.
- Project guidelines for Claude live in `CLAUDE.md`.
