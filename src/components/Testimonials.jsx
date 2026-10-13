import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote:
        'Very clean rooms, friendly staff and perfect location near Janaki Mandir. Highly recommended for anyone visiting Janakpur.',
      name: 'Rajesh Sharma',
      location: 'Nepal',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      quote:
        'A wonderful peaceful stay during our pilgrimage. The rooms are well maintained, AC works flawlessly, and the temple is just a short pleasant walk away.',
      name: 'Sunita Mishra',
      location: 'Kathmandu',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      quote:
        'Outstanding hospitality and authentic Maithili ambiance. The staff made us feel truly at home. Best hotel experience in Janakpur!',
      name: 'Amit Kumar Roy',
      location: 'Bihar, India',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Centered Header */}
        <div className="section-header text-center">
          <span className="eyebrow">TESTIMONIALS</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </div>

        {/* Testimonial Carousel Area */}
        <div className="testimonial-wrapper">
          {/* Prev Button */}
          <button
            type="button"
            className="testimonial-nav-btn prev-btn"
            onClick={prevReview}
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Testimonial Card */}
          <div className="testimonial-card">
            {/* Gold Quotation Mark */}
            <div className="quote-mark">“</div>

            {/* Review Text */}
            <blockquote className="testimonial-quote">
              "{current.quote}"
            </blockquote>

            {/* Author info & Rating */}
            <div className="testimonial-author">
              <img
                src={current.avatar}
                alt={current.name}
                className="author-avatar"
              />
              <div className="author-details">
                <div className="author-name">{current.name}</div>
                <div className="author-location">{current.location}</div>
              </div>
              <div className="star-rating" aria-label={`${current.rating} stars`}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="gold-star"
                    fill="currentColor"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            className="testimonial-nav-btn next-btn"
            onClick={nextReview}
            aria-label="Next Testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
