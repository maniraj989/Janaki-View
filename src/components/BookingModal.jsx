import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle, MessageSquare } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: initialData.roomType || 'Deluxe Room',
    checkIn: initialData.checkIn || '',
    checkOut: initialData.checkOut || '',
    guests: initialData.totalGuests || 2,
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Hotel Janaki View! I would like to inquire about booking a ${formData.roomType} from ${formData.checkIn || 'N/A'} to ${formData.checkOut || 'N/A'} for ${formData.guests} guests. My name is ${formData.name || 'Guest'}.`
    );
    window.open(`https://wa.me/9779804828807?text=${text}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card booking-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-view">
            <CheckCircle size={56} className="modal-success-icon" />
            <h3 className="modal-title">Enquiry Received</h3>
            <p className="modal-desc">
              Thank you, <strong>{formData.name || 'Guest'}</strong>! Your reservation enquiry for the{' '}
              <strong>{formData.roomType}</strong> ({formData.checkIn} to {formData.checkOut}) has been sent to Hotel Janaki View.
            </p>
            <div className="modal-notice-box">
              <p>
                Our front desk will contact you at <strong>{formData.phone || formData.email || 'your contact'}</strong> shortly to confirm room availability and tariff.
              </p>
            </div>
            <div className="modal-success-actions">
              <button
                type="button"
                className="btn-gold"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
              >
                Done
              </button>
              <button
                type="button"
                className="btn-burgundy whatsapp-direct-btn"
                onClick={handleWhatsAppBooking}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="modal-header-block">
              <span className="eyebrow">RESERVATION ENQUIRY</span>
              <h3 className="modal-title">Plan Your Stay</h3>
              <p className="modal-desc">
                Submit your preferred dates and details below. Our team will verify live availability and assist with your booking.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="booking-modal-form">
              <div className="modal-form-grid">
                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={14} /> Check-in Date
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Calendar size={14} /> Check-out Date
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    value={formData.checkOut}
                    min={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="modal-form-grid">
                <div className="form-group">
                  <label className="form-label">Room Category</label>
                  <select
                    className="form-input"
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                  >
                    <option value="Deluxe Room">Deluxe Room (2 Beds)</option>
                    <option value="Standard Room">Standard Room (1 Bed)</option>
                    <option value="Family Room">Family Room (Spacious Bed)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <Users size={14} /> Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    className="form-input"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) || 1 })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="modal-form-grid">
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. +977 980-0000000"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. name@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Special Requests or Notes (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Temple darshan timings, early check-in assistance..."
                  className="form-input"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                />
              </div>

              <div className="modal-actions-row">
                <button type="submit" className="btn-burgundy modal-submit-btn">
                  Submit Reservation Enquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="btn-outline-gold modal-whatsapp-btn"
                >
                  <MessageSquare size={15} />
                  <span>Direct WhatsApp Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
