# Brikfolio — Landing Page

Static marketing site for Brikfolio. No build step, no framework, no runtime dependencies.

## Structure

```
index.html            # Home page markup
legal/index.html      # Legal page: Terms, Privacy, Cookies, Website Terms, Retention, Acceptable Use, Security
assets/css/styles.css # All styles (tokens -> base -> components -> sections -> responsive)
assets/favicon.svg
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

## Notes

- The dashboard is a hand-built HTML/CSS mock with illustrative figures, not live data.
- The "Join waitlist" buttons currently anchor to `#waitlist` (the hero). Point them at a
  real form or mailing-list provider before launch.
