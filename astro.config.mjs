import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import { blogKit } from 'astro-blog-kit/integration';
import config from './blog.config';
import { toBlogKitConfig } from 'astro-blog-kit';
import node from '@astrojs/node';

const SITE = process.env.SITE || "https://roedwin-afk.github.io";
const BASE = process.env.BASE || "/landing_buildinginsulationpanels/";

export default defineConfig({
  site: SITE,
  base: BASE,
  output: "static",
  adapter: node({ mode: "standalone" }),
  integrations: [
    blogKit(toBlogKitConfig(config)),
    sitemap()
  ],
});