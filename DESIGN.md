---
name: Brikfolio
description: The investor's tax-time property file; loose paperwork filed into one tabbed, tested file.
colors:
  board-navy: "#102751"
  index-green: "#23b591"
  tab-ink: "#0b2a52"
  folder-back: "#1c3a70"
  on-board: "#c3cce0"
  on-board-strong: "#eef1f7"
  board-line: "rgba(238, 241, 247, 0.14)"
  sheet: "#fbfaf6"
  sheet-line: "#e6e2d7"
  sheet-well: "#eceae2"
  sand: "#f2f4f0"
  line: "#e8e6df"
  card-border: "#e2e0d8"
  ink: "#16213c"
  muted: "#5b6275"
  gain-green: "oklch(0.48 0.12 165)"
  accent-line: "oklch(0.85 0.06 165)"
  clip-steel: "#8a93a6"
typography:
  display:
    fontFamily: "'Albert Sans', 'Space Grotesk', system-ui, sans-serif"
    fontSize: "clamp(40px, 4.6vw, 64px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Albert Sans', 'Space Grotesk', system-ui, sans-serif"
    fontSize: "clamp(30px, 3.6vw, 46px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Albert Sans', 'Space Grotesk', system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Space Grotesk', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "12.5px"
    fontWeight: 700
    lineHeight: 1
  figure:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "clamp(18px, 5.4cqi, 28px)"
    fontWeight: 500
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  figure-small:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    fontFeature: "tnum"
rounded:
  slip: "3px"
  bar: "4px"
  tag: "4px"
  tab: "9px"
  button: "10px"
  kpi-block: "10px"
  sheet: "4px 14px 14px 14px"
  panel: "18px"
  pill: "100px"
spacing:
  sheet-pad: "22px"
  sheet-pad-mobile: "16px"
  column-gap: "56px"
  gutter: "32px"
  gutter-mobile: "20px"
  section-y: "96px"
  section-y-tablet: "72px"
  section-y-mobile: "56px"
  container: "1140px"
components:
  button-primary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.board-navy}"
    rounded: "{rounded.button}"
    padding: "16px 30px"
  button-primary-hover:
    backgroundColor: "{colors.index-green}"
    textColor: "{colors.tab-ink}"
  sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "{spacing.sheet-pad}"
  sheet-tab:
    backgroundColor: "{colors.index-green}"
    textColor: "{colors.tab-ink}"
    typography: "{typography.label}"
    height: "30px"
    padding: "0 16px"
  kpi-value:
    textColor: "{colors.board-navy}"
    typography: "{typography.figure}"
  chip:
    textColor: "{colors.muted}"
    typography: "{typography.figure-small}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  tag-not-recorded:
    textColor: "{colors.muted}"
    typography: "{typography.figure-small}"
    rounded: "{rounded.tag}"
    padding: "1px 7px"
  feature-tab:
    backgroundColor: "#ebe8de"
    textColor: "{colors.muted}"
    padding: "12px 18px 11px"
  feature-tab-selected:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.board-navy}"
  feature-panel:
    backgroundColor: "{colors.sand}"
    rounded: "{rounded.panel}"
    padding: "48px 44px"
  stamp:
    textColor: "{colors.gain-green}"
    rounded: "8px"
    padding: "8px 14px 9px"
  headroom-bar:
    backgroundColor: "{colors.sheet-well}"
    height: "12px"
    rounded: "6px"
  later-slip:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.slip}"
    padding: "18px 20px 20px"
  tag-planned:
    textColor: "{colors.muted}"
    typography: "{typography.figure-small}"
    rounded: "{rounded.tag}"
    padding: "2px 8px"
  tag-in-testing:
    textColor: "{colors.gain-green}"
    typography: "{typography.figure-small}"
    rounded: "{rounded.tag}"
    padding: "2px 8px"
---

# Design System: Brikfolio

