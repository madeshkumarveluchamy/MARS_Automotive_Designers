import React from 'react';
import './css/MapSection.css';

const MapSection = () => { 
  return (
    <section className="map-section-wrapper">
      <div className="map-container">
        <div className="map-info"> 
          <h2 className="info-title maintit">Global Headquarters</h2>
          <p className="map-text mainsub">MARS Automotive Designers, Industrial Zone, Coimbatore</p>
        </div>
        <div className="map-frame">
          <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5661642878985!2d77.97647627479708!3d10.02013277322904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cb18d6a716e3%3A0xc34ce08ea6cd5ee0!2sMars%20Automotive%20Designers!5e0!3m2!1sen!2sin!4v1719488330000!5m2!1sen!2sin" 
  width="100%" 
  height="450" 
  style={{ border: 0 }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
  title="MARS Automotive Designers Location"
></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;