


import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';  // Import the icons
import './Footer.css';  // Import the CSS for Footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Malti Bhokare. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/malti-bhokare/" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/malti-bhokare" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
