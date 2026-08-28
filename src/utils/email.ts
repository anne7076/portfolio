import React from 'react';

/**
 * Obfuscated email parts to prevent automated scrapers and web crawlers
 * from harvesting the email address from static HTML.
 */
const EMAIL_PARTS = ['anne.mahamadou.ensao', 'gmail.com'];

export const getProtectedEmail = (): string => {
  return `${EMAIL_PARTS[0]}@${EMAIL_PARTS[1]}`;
};

/**
 * Handles clicking the email action button, opening the default mail client
 * in a new window/tab so the current portfolio page is never overridden.
 */
export const handleProtectedMailClick = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
  }
  const mail = getProtectedEmail();
  const link = document.createElement('a');
  link.href = `mailto:${mail}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
