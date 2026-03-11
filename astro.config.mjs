// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node"; // Importation de l'adaptateur Node
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server', // Active le mode Server-Side Rendering (SSR)
  adapter: node({
    mode: "standalone", // Génère un serveur prêt à l'emploi
  }),

  integrations: [mdx(), react()],

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
}); 