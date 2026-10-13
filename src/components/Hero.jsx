import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onExploreRooms }) {
  return (
    <section id="home" className="hero-section">
      {/* Background Image Container */}
      <div className="hero-bg">
        <img
          src="/assets/hero-mandir.jpg"
          alt="Janaki Mandir at Sunset"
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-eyebrow">STAY NEAR THE DIVINE</span>
          <h1 className="hero-title">
            <span>Experience</span>
            <span className="hero-title-highlight">Janakpur</span>
            <span>with Comfort</span>
          </h1>
          <p className="hero-description">
            Hotel Janaki View offers a perfect blend of modern comfort and cultural
            heritage, just minutes away from the iconic Janaki Mandir.
          </p>
          <div className="hero-cta">
            <a
              href="#rooms"
              onClick={(e) => {
                e.preventDefault();
                onExploreRooms();
              }}
              className="btn-gold hero-btn"
            >
              <span>Explore Rooms</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
