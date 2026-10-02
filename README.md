# Brikfolio — Landing Page

Static marketing site for Brikfolio. No build step, no framework, no runtime dependencies.

## Structure

```
index.html            # Home page markup
legal/index.html      # Legal page: Terms, Privacy, Cookies, Website Terms, Retention, Acceptable Use, Security
assets/css/styles.css # All styles (tokens -> base -> components -> sections -> responsive)
assets/fonts/         # Self-hosted woff2 fonts (see Brand)
assets/favicon.svg    # Browser-tab icon: the BF mark on a white tile
assets/logo.svg       # Full logo: BF mark + "Brikfolio" wordmark (text outlined, no font needed)
assets/logo-mark.svg  # BF mark on its own
assets/og-image.png   # 1200x630 social card (Open Graph + Twitter/X) for every page
assets/logo-512.png   # Raster logo for the Organization JSON-LD (Google wants a bitmap)
assets/favicon-32.png, apple-touch-icon.png, icon-*.png  # PNG icons for old browsers, iOS and the web manifest
site.webmanifest      # Name, colours and icons for "Add to home screen"
robots.txt            # Crawler rules (all allowed) + sitemap pointer
sitemap.xml           # Page list for search engines. Bump <lastmod> when a page changes
llms.txt              # Plain summary of the product for AI assistants (llmstxt.org). Keep pricing in sync
.nojekyll             # Tells GitHub Pages to serve files as-is
```

## Local preview

```sh
python3 -m http.server 8000
# http://localhost:8000
```

Opening `index.html` directly via `file://` works too.

## Deploying to GitHub Pages

Push this directory to a repo, then in **Settings -> Pages** set the source to
**Deploy from a branch**, and pick the branch plus the folder that holds `index.html`
(root or `/docs`). No Action needed — there is nothing to build.

For a custom domain, add a `CNAME` file containing the domain and point the DNS at
GitHub Pages.

## Brand

- Logo colours: navy `#102751`, green `#23b591` (`--brand-navy`, `--brand-green`).
- Wordmark font: **Albert Sans 600**, letter-spacing `-0.035em` (`--font-brand`).
- Fonts are self-hosted in `assets/fonts/` (Latin-only woff2 from Google Fonts, SIL Open Font
  License) and declared with `@font-face` at the top of `styles.css`. Space Grotesk is one
  variable file covering weights 300–700.

## SEO and tracking

- Structured data (JSON-LD) lives in the `<head>` of each page. The home page has
  Organization, WebSite, WebPage, WebApplication (with one Offer per plan and billing
  period) and FAQPage. When pricing changes, update the Offers, the FAQ answer, the
  pricing cards and `llms.txt` together. Offers carry `priceValidUntil` — bump it before it passes.
- The FAQ answers appear twice: the visible `#faq` section and the FAQPage JSON-LD.
  Google requires them to match.
- GA4 and Meta Pixel queue their calls at once but fetch their scripts only after the page
  `load` event, so they never slow first paint. Visitors who leave within ~2 s may not be counted.
- Every waitlist link has a `data-cta` attribute. A click sends GA4 `generate_lead` and
  Meta `Lead`, tagged with that value (`nav`, `hero`, `pricing_pro`, …). New waitlist
  links need a `data-cta` too.
- Check after changes: https://search.google.com/test/rich-results and
  https://developers.facebook.com/tools/debug/ (also forces Facebook/LinkedIn to refresh the card).

## Notes

- The dashboard is a hand-built HTML/CSS mock with illustrative figures, not live data.
