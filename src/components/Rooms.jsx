import React from 'react';
import { Bed, Wifi, Snowflake, Tv, ArrowRight } from 'lucide-react';

export default function Rooms({ onSelectRoom }) {
  const rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      image: '/assets/room1.png',
      bedsText: '2 Beds',
      description:
        'Spacious twin-bed accommodation with premium bedding, quiet climate control, elegant woodwork, and peaceful ambiance ideal for pilgrims and traveling companions.',
      amenities: [
        { icon: Bed, label: '2 Beds' },
        { icon: Wifi, label: 'Wi-Fi' },
        { icon: Snowflake, label: 'AC' },
        { icon: Tv, label: 'TV' },
      ],
    },
    {
      id: 'standard',
      name: 'Standard Room',
      image: '/assets/room2.png',
      bedsText: '1 Bed',
      description:
        'Cozy and well-appointed room featuring comfortable bedding, dedicated workstation mirror, high-speed internet, and serene atmosphere for solo travelers or couples.',
      amenities: [
        { icon: Bed, label: '1 Bed' },
        { icon: Wifi, label: 'Wi-Fi' },
        { icon: Snowflake, label: 'AC' },
        { icon: Tv, label: 'TV' },
      ],
    },
    {
      id: 'family',
      name: 'Family Room',
      image: '/assets/room3.png',
      bedsText: 'Large Bed',
      description:
        'Generously proportioned room tailored for families and group travelers, featuring ample space, pristine furnishings, modern climate control, and full hospitality.',
      amenities: [
        { icon: Bed, label: 'Large Bed' },
        { icon: Wifi, label: 'Wi-Fi' },
        { icon: Snowflake, label: 'AC' },
        { icon: Tv, label: 'TV' },
      ],
    },
  ];

  return (
    <section id="rooms" className="rooms-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="eyebrow">OUR ROOMS</span>
          <h2 className="section-title">Comfort for Every Traveler</h2>
          <p className="section-subtitle rooms-sub">
            Well-furnished rooms designed for a peaceful and relaxing stay in the heart
            of Janakpur.
          </p>
        </div>

        {/* 3-column Room Cards */}
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image-wrapper">
                <img
                  src={room.image}
                  alt={room.name}
                  className="room-image"
                  loading="lazy"
                />
              </div>

              <div className="room-card-content">
                <h3 className="room-card-title">{room.name}</h3>

                <div className="room-amenities-row">
                  {room.amenities.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <span key={idx} className="room-amenity-item">
                        <Icon size={14} className="amenity-icon" />
                        <span>{item.label}</span>
                        {idx < room.amenities.length - 1 && (
                          <span className="amenity-dot">·</span>
                        )}
                      </span>
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectRoom(room)}
                  className="btn-outline-gold room-btn"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
