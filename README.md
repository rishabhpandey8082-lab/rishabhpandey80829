# Rishabh Raj Pandey - Portfolio

Single-page 3D portfolio built with React, Vite, Tailwind, Framer Motion and Three.js (react-three-fiber).

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # outputs ./dist
```

## Deploy (no custom domain needed)
Push to `main`. The GitHub Actions workflow builds and publishes to GitHub Pages at
`https://<user>.github.io/<repo>/`. In the repo: Settings -> Pages -> Source: **GitHub Actions**.
All asset URLs are relative (`base: "./"`), so it also works on any custom domain later.
