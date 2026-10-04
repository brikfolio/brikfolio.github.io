# Brikfolio website

Static landing page (`index.html`, `legal/index.html`, `assets/css/styles.css`). No build step.

## Rules

- Do not change brand colors or the logo.

## IndexNow (Bing and other non-Google engines)

The key file is `233946e400ae39bbad415168bed45b04.txt` at the site root. The key is public by
design; do not delete or rename the file. After a push that changes pages, wait until GitHub Pages
has deployed, then send the changed URLs (Claude SEO plugin):

```bash
"$CLAUDE_SEO" run indexnow_submit.py --host brikfolio.com.au \
  --key 233946e400ae39bbad415168bed45b04 \
  --key-location https://brikfolio.com.au/233946e400ae39bbad415168bed45b04.txt \
  --urls https://brikfolio.com.au/ https://brikfolio.com.au/legal/
```

`$CLAUDE_SEO` is the plugin's `scripts/claude-seo` launcher. Any IndexNow client works with the same key.

## Deferred tasks

- **Dark mode** (deferred 2026-10-04, do after launch). Colors are tokens in `:root` in
  `assets/css/styles.css`, so most of the work is a dark set of tokens. The hard part is the
  navy blocks (stats bar, pricing, `.card--lead`, `.feature--dark`): on a dark page they blend
  into the background and need a new way to stand out. The `.nav__wordmark` / `.footer__wordmark`
  text is brand navy and must turn light.
- **Sources for the stats** (2.1M+, $2.4T, 78%, 52%, $8K–22K, 3–8 hrs). The owner will provide
  them; add a source note when they arrive.
- **Hero dashboard mock** is built from HTML, not a screenshot. Replace it with a real product
  screenshot at launch.