This system describes the home page (`public/index.html`) and the features page (`src/pages/features/index.astro`, built to `/features/`). Both load `assets/css/home.css` and `assets/js/home.js`: shared components are `b-`-prefixed, features-only components (the last block of `home.css`) are `f-`-prefixed. The Astro layout (`src/layouts/Base.astro`) has a `styles` slot after `styles.css`, so a page stylesheet placed there wins the cascade. Only the blog and legal pages still use the incumbent `styles.css` look; this world is layered on top of that shared stylesheet. Brand navy, brand green, the logo and the Albert Sans 600 wordmark face are fixed by the project and are never altered.

## Overview

**Creative North Star: "The Tax-Time File"**

The page is the investor's property file at tax time. Navy folder board is the dominant field; white printed sheets sit on it carrying the real product rebuilt in HTML on labelled demo data; green index tabs label each sheet and stick out of the file edge; a steel paperclip holds loose paperwork; a green rubber stamp marks the one thing that has been tested. Loose papers arrive scattered and end up filed.

State is a mark, never a colour wash: a dashed "not recorded" tag for missing data, a tick on a bar for the average, a stamp for "tested against doing nothing". Figures are printed in tabular mono as they would be on a statement. Navy and paper alternate section by section (board, paper, sand, board, paper, board, paper, board), so the file is opened, read and closed.

The world refuses the centred headline over a framed dashboard screenshot and a row of equal feature cards: proof is a live sheet, features are tabs in one file (home) or filed sections of it (features page). What is not built yet stays loose: unfiled slips on the desk, never a sheet with a tab.

**Key Characteristics:**
- Navy folder board as the dominant field; paper sheets as the content surface.
- Green index tabs on every sheet's top-left corner, and as real links on the hero file's right edge.
- Tabular IBM Plex Mono for every figure; Albert Sans 600 for display; Space Grotesk for reading.
- State shown as a mark (tag, tick, stamp), not as tinted cards.
- Motion is filing: papers land, a sheet rises, numbers count, the stamp lands last.
- Everything is complete and visible without JavaScript.
- Released features are filed sheets; unreleased ones are loose, tilted slips on sand.

## Colors

Two brand colours carry the whole world: navy as the board, green as the tab; everything else is paper, ink and steel.

### Primary
- **Folder Board Navy** (board-navy): the brand navy. Full-bleed background of the hero, stress test, pricing and closing sections; also the colour of key figures, bar fills and the selected chart bar on a sheet.
- **Folder Back Navy** (folder-back): the lighter navy board behind the hero sheets and behind the features cover's Contents sheet, edged by a 1px inset light line.

