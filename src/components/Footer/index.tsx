import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a 
            href="https://github.com/yarenbulut" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/yarenbulut" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a 
            href="mailto:buluthaticeyaren@gmail.com"
            aria-label="Email"
          >
            <i className="bi bi-envelope"></i>
          </a>
        </div>
        <p className="copyright">
          © {currentYear} Yaren Bulut. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 