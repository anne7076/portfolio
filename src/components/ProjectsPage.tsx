import { motion } from "framer-motion";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  ExternalLink,
  FolderGit2,
  Layers,
  Mail,
  MapPin,
} from "lucide-react";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { handleProtectedMailClick } from "../utils/email";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.svg";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.avif";
import image5 from "../assets/images/image5.jpg";

interface ProjectItem {
  title: string;
  desc: string;
  img: string;
  url: string;
  tags: string[];
}

interface CareerItem {
  period: string;
  role: string;
  location: string;
  description: string;
  skills: string[];
}

const ProjectsPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const projects: ProjectItem[] = [
    {
      title: "Loan Data Analysis",
      desc:
        i18n.language === "fr"
          ? "Analyse approfondie du jeu de données de prêts Lending Club en Python, mettant en évidence les facteurs clés influençant l'approbation des prêts et les taux d'intérêt."
          : "Conducted a comprehensive analysis of the loan dataset from Lending Club using Python, uncovering key features that influence loan approval and the interest rates.",
      img: image1,
      url: "https://github.com/anne7076/Loan-Analysis",
      tags: ["Python", "Data Analysis", "EDA", "Statistics"],
    },
    {
      title: "Moroccan Constitution Chatbot",
      desc:
        i18n.language === "fr"
          ? "Conception d'un chatbot basé sur la technologie RAG (Retrieval-Augmented Generation) en Python pour répondre aux questions et fournir des analyses sur la constitution marocaine."
          : "Created a chatbot based on Retrieval-Augmented Generation (RAG) technology using Python. Designed to answer questions and provide insights about constitution articles.",
      img: image2,
      url: "https://yujisatojr.itch.io/highspeedchase",
      tags: ["Python", "GenAI", "RAG", "NLP"],
    },
    {
      title: "Client Aide Chatbot",
      desc:
        i18n.language === "fr"
          ? "Développement d'un assistant conversationnel RAG en Python pour assister les clients sur les produits, services et politiques d'entreprise avec des réponses précises en temps réel."
          : "Developed a chatbot using Retrieval-Augmented Generation (RAG) technology in Python to assist clients with inquiries about products, services, and company policies.",
      img: image3,
      url: "https://yujisatojr.itch.io/spacecraft",
      tags: ["Python", "LangChain", "RAG", "LLM"],
    },
    {
      title: "E-Commerce Platform",
      desc:
        i18n.language === "fr"
          ? "Plateforme e-commerce moderne conçue avec React en frontend et Spring Boot en backend : authentification, catalogue, panier d'achat et paiement sécurisé."
          : "Designed and developed an e-commerce platform using React for the frontend and Spring-boot for the backend with authentication, product listings, cart, and payment.",
      img: image4,
      url: "https://www.datumlearn.com/",
      tags: ["React", "Spring Boot", "Java", "SQL"],
    },
    {
      title: "Pharmacy Management System",
      desc:
        i18n.language === "fr"
          ? "Système complet de gestion de pharmacie en Java : gestion des stocks, suivi des ordonnances et dossiers patients pour fluidifier les opérations officinales."
          : "Developed a comprehensive pharmacy management system using Java, featuring inventory management, prescription handling, and patient records.",
      img: image5,
      url: "https://www.datumlearn.com/",
      tags: ["Java", "Inventory System", "Database", "OOP"],
    },
  ];

  const careerHistory: CareerItem[] = [
    {
      period: "2025 - 2026",
      role:
        i18n.language === "fr"
          ? "Stagiaire Ingénieur Logiciel"
          : "Software Engineer Intern",
      location: "Oujda, Morocco",
      description:
        i18n.language === "fr"
          ? "Développement full-stack, conception d'APIs REST performantes et optimisation de l'expérience utilisateur."
          : "Full-stack Development, API Development, and modern user experience engineering.",
      skills: ["Full-stack", "REST APIs", "Spring Boot", "React", "TypeScript"],
    },
    {
      period: "2024 - 2025",
      role:
        i18n.language === "fr"
          ? "Stagiaire Ingénieur IA"
          : "AI Engineer Intern",
      location: "Bamako, Mali",
      description:
        i18n.language === "fr"
          ? "Intégration de modèles ChatGPT, entraînement et fine-tuning de modèles d'IA et traitement automatique du langage naturel (NLP)."
          : "ChatGPT Integration, AI Model Training, and Natural Language Processing (NLP) solutions.",
      skills: ["Python", "ChatGPT / LLMs", "NLP", "RAG", "Model Training"],
    },
  ];

  return (
    <div className="projects-page" style={{ paddingBottom: "60px" }}>
      {/* Top Header */}
      <motion.div
        className="hero-section"
        style={{ padding: "40px 0 60px 0" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            textDecoration: "none",
            marginBottom: "32px",
            fontWeight: 500,
            padding: "8px 16px",
            borderRadius: "50px",
            border: "1px solid var(--border-color)",
            background: "var(--bg-bento)",
            transition: "all 0.2s ease",
          }}
        >
          <ArrowLeft size={18} />
          {t("back_to_home")}
        </Link>

        <div className="greeting" style={{ marginBottom: "16px" }}>
          <FolderGit2 size={16} />
          {t("projects_page_badge")}
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            marginBottom: "24px",
          }}
        >
          {t("projects_page_title")}
        </h1>

        <p className="desc" style={{ maxWidth: "750px", marginBottom: "0" }}>
          {t("projects_page_desc")}
        </p>
      </motion.div>

      {/* Career History Section */}
      <motion.section
        style={{ marginBottom: "80px" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              background: "var(--bg-bento)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "10px",
              display: "flex",
            }}
          >
            <Briefcase size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: "2rem", margin: 0 }}>{t("career_title")}</h2>
            <p
              style={{
                color: "var(--text-secondary)",
                margin: 0,
                fontSize: "0.95rem",
              }}
            >
              {t("career_subtitle")}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {careerHistory.map((item, idx) => (
            <motion.div
              key={idx}
              className="bento-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: "var(--shadow-lg)" }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    padding: "4px 12px",
                    borderRadius: "50px",
                  }}
                >
                  <Calendar size={14} />
                  {item.period}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <MapPin size={14} />
                  {item.location}
                </span>
              </div>

              <h3 style={{ fontSize: "1.35rem", marginBottom: "8px" }}>
                {item.role}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                  flexGrow: 1,
                }}
              >
                {item.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.8rem",
                      padding: "4px 10px",
                      borderRadius: "50px",
                      background: "var(--bg-primary)",
                      border: "1px solid var(--border-color)",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Showcase Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              background: "var(--bg-bento)",
              border: "1px solid var(--border-color)",
              borderRadius: "12px",
              padding: "10px",
              display: "flex",
            }}
          >
            <Layers size={24} />
          </div>
          <div>
            <h2 style={{ fontSize: "2rem", margin: 0 }}>
              {t("all_projects_heading")}
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                margin: 0,
                fontSize: "0.95rem",
              }}
            >
              {t("projects_page_desc")}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bento-card"
              style={{
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }}
            >
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden",
                  background: "var(--bg-primary)",
                  position: "relative",
                }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              <div
                style={{
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "14px",
                  }}
                >
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        padding: "3px 10px",
                        borderRadius: "50px",
                        background: "var(--bg-primary)",
                        border: "1px solid var(--border-color)",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>
                  {proj.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "24px",
                    flexGrow: 1,
                  }}
                >
                  {proj.desc}
                </p>

                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    background: "var(--text-primary)",
                    color: "var(--bg-primary)",
                    padding: "12px 20px",
                    borderRadius: "50px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "transform 0.2s ease",
                    marginTop: "auto",
                  }}
                >
                  {t("visit_link")}
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Bottom Connection Bento Card (Theme matched, non-inverted) */}
      <motion.div
        className="bento-card"
        style={{
          marginTop: "80px",
          textAlign: "center",
          padding: "64px 32px",
          background: "var(--bg-bento)",
          border: "1px solid var(--border-color)",
          color: "var(--text-primary)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "var(--bg-primary)",
            border: "1px solid var(--border-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Mail size={26} />
        </div>
        <h3 style={{ fontSize: "2rem", marginBottom: "12px" }}>
          {t("contact_title")}
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "500px",
            marginBottom: "32px",
          }}
        >
          {t("contact_desc")}
        </p>
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleProtectedMailClick}
            style={{
              background: "var(--text-primary)",
              color: "var(--bg-primary)",
              padding: "14px 28px",
              borderRadius: "50px",
              fontSize: "0.95rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {t("contact_title")}
          </button>
          <Link
            to="/"
            style={{
              background: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--border-color)",
              padding: "14px 28px",
              borderRadius: "50px",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {t("back_to_home")}
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "28px",
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com/anne7076"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              transition: "all 0.2s ease",
            }}
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/anne-hamet"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              transition: "all 0.2s ease",
            }}
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
