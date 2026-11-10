# GreenHarvest Agriculture

A responsive React and Vite website for a fictional agricultural technology company. It introduces services and sustainable farming solutions, clearly labels illustrative statistics and testimonials, and includes a validated frontend-only contact form.

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Build and preview

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to Vercel

1. Push this project to a Git provider and import it in Vercel, or run `npx vercel` from the project directory.
2. Select **Vite** as the framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy. No environment variables are required.

## Design and audience

The palette pairs primary green `#228B22` and forest green `#123D24` with earth brown `#795548`, sunlight yellow `#F4C542`, white, and light background `#F5F8F2`. It is designed for farmers and growers, agricultural experts, suppliers, investors, and business partners.

## Included functionality

- Sticky navigation with working section anchors and responsive mobile menu.
- Hero calls to action, service detail dialogs, and back-to-top control.
- Responsive layouts, hover states, reduced-motion support, and scroll reveal.
- Accessible contact fields with required, email, and phone validation.
- Successful local form confirmation; no data is sent or stored.
- Explicit disclaimers for fictional testimonials and demonstration statistics.

Photos are loaded from Unsplash and the font families from Google Fonts.
