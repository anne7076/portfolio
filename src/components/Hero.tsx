import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import { handleProtectedMailClick } from '../utils/email';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const handleContactClick = (e: React.MouseEvent) => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleProtectedMailClick(e);
    }
  };

  const handleAboutClick = () => {
    const grid = document.querySelector('.bento-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <motion.div 
        className="greeting"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t('greeting')}
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {t('headline_part1')}
        <span className="highlight">{t('headline_highlight')}</span>
        <br />
        {t('headline_part2')}
      </motion.h1>

      <motion.p 
        className="desc"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {t('description')}
      </motion.p>

      <motion.div 
        className="cta-group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}
      >
        <button onClick={handleContactClick} className="btn-primary">
          {t('btn_contact')}
        </button>
        <button onClick={handleAboutClick} className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          {t('btn_about')}
          <ArrowDown size={16} />
        </button>

        <div style={{ display: 'flex', gap: '12px', marginLeft: '8px' }}>
          <a 
            href="https://github.com/anne7076" 
            target="_blank" 
            rel="noreferrer"
            className="btn-secondary"
            aria-label="GitHub Profile"
            style={{
              padding: '14px',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <GitHubIcon size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/anne-hamet" 
            target="_blank" 
            rel="noreferrer"
            className="btn-secondary"
            aria-label="LinkedIn Profile"
            style={{
              padding: '14px',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <LinkedInIcon size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
