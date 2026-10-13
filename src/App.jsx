import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import BookingBar from './components/BookingBar';
import Benefits from './components/Benefits';
import Rooms from './components/Rooms';
import About from './components/About';
import Gallery from './components/Gallery';
import Explore from './components/Explore';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

import BookingModal from './components/BookingModal';
import RoomModal from './components/RoomModal';
import LightboxModal from './components/LightboxModal';

export default function App() {
  // Modal states
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState({});

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomModalOpen, setRoomModalOpen] = useState(false);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Handlers
  const handleOpenBooking = (initialParams = {}) => {
    setBookingInitialData(initialParams);
    setBookingModalOpen(true);
  };

  const handleSelectRoom = (room) => {
    setSelectedRoom(room);
    setRoomModalOpen(true);
  };

  const handleBookFromRoom = (room) => {
    setRoomModalOpen(false);
    handleOpenBooking({ roomType: room.name });
  };

  const handleExploreRooms = () => {
    const el = document.getElementById('rooms');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenLightbox = (images, index) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="hotel-app">
      {/* SECTION 1: HEADER AND NAVIGATION */}
      <Header onBookClick={() => handleOpenBooking()} />

      <main>
        {/* SECTION 2: HERO BANNER */}
        <Hero onExploreRooms={handleExploreRooms} />

        {/* SECTION 3: BOOKING SEARCH BAR */}
        <BookingBar onCheckAvailability={(data) => handleOpenBooking(data)} />

        {/* SECTION 4: HOTEL BENEFITS */}
        <Benefits />

        {/* SECTION 5: ROOMS AND ACCOMMODATION */}
        <Rooms onSelectRoom={handleSelectRoom} />

        {/* SECTION 6: ABOUT HOTEL JANAKI VIEW */}
        <About onLearnMore={handleLearnMore} />

        {/* SECTION 7: HOTEL PHOTO GALLERY */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* SECTION 8: EXPLORE JANAKPUR */}
        <Explore />

        {/* SECTION 9: GUEST TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 10: FINAL BOOKING CALL-TO-ACTION */}
        <CtaBanner onBookNow={() => handleOpenBooking()} />
      </main>

      {/* SECTION 11: DARK FOOTER */}
      <Footer />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />

      <RoomModal
        room={selectedRoom}
        isOpen={roomModalOpen}
        onClose={() => setRoomModalOpen(false)}
        onBookRoom={handleBookFromRoom}
      />

      <LightboxModal
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </div>
  );
}
