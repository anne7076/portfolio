import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Briefcase,
  Code2,
  Mail,
  Server,
  Wrench,
} from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import avatar from "../assets/images/temp.jpeg";
import { handleProtectedMailClick } from "../utils/email";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

export const BentoGrid: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="bento-grid">{children}</div>;
};

export const BentoCard: React.FC<{
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ id, className = "", children, delay = 0, style }) => {
  return (
    <motion.div
      id={id}
      className={`bento-card ${className}`}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
    >
      {children}
    </motion.div>
  );
};

export const AboutBento: React.FC = () => {
  const { t } = useTranslation();

  const focusAreas = [
    t("about_focus_1"),
    t("about_focus_2"),
    t("about_focus_3"),
  ];

  return (
    <BentoCard
      className="col-span-2 row-span-2"
      delay={0.05}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <img
          src={avatar}
          alt="ANNE Mahamadou"
          style={{
            width: "68px",
            height: "68px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid var(--border-color)",
            boxShadow: "var(--shadow-sm)",
          }}
        />
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <h3
              style={{
                fontSize: "1.45rem",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              ANNE Mahamadou
            </h3>
            <BadgeCheck size={18} color="var(--text-secondary)" />
          </div>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.92rem",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {t("author_title")}
          </p>
        </div>
      </div>

      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "var(--text-secondary)",
          marginBottom: "20px",
          flexGrow: 1,
        }}
      >
        {t("about_desc")}
      </p>

      {/* Focus Area Tags */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "20px",
        }}
      >
        {focusAreas.map((area, idx) => (
          <span
            key={idx}
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              padding: "4px 10px",
              borderRadius: "50px",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            {area}
          </span>
        ))}
      </div>

      {/* Socials & Availability badge */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          borderTop: "1px solid var(--border-color)",
          paddingTop: "16px",
          marginTop: "auto",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "0.8rem",
            color: "var(--text-secondary)",
            background: "var(--bg-primary)",
            padding: "6px 12px",
            borderRadius: "50px",
            border: "1px solid var(--border-color)",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#10b981",
            }}
          ></span>
          Available for Opportunities
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <a
            href="https://github.com/anne7076"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              transition: "all 0.2s ease",
            }}
          >
            <GitHubIcon size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/anne-hamet"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              transition: "all 0.2s ease",
            }}
          >
            <LinkedInIcon size={16} />
          </a>
        </div>
      </div>
    </BentoCard>
  );
};

export const SkillsBento: React.FC = () => {
  const { t } = useTranslation();
  const skills = [
    "TypeScript",
    "JavaScript",
    "Python",
    "Java",
    "Spring Boot",
    "SQL",
    "MongoDB",
    "React",
    "Docker",
    "AWS",
    "LangChain",
    "OpenAI",
  ];

  return (
    <BentoCard className="col-span-2" delay={0.1}>
      <Code2 size={24} style={{ marginBottom: "16px" }} />
      <h3>{t("skills_title")}</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "6px 12px",
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </BentoCard>
  );
};

export const ProjectsBento: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BentoCard className="col-span-2" delay={0.15}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Briefcase size={28} style={{ marginBottom: "16px" }} />
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "50px",
            background: "var(--bg-primary)",
            border: "1px solid var(--border-color)",
            color: "var(--text-secondary)",
          }}
        >
          5 Projects • 2 Roles
        </span>
      </div>
      <h3>{t("projects_bento_title")}</h3>
      <p
        style={{
          marginBottom: "24px",
          flexGrow: 1,
          color: "var(--text-secondary)",
          lineHeight: 1.5,
        }}
      >
        {t("projects_bento_desc")}
      </p>
      <Link
        to="/projects"
        style={{
          marginTop: "auto",
          alignSelf: "flex-start",
          background: "var(--text-primary)",
          color: "var(--bg-primary)",
          padding: "12px 24px",
          borderRadius: "50px",
          border: "none",
          fontWeight: 600,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          textDecoration: "none",
          transition: "all 0.2s ease",
        }}
      >
        {t("view_project")}
        <ArrowUpRight size={16} />
      </Link>
    </BentoCard>
  );
};

export const ExpertiseBento: React.FC = () => {
  const { t } = useTranslation();
  return (
    <BentoCard className="col-span-4" delay={0.1}>
      <h3 style={{ marginBottom: "24px" }}>{t("expertise_title")}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
        }}
      >
        <div>
          <Server size={24} style={{ marginBottom: "16px" }} />
          <h4
            style={{
              marginBottom: "8px",
              fontFamily: "Inter",
              fontWeight: 600,
            }}
          >
            Backend Development
          </h4>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Built robust and scalable backend systems using Java and Spring
            Boot, such as real-world e-commerce applications, ensuring efficient
            data management.
          </p>
        </div>
        <div>
          <Wrench size={24} style={{ marginBottom: "16px" }} />
          <h4
            style={{
              marginBottom: "8px",
              fontFamily: "Inter",
              fontWeight: 600,
            }}
          >
            DevOps & Automation
          </h4>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Help clients set up DevOps testing, CI/CD pipelines, and deployment
            automation to support successful Go-Live.
          </p>
        </div>
        <div>
          <Bot size={24} style={{ marginBottom: "16px" }} />
          <h4
            style={{
              marginBottom: "8px",
              fontFamily: "Inter",
              fontWeight: 600,
            }}
          >
            GenAI & LLM
          </h4>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            Experience building enterprise grade GenAI-enabled solutions to
            enhance user experience. Strong proficiency in LLMs, vector
            databases, and GenAI frameworks.
          </p>
        </div>
      </div>
    </BentoCard>
  );
};

export const ContactBento: React.FC = () => {
  const { t } = useTranslation();
  return (
    <BentoCard
      id="contact-section"
      className="col-span-4"
      delay={0.2}
      style={{
        alignItems: "center",
        textAlign: "center",
        padding: "64px 32px",
        background: "var(--bg-bento)",
        border: "1px solid var(--border-color)",
        color: "var(--text-primary)",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
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

      <h3 style={{ fontSize: "2.2rem", marginBottom: "12px" }}>
        {t("contact_title")}
      </h3>
      <p
        style={{
          color: "var(--text-secondary)",
          maxWidth: "540px",
          marginBottom: "32px",
          fontSize: "1.05rem",
          lineHeight: 1.6,
        }}
      >
        {t("contact_desc")}
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleProtectedMailClick}
          style={{
            background: "var(--text-primary)",
            color: "var(--bg-primary)",
            padding: "14px 36px",
            borderRadius: "50px",
            fontSize: "1rem",
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            transition: "transform 0.2s ease",
          }}
        >
          {t("contact_title")}
        </button>
      </div>

      {/* Social links row */}
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
    </BentoCard>
  );
};
