import type { BlogPostListItem } from "../types/blog";

export function sortPostsByDate(
  posts: BlogPostListItem[],
): BlogPostListItem[] {
  return [...posts].sort(
    (a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf(),
  );
}

export type AdjacentPosts = {
  newer: BlogPostListItem | null;
  older: BlogPostListItem | null;
};

export function getAdjacentPosts(
  posts: BlogPostListItem[],
  currentSlug: string,
): AdjacentPosts {
  const sorted = sortPostsByDate(posts);
  const index = sorted.findIndex((post) => post.slug === currentSlug);

  if (index === -1) {
    return { newer: null, older: null };
  }

  return {
    newer: index > 0 ? sorted[index - 1] : null,
    older: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
}
