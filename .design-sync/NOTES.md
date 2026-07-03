# MJML Design System — Sync Notes

## Setup
- Package at `packages/mjml-design-system/` — new React component library built from scratch
- ESM output at `dist/index.mjs` (tsup, not `index.esm.js`)
- Playwright 1.56.0 required for chromium build 1194 at `/opt/pw-browsers`
- `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` required for validate/capture
- `cssEntry` config points at `packages/mjml-design-system/dist/styles.css` but tsup doesn't copy it — build step copies manually; on re-sync run: `cp packages/mjml-design-system/src/styles.css packages/mjml-design-system/dist/styles.css`
- Fonts (Inter, DM Serif Display) served via Google Fonts CDN in styles.css — suppressed via `runtimeFontPrefixes`

## Component notes
- `cardMode: column` applied to Button, Navbar, Spacer (prevent grid overflow)
- Image component: external images from Unsplash won't load in headless sandbox — alt text and component structure render correctly; this is expected behavior
- Container ThreeColumn wraps to 2+1 at preview width — correct responsive behavior

## Known render warns
- None

## Re-sync risks
- Google Fonts CDN import in styles.css — if the CDN changes or families rename, `[FONT_MISSING]` will fire; update the `@import` URL in `src/styles.css` and rebuild
- `runtimeFontPrefixes` suppresses font-missing warns — if fonts are ever shipped locally, remove those entries
- Image preview cells show broken images (headless network-blocked) — this is not a component defect

## Re-sync command
```bash
cp packages/mjml-design-system/src/styles.css packages/mjml-design-system/dist/styles.css
PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 \
node .ds-sync/resync.mjs \
  --config .design-sync/config.json \
  --node-modules packages/mjml-design-system/node_modules \
  --entry ./packages/mjml-design-system/dist/index.mjs \
  --out ./ds-bundle \
  --remote .design-sync/.cache/remote-sync.json
```
