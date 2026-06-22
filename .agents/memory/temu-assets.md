---
name: Temu Advocates asset imports
description: The @assets Vite alias fails due to fs.strict; local src/assets/ copies work reliably.
---

## Rule
Do NOT import images via `@assets/...` in this project. The Vite config has `fs: { strict: true }` with no `fs.allow`, which blocks the dev server from reading files in `attached_assets/` (outside the artifact root at `artifacts/temu-advocates`).

## How to apply
- Copy any image needed in JSX into `artifacts/temu-advocates/src/assets/` first.
- Import with a relative path: `import logo from "../assets/logo.png"` or `"./assets/logo.png"`.
- For favicon: copy to `public/favicon.png` and reference in `index.html` as `/favicon.png`.
- The `attached_assets/` directory is at workspace root (`/home/runner/workspace/attached_assets`); files uploaded in one conversation session may not persist to the next.

**Why:** Vite's `fs.strict: true` restricts the dev server to files within `root` (`artifacts/temu-advocates`). The `@assets` alias resolves to `../../attached_assets` which is outside that boundary, causing a 500 import-analysis error even though the alias itself is configured correctly in `vite.config.ts`.
