import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

export default defineConfig({
  // Suppression de l'adaptateur Vercel
  output: 'static', // Assure la génération de fichiers HTML statiques
  
  vite: {
    plugins: [tailwindcss()],
  },

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
