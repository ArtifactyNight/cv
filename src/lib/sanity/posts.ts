import type { BlogPost, BlogPostListItem } from "../../types/blog";
import { loadQuery } from "../load-query";
import { postBySlugQuery, postsListQuery } from "./queries";

export async function getAllPosts(): Promise<BlogPostListItem[]> {
  const { data } = await loadQuery<BlogPostListItem[]>({
    query: postsListQuery,
  });
  return data ?? [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data } = await loadQuery<BlogPost | null>({
    query: postBySlugQuery,
    params: { slug },
  });
  return data ?? null;
}
