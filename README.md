# Amiru Horadagoda Portfolio

Astro portfolio site built from Amiru Horadagoda's CV.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages Deployment

This repository includes `.github/workflows/deploy.yml`.

After pushing to GitHub:

1. Open the repository settings.
2. Go to Pages.
3. Set the source to GitHub Actions.
4. Push to the `main` branch.

The Astro config automatically uses the repository name as the base path for normal project pages. For a `username.github.io` repository, it deploys at the domain root.

## Content

Portfolio content is stored in `src/data/profile.ts`.

The downloadable CV is stored at `public/AmiruHoradagoda.pdf`.
