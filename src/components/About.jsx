import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function About({ onLearnMore }) {
  const stats = [
    { value: '20+', label: 'Comfortable Rooms' },
    { value: 'Prime', label: 'Location' },
    { value: '100%', label: 'Guest Satisfaction' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Story & Stats */}
          <div className="about-content">
            <span className="eyebrow">WELCOME TO</span>
            <h2 className="about-title">Hotel Janaki View</h2>
            <h3 className="about-subheading">
              Luxury, Culture and Comfort in Janakpur
            </h3>

            <p className="about-description">
              Located close to the sacred Janaki Mandir, Hotel Janaki View provides a
              comfortable and memorable stay for pilgrims, tourists and business
              travelers. Our clean rooms, modern amenities and warm hospitality
              ensure a pleasant experience in the cultural heart of Nepal.
            </p>

            <div className="about-cta">
              <button
                type="button"
                onClick={onLearnMore}
                className="btn-gold about-btn"
              >
                <span>Learn More</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Statistics Row */}
            <div className="about-stats-row">
              {stats.map((s, idx) => (
                <div key={idx} className="about-stat-item">
                  <div className="stat-number">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hotel Reception Photograph */}
          <div className="about-media">
            <div className="about-image-card">
              <img
                src="/assets/lounge.png"
                alt="Hotel Janaki View Reception and Lobby"
                className="about-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
