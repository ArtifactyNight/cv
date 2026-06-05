---
name: CV
description: A precise, quiet portfolio and writing site for peers and builders.
colors:
  olive-50: "#f4f6f0"
  olive-100: "#e9ece4"
  olive-200: "#d6dbd0"
  olive-300: "#b9c0b0"
  olive-400: "#95a08d"
  olive-500: "#727d69"
  olive-600: "#5a6352"
  olive-700: "#464f41"
  olive-800: "#383f34"
  olive-900: "#2c3028"
  primary: "#BFA28C"
  primary-deep: "#A38872"
  page: "#f4f6f0"
  ink: "#2c3028"
  ink-muted: "#5a6352"
  accent: "#464f41"
  accent-deep: "#383f34"
  rule: "#d6dbd0"
typography:
  display:
    fontFamily: "Satoshi, IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Satoshi, IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Satoshi, IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Satoshi, IBM Plex Sans Thai, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Satoshi, IBM Plex Sans Thai, system-ui, sans-serif"
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

**Creative North Star: "The Margin Note"**

This system treats the site as a narrow column of ink on paper: one voice, one measure, no decorative scaffolding. Layout stays typography-led with flat surfaces; hierarchy comes from size, weight, and spacing, not cards or chrome.

The color world is **olive**: muted green-gray neutrals tinted toward foliage, not cool blue-gray. **Primary brown** (`#BFA28C`) carries brand warmth on buttons, selection, and focus rings. Link text uses dark olive (`olive-700`) for readable contrast on the light page ground.

**Key Characteristics:**

- Narrow reading measure (`max-width: 42rem` / ~672px) centered on the page
- Olive neutral scale (`olive-50` through `olive-900`) for surfaces and text
- Primary brown `#BFA28C` for brand moments, not default link color
- Flat surfaces: no drop shadows at rest
- Bilingual-ready type stack (Satoshi + IBM Plex Sans Thai)
- Lists over cards; dates beside titles, not inside tiles

## 2. Colors

Olive-tinted neutrals with a warm brown primary. The brown is brand identity; dark olive handles interactive text.

### Primary

- **Warm Umber** (`#BFA28C` / `oklch(72% 0.04 65)`): Primary brand color. Buttons, text selection, focus rings, occasional emphatic UI. Not used for body text or default links (contrast too low on `olive-50`).
- **Umber Deep** (`#A38872` / `oklch(62% 0.05 65)`): Hover and pressed states on primary-filled controls.

### Neutral (Olive scale)

- **Olive Mist** (`olive-50` / `#f4f6f0`): Page background. Light olive wash, not generic gray or cream.
- **Body Ink** (`olive-900` / `#2c3028`): Primary text, display headings, project titles.
- **Faded Olive** (`olive-600` / `#5a6352`): Dates, metadata, secondary lines. Meets 4.5:1 on `olive-50`.
- **Olive Rule** (`olive-200` / `#d6dbd0`): Hairline dividers between major sections.
- **Link Olive** (`olive-700` / `#464f41`): Default link and navigation text on light ground.
- **Link Olive Deep** (`olive-800` / `#383f34`): Link hover state.

### Named Rules

**The Primary Brown Rule.** `#BFA28C` is the sole primary brand color. Use it on filled controls, selection highlights, and focus outlines. Do not substitute a different tan or gold.

**The Olive Ground Rule.** Page and surface neutrals stay on the olive hue axis (`olive-50`–`olive-300`). Gray blues and warm cream defaults are out of register.

**The Contrast Split Rule.** Brown primary for brand fills; dark olive for link text. Never set `#BFA28C` as default body or link color on `olive-50`.

## 3. Typography

**Display Font:** Satoshi (Fontshare), with IBM Plex Sans Thai for Thai script  
**Body Font:** Satoshi, with IBM Plex Sans Thai  
**Label Font:** Satoshi (same family; hierarchy via size and weight, not a third face)

**Character:** Geometric sans with enough weight contrast to feel opinionated without shouting. Thai glyphs must render at native quality via IBM Plex Sans Thai in the stack.

