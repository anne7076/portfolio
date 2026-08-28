import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "OPEN TO OPPORTUNITIES",
      headline_part1: "Architecting scalable backends & ",
      headline_highlight: "agentic AI ",
      headline_part2: "for real-world impact",
      description:
        "AI & Software Engineer bridging enterprise-grade distributed systems and modern LLM capabilities. From high-concurrency Spring Boot architectures to production RAG pipelines, I turn complex engineering challenges into robust, performant digital products.",
      author_name: "ANNE Mahamadou",
      author_title: "AI & Software Engineer",
      nav_home: "Home",
      nav_about: "About",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_contact: "Contact",
      btn_contact: "Get in Touch",
      btn_about: "About Me",
      about_title: "About Me",
      about_desc:
        "I'm an AI & Software Engineer fascinated by the intersection of distributed systems and artificial intelligence. Whether architecting high-throughput backends or orchestrating enterprise RAG pipelines with LLMs, I thrive on turning ambiguous, complex problems into robust, production-ready digital products. Always curious, constantly building, and driven by software that creates real impact.",
      about_focus_1: "Production GenAI & RAG",
      about_focus_2: "Robust Backend Architectures",
      about_focus_3: "Full-Stack Engineering",
      skills_title: "Tech Stack",
      expertise_title: "Expertise",
      projects_title: "Featured Projects",
      contact_title: "Let's Connect",
      contact_desc:
        "Got a project, vision, or engineering opportunity? Let's collaborate and turn ambitious ideas into reality.",
      view_project: "View Projects & Career",
      projects_bento_title: "Projects & Career",
      projects_bento_desc:
        "Explore my portfolio of applications, GenAI chatbots, and professional career history.",
      career_title: "Career History",
      career_subtitle: "Professional engineering and AI experience.",
      projects_page_badge: "PORTFOLIO & JOURNEY",
      projects_page_title: "Featured Projects & Career History",
      projects_page_desc:
        "A comprehensive showcase of software engineering systems, generative AI applications, and professional milestones.",
      back_to_home: "Back to Home",
      all_projects_heading: "Featured Projects",
      visit_link: "View Project",
      private_project: "Enterprise Project (Private)",
      view_docs: "View Docs",
      view_terraform: "Terraform Repo",
      private_catalog_note: "Private Catalog",
      footer_tagline: "A portfolio designed & built by Anne Mahamadou",
    },
  },
  fr: {
    translation: {
      greeting: "OUVERT AUX OPPORTUNITÉS",
      headline_part1: "Architecturer des backends évolutifs & ",
      headline_highlight: "l'IA agentic ",
      headline_part2: "au service de l'impact réel",
      description:
        "Ingénieur IA & Logiciel à la croisée des architectures distribuées d'entreprise et des capacités avancées des LLMs. Des backends Spring Boot haute performance aux pipelines RAG en production, je transforme des défis complexes en solutions logicielles robustes et mesurables.",
      author_name: "ANNE Mahamadou",
      author_title: "Ingénieur IA & Logiciel",
      nav_home: "Accueil",
      nav_about: "À Propos",
      nav_projects: "Projets",
      nav_skills: "Compétences",
      nav_contact: "Contact",
      btn_contact: "Me Contacter",
      btn_about: "À Propos de Moi",
      about_title: "À Propos",
      about_desc:
        "Ingénieur IA & Logiciel, je suis passionné par la convergence entre architectures distribuées et intelligence artificielle. Qu'il s'agisse de concevoir des backends résilients ou d'orchestrer des pipelines RAG avancés avec des LLMs, mon moteur est de transformer des défis complexes en solutions logicielles robustes et prêtes pour la production. Bâtisseur dans l'âme, curieux et guidé par l'impact réel.",
      about_focus_1: "GenAI & Systèmes RAG",
      about_focus_2: "Architectures Backend Robustes",
      about_focus_3: "Ingénierie Full-Stack",
      skills_title: "Technologies",
      expertise_title: "Expertise",
      projects_title: "Projets Récents",
      contact_title: "Restons en Contact",
      contact_desc:
        "Vous avez un projet, une vision ou une opportunité d'ingénierie ? Collaborons ensemble pour donner vie à vos idées.",
      view_project: "Voir Projets & Parcours",
      projects_bento_title: "Projets & Parcours",
      projects_bento_desc:
        "Découvrez mon portfolio d'applications, chatbots GenAI et mon parcours professionnel.",
      career_title: "Parcours Professionnel",
      career_subtitle:
        "Expériences professionnelles en ingénierie logicielle et intelligence artificielle.",
      projects_page_badge: "PORTFOLIO & PARCOURS",
      projects_page_title: "Projets Réalisés & Parcours Professionnel",
      projects_page_desc:
        "Une présentation détaillée de mes projets en ingénierie logicielle, applications d'IA et étapes professionnelles.",
      back_to_home: " Retour à l'accueil",
      all_projects_heading: "Projets Réalisés",
      visit_link: "Voir le Projet",
      private_project: "Projet d'entreprise (Privé)",
      view_docs: "Documentation",
      view_terraform: "Code Terraform",
      private_catalog_note: "Catalogue Privé",
      footer_tagline: "Un portfolio conçu et développé par Anne Mahamadou",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
