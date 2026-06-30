import React, { useState, useRef } from 'react';
import './css/TheRevolution.css';
import stockImg from '../../assets/Gallery/MARS-BEFORE-BANNER.webp'; 
import marsImg from '../../assets/Gallery/MARS-AFTER-BANNER.webp'; 

const TheRevolution = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false); // Pudhusa add panna state
  const containerRef = useRef(null);

  const handleMove = (e) => {
    // Dragging state true aaga iruntha mattum thaan move aaganum
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const xPos = e.touches ? e.touches[0].clientX : e.clientX;
    
    let percentage = ((xPos - rect.left) / rect.width) * 100;
    
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    setSliderPos(percentage);
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  return (
    <section className="revolution-section py-5 bg-black">
      <div className="container text-center">
        <h1 className="fw-black text-white text-uppercase mb-2">The Manufacturing Journey</h1>
        <p className="text-secondary smaller text-uppercase tracking-widest mb-5">
          From Raw Materials to Precision Containers
        </p>

        <div 
          className={`comparison-wrapper ${isDragging ? 'dragging' : ''}`} 
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseUp={handleDragEnd}       // Mouse release aagum pothu stop aagum
          onMouseLeave={handleDragEnd}    // Mouse image-a vittu veliya pona stop aagum
          onTouchEnd={handleDragEnd}      // Touch release aagum pothu stop aagum
        >
          {/* THE BASE IMAGE (STOCK) */}
          <img src={stockImg} alt="Stock" className="comparison-img base-img" />

          {/* THE OVERLAY IMAGE (MARS) */}
          <div 
            className="mars-overlay" 
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <img src={marsImg} alt="Mars" className="comparison-img" />
          </div>

          {/* THE MECHANICAL HANDLE */}
          <div className="slider-line" style={{ left: `${sliderPos}%` }}>
            <div 
              className="slider-handle-circle"
              onMouseDown={handleDragStart} // Circle-a click panna start aagum
              onTouchStart={handleDragStart}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M18 8L22 12L18 16M6 8L2 12L6 16" />
              </svg>
            </div>
          </div>

          {/* BADGES */}
          <div className="badge-glass badge-left">STOCK SPEC</div>
          <div className="badge-glass badge-right">MARS REVOLUTION</div>
        </div>
      </div>
    </section>
  );
};

export default TheRevolution;