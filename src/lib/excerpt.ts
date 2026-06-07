import type { PortableTextBlock } from "@portabletext/types";

const DEFAULT_MAX_LENGTH = 160;

function blockToText(block: PortableTextBlock): string {
  if (block._type !== "block" || !Array.isArray(block.children)) {
    return "";
  }

  return block.children
    .map((child) => ("text" in child ? String(child.text) : ""))
    .join("");
}

export function excerptFromPortableText(
  blocks: PortableTextBlock[] | undefined,
  maxLength = DEFAULT_MAX_LENGTH,
): string {
  if (!blocks?.length) return "";

  const text = blocks
    .map(blockToText)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return truncateText(text, maxLength);
}

export function excerptFromDescription(
  description: string | undefined,
  blocks: PortableTextBlock[] | undefined,
  maxLength = DEFAULT_MAX_LENGTH,
): string {
  if (description?.trim()) {
    return truncateText(description.trim(), maxLength);
  }

  return excerptFromPortableText(blocks, maxLength);
}

function truncateText(text: string, maxLength: number): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  const end = lastSpace > maxLength * 0.6 ? lastSpace : maxLength;
  return `${truncated.slice(0, end).trimEnd()}…`;
}
