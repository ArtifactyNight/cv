---
name: Kidsanaphon Kaeopha
description: Minimal engineering portfolio — serif headings, sans body, recruiter-first scan.
colors:
  paper: "oklch(1 0 0)"
  ink: "oklch(0.153 0.006 107.1)"
  charcoal: "oklch(0.228 0.013 107.4)"
  whisper: "oklch(0.58 0.031 107.3)"
  mist: "oklch(0.966 0.005 106.5)"
  line: "oklch(0.93 0.007 106.5)"
  focus: "oklch(0.737 0.021 106.9)"
  alert: "oklch(0.577 0.245 27.325)"
typography:
  heading:
    fontFamily: "var(--font-serif), Roboto Slab, Georgia, serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  section:
    fontFamily: "var(--font-serif), Roboto Slab, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "var(--font-sans), Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  ui:
    fontFamily: "var(--font-sans), Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  mono:
    fontFamily: "var(--font-mono), Geist Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "0.15rem"
  md: "0.2rem"
  lg: "0.25rem"
  pill: "2.6rem"
spacing:
  page-y: "2.5rem"
  section-gap: "3.5rem"
  container-x: "1rem"
  prose: "65ch"
components:
  button-primary:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.75rem"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.75rem"
  nav-link:
    typography: "{typography.ui}"
    textColor: "{colors.whisper}"
    padding: "0 0"
  nav-link-active:
    typography: "{typography.ui}"
    textColor: "{colors.ink}"
    padding: "0 0"
  section-heading:
    typography: "{typography.section}"
    textColor: "{colors.ink}"
    padding: "0 0"
---

# Design System: Kidsanaphon Kaeopha

## Overview

**Creative North Star: "Less, Pairing"**

The site says only what hiring needs: who you are, what you do, how to reach you. Less is more: every extra border, badge, card, or animation must earn its place or it goes. Visual interest comes from a single disciplined move, **serif for headings, sans for everything else**, not from decoration.

Roboto Slab carries identity on `h1` and `h2`. Geist carries body copy, navigation, metadata, and UI. Geist Mono appears only for dates and stack lines. Color stays ink-on-paper (olive-tinted neutrals); motion stays a short route crossfade. The About page (`about-page.tsx`) is the reference layout: open sections, `max-w-prose` text, timeline with a hairline border, project list with dividers only.

**Key Characteristics:**

- Minimal surface area: type and spacing do the work; no card grids or hero widgets
- **Serif headings / sans body** as the non-negotiable pairing axis
- True white paper, ink body text, whisper only for short secondary lines
- Small base radius (`0.25rem`); pills reserved for primary buttons
- Generous vertical rhythm (`space-y-14` between sections on About)
- GSAP route transition as the one motion signature; reduced-motion fallback required

## Colors

Restrained ink-on-paper. One accent family (charcoal/ink), no decorative second hue.

### Primary

- **Charcoal** (oklch(0.228 0.013 107.4)): Primary button fill, emphasis in dark mode.

### Neutral

- **Paper** (oklch(1 0 0)): Light-mode background. Chroma 0 white, not cream.
- **Ink** (oklch(0.153 0.006 107.1)): Body copy, active nav, timeline role lines.
- **Whisper** (oklch(0.58 0.031 107.3)): Location, inactive nav, company suffix in timeline, period labels when paired with mono.
- **Mist** (oklch(0.966 0.005 106.5)): Photo placeholder, subtle fills.
- **Line** (oklch(0.93 0.007 106.5)): Timeline axis, list dividers, outlines.

### Tertiary

- **Alert** (oklch(0.577 0.245 27.325)): Errors/destructive only.

### Named Rules

**The Paper Rule.** Body background stays true white in light mode.

**The Less Color Rule.** If a new color does not improve scan or affordance, do not add it.

**The Whisper Rule.** Muted text is for labels and metadata, never multi-sentence body paragraphs.

## Typography

**Heading Font (serif):** Roboto Slab via `--font-serif` / `font-serif`

**Body Font (sans):** Geist via `--font-sans` / `font-sans` on `<html>` in `layout.tsx`

