import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner({ onBookNow }) {
  return (
    <section className="cta-banner-section">
      <div className="cta-bg-wrapper">
        <img
          src="/assets/cta-mandir.jpg"
          alt="Janaki Mandir architectural heritage at twilight"
          className="cta-bg-img"
        />
        <div className="cta-overlay" />
      </div>

      <div className="container cta-container">
        <div className="cta-content-row">
          <div className="cta-text-block">
            <h2 className="cta-title">Plan Your Stay in Janakpur</h2>
            <p className="cta-description">
              Whether you are here for a pilgrimage, a family trip or a business
              visit, Hotel Janaki View is your perfect choice.
            </p>
          </div>
          <div className="cta-action-block">
            <button
              type="button"
              onClick={onBookNow}
              className="btn-gold cta-btn"
            >
              <span>Book Your Room</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
