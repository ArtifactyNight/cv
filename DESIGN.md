---
name: CV
description: A precise, quiet portfolio and writing site for peers and builders — High Renaissance study.
colors:
  fresco-50: "#f2ede3"
  fresco-100: "#e8e1d4"
  fresco-200: "#d4cbc0"
  fresco-300: "#b8aea0"
  fresco-400: "#958a7a"
  fresco-500: "#736856"
  fresco-600: "#5c5244"
  fresco-700: "#453c32"
  fresco-800: "#352e26"
  fresco-900: "#2a231c"
  primary: "#c4973b"
  primary-deep: "#96700f"
  lapis: "#2b4570"
  lapis-deep: "#1e3050"
  page: "#f2ede3"
  ink: "#2a231c"
  ink-muted: "#5c5244"
  accent: "#2b4570"
  accent-deep: "#1e3050"
  rule: "#d4cbc0"
typography:
  display:
    fontFamily: "Sentient, system-ui, serif"
    fontSize: "clamp(1.5rem, 4vw, 2rem)"
    fontWeight: 500
    fontStyle: "italic"
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Sentient, system-ui, serif"
    fontSize: "1rem"
    fontWeight: 500
    fontStyle: "italic"
    lineHeight: 1.3
    letterSpacing: "normal"
  title:
    fontFamily: "Schibsted Grotesk, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Schibsted Grotesk, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Schibsted Grotesk, Noto Sans Thai, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  link-default:
    textColor: "{colors.accent}"
    typography: "{typography.body}"
  link-hover:
    textColor: "{colors.accent-deep}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
---

# Design System: CV

## 1. Overview

**Creative North Star: "The Fresco Study"**

A Florentine collector's desk at late afternoon: lime plaster walls, walnut ink on vellum, lapis and ochre pulled from a Raphael study hung above. The narrow column of text sits between Michelangelo's reaching hands at the viewport edges — quiet, classical, unmistakably human.

The color world is **fresco plaster**: warm lime-plaster neutrals tinted toward umber, not cool gray or AI cream. **Gold ochre** carries brand warmth on selection, focus rings, and timeline markers. **Lapis** (ultramarine) handles link text — the expensive pigment reserved for what matters.

**Key Characteristics:**

- Narrow reading measure (`max-width: 42rem` / ~672px) centered on the page
- Fresco plaster scale (`fresco-50` through `fresco-900`) for surfaces and text
- Gold ochre primary for brand moments, lapis for readable link text
- Flat surfaces: no drop shadows at rest
- Sentient italic for display and section headers; Schibsted Grotesk + Noto Sans Thai for body
- Creation of Adam hands as ambient framing on wide viewports
- Lists over cards; dates beside titles, not inside tiles

## 2. Colors

Plaster-tinted neutrals with Renaissance pigment accents. Gold ochre is brand identity; lapis handles interactive text.

### Primary

- **Gold Ochre** (`oklch(68% 0.11 78)` / `#c4973b`): Primary brand color. Text selection, focus rings, timeline markers. Not used for body text or default links (contrast too low on fresco-50).
- **Ochre Deep** (`oklch(56% 0.12 72)` / `#96700f`): Hover and pressed states on primary-filled controls.

### Accent (Lapis)

- **Lapis** (`oklch(38% 0.1 255)` / `#2b4570`): Default link and navigation text on light ground. Ultramarine — the pigment Raphael reserved for the Virgin's robe.
- **Lapis Deep** (`oklch(30% 0.09 255)` / `#1e3050`): Link hover state.

### Neutral (Fresco scale)

- **Plaster** (`fresco-50` / `#f2ede3`): Page background. Lime plaster wash, not generic cream.
- **Umber Ink** (`fresco-900` / `#2a231c`): Primary text, project titles.
- **Raw Umber** (`fresco-600` / `#5c5244`): Dates, metadata, secondary lines. Meets 4.5:1 on fresco-50.
- **Plaster Rule** (`fresco-200` / `#d4cbc0`): Hairline dividers between major sections.

### Named Rules

**The Pigment Rule.** Gold ochre for brand fills; lapis for link text. Never substitute navy, teal, or generic blue.

**The Plaster Ground Rule.** Page and surface neutrals stay on the fresco hue axis (`fresco-50`–`fresco-300`). Gray blues and warm cream defaults are out of register.

