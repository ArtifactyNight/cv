const DEFAULT_MAX_LENGTH = 160;

export function excerptFromBody(
  body: string,
  maxLength = DEFAULT_MAX_LENGTH,
): string {
  const text = body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_~`>#-]/g, "")
    .replace(/\n+/g, " ")
    .trim();

  if (!text) return "";

  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  const end = lastSpace > maxLength * 0.6 ? lastSpace : maxLength;
  return `${truncated.slice(0, end).trimEnd()}…`;
}
