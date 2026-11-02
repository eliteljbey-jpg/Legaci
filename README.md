# LJ Bey website

Astro + Tailwind, hosted on Netlify, with Supabase for forms and products.

- **Edit facts:** everything lives in `src/data/site.ts`. Search it for `[CONFIRM]`, `[TO SET]`, `[NEEDS JULIUS]`.
- **Preview:** `npm install`, copy `.env.example` to `.env`, then `npm run dev`.
- **New cover:** drop `cover-NN.webp` in `public/assets/covers/`. It replaces that track's tile on the next build.
- **Change the product seed:** edit `src/data/site.ts`, run `npm run schema`, then rerun `supabase/schema.sql`.
