import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityClient } from "sanity:client";
import { schemaTypes } from "./src/sanity/schemaTypes";

const { projectId, dataset } = sanityClient.config();

export default defineConfig({
  name: "default",
  title: "nightz.me",
  projectId: projectId!,
  dataset: dataset!,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
