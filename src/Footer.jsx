import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="tecfu-footer-wrapper">
      <div className="tecfu-footer-card">
        <div className="footer-grid">
          
          {/* Brand Column */}
          <div className="footer-col brand-info">
            <h2 className="footer-logo">TECHFU</h2>
            <p>Delivering fast, modern, and responsive digital solutions with precision and creativity.</p>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li>Web Development</li>
              <li>E-commerce Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h3>Get in Touch</h3>
            <a href="mailto:techfu39@gmail.com" className="footer-email">
              techfu39@gmail.com
            </a>
            <div className="footer-socials">
              <span className="hiring-badge">We're hiring!</span>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col newsletter">
            <h3>Subscribe</h3>
            <div className="subscribe-box">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2026 © Tecfu All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;