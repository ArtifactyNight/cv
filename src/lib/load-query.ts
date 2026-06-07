import type { QueryParams } from "sanity";
import { sanityClient } from "sanity:client";

export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  const data = await sanityClient.fetch<QueryResponse>(query, params ?? {}, {
    useCdn: false,
  });

  return { data };
}
