import { animate, eases, type JSAnimation } from "animejs";

const ENTER_DURATION = 2000;
const ENTER_EASE = eases.outExpo;

let leftAnim: JSAnimation | null = null;
let rightAnim: JSAnimation | null = null;
let hasPlayed = false;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function readTimeMs(raw: string, fallback: number) {
  const value = raw.trim();
  if (!value) return fallback;

  if (value.endsWith("ms")) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
  }

  if (value.endsWith("s")) {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed * 1000 : fallback;
  }

  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function readEnterDuration(container: HTMLElement) {
  const raw = getComputedStyle(container).getPropertyValue("--adam-enter-duration");
  const parsed = readTimeMs(raw, ENTER_DURATION);
  return parsed > 0 ? parsed : ENTER_DURATION;
}

function readEnterDelay(container: HTMLElement) {
  const raw = getComputedStyle(container).getPropertyValue("--adam-enter-delay");
  return readTimeMs(raw, 0);
}

function readEase(container: HTMLElement) {
  const raw = getComputedStyle(container).getPropertyValue("--adam-ease").trim();
  if (!raw) return ENTER_EASE;

  const named = raw as keyof typeof eases;
  if (named in eases && typeof eases[named] === "function") {
    return eases[named];
  }

  return raw;
}

function showFinalState(left: Element, right: Element) {
  for (const hand of [left, right]) {
    const el = hand as HTMLElement;
    el.style.opacity = "1";
    el.style.transform = "translate(0, 0)";
  }
}

function getHands() {
  const container = document.querySelector(".adam-hands");
  if (!container) return null;

  const left = container.querySelector(".adam-hand--left");
  const right = container.querySelector(".adam-hand--right");
  if (!left || !right) return null;

  return { container: container as HTMLElement, left, right };
}

export function initAdamHands() {
  const hands = getHands();
  if (!hands) return;

  if (hasPlayed) {
    showFinalState(hands.left, hands.right);
    return;
  }

  hasPlayed = true;

  if (prefersReducedMotion()) {
    showFinalState(hands.left, hands.right);
    return;
  }

  const duration = readEnterDuration(hands.container);
  const delay = readEnterDelay(hands.container);
  const ease = readEase(hands.container);
  const params = { duration, delay, ease };

  leftAnim = animate(hands.left, {
    ...params,
    translateX: { from: "-100%" },
    translateY: { from: "100%" },
    opacity: { from: 0, to: 1 },
  });

  rightAnim = animate(hands.right, {
    ...params,
    translateX: { from: "100%" },
    translateY: { from: "-100%" },
    opacity: { from: 0, to: 1 },
  });
}
