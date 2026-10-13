import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Janakpur', href: '#janakpur' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-container">
        {/* Top 4 Columns */}
        <div className="footer-grid">
          {/* Column 1: Logo & Tagline */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-wrap">
              <img
                src="/assets/logo-transparent.png"
                alt="Hotel Janaki View Official Crest"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-tagline">
              Experience the divine grace and cultural heritage of Janakpur with
              authentic comfort and gracious hospitality.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Janakpur, Nepal</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} className="contact-icon" />
                <a href="tel:+9779804828807" className="footer-link">
                  +977 980-4828807
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:info@hoteljanakiview.com" className="footer-link">
                  info@hoteljanakiview.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div className="footer-col">
            <h4 className="footer-col-title">Follow Us</h4>
            <p className="footer-social-text">
              Stay connected for updates and offers.
            </p>
            <div className="footer-social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-row">
          <div className="footer-copyright">
            © 2026 Hotel Janaki View. All Rights Reserved.
          </div>
          <div className="footer-legal-links">
            <a href="#privacy" className="footer-legal-link">
              Privacy Policy
            </a>
            <span className="legal-sep">|</span>
            <a href="#terms" className="footer-legal-link">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
