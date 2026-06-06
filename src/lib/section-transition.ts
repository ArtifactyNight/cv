import { animate, eases } from "animejs";

const REVEAL_DURATION = 1100;
const REVEAL_STAGGER = 160;
const REVEAL_EASE = eases.outCubic;

let observer: IntersectionObserver | null = null;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function markRevealed(section: HTMLElement) {
  section.setAttribute("data-section-revealed", "");
  section.style.opacity = "";
  section.style.transform = "";
}

function revealAllSections() {
  for (const section of document.querySelectorAll("main section")) {
    markRevealed(section as HTMLElement);
  }
}

function revealSection(section: HTMLElement, staggerIndex = 0) {
  animate(section, {
    opacity: { from: 0, to: 1 },
    translateY: { from: "0.75rem", to: 0 },
    duration: REVEAL_DURATION,
    delay: staggerIndex * REVEAL_STAGGER,
    ease: REVEAL_EASE,
    complete: () => markRevealed(section),
  });
}

export function initSectionTransitions() {
  observer?.disconnect();
  observer = null;

  document.documentElement.classList.remove("section-transitions-ready");

  if (prefersReducedMotion()) {
    revealAllSections();
    return;
  }

  const sections = [
    ...document.querySelectorAll("main section:not([data-section-revealed])"),
  ] as HTMLElement[];
  if (!sections.length) return;

  sections.forEach((section, index) => {
    section.dataset.sectionIndex = String(index);
  });

  document.documentElement.classList.add("section-transitions-ready");

  observer = new IntersectionObserver(
    (entries) => {
      const batch = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target as HTMLElement)
        .sort(
          (a, b) =>
            Number(a.dataset.sectionIndex) - Number(b.dataset.sectionIndex),
        );

      for (const [staggerIndex, section] of batch.entries()) {
        observer?.unobserve(section);
        revealSection(section, staggerIndex);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
  );

  for (const section of sections) {
    observer.observe(section);
  }
}
