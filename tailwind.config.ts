import type { Config } from "tailwindcss";

import { cpPreset } from "./src/lib/tailwindutils/cp-preset";

const config = {
  presets: [cpPreset],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
} satisfies Config;

export default config;
