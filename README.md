# Brikfolio — Website

Marketing site for Brikfolio: a hand-written landing page plus a blog built with
[Astro](https://astro.build). Blog writers use [Pages CMS](https://pagescms.org) in the browser.

## Structure

```
public/                    # Copied to the site as-is (no processing)
  index.html               # Home page markup (hand-written)
  legal/index.html         # Legal page: Terms, Privacy, Cookies, Website Terms, Retention, Acceptable Use, Security
  assets/css/styles.css    # All styles, blog included (tokens -> base -> components -> sections -> responsive)
  assets/fonts/            # Self-hosted woff2 fonts (see Brand)
  assets/favicon.svg       # Browser-tab icon: the BF mark on a white tile
  assets/logo.svg          # Full logo: BF mark + "Brikfolio" wordmark (text outlined, no font needed)
  assets/logo-mark.svg     # BF mark on its own
  assets/og-image.png      # 1200x630 social card (Open Graph + Twitter/X), default for every page
  assets/logo-512.png      # Raster logo for the Organization JSON-LD (Google wants a bitmap)
  assets/favicon-32.png, apple-touch-icon.png, icon-*.png  # PNG icons for old browsers, iOS and the web manifest
  images/blog/             # Images uploaded by blog writers (Pages CMS)
  assets/screens/          # Real product screenshots (demo data), cropped from the Brikfolio brain
  site.webmanifest         # Name, colours and icons for "Add to home screen"
  robots.txt               # Crawler rules (all allowed) + sitemap pointer
  llms.txt                 # Plain summary of the product for AI assistants (llmstxt.org). Keep pricing in sync
src/
  content/blog/*.md        # Blog posts (one Markdown file per post; the file name is the URL slug)
  content.config.ts        # Blog post fields. Keep in step with .pages.yml
  layouts/Base.astro       # Head, nav, footer and analytics for blog pages
  pages/blog/              # /blog/ list, /blog/<slug>/ post pages, /blog/rss.xml
  pages/features/index.astro  # /features/: released features in detail, then "Coming later"
  pages/sitemap.xml.js     # Generated sitemap. Bump the dates for the hand-written pages when they change
.pages.yml                 # Pages CMS editor set-up (fields, image folder)
.github/workflows/deploy.yml  # Builds with Astro and publishes to GitHub Pages on every push to main
```

The nav, footer and analytics exist in three places: `public/index.html`,
`public/legal/index.html` and `src/layouts/Base.astro`. Change all three together.

## Local preview

Astro 7 needs Node 22.23.4 or newer (`.nvmrc` pins Node 24).

```sh
nvm use
npm install
npm run dev        # http://localhost:4321, drafts are shown
npm run build      # output in dist/, drafts are hidden
```

## Blog writers (Pages CMS)

- Writers log in at https://app.pagescms.org. They do not need a GitHub account:
  invite them by email from the repo's Collaborators settings in Pages CMS.
- A new post starts as a **draft**. Turn "Draft" off and save to publish. The site updates
  in about 1–2 minutes.
- `src/content/blog/how-to-write-a-post.md` is an example draft for writers. Keep it a draft.

## Deploying to GitHub Pages

GitHub Actions builds and publishes the site (`.github/workflows/deploy.yml`).
One-time setting: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The custom domain is `brikfolio.com.au` (DNS on Route 53, pointing at GitHub Pages).

## Brand

- Logo colours: navy `#102751`, green `#23b591` (`--brand-navy`, `--brand-green`).
- Wordmark font: **Albert Sans 600**, letter-spacing `-0.035em` (`--font-brand`).
- Fonts are self-hosted in `public/assets/fonts/` (Latin-only woff2 from Google Fonts, SIL Open
  Font License) and declared with `@font-face` at the top of `styles.css`. Space Grotesk is one
  variable file covering weights 300–700.

## SEO and tracking

- Structured data (JSON-LD) lives in the `<head>` of each page. The home page has
  Organization, WebSite, WebPage, WebApplication (with one Offer per plan and billing
  period) and FAQPage. When pricing changes, update the Offers, the FAQ answer, the
  pricing cards and `llms.txt` together. Offers carry `priceValidUntil` — bump it before it passes.
- Blog pages add Blog / BlogPosting and BreadcrumbList JSON-LD, linked to the home page's
  Organization by `@id`.
- The FAQ answers appear twice: the visible `#faq` section and the FAQPage JSON-LD.
  Google requires them to match.
- GA4 and Meta Pixel queue their calls at once but fetch their scripts only after the page
  `load` event, so they never slow first paint. Visitors who leave within ~2 s may not be counted.
- Every waitlist link has a `data-cta` attribute. A click sends GA4 `generate_lead` and
  Meta `Lead`, tagged with that value (`nav`, `hero`, `pricing_pro`, `blog`, …). New waitlist
  links need a `data-cta` too.
- Check after changes: https://search.google.com/test/rich-results and
  https://developers.facebook.com/tools/debug/ (also forces Facebook/LinkedIn to refresh the card).

## Notes

- The dashboard is a hand-built HTML/CSS mock with illustrative figures, not live data.
