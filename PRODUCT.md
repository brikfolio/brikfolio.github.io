# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Australian residential property investors, from investors with one or two properties to those
managing a multi-property portfolio across several banks and property managers. Their job: know
how the portfolio is really doing, and test a decision (refinance, rate rise, vacancy) before
acting on it.

## Product Purpose
Brikfolio puts properties, loans, rent, expenses and documents in one place, shows how the
portfolio is doing, and lets the investor test a refinance, a rate rise or a vacancy against doing
nothing. Success for the website: a visitor understands that in seconds and joins the waitlist.

## Positioning
Every scenario is measured against "doing nothing", recomputed from the investor's own data, with
every assumption and its source shown. Planning estimates, not financial advice.

## Operating Context
Investors gather data from bank portals, broker emails, property-manager statements, settlement
statements, depreciation schedules and tax records. They work with an accountant and a broker;
Brikfolio hands the accountant a tax pack per property and financial year (CSV, JSON, print).

## Capabilities and Constraints
- Released: Scenario Studio (rate stress, refinance comparison, cash runway), Portfolio health,
  Property 360, document import with line-by-line review, Tax pack, Data health.
- Not built (show only as "Coming later"): decision prompts, live rate tracking, reminders,
  tax/CGT planning, PM sync, adviser sharing (in testing).
- Never market Buy/Hold/Sell advice. Not financial advice.
- Pre-launch: waitlist at https://brikfolio.app/joinwishlist. Login at https://brikfolio.app/login.
- Pricing (AUD): Free (2 properties), Pro $30/mo yearly or $50 monthly, Elite $60/mo yearly or
  $100 monthly.
- Site: hand-written static HTML/CSS in `public/` plus an Astro blog; deployed by GitHub Actions to
  GitHub Pages. Analytics: GA4 + Meta Pixel with `data-cta` lead events.

## Brand Commitments
- Brand colours and the logo do not change (`--brand-navy #102751`, `--brand-green #23b591`,
  `assets/logo-mark.svg`, Albert Sans 600 wordmark).
- Never use "Brickfolio" as an alternate name.
- Voice: plain words, short sentences, Australian English.

## Evidence on Hand
- Demo account "Alex Demo" figures (screens in `public/assets/screens/`, captured 2026-11-09):
  portfolio value $3,487,088, 5 properties, gross yield 3.6%, LVR 21.6% on $755,105 debt, cash
  flow +$1,040/mo, net equity $2,731,983, occupancy 4/5, data completeness 76%. Scenario: refinance
  leaves $2,930 better off in equity and $1,086/yr better in cash flow over 10 years; worst-year
  cash flow by rate change −1% $59,743 · 0% $54,971 · +1% $48,839 · +2% $42,545 · +3% $36,102;
  absorbs +8.00% before yearly cash flow goes below zero.
- Market stats (2.1M+, $2.4T, 78%, $8K–22K, 52%, 3–8 hrs) have NO sources yet: keep them quiet,
  never the lead proof.
- No testimonials, customers, press or founder details yet. Do not invent them.

## Product Principles
1. Prove, don't claim: show the product working on demo data, labelled as demo data.
2. Always compare against doing nothing.
3. Missing data is "not recorded", never $0. Every estimate says how it was worked out.
4. Work alongside the accountant and broker, never replace them.
