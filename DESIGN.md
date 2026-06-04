---
name: Kidsanaphon Kaeopha
description: Personal engineering portfolio — recruiter scan path, craft in the details.
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
  display:
    fontFamily: "var(--font-serif), Roboto Slab, Georgia, serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-serif), Roboto Slab, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "var(--font-sans), Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-sans), Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-sans), Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  mono:
    fontFamily: "var(--font-mono), Geist Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
  xl: "0.875rem"
  pill: "2.6rem"
spacing:
  page-y: "2rem"
  section: "1rem"
  container-x: "1rem"
  nav-gap: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.75rem"
  button-primary-hover:
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
    typography: "{typography.label}"
    textColor: "{colors.whisper}"
    padding: "0 0"
  nav-link-active:
    typography: "{typography.label}"
    textColor: "{colors.ink}"
    padding: "0 0"
---

# Design System: Kidsanaphon Kaeopha

## Overview

**Creative North Star: "The Workbench Proof"**

This system treats the site as a working surface, not a marketing funnel. Recruiters should read role, location, and credibility in seconds; everything else supports that scan without decorative chrome. Playfulness lives in intentional details (route motion, tabular nav indices, touch-target craft), not in section templates or hero widgets.

The palette is deliberately restrained: ink on paper with olive-tinted neutrals from the shadcn olive base. Craft is proven through typography discipline, contrast, responsive behavior, and interaction polish. The system rejects SaaS landing grammar, generic AI portfolio tells, and resume-as-PDF density.

**Key Characteristics:**

- Recruiter-first hierarchy: name and reachability before personality routes
- Ink-on-paper neutrals with whisper for secondary copy only when contrast holds
- Serif display (Roboto Slab) over sans body (Geist); mono for code or metadata when needed
- Flat surfaces at rest; hover/focus lift reserved for interactive elements
- Sharp minimal components: links carry navigation; buttons stay rare and purposeful
- Route transitions (GSAP) as the primary motion signature, not section stagger reflexes

## Colors

A restrained ink-on-paper system: true white ground, near-black olive ink, whisper for secondary labels when legible.

### Primary

- **Charcoal** (oklch(0.228 0.013 107.4)): Primary actions, emphasis fills, dark-mode inverted surfaces. The committed interactive ink, not a marketing accent flood.

### Neutral

- **Paper** (oklch(1 0 0)): Page background in light mode. True white at chroma 0; warmth comes from typography and copy, not cream-tinted body fill.
- **Ink** (oklch(0.153 0.006 107.1)): Body and navigation active text. Default reading color on paper.
- **Whisper** (oklch(0.58 0.031 107.3)): Muted labels, inactive nav, metadata (location line, 404 sublabel). Never for long body paragraphs without contrast check.
- **Mist** (oklch(0.966 0.005 106.5)): Secondary fills, hover washes on ghost controls.
- **Line** (oklch(0.93 0.007 106.5)): Borders and input strokes in light mode.

### Tertiary

- **Alert** (oklch(0.577 0.245 27.325)): Destructive actions and validation only. Rare on a portfolio surface.

### Named Rules

**The Paper Rule.** Light-mode body background stays true white (chroma 0). No cream, sand, parchment, or warm near-white fills.

**The Whisper Rule.** Muted foreground is for short secondary lines (nav inactive, captions, tabular indices). Body copy stays ink unless a contrast audit passes at 4.5:1.

**The One Ink Rule.** Charcoal and ink carry hierarchy; no second saturated accent color until a deliberate brand moment earns it.

## Typography

**Display Font:** Roboto Slab (Georgia, serif fallback) via `--font-serif`

**Body Font:** Geist (system-ui, sans-serif fallback) via `--font-sans`

**Label/Mono Font:** Geist for labels; Geist Mono for code or fixed-width metadata

**Character:** Serif gives name and section titles a human, crafted weight; sans keeps UI and supporting copy fast to scan. Pairing follows a contrast axis (slab serif + geometric sans), not two competing sans families.

### Hierarchy

- **Display** (700, clamp(1.75rem, 4vw, 2.5rem), 1.15): Page title and primary identity (name on About). Use `text-wrap: balance` on h1–h3.
- **Headline** (600, 1.5rem, 1.2): Section titles on inner routes.
- **Title** (600, 1.125rem, 1.3): Subsections, card-less group labels.
- **Body** (400, 1rem, 1.6): Prose and descriptions; cap measure at 65–75ch inside `Container` (max-width 56rem / 4xl).
- **Label** (500, 0.875rem, -0.01em tracking): Navigation links, buttons, short UI labels. Tabular nums for ordered nav indices (`01`, `02`).
- **Mono** (400, 0.875rem): Code snippets, technical metadata when distinct from label style.

