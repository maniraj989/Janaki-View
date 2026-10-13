import React from 'react';
import { Bed, MapPin, Wifi, Bell } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Bed,
      title: 'Comfortable Rooms',
      subtitle: 'For a Relaxing Stay',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      subtitle: 'Near Janaki Mandir',
    },
    {
      icon: Wifi,
      title: 'Modern Amenities',
      subtitle: 'For Your Convenience',
    },
    {
      icon: Bell,
      title: 'Great Service',
      subtitle: 'Always at Your Core',
    },
  ];

  return (
    <section id="amenities" className="benefits-section">
      <div className="container">
        <div className="benefits-grid">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <Icon size={26} strokeWidth={1.8} className="benefit-icon" />
                </div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-subtitle">{b.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
