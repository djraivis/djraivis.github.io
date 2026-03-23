# djraivis.github.io

Personal portfolio site for Raivis, built with React and Vite and deployed to GitHub Pages.

## Stack

- React 18
- Vite
- CSS Modules
- GitHub Actions for Pages deployment

## Development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploy

Deployment is handled by the GitHub Actions workflow in `.github/workflows/deploy-pages.yml`.

For GitHub Pages to publish correctly, the repository Pages settings should use `GitHub Actions` as the source.
