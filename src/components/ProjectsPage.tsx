import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Briefcase,
  Calendar,
  ExternalLink,
  FolderGit2,
  Layers,
  Lock,
  Mail,
  MapPin,
} from "lucide-react";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { handleProtectedMailClick } from "../utils/email";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

import autopremiumImg from "../assets/images/autopremium.svg";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.svg";
import image3 from "../assets/images/image3.webp";
import image4 from "../assets/images/image4.avif";
import socialMediaAgentImg from "../assets/images/social-media-agent.svg";

interface ProjectItem {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  url?: string;
  docsUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
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
      title: "AutoPremium (Cloud & DevOps)",
      desc:
        i18n.language === "fr"
          ? "Conception et automatisation de l'infrastructure cloud pour le déploiement d'un catalogue automobile d'entreprise avec Terraform sur AWS. Pratique approfondie de l'Infrastructure as Code (IaC) modulaire, conception de réseaux VPC isolés (sous-réseaux publics/privés, passerelles NAT), conteneurisation avec Docker et sécurisation IAM. Maîtrise du verrouillage d'état distant S3/DynamoDB et rédaction de documentation d'architecture technique pour des déploiements fiables et reproductibles."
          : "Engineered automated cloud infrastructure for an enterprise automotive product catalog using Terraform on AWS. Practiced modular Infrastructure as Code (IaC) design, structuring isolated multi-tier VPC networking (public/private subnets, NAT gateways), Docker containerization, and granular IAM security policies. Mastered remote state locking with S3 and DynamoDB, automated provisioning pipelines, and comprehensive architecture documentation for reproducible production environments.",
      img: autopremiumImg,
      docsUrl: "https://anne7076.github.io/autopremuim-terraform-infra/",
      githubUrl: "https://github.com/anne7076/autopremuim-terraform-infra",
      isPrivate: true,
      tags: ["Terraform", "DevOps", "AWS", "Docker", "IaC", "CI/CD"],
    },
    {
      title: "Social Media AI Agent",
      desc:
        i18n.language === "fr"
          ? "Développement d'un agent IA autonome pour la veille stratégique et l'engagement automatisé sur les réseaux sociaux. Pratique de l'orchestration multi-agents avec LangChain, du filtrage sémantique par embeddings vectoriels et de l'intégration résiliente d'APIs tierces (LinkedIn, X/Twitter, Reddit). Maîtrise de la synthèse d'actualités en temps réel, de l'ingénierie de prompts avancée pour l'adaptation stylistique de contenu et de l'automatisation de flux décisionnels."
          : "Developed an autonomous AI agent to automate research, trend curation, and engagement across major digital networks. Practiced multi-agent orchestration with LangChain, semantic content filtering via vector embeddings, and resilient API integration for LinkedIn, X (Twitter), and Reddit. Mastered real-time trend synthesis, advanced prompt engineering for stylistic voice adaptation, and autonomous decision workflows.",
      img: socialMediaAgentImg,
      url: "https://github.com/anne7076/social-media-agent",
      tags: ["AI Agent", "Python", "LangChain", "LLMs", "Social APIs"],
    },
    {
      title: "E-Commerce Platform",
      desc:
        i18n.language === "fr"
          ? "Architecture d'une solution e-commerce full-stack découplée combinant un frontend Next.js haute performance et un backend Java Spring Boot en microservices REST. Pratique du rendu côté serveur (SSR), de l'optimisation SEO, de l'authentification sans état par JWT avec contrôle d'accès basé sur les rôles (RBAC), et de la persistance relationnelle PostgreSQL/JPA. Maîtrise de la gestion d'état transactionnelle pour les paniers et paiements, ainsi que de la conception de contrats d'API scalables."
          : "Architected a full-stack, decoupled e-commerce solution combining a high-performance Next.js frontend with a Java Spring Boot REST microservice backend. Practiced server-side rendering (SSR), SEO optimization, stateless JWT authentication with role-based access control (RBAC), and relational persistence with PostgreSQL/JPA. Mastered transactional state management for cart and checkout flows, and scalable REST API contract design.",
      img: image4,
      url: "https://github.com/anne7076",
      tags: ["Next.js", "Spring Boot", "Java", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Client Aide Chatbot",
      desc:
        i18n.language === "fr"
          ? "Conception d'un assistant conversationnel d'entreprise basé sur une architecture RAG en Python pour le support client et la FAQ métier. Pratique du parsing documentaire, de l'indexation sémantique en base vectorielle et du guidage des LLMs sur des bases de connaissances internes. Maîtrise des techniques de réduction des hallucinations, de la gestion du contexte conversationnel multi-tours et du déploiement d'APIs d'inférence à faible latence."
          : "Engineered an intelligent enterprise customer support chatbot using Retrieval-Augmented Generation (RAG) in Python. Practiced document parsing, semantic vector indexing, and grounding LLM responses against proprietary company knowledge bases. Mastered hallucination mitigation, multi-turn conversational context management, and deploying low-latency streaming inference APIs.",
      img: image3,
      isPrivate: true,
      tags: ["Python", "LangChain", "RAG", "LLM"],
    },
    {
      title: "Moroccan Constitution Chatbot",
      desc:
        i18n.language === "fr"
          ? "Développement d'un assistant de recherche juridique en Python utilisant le RAG (Retrieval-Augmented Generation) pour explorer et analyser la Constitution marocaine. Pratique de la segmentation hiérarchique de documents juridiques, de la recherche par similarité cosinus avec bases vectorielles et de la génération de réponses sourcées avec citations précises. Maîtrise du NLP appliqué aux textes réglementaires et du contrôle strict des hallucinations pour garantir l'exactitude factuelle."
          : "Developed an AI legal research assistant using Python and Retrieval-Augmented Generation (RAG) to query and analyze the Moroccan Constitution. Practiced hierarchical legal document chunking, cosine similarity retrieval with vector stores, and citation-backed answer generation. Mastered domain-specific NLP on regulatory texts, bilingual retrieval, and prompt constraints to eliminate hallucinations and ensure factual accuracy.",
      img: image2,
      url: "https://github.com/anne7076",
      tags: ["Python", "GenAI", "RAG", "NLP"],
    },
    {
      title: "Loan Data Analysis",
      desc:
        i18n.language === "fr"
          ? "Conduite d'une analyse exploratoire de données (EDA) et modélisation de facteurs prédictifs sur le jeu de données financières de prêts Lending Club en Python. Pratique du nettoyage de données volumineuses, de l'imputation de valeurs aberrantes, de tests d'hypothèses statistiques et de la visualisation multidimensionnelle avec Pandas et Seaborn. Maîtrise de l'évaluation des risques de crédit et de l'identification des variables clés impactant le défaut de paiement et les taux d'intérêt."
          : "Conducted an extensive exploratory data analysis (EDA) and predictive feature study on large-scale Lending Club financial loan records using Python. Practiced large-scale data cleaning, outlier imputation, statistical hypothesis testing, and multidimensional visualization with Pandas and Seaborn. Mastered credit risk assessment and the identification of primary variables driving loan default probability and interest rate variance.",
      img: image1,
      url: "https://github.com/anne7076/Loan-Analysis",
      tags: ["Python", "Data Analysis", "EDA", "Statistics"],
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

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "auto",
                    flexWrap: "wrap",
                  }}
                >
                  {proj.docsUrl && (
                    <a
                      href={proj.docsUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: "var(--text-primary)",
                        color: "var(--bg-primary)",
                        padding: "10px 20px",
                        borderRadius: "50px",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <BookOpen size={15} />
                      {t("view_docs")}
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: "transparent",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border-color)",
                        padding: "10px 18px",
                        borderRadius: "50px",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <GitHubIcon size={16} />
                      {t("view_terraform")}
                    </a>
                  )}

                  {proj.url && !proj.docsUrl && (
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
                      }}
                    >
                      {t("visit_link")}
                      <ExternalLink size={16} />
                    </a>
                  )}

                  {proj.isPrivate && !proj.githubUrl && !proj.docsUrl && (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "var(--bg-primary)",
                        color: "var(--text-secondary)",
                        padding: "11px 18px",
                        borderRadius: "50px",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        border: "1px solid var(--border-color)",
                      }}
                    >
                      <Lock size={14} />
                      {t("private_project")}
                    </span>
                  )}
                </div>
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
