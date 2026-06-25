import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import { blogKit } from 'astro-blog-kit/integration';
import config from './blog.config';
import { toBlogKitConfig } from 'astro-blog-kit';

const SITE = process.env.SITE || "https://roedwin-afk.github.io";
const BASE = process.env.BASE || "/landing_buildinginsulationpanels/";

export default defineConfig({
  site: SITE,
  base: BASE,
  output: "static",
  integrations: [
    blogKit(toBlogKitConfig(config)),
    sitemap()
  ],
});