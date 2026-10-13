import React from 'react';
import { X, Check, Bed, Wifi, Snowflake, Tv, ArrowRight } from 'lucide-react';

export default function RoomModal({ room, isOpen, onClose, onBookRoom }) {
  if (!isOpen || !room) return null;

  const features = [
    'Air Conditioning & Climate Control',
    'High-Speed Wi-Fi Internet',
    'LED Flat-Screen Television',
    'Fresh Clean Linens & Cozy Bedding',
    'Attached Private Bathroom with Hot Water',
    'Daily Housekeeping Service',
    'Intercom & 24/7 Front Desk Assistance',
    'Walking Distance to Janaki Mandir',
  ];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card room-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="room-modal-grid">
          <div className="room-modal-media">
            <img src={room.image} alt={room.name} className="room-modal-img" />
          </div>

          <div className="room-modal-details">
            <span className="eyebrow">ACCOMMODATION</span>
            <h3 className="room-modal-title">{room.name}</h3>

            <div className="room-amenities-row" style={{ margin: '8px 0 16px' }}>
              {room.amenities &&
                room.amenities.map((item, idx) => {
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

            <p className="room-modal-description">{room.description}</p>

            <div className="room-features-block">
              <h4 className="features-title">Room Features &amp; Highlights</h4>
              <ul className="features-list">
                {features.map((f, i) => (
                  <li key={i} className="feature-item">
                    <Check size={14} className="feature-check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="room-modal-action">
              <button
                type="button"
                className="btn-burgundy room-modal-btn"
                onClick={() => {
                  onClose();
                  onBookRoom(room);
                }}
              >
                <span>Inquire About This Room</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
