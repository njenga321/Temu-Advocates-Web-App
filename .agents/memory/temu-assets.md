---
name: Temu Advocates asset imports
description: Advocate photos and logo must be in src/assets/; @assets alias fails due to fs.strict.
---

## Rule
Do NOT import images via `@assets/...` in this project. The Vite config has `fs: { strict: false }` now (was strict: true), but the safer pattern is to copy any image into `artifacts/temu-advocates/src/assets/` and use relative imports.

## Advocate photos
Copied to `src/assets/` with short names:
- `advocate-amara.jpg` — Advocate Amara Temu (managing partner)
- `advocate-james.jpg` — Advocate James Ochieng (senior associate)
- `advocate-wanjiru.jpg` — Advocate Wanjiru Mwangi (associate)
- `advocate-darius.jpg` — Advocate Darius Mutua (associate)
- `logo.png` — Temu Advocates logo

## Logo / favicon
- Logo: `src/assets/logo.png` — imported with `import logoImg from "../assets/logo.png"`
- Favicon: `public/favicon.png` — referenced in index.html as `/favicon.png`

## Team.tsx photo pattern
Import all photos at top of Team.tsx and map them by member ID:
```ts
const photoMap: Record<string, string> = { "1": amaraPhoto, "2": jamesPhoto, ... };
```

**Why:** `attached_assets/` directory is at workspace root, outside the Vite artifact root. Even with `fs.strict: false`, uploads from different conversation sessions may disappear. Copying to `src/assets/` makes photos version-controlled and persistent.
