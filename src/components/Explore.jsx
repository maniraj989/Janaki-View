import React from 'react';

export default function Explore() {
  const destinations = [
    {
      title: 'Janaki Mandir',
      description: 'A spiritual and architectural marvel.',
      image: '/assets/card-mandir.jpg',
    },
    {
      title: 'Dhanush Sagar',
      description: 'A serene and historic site.',
      image: '/assets/card-dhanush-sagar.jpg',
    },
    {
      title: 'Ganga Sagar',
      description: 'A peaceful retreat.',
      image: '/assets/card-ganga-sagar.jpg',
    },
    {
      title: 'Local Culture',
      description: 'Experience the vibrant Maithil culture.',
      image: '/assets/card-local-culture.jpg',
    },
  ];

  return (
    <section id="janakpur" className="explore-section">
      <div className="container">
        {/* Centered Header */}
        <div className="section-header text-center">
          <span className="eyebrow">EXPLORE</span>
          <h2 className="section-title">Discover the Beauty of Janakpur</h2>
          <p className="section-subtitle explore-sub">
            Stay with us and be close to the city's most sacred and beautiful places.
          </p>
        </div>

        {/* 4 Destination Cards in 1 Row */}
        <div className="explore-grid">
          {destinations.map((dest, idx) => (
            <div key={idx} className="destination-card">
              <div className="dest-image-wrapper">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="dest-image"
                  loading="lazy"
                />
              </div>
              <div className="dest-content">
                <h3 className="dest-title">{dest.title}</h3>
                <p className="dest-description">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
