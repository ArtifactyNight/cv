import type { CollectionEntry } from "astro:content";

export function sortPostsByDate(
  posts: CollectionEntry<"blog">[],
): CollectionEntry<"blog">[] {
  return [...posts].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

export type AdjacentPosts = {
  newer: CollectionEntry<"blog"> | null;
  older: CollectionEntry<"blog"> | null;
};

export function getAdjacentPosts(
  posts: CollectionEntry<"blog">[],
  currentId: string,
): AdjacentPosts {
  const sorted = sortPostsByDate(posts);
  const index = sorted.findIndex((post) => post.id === currentId);

  if (index === -1) {
    return { newer: null, older: null };
  }

  return {
    newer: index > 0 ? sorted[index - 1] : null,
    older: index < sorted.length - 1 ? sorted[index + 1] : null,
  };
}