### Secondary
- **Index Tab Green** (index-green): the brand green. Sheet tabs, file edge tabs, the "Test" divider, the slider thumb, the scenario line, the last column of a column chart, the 8px square marks in lists and on the primary button. Edge tabs step down in lightness (#5fcbb0, #9adfcc) as they go further back.
- **Tab Ink** (tab-ink): text on any green surface (about 6:1).
- **Ledger Gain Green** (gain-green): gains printed on a sheet (positive cash flow KPI, scenario end values), the rubber stamp, the drawn "done" tick on the import sheet and the "In testing" outline tag.

### Neutral
- **Printed Sheet** (sheet): every sheet, the primary button at rest, the front binder divider.
- **Sheet Rule** (sheet-line): hairlines inside a sheet, KPI cell dividers, chip borders, worklist rules.
- **Sheet Well** (sheet-well): empty bar tracks, slider track, chart grid lines, printed rules on slips.
- **Desk Sand** (sand): paper-side section ground (how it works, the desk), feature panels and the selected feature tab.
- **Line** / **Card Border** (line, card-border): section rules and binder sheet borders on paper.
- **Ink** (ink): body text on paper, the $0 threshold line, the receipt total rule, average ticks on bars.
- **Muted** (muted): secondary text on paper.
- **On Board** / **On Board Strong** (on-board, on-board-strong): body and strong text on navy; **Board Line** for rules on navy.
- **Paperclip Steel** (clip-steel): the paperclip, the dashed "not recorded" tag border, the receipt's top tear line.
- **Accent Line** (accent-line): resting underline colour of text links on paper.

### Named Rules
**The Board And Paper Rule.** A section is either navy board or paper. Content that carries figures always sits on a printed sheet, even when the section is navy. A run of feature sections is broken by at least one band on the board so board and paper alternate.

**The Green Is A Tab Rule.** Brand green labels, selects and marks (tabs, thumb, square bullets, the scenario line). It is never a section background and never body text; text on green is Tab Ink.

**The Fixed Brand Rule.** Brand navy (#102751), brand green (#23b591) and the logo do not change.

## Typography

**Display Font:** Albert Sans 600 (the brand wordmark face), falling back to Space Grotesk
**Body Font:** Space Grotesk (variable 300 to 700)
**Label/Mono Font:** IBM Plex Mono 400/500 for every figure

**Character:** a tight, slightly condensed-feeling display face shared with the wordmark, a technical grotesk for reading, and statement-style mono numerals.

### Hierarchy
- **Display** (600, clamp(40px, 4.6vw, 64px), 1.04, -0.035em): hero headline only, in sheet white on navy; the features cover h1 runs clamp(38px, 5vw, 64px), max 16ch.
- **Headline** (600, clamp(30px, 3.6vw, 46px), 1.04, -0.035em, max 18ch): section headings; the stress test runs larger (clamp(32px, 4vw, 52px)) and the close clamp(30px, 4vw, 50px).
- **Title** (600, 26 to 28px, -0.03em): feature panel question; binder divider tabs and column titles at 17 to 19px.
- **Body** (400, 17px, 1.6, 44 to 56ch): section copy; hero sub 18.5px/1.55; panel lists 15px; sheet text 11 to 15px. Features sections: h2 clamp(30px, 3.4vw, 44px), a 19px question line in navy under it, lede 16.5px/1.65 at 60ch.
- **Label** (700, 12 to 12.5px): sheet tabs, edge tabs, slip kinds; mini-titles at 600.
- **Figure** (IBM Plex Mono 500, tabular, -0.03em): KPI values scale with the sheet (clamp(18px, 5.4cqi, 28px)); the stress readout clamp(30px, 8cqi, 46px) at -0.04em; inline figures 11 to 14px; ledger figures 19px.

### Named Rules
**The Printed Figure Rule.** Every number that comes from the product (money, percent, rate, date range, count) is IBM Plex Mono with tabular numerals. Prose numbers in copy stay in the body face.

**The One Display Face Rule.** Display type is Albert Sans 600 with negative tracking; never bold Space Grotesk for headings on the home or features page.

## Layout

A 1140px container with a 32px gutter (20px at 640px and below). Sections breathe on a 96px vertical rhythm (72px at 960px, 56px at 640px); navy signature sections add 8 to 16px.

Every two-column band is asymmetric: copy on a 5fr (hero 6fr) column, the sheet on 7fr, 56px apart (40px at 1080px), vertically centred. The how-it-works binder is one sheet split into four hairline-divided columns under four stepped divider tabs. The feature tour is a tab row over a sand panel holding a 5fr/7fr pair.

The features page opens on a navy cover: h1 and lede on 6fr, the folder with its Contents sheet on 5fr. Each feature is a full-width band with the same 5fr/7fr pair; flipped bands (`--flip`) put the sheet first at 7fr/5fr so the sheet side alternates. The anchor band (sand) runs a 5fr/7fr intro over two sheets side by side (1.08fr/1fr, 32px gap). Bands scroll to 66px below the top for the sticky nav. Coming later is a wrapped flex row of slips (26px by 28px gaps).

Sheets use container queries: the hero dashboard body stacks below 520px of sheet width, and KPI figure sizes are in `cqi`.

Responsive steps:
- **1240px:** the hero file's edge tabs are dropped (they need the gutter to stick out into).
- **960px:** all asymmetric pairs stack to one column; the hero file caps at 640px; binder divider tabs hide, the binder becomes 2x2 with column titles shown; the ledger becomes two columns.
- **640px (features):** the cover padding drops to 52px top and 56px bottom; slips lose their vertical offset but keep their tilt; import rows wrap. Below 640px SVG chart axis and end labels are 16 viewBox units, so they stay readable as the chart scales down.
- **640px:** slips shrink and lose their meta line; the sheet padding drops to 16px; three-up KPIs become stacked rows; the desk becomes a wrapped flow; the binder and ledger go single column; the stamp leaves its corner and sits below the verdict; feature panels go full-bleed with square corners.

## Elevation & Depth

Depth is physical paper on a board: soft, navy-tinted ambient shadows that drop well below the object, plus stacked hairline edges for sheets behind a sheet. No glows, no hard offset shadows.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 2px rgba(10,28,62,.18), 0 28px 60px -28px rgba(10,28,62,.55)`): every printed sheet.
- **Slip** (`box-shadow: 0 1px 2px rgba(10,28,62,.25), 0 14px 28px -18px rgba(0,0,0,.6)`): loose papers in the hero.
- **Desk paper** (`box-shadow: 0 10px 20px -14px rgba(16,39,81,.45)`): cards on the sand desk and the Coming later slips.
- **Paper button** (`box-shadow: 0 10px 24px -12px rgba(0,0,0,.55)`): the primary button on navy.
- **Folder back / featured plan** (`0 30px 60px -30px rgba(0,0,0,.6)`): large boards on navy, including the features cover's folder back.
- **Sheets behind** (`0 6px 0 -1px #efece4, 0 6px 0 0 var(--card-border), 0 12px 0 -1px #e8e4d9, 0 12px 0 0 var(--card-border), 0 28px 40px -28px rgba(16,39,81,.45)`): two paper edges showing under the binder sheet.

### Named Rules
**The Paper Weight Rule.** Shadows are negative-spread and drop low, as paper lying on a board. A shadow that rings an object evenly is wrong for this world.

## Shapes

The sheet silhouette is the signature: a tight 4px top-left corner where its tab attaches, 14px elsewhere. Tabs round only their free edge (9 to 10px on the top for sheet and divider tabs, on the right for edge tabs). Slips and desk papers are nearly square (3px) and sit rotated (-5deg to +5deg; the Coming later slips stay within ±2deg). The 8px green square is the house bullet and the button's arrow mark. Rules on paper are hairlines; dashed lines mean provisional or printed matter (the not-recorded tag, the $0 threshold, the do-nothing line, receipt tear lines). Pills are reserved for small chips.

## Components

### Buttons
- **Primary (paper button):** sheet-white on navy, navy text, 700 16px, 10px radius, 16px 30px padding, with an 8px green square after the label. Hover turns the button green with tab-ink text and nudges the square 3px right; active presses 1px down.
- **Text link:** 600 weight, 2px underline offset 5px in accent-line, full colour on hover. On navy the underline is 70% green and hover stays light.

### Chips and tags
- **Chip:** mono 11px, 1px sheet-rule border, pill. Used for a financial year on a sheet head, and the Property 360 sub-tab row (first one navy-outlined).
- **Not recorded tag:** mono 11px muted text, 1px dashed steel border, 4px radius. Stands in for any missing value, never $0. The same dashed tag reads "not in the app yet" on the Contents row for Coming later.
- **Planned tag:** the same dashed steel tag (2px 8px padding) on a Coming later slip.
- **In testing tag:** a solid gain-green outline with gain-green text and a leading 8px half-filled dot. An outline and a mark, never a tint.

### Sheet (signature container)
Printed sheet with a green tab naming what it is ("Portfolio overview", "Scenario Studio · Stress", "Tax pack · FY2026–27"), 22px padding, sheet shadow, `container-type: inline-size`.

### KPI block
A white grid of 2 or 3 columns inside a 10px rounded sheet-rule frame, cells divided by 1px shadow hairlines. Each cell: 11.5px muted label with a dotted-underlined mono footnote number, mono figure in navy (green when a gain), 11px mono sub-line. A cell may carry a "How is this worked out?" disclosure (dotted-underlined summary) explaining the figure.

### Bars and charts
- **Bar:** 8px well track, 4px radius, navy fill (green for completeness and LVR) scaled by `--v`, optional 2px ink tick at `--at` for an average.
- **LVR and headroom bars:** always a 0–100 scale (`--v` is the LVR as a fraction) with the ink tick at 80% (`--at: .8`), the lending line. The headroom bar is the heavier variant: 12px track, 6px radius, green fill, a 10px-overhang tick, a mini-title naming "the line marks 80%" and a muted note with the headroom figure in navy mono.
- **Value stack:** a 12px segmented bar in a five-step navy ramp (#102751, #3a4d74, #66769a, #93a0bb, #c2c9d8) with a matching square-key legend.
- **Column chart:** pale green columns, the current one full green, on an ink baseline.
- **Line chart:** 4px green scenario line against a 1.5px dashed navy "do nothing" line, mono end labels.

### Hero file: slips, folder back and edge tabs
Three white slips (settlement, loan, rental statements) with printed rules, rotated and overlapped; the middle one carries a steel paperclip. Behind them a folder-back board with its own tab. In front, the portfolio overview sheet. Three green edge tabs on the right are real links to page sections, each further back a lighter green, sliding 4px out on hover.

### Binder (how it works)
One paper sheet in four columns under stepped divider tabs, each tab further back a shade darker; the "Test" divider and column are green (column tinted at 7%), with a small stamp. Two paper edges show beneath.

### Stress card and slider
A sheet with a two-figure mono readout (rate change and worst-year cash flow, with a delta line), five rate-step bars, an axis break, and a dashed ink $0 threshold column labelled with the rate that breaks cash flow. A range input sits under the bars with its stops on their centres: well track, 24px green thumb with a sheet-white ring and navy hairline, scale 1.12 on hover, 5px green focus halo. Bars are also clickable; the selected bar turns navy.

### Stamp
The "Tested" mark: Albert Sans 600 uppercase with 0.1em tracking, mono 10px subline, gain-green 3px border plus a 1px outline offset 2px, rotated -8deg, multiplied onto the paper. One per signature moment; a small 2px variant marks the binder's Test column.

### Feature tabs and panels
A WAI-ARIA tab row of paper-coloured folder tabs (10px top radius); the selected tab merges into the sand panel and carries a 3px green bar inside its top edge. Each panel pairs a question in display type with a green-square list and a sheet that rises in. Without JS the tab row stays hidden and all panels show stacked with their h3 headings.

### Receipt
Tax-pack lines between a dashed steel top edge and dashed sheet-rule separators, mono figures right-aligned, a mono note per line, and a 2px ink rule under the bold total. Export actions are small ink-outlined white buttons.

### Worklist
Data health rows: name, completeness bar, mono percent and a small ink-outlined to-do button, divided by sheet-rule hairlines; the bar wraps to its own row on mobile.
- **Features worklist:** one block per property, least complete first: a head row with the property (600, 13px) and mono percent, a full-width green completeness bar beneath, then each missing item as a muted 12.5px line with its to-do button right. A last muted line counts the remaining properties.

### Contents sheet (features cover)
The features cover's live object: a folder-back board offset behind a sheet tabbed "Contents · demo portfolio". The sheet is the page's jump list: hairline-divided rows, each a link with a mono counter number, the section name (600, 15px; green 2px underline on hover) and that section's key figure in navy mono at the right. The Coming later row is muted and carries the dashed "not in the app yet" tag instead of a figure.

### Import review sheet
A sheet of uploaded documents, one row each, divided by sheet-rule hairlines: document name (600, 13.5px) left, state right in mono 11px. Done reads in gain-green behind a drawn tick (two 2px strokes, rotated); "to check" is plain muted mono text with no mark; a missing document gets the dashed not-recorded tag. A fine-print line closes the sheet.

### Per-sheet notes
Every feature sheet ends with a `<details>` disclosure, "How … worked out?", above a dashed sheet-rule top border. Its numbered list matches the dotted mono superscript markers on the sheet's KPI labels, one note per marker; a closing plain line may explain "better". Notes are 12px muted at 64ch. On the stress card the notes stop 200px short of the right edge to clear the stamp (full width on mobile).

### Coming later slips
Unreleased features are loose slips on the sand desk, never sheets: white, 1px line border, 3px radius, desk-paper shadow, each with its own flex-basis width (250 to 360px), a ±1–2deg tilt and a small vertical offset, so no two are alike. Name (600) and status tag share the top row; muted 14px copy below.

### Motion
Easing everywhere is `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Hero sequence:** the folder back fades up (600ms); the three slips fly in from off-axis rotations, staggered 170ms (820ms each); the overview sheet rises 90px out of the file with a clip reveal (900ms, 820ms delay); then its bars grow and figures count up from zero (1400ms, quartic ease-out) and restore their exact final text.
- **Scroll-in sheets:** at 30% visibility each `[data-anim]` sheet plays once: bars scale from the left, columns from the base, lines draw, receipt lines print down in sequence, desk papers drop in from above with extra rotation, binder tabs rise 30px.
- **Slider hint:** on first view of the stress card, after 1.9s the slider sweeps to +3% and back to today in steps; any touch stops it.
- **Stamp:** lands last (1.1s after the sheet), from 1.9x scale, -14deg and a 2px blur to -8deg, 420ms.
- **Feature tabs:** the panel text slides in 10px (400ms) and the sheet rises 26px with a 1.5deg turn (550ms), replaying its figures.
- **No JS:** every start state exists only under `.b-live` (set by the script) or `.js`; without the script everything is shown in its finished state, and the hero has a 2.5s failsafe reveal.
- **Reduced motion:** the script skips the flight, counting, replay and slider hint and marks everything finished; the shared stylesheet removes all transitions and animations. State changes (selected bar, readout values) still apply instantly.

## Do's and Don'ts

### Do:
- **Do** put every product figure on a printed sheet with a green tab naming the screen it comes from, built in HTML on labelled demo data.
- **Do** set figures in IBM Plex Mono with tabular numerals.
- **Do** show missing data with the dashed "not recorded" tag and a dash, never $0.
- **Do** pair a figure that is an estimate with a "How is this worked out?" disclosure; on a sheet with several, number the notes to match the superscript markers.
- **Do** draw every LVR bar on a 0–100 scale with the tick at 80%.
- **Do** compare every scenario against a dashed "do nothing" line or a $0 threshold.
- **Do** alternate navy board and paper sections; use the 5fr/7fr asymmetric pair for copy plus sheet.
- **Do** show unreleased features only as loose tilted slips with a dashed Planned tag or the outlined In testing mark.
- **Do** make every start state conditional on the script, so no-JS and reduced-motion users see the finished file.

### Don't:
- **Don't** change brand navy (#102751), brand green (#23b591), the logo or the Albert Sans 600 wordmark face.
- **Don't** use green as a section background or for body text; text on green is tab ink (#0b2a52).
- **Don't** add a centred headline over a framed dashboard screenshot, or a row of equal feature cards; features live as tabs in the file or as filed sections.
- **Don't** show In testing or Planned with a tinted background, or put an unreleased feature on a tabbed sheet.
- **Don't** use more than one full-size stamp per section; it is the last beat, not decoration.
- **Don't** lead with the unsourced market figures; they stay in the quiet ledger until sourced.