**The Contrast Split Rule.** Ochre primary for selection and focus; lapis for link text. Never set gold ochre as default body or link color on fresco-50.

## 3. Typography

**Display Font:** Sentient (Fontshare), italic medium — manuscript inscription quality  
**Body Font:** Schibsted Grotesk, with Noto Sans Thai for Thai script  
**Section Headers:** Sentient italic (not uppercase eyebrows)

**Character:** Classical serif display against geometric sans body — the contrast axis of a Renaissance studiolo, not editorial magazine grammar (no mono labels, no ruled broadsheet grid).

### Hierarchy

- **Display** (Sentient 500 italic, `text-2xl`, 1.15): Home name. One per fold maximum.
- **Headline** (Sentient 500 italic, `text-base`, 1.3): Section headers (`Open Source`, `บทความ`). No tiny uppercase eyebrows.
- **Title** (Schibsted 600, `text-sm`, 1.3): Project names and essay titles in lists.
- **Body** (Schibsted 400, `text-sm`, 1.6): Intro paragraphs and essay prose. Cap line length at 65–75ch.
- **Label** (Schibsted 500, `text-sm`, 1.4): Dates beside writing entries, contact metadata.

### Named Rules

**The Studiolo Pair Rule.** Sentient italic for display and section headers; Schibsted Grotesk for everything else. Do not add a reflex display serif from the ban list or a monospace accent.

**The Margin Measure Rule.** Prose and profile content stay within `max-width: 42rem`. Wider only for full-bleed photography or the Adam hands framing.

## 4. Elevation

Flat by default. Depth comes from spacing, typographic weight, plaster-toned rules, and the Adam hands at the margins — not shadow stacks or glass panels.

No `box-shadow` on text blocks, list rows, or navigation at rest. A single soft image frame shadow is permitted on photos only.

### Named Rules

**The Flat-By-Default Rule.** If a section needs separation, add space or a hairline rule. Never reach for a card shadow to create hierarchy.

## 5. Components

Overall component character: **plain affordances, classical restraint.**

### Buttons

- **Shape:** Slightly rounded (4px radius)
- **Primary:** Gold ochre background, Umber Ink text, 12px × 20px padding
- **Hover / Focus:** Ochre Deep background; 2px focus-visible outline in gold ochre
- **Ghost:** Text-only link styled as button; Lapis text, underline on hover

### Cards / Containers

- **Corner Style:** None by default; content sits directly on Plaster background
- **Background:** `fresco-50` only
- **Shadow Strategy:** None
- **Border:** Plaster Rule only between major sections
- **Internal Padding:** Section gaps use `spacing.lg` (32px) minimum

### Navigation

- **Style:** Inline text links in the margin column, not a sticky app bar
- **Typography:** Body weight, Lapis color, underline on hover
- **Mobile:** Same links stacked; no hamburger sheet unless link count exceeds six

### Adam Hands (viewport framing)

- **Placement:** Fixed at viewport edges, visible from 900px+
- **Treatment:** Sepia-tinted at 42% opacity (28% in dark chapel mode)
- **Purpose:** Ambient Renaissance reference; pointer-events none, aria-hidden

### Writing List Row

- **Layout:** Flex row with date (Label, Raw Umber) and title (Title, Umber Ink)
- **Separator:** None between rows; whitespace carries rhythm
- **Hover:** Title shifts to Lapis; date stays muted

## 6. Do's and Don'ts

### Do:

- **Do** use the fresco scale for neutrals and semantic aliases wired in `global.css`.
- **Do** use gold ochre on selection, focus rings, and timeline markers.
- **Do** use lapis for link text on light backgrounds.
- **Do** use Sentient italic for the name and section headers.
- **Do** keep the home structure as intro → work → writing.

### Don't:

- **Don't** use gold ochre for body copy or default links on fresco-50 (fails contrast).
- **Don't** revert to olive, navy, or cool blue-gray palettes.
- **Don't** ship SaaS landing-page grammar or dark-mode dev portfolio clichés.
- **Don't** add side-stripe borders, gradient text, or glassmorphism cards.
- **Don't** use tiny uppercase tracked eyebrows above section headings.
- **Don't** add a third display typeface from the reflex-reject list.
