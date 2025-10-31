# AppDost Frontend (React + Vite + Tailwind)

A polished, responsive frontend showcasing AppDost’s site pages: Home, About, Services, Portfolio, Blog, Careers, and Contact. Built with React Router and Tailwind CSS.

![Screenshot](public/vite.svg)

## Live Demo

- Netlify: https://apnadost-demo.netlify.app/

## Features

- Modern layout with reusable UI components (Hero, Services, Stats, Features, Process)
- Professional Blog grid with filters, cards, pagination, and newsletter CTA
- Polished About page with hero, timeline, leadership, FAQs, and CTA
- Portfolio with featured project cards and tech badges
- Careers page with job filters, cards, and modal details
- Mobile-first, responsive Tailwind styling

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router
- ESLint (basic rules)

## Getting Started

1) Install dependencies
```
npm install
```

2) Run the dev server
```
npm run dev
```

3) Build for production
```
npm run build
```

4) Preview the production build
```
npm run preview
```

## Project Structure

```
src/
  assets/               # images & icons (import these in components)
  components/           # UI building blocks (Hero, Services, etc.)
  pages/                # route pages (Home, About, Blog, Careers, Portfolio)
  main.jsx              # app bootstrap
  App.jsx               # router and layout
```

## Routing

- `/` Home
- `/about`
- `/services`, `/services/android`, `/services/web`, etc.
- `/portfolio`
- `/careers`
- `/blog`
- `/contact`

## Important: Using Assets Correctly

Do NOT reference images with absolute `/src/...` paths. Always import assets and use the imported variable, so they work after build/deploy.

```jsx
import heroImg from "../assets/project-1-ai.svg";
<img src={heroImg} alt="preview" />
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — build production assets
- `npm run preview` — preview built assets locally

## Deployment Notes

- GitHub Pages: use `npm run build`, then deploy the `dist/` folder (or set up an action). Ensure router base configuration if deploying under a subpath.
- Vercel/Netlify: connect repository, set build command `npm run build` and output directory `dist`.

## Contributing

1) Create a feature branch
```
git checkout -b feat/your-feature
```
2) Commit and push
```
git add .
git commit -m "feat: your feature"
git push -u origin feat/your-feature
```
3) Open a Pull Request

## License

This project is for demonstration purposes.
