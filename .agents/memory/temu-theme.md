---
name: Temu Advocates theme system
description: Dark/light theme via ThemeContext toggling html.dark class + semantic CSS variables.
---

## Architecture
- `src/context/ThemeContext.tsx` — useState default "dark", persisted in `localStorage` key `ta-theme`.
- Toggles `html.dark` class; CSS variables in `index.css` switch under `:root` (light) vs `html.dark` (dark).
- Semantic vars: `--bg`, `--surface`, `--surface-alt`, `--nav-bg`, `--nav-border`, `--text`, `--text-muted`, `--footer-bg`, `--border`, `--input-bg`, `--input-border`, `--shadow-card`. Fixed: `--gold: #D6B25E`.
- `main.tsx` wraps `<App>` in `<ThemeProvider>`.

**Why:** CSS variable approach lets all components respond to theme without dark: Tailwind utilities on every element. Footer is always dark (`--footer-bg` is dark obsidian in both modes). Hero sections force white text since they always have a dark image overlay.
