# FUSE RoboCup Rescue website

The team site for FUSE, served at https://fuse-robocuprescue.github.io. Built with Next.js (static export) and plain CSS, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

## Where things live

- `src/app/` — one folder per page (`page.tsx`), plus the shared `layout.tsx` and `template.tsx` (page-enter animation).
- `src/app/globals.css` — all styles. Colours, fonts and spacing are tokens at the top.
- `src/data/site.ts` — team members, sponsors, gallery photos and the contact email. Most content edits happen here.
- `src/components/` — header, footer, photo gallery with lightbox, click-to-load YouTube video, sponsor band.
- `public/img/` — optimised WebP images. `public/fonts/` — self-hosted Inter (SIL Open Font License).

## Adding images

Keep photos small: export WebP at the size they are shown, around quality 70–75 ([Squoosh](https://squoosh.app) works well in the browser). Photos used in the gallery or as large images need two widths, `name-800.webp` and `name-1600.webp`.

Portraits for the team page: 480×480 WebP.