### Named Rules

**The Slab Name Rule.** The person's name and primary route headings use display serif; everything operational stays sans.

**The Flat Scale Rule.** Maintain ≥1.25 ratio between type steps; avoid stacking similar sizes (e.g. text-lg beside text-xl with no weight change).

## Elevation

Flat at rest. Depth is tonal: paper, mist, and line separate layers before any shadow appears. On hover or focus, interactive elements may gain a subtle lift (translate, ring, or light shadow) as feedback, not as default decoration.

### Shadow Vocabulary

- **Focus ring** (`ring-3 ring-ring/30` on buttons): Structural focus for keyboard users; tied to `{colors.focus}`.
- **Hover lift** (`active:translate-y-px` on buttons): Tactile press feedback only on pressable controls, not static text blocks.

### Named Rules

**The Flat-By-Default Rule.** No ambient card shadows on static content. Cards are not the default layout affordance.

**The Hover-Only Lift Rule.** Elevation motion appears on interactive elements in response to state, never on passive paragraphs or section wrappers.

## Components

Sharp and minimal: navigation is typographic; buttons appear for actions (404 return, future contact CTAs). Pill radius on buttons (`rounded-4xl`, ~2.6rem) contrasts with tighter layout chrome.

### Buttons

- **Shape:** Full pill (rounded-4xl, base radius token 0.625rem on smaller controls)
- **Primary:** Charcoal fill, paper text, h-9 default, text-sm font-medium
- **Outline:** Paper fill, line border, ink text; used for secondary actions (e.g. Back Home)
- **Hover / Focus:** Primary hovers to 80% opacity; focus-visible uses ring on border color; active translates 1px on press
- **Ghost / Destructive:** Available in library; use sparingly on portfolio surfaces

### Navigation

- **Style:** Centered horizontal nav inside `Container`, no background bar
- **Typography:** Label scale, medium weight, tight tracking; tabular-nums prefix for index (`01`–`04`) only where order is meaningful sitewide
- **Default:** Whisper text; **Active:** Ink text; hover shifts whisper toward ink
- **Touch:** `hit-area-8` utility expands tap targets without visual padding bloat
- **Mobile:** `flex-wrap` with gap-x-8 gap-y-2; stays readable without hamburger until content demands it

### Cards / Containers

- **Container:** max-w-4xl (56rem), horizontal padding 1rem; primary content width constraint
- **Cards:** Not in active use on shipped routes; prefer open layout and type hierarchy

### Inputs / Fields

- **Style:** shadcn/base-ui patterns when forms ship; line border, mist hover, ring focus (not yet on primary routes)
- **Focus:** ring-3 on ring token
- **Error:** destructive border and ring variants

### Route shell (signature)

- **TransitionRouter + GSAP:** On route change, `main` fades and shifts ±8px over 0.2–0.25s ease. Respect `prefers-reduced-motion` when extending motion (instant or opacity-only fallback required for new animations).

## Do's and Don'ts

Concrete guardrails aligned with PRODUCT.md anti-references.

### Do:

- **Do** keep About and Contact hire signals above the fold on their routes: name, role, location, clear next step.
- **Do** use ink for readable body copy and reserve whisper for short secondary lines with verified contrast.
- **Do** use serif display for identity headings and sans for UI and supporting text.
- **Do** expand hit areas on nav links (`hit-area-8`) and show visible focus rings on interactive controls.
- **Do** treat GSAP route transitions as the primary motion signature; add reduced-motion alternatives for any new animation.
- **Do** prefer spacing and type rhythm over cards, badges, and decorative wrappers.

### Don't:

- **Don't** use SaaS landing patterns: hero metrics, identical feature card grids, buzzword copy, or gradient accents as decoration.
- **Don't** ship generic AI portfolio tells: cream or sand body backgrounds, gradient text, uppercase eyebrow on every section, or numbered section markers as default scaffolding across the site.
- **Don't** dump a PDF resume on the web: dense bullet walls without hierarchy or scan path.
- **Don't** use border-left or border-right greater than 1px as a colored stripe on lists or callouts.
- **Don't** apply glassmorphism, gradient text, or identical icon+heading+text card grids.
- **Don't** gate content visibility on entrance animations; content must be readable if motion is reduced or paused.
- **Don't** use muted whisper for long paragraphs; bump toward ink when contrast is borderline.
