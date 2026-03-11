import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node"; // Importation de l'adaptateur Node
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  // Suppression de l'adaptateur Vercel
  output: 'static', // Assure la génération de fichiers HTML statiques
  
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