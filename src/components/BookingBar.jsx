import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Users, ArrowRight, Minus, Plus } from 'lucide-react';

export default function BookingBar({ onCheckAvailability }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const checkInInputRef = useRef(null);
  const checkOutInputRef = useRef(null);
  const guestRef = useRef(null);

  const today = new Date().toISOString().split('T')[0];

  // Close guest dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setGuestDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCheckInContainerClick = () => {
    if (checkInInputRef.current) {
      if (typeof checkInInputRef.current.showPicker === 'function') {
        checkInInputRef.current.showPicker();
      } else {
        checkInInputRef.current.focus();
      }
    }
  };

  const handleCheckOutContainerClick = () => {
    if (checkOutInputRef.current) {
      if (typeof checkOutInputRef.current.showPicker === 'function') {
        checkOutInputRef.current.showPicker();
      } else {
        checkOutInputRef.current.focus();
      }
    }
  };

  const handleCheckInChange = (e) => {
    const val = e.target.value;
    setCheckIn(val);
    setErrorMsg('');
    if (val && checkOut && val >= checkOut) {
      const nextDay = new Date(val);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split('T')[0]);
    }
  };

  const handleCheckOutChange = (e) => {
    const val = e.target.value;
    if (checkIn && val <= checkIn) {
      setErrorMsg('Check-out date must be after check-in date');
      return;
    }
    setErrorMsg('');
    setCheckOut(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIn && checkOut && checkOut <= checkIn) {
      setErrorMsg('Check-out date must be after check-in date');
      return;
    }
    setErrorMsg('');
    const totalGuests = adults + children;
    onCheckAvailability({
      checkIn: checkIn || today,
      checkOut: checkOut || '',
      adults,
      children,
      rooms,
      totalGuests,
    });
  };

  const totalGuests = adults + children;
  const guestLabel = `${totalGuests} Guests`;

  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return 'Select Date';
    try {
      const parts = dateStr.split('-');
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="booking-bar-wrapper">
      <div className="container">
        <form className="booking-bar" onSubmit={handleSubmit}>
          {/* Check-in */}
          <div
            className="booking-field clickable-field"
            onClick={handleCheckInContainerClick}
          >
            <div className="field-icon-wrapper">
              <Calendar size={18} className="field-icon" />
            </div>
            <div className="field-content">
              <span className="field-label">Check-in</span>
              <span className={`field-display-val ${!checkIn ? 'placeholder-val' : ''}`}>
                {formatDateDisplay(checkIn)}
              </span>
              <input
                ref={checkInInputRef}
                type="date"
                className="hidden-date-input"
                value={checkIn}
                min={today}
                onChange={handleCheckInChange}
                aria-label="Check-in Date"
              />
            </div>
          </div>

          <div className="booking-divider" />

          {/* Check-out */}
          <div
            className="booking-field clickable-field"
            onClick={handleCheckOutContainerClick}
          >
            <div className="field-icon-wrapper">
              <Calendar size={18} className="field-icon" />
            </div>
            <div className="field-content">
              <span className="field-label">Check-out</span>
              <span className={`field-display-val ${!checkOut ? 'placeholder-val' : ''}`}>
                {formatDateDisplay(checkOut)}
              </span>
              <input
                ref={checkOutInputRef}
                type="date"
                className="hidden-date-input"
                value={checkOut}
                min={checkIn || today}
                onChange={handleCheckOutChange}
                aria-label="Check-out Date"
              />
            </div>
          </div>

          <div className="booking-divider" />

          {/* Guests */}
          <div className="booking-field guest-field" ref={guestRef}>
            <div className="field-icon-wrapper">
              <Users size={18} className="field-icon" />
            </div>
            <div
              className="field-content guest-trigger"
              onClick={() => setGuestDropdownOpen(!guestDropdownOpen)}
              role="button"
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={guestDropdownOpen}
            >
              <span className="field-label">Guests</span>
              <span className="field-display-val">{guestLabel}</span>
            </div>

            {/* Guest Selector Popup */}
            {guestDropdownOpen && (
              <div className="guest-popup">
                <div className="guest-row">
                  <div>
                    <div className="guest-type">Adults</div>
                    <div className="guest-desc">Ages 13+</div>
                  </div>
                  <div className="counter-controls">
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      disabled={adults <= 1}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-val">{adults}</span>
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setAdults(Math.min(10, adults + 1))}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="guest-row">
                  <div>
                    <div className="guest-type">Children</div>
                    <div className="guest-desc">Ages 0-12</div>
                  </div>
                  <div className="counter-controls">
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      disabled={children <= 0}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-val">{children}</span>
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setChildren(Math.min(6, children + 1))}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="guest-row">
                  <div>
                    <div className="guest-type">Rooms</div>
                    <div className="guest-desc">Number of rooms</div>
                  </div>
                  <div className="counter-controls">
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                      disabled={rooms <= 1}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-val">{rooms}</span>
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setRooms(Math.min(5, rooms + 1))}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-gold guest-apply-btn"
                  onClick={() => setGuestDropdownOpen(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="booking-action">
            <button type="submit" className="btn-burgundy booking-submit-btn">
              <span>Check Availability</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </button>
          </div>
        </form>

        {errorMsg && <div className="booking-error-msg">{errorMsg}</div>}
      </div>
    </div>
  );
}
