export const languages = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
};

export const defaultLang = "fr";

export const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.journey": "Parcours",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "nav.portal": "Retour au Portail",
    "home.welcome": "Bienvenue",
    "home.subtitle": "Ingénieur créatif & Développeur Fullstack",
    "contact.title": "Discutons ensemble",
    "contact.submit": "Envoyer le message",
    "projects.title": "Mes Réalisations",
    "project.more": "Plus d'infos",
    "journey.title": "Mon Parcours",
    "footer.rights": "Tous droits réservés",
    "footer.legal": "Mentions légales",
    "footer.contact": "Contact",
  },
  en: {
    "nav.home": "Home",
    "nav.journey": "Journey",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.portal": "Back to Portal",
    "home.welcome": "Welcome",
    "home.subtitle": "Creative Engineer & Fullstack Developer",
    "contact.title": "Let's Chat",
    "contact.submit": "Send Message",
    "projects.title": "My Work",
    "project.more": "More Info",
    "journey.title": "My Journey",
    "footer.rights": "All rights reserved",
    "footer.legal": "Legal",
    "footer.contact": "Contact",
  },
  de: {
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.twitter": "Twitter",
    "footer.rights": "Alle Rechte vorbehalten",
    "footer.legal": "Rechtliches",
    "footer.contact": "Kontakt",
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
