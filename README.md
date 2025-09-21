# Loft Taxi — Vite + React + TypeScript

This project has been migrated from Create React App to Vite for faster dev/startup and a modern build pipeline.

Tech stack:
- React 18, TypeScript 5, Vite 5
- Redux + Redux-Saga, Reselect, React-Redux
- MUI (@mui/material) with Emotion
- React Router
- Vitest + Testing Library for tests

## Requirements
- Node.js >= 18
- Yarn >= 1.22

## Scripts
- Dev server: `yarn dev` (http://localhost:5173 by default)
- Build: `yarn build` (outputs to `dist/`)
- Preview build locally: `yarn preview`
- Tests (Vitest):
  - Run once: `yarn test`
  - Watch mode: `yarn test:watch`
  - Coverage: `yarn coverage`

## Path aliases
- Imports like `app/...` are supported via `tsconfig.json` (baseUrl: `src`) and the Vite plugin `vite-tsconfig-paths`.

## Mapbox GL notes
- If the map appears unstyled, import Mapbox CSS once (e.g., in the map component):
  ```ts
  import 'mapbox-gl/dist/mapbox-gl.css'
  ```
- The Mapbox access token is currently set directly in code. You can migrate it to an environment variable later using Vite envs (e.g., `VITE_MAPBOX_TOKEN`) and `import.meta.env`.

## Migration notes (CRA → Vite)
- Replaced `react-scripts` with Vite. Scripts are now `dev`, `build`, `preview`.
- Tests now run with Vitest and jsdom. A placeholder test is present; add real tests using Testing Library.
- Removed CRA-specific pieces (e.g., `web-vitals`) and old styled-engine setup.

## Troubleshooting
- "Large chunk" warning during build: consider code-splitting or tuning Rollup chunking. This is a warning, not an error.
- If imports like `app/...` fail, ensure your editor uses the workspace TypeScript and that `vite-tsconfig-paths` is active (see `vite.config.ts`).
- Node version errors: upgrade to Node 18+.

## License
MIT
