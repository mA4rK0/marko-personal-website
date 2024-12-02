// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import tunnel from "astro-tunnel";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), tunnel(), react()],
});