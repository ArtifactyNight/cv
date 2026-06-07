export const postsListQuery = `*[_type == "post"] | order(pubDate desc) {
  _id,
  title,
  "slug": slug.current,
  pubDate,
  updatedDate
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  pubDate,
  updatedDate,
  description,
  heroImage {
    ...,
    asset->
  },
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  }
}`;
