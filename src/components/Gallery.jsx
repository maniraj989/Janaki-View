import React from 'react';

export default function Gallery({ onOpenLightbox }) {
  const galleryItems = [
    {
      src: '/assets/hall.png',
      alt: 'Hotel corridor and seating lounge with traditional Mithila art',
      caption: 'Hotel Corridor & Traditional Wall Art',
    },
    {
      src: '/assets/room1.png',
      alt: 'Deluxe bedroom with comfortable twin beds and elegant drapery',
      caption: 'Deluxe Bedroom & Furnishings',
    },
    {
      src: '/assets/lounge.png',
      alt: 'Hotel Janaki View reception desk and Mithila mural',
      caption: 'Front Desk & Reception Lounge',
    },
    {
      src: '/assets/room3.png',
      alt: 'Spacious guest bedroom with fine wood finishing and comfort',
      caption: 'Premium Guest Accommodation',
    },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        {/* Centered Header */}
        <div className="section-header text-center">
          <span className="eyebrow">GALLERY</span>
          <h2 className="section-title">A Glimpse of Our Hotel</h2>
          <div className="gold-accent-line" />
        </div>

        {/* 4 Image Thumbnails in One Row */}
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item-card"
              onClick={() => onOpenLightbox(galleryItems, index)}
              role="button"
              tabIndex={0}
              aria-label={`View photo ${index + 1}: ${item.caption}`}
            >
              <div className="gallery-thumb-wrapper">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="gallery-thumb"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <span className="gallery-zoom-badge">View Photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
