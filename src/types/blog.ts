import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type BlogPost = {
  _id: string;
  slug: string;
  title: string;
  pubDate: string;
  updatedDate?: string;
  description?: string;
  heroImage?: SanityImageSource;
  body?: PortableTextBlock[];
};

export type BlogPostListItem = Pick<
  BlogPost,
  "slug" | "title" | "pubDate" | "updatedDate"
>;