**Mono Font:** Geist Mono for periods and stack only

**Character:** Minimal pairing with contrast on the axis: slab serif names the structure; geometric sans reads fast for everything operational. Do not add a third sans or a second serif.

### Hierarchy

- **Heading / h1** (serif, 700, clamp(1.75rem, 4vw, 2.5rem), 1.15, -0.02em): Person name and page identity. `text-balance`.
- **Section / h2** (serif, 600, 1rem, 1.2, -0.01em): `Now`, `Experience`, `Selected work`, `Stack`. Same family as h1, smaller step.
- **Role line** (sans, 600, 1.125rem): Job title under the name; not a heading level, stays sans for scan speed.
- **Body** (sans, 400, 1rem, 1.6): Paragraphs inside `max-w-prose`. `text-pretty` on long copy.
- **UI** (sans, 500, 0.875rem): Nav, buttons, inline links, availability line.
- **Mono** (mono, 400, 0.75rem): Timeline periods, stack `·` line.

### Named Rules

**The Pairing Rule.** Serif is only for `h1` and `h2`. Sans is mandatory for body, nav, buttons, role line, project titles, and timeline role text. Mono is only for dates and stack.

**The Less Type Rule.** Use at most five distinct size/weight combos on a page. If a sixth is needed, remove something first.

**The Flat Scale Rule.** ≥1.25 ratio between heading and body steps; no adjacent sizes without weight change.

## Elevation

No shadows on static content. Depth is a 1px line (`border-border`) on the experience timeline and `divide-y` between projects. Buttons may use focus ring and 1px press (`translate-y-px`).

### Shadow Vocabulary

- **Focus ring** (`ring-3 ring-ring/30`): Keyboard focus on interactive controls only.

### Named Rules

**The Flat Page Rule.** Pages are paper plus type. No cards, no panels, no glass.

**The Line-Only Rule.** Separators are full-width hairlines or a single timeline border, never colored side stripes.

## Components

### Buttons

- **Shape:** Pill (`rounded-4xl`) for primary CTA only
- **Primary:** Charcoal on paper; label sans, verb + object (`Get in touch`)
- **Outline:** Paper fill, line border; 404 and secondary actions
- **Use sparingly:** One primary CTA per viewport when possible

### Navigation

- **Style:** Centered text links in `Container`; no bar, no icons
- **Typography:** Sans UI scale; tabular `01`–`04` prefixes sitewide
- **States:** Whisper default, ink active, hover toward ink
- **Touch:** `hit-area-8` on links

### About page patterns (shipped)

- **Hero:** Optional photo (`rounded-lg`, `size-28`/`32`), serif name, sans role + location, CTA row
- **Sections:** `space-y-14 sm:space-y-16` between blocks; `max-w-prose` on prose
- **Timeline:** `border-l` + dot markers; mono periods, sans role/company, ink detail
- **Projects:** `divide-y divide-border`; sans title links, sans descriptions
- **Stack:** Single mono line joined with ` · `

### Cards / Containers

- **Container:** `max-w-4xl`, `px-4`. No card wrappers.

### Route shell

- **GSAP:** `main` opacity + ±8px over 0.2–0.25s, `power2.out`, skip transform when `prefers-reduced-motion: reduce`

## Do's and Don'ts

### Do:

- **Do** pair serif headings with sans body on every page; keep the split obvious.
- **Do** remove UI before adding UI; default to one column and prose width.
- **Do** keep hire signal in the first screen: name, role, location, contact path.
- **Do** use ink for readable paragraphs; whisper for metadata only.
- **Do** respect reduced motion on route transitions and any new animation.

### Don't:

- **Don't** set body or section titles in serif while headings stay sans (breaks the pairing rule).
- **Don't** add cards, eyebrows, hero metrics, or gradient decoration.
- **Don't** use cream/sand backgrounds, gradient text, or numbered section markers as filler.
- **Don't** dump resume-density bullets; keep timeline entries to one line of detail when possible.
- **Don't** introduce a second sans family or decorative display face.
- **Don't** gate content on entrance animations.
