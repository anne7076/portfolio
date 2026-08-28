import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../ThemeContext';
import { Moon, Sun, Languages, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import avatar from '../assets/images/temp.jpeg';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isProjectsPage = location.pathname.startsWith('/projects');

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Link 
          to="/" 
          className="brand" 
          style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <img 
            src={avatar} 
            alt="Anne Mahamadou" 
            style={{ 
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '2px solid var(--border-color)'
            }} 
          />
          <span style={{ fontSize: '1.25rem', letterSpacing: '-0.02em' }}>ANNE M.</span>
        </Link>

        {isProjectsPage && (
          <Link 
            to="/" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontSize: '0.85rem', 
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: '50px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-bento)',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={15} />
            {t('back_to_home')}
          </Link>
        )}
      </div>
      
      <div className="nav-controls">
        {!isProjectsPage && (
          <Link to="/projects" className="nav-link-btn" style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: '50px',
            padding: '8px 16px',
            fontSize: '0.9rem',
            fontWeight: 500,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'all 0.2s ease'
          }}>
            {t('nav_projects')}
          </Link>
        )}
        <button onClick={toggleLanguage} className="lang-btn" aria-label="Toggle language">
          <Languages size={18} />
          {i18n.language ? i18n.language.substring(0, 2).toUpperCase() : 'EN'}
        </button>
        <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