### Hierarchy

- **Display** (700, `clamp(2rem, 5vw, 3rem)`, 1.1): Home intro name and primary page title. One per fold maximum.
- **Headline** (600, `clamp(1.5rem, 3vw, 2rem)`, 1.2): Section headers (`Work`, `Writing`). No eyebrows above every section.
- **Title** (600, 1.125rem, 1.3): Project names and essay titles in lists.
- **Body** (400, 1rem, 1.6): Intro paragraphs and essay prose. Cap line length at 65–75ch.
- **Label** (500, 0.875rem, 1.4): Dates beside writing entries, contact metadata.

### Named Rules

**The One Family Rule.** Satoshi carries display through label roles. Do not add a reflex display serif or monospace accent font.

**The Margin Measure Rule.** Prose and profile content stay within `max-width: 42rem`. Wider only for full-bleed photography when imagery ships.

## 4. Elevation

This system is flat by default. Depth is conveyed through spacing, typographic weight, and occasional hairline rules, not shadow stacks or glass panels.

No `box-shadow` on text blocks, list rows, or navigation at rest. If imagery is used later, a single soft image frame shadow is permitted on photos only, never on typography containers.

### Named Rules

**The Flat-By-Default Rule.** If a section needs separation, add space or a hairline rule. Never reach for a card shadow to create hierarchy.

## 5. Components

Overall component character: **plain affordances, no component theater.**

### Buttons

- **Shape:** Slightly rounded (4px radius)
- **Primary:** Primary brown (`#BFA28C`) background, Body Ink text, 12px × 20px padding
- **Hover / Focus:** Umber Deep background; 2px focus-visible outline in Primary brown
- **Ghost:** Text-only link styled as button; Link Olive text, underline on hover

### Chips

Not used in v1. Tags or filters, if added later, should be text labels separated by middots, not pill components.

### Cards / Containers

- **Corner Style:** None by default; content sits directly on Olive Mist background
- **Background:** `olive-50` only
- **Shadow Strategy:** None (see Elevation)
- **Border:** Olive Rule only between major sections, full width of the margin column
- **Internal Padding:** Section gaps use `spacing.lg` (32px) minimum between intro, work, and writing blocks

### Inputs / Fields

- **Style:** 1px Olive Rule border, Olive Mist background, 4px radius, Body size text
- **Focus:** 2px Primary brown outline, no glow
- **Error / Disabled:** Muted helper text; no red alert banners unless form validation ships

### Navigation

- **Style:** Inline text links in the margin column footer or top, not a sticky app bar
- **Typography:** Body weight, Link Olive color, underline on hover
- **Mobile:** Same links stacked; no hamburger sheet unless link count exceeds six

### Writing List Row

- **Layout:** Flex row with date (Label, Faded Olive) and title (Title, Body Ink) on one line where space allows; stack on narrow viewports
- **Separator:** None between rows; whitespace carries rhythm
- **Hover:** Title shifts to Link Olive; date stays muted

## 6. Do's and Don'ts

### Do:

- **Do** use the olive scale (`text-olive-600`, `bg-olive-50`, etc.) for neutrals and the semantic aliases (`page`, `ink`, `accent`) wired in `global.css`.
- **Do** use `#BFA28C` as primary on buttons, selection, and focus rings.
- **Do** use dark olive (`olive-700` / `accent`) for link text on light backgrounds.
- **Do** keep the home structure as intro → work → writing.
- **Do** use Satoshi + IBM Plex Sans Thai for all text roles.

### Don't:

- **Don't** use `#BFA28C` for body copy or default links on `olive-50` (fails contrast).
- **Don't** revert to cool blue-gray ink or navy link colors from the previous palette.
- **Don't** ship SaaS landing-page grammar or dark-mode dev portfolio clichés.
- **Don't** add side-stripe borders, gradient text, or glassmorphism cards.
- **Don't** repeat tiny uppercase tracked eyebrows above every section heading.
- **Don't** add a third display typeface from the reflex-reject list.
