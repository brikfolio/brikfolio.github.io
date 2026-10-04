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
- **AI search (GEO), from the 2026-10-04 audit.** A web search for "Brikfolio" finds nothing about
  this product, only look-alikes: Brickfolio (a US real estate investor tool), Brik (French property
  platform) and a LEGO "Brickfolio" tracker. Never add "Brickfolio" as an `alternateName`. To do:
  - Founder block ("Who's behind Brikfolio": name, 1-2 line background, LinkedIn) plus `Person`
    schema linked from `Organization.founder`; add `foundingDate`. Waiting on the owner's details.
  - Third-party mentions: LinkedIn company page, Product Hunt at early access, GetApp listing,
    PropBoss 2026 app guide, pitch to The Adviser, honest posts in r/AusPropertyChat. Add each real
    profile to `Organization.sameAs` and `llms.txt` when it goes live.
  - Later phase: one original tool or guide (e.g. refinance savings calculator).
- **Hero dashboard mock** is built from HTML, not a screenshot. Replace it with a real product
  screenshot at launch.
