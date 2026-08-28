import React from "react";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { handleProtectedMailClick } from "../utils/email";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        padding: "48px 0 64px 0",
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h4
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.25rem",
              marginBottom: "4px",
            }}
          >
            ANNE Mahamadou
          </h4>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
            {t("author_title")}
          </p>
        </div>

        {/* Social Links */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a
            href="https://github.com/anne7076"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "var(--bg-bento)",
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
            aria-label="LinkedIn Profile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "var(--bg-bento)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              transition: "all 0.2s ease",
            }}
          >
            <LinkedInIcon size={18} />
          </a>
          <button
            onClick={handleProtectedMailClick}
            aria-label="Send Email"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "var(--bg-bento)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Mail size={18} />
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          borderTop: "1px solid var(--border-color)",
          paddingTop: "24px",
          fontSize: "0.85rem",
          color: "var(--text-secondary)",
        }}
      >
        <p>{t("footer_tagline")}</p>
        <p>© {currentYear} • All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
