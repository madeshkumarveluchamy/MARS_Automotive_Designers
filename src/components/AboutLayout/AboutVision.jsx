import React, { useState, useCallback, memo } from 'react';
import './css/AboutVision.css';
import { Link } from 'react-router-dom';

// High-speed static imports 
import visionImg from "../../assets/about-us/MARS-VISION.webp";
import missionImg from "../../assets/about-us/MARS-MISSION.webp";
import valuesImg from "../../assets/about-us/MARS-VALUES.webp";

const AboutVision = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const innovationData = [
    { 
      title: "VISION", 
      desc: "To become one of the most trusted truck container manufacturers by delivering innovative, durable, and reliable transportation solutions that support businesses across every industry",
      image: visionImg
    },
    { 
      title: "MISSION", 
      desc: "To manufacture high-quality truck containers for Light Weight Vehicles, Heavy Weight Vehicles, and commercial transport while ensuring precision, timely delivery, and customer satisfaction.",
      image: missionImg
    },
    { 
      title: "OUR VALUES", 
      desc: "Quality workmanship, honest business practices, continuous innovation, and customer commitment drive every truck container we manufacture.",
      image: valuesImg
    }
  ];

  const handleMouseEnter = useCallback((index) => {
    if (window.innerWidth > 994) {
      setActiveIndex(index);
    }
  }, []);

  const handleClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="innovation-section bg-black text-white" data-bg="white">
      {/* Visual Memory Pre-load Engine: Instantly caching assets */}
      <div className="mobile-pre-cache-layer" aria-hidden="true">
        {innovationData.map((item, idx) => (
          <img key={`cache-${idx}`} src={item.image} alt="preload" />
        ))}
      </div>

      <div className="container py-5">
        
        {/* Header Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className='d-flex flex-column flex-lg-row justify-content-between align-items-start text-center text-lg-start'>
              <div className='col-12 col-lg-5'>
                <p className="text-orange-small mb-3 mainsub">WHO WE ARE</p>
              </div> 
              <div className="d-flex flex-column flex-lg-row col-12 col-lg-7 align-items-start align-items-lg-end text-center text-lg-start">
                <h2 className="innovation-main-title col-12 col-lg-8 maintit">
                  DELIVERING DURABLE TRUCK CONTAINER SOLUTIONS AS TRUSTED CONTAINER RETAILERS IN MADURAI WITH PRECISION MANUFACTURING AND QUALITY MATERIALS.
                </h2>
                
                <div className='w-100 d-flex justify-content-center justify-content-lg-start text-center text-lg-start'>
                  <Link to="/mars-solutions" className="text-decoration-none">
                    <button className="blog-swap-Innovation col-lg-4 mt-3 mt-lg-0">
                      <span className="arrow">→</span>
                      <span className="text">EXPLORE NOW</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 align-items-start">
          
          {/* ================= DESKTOP VIEW ONLY (995px and up bounds securely) ================= */}
          <div className="col-lg-5 d-none d-lg-block desktop-frame-hide">
            <div className="innovation-img-frame rounded overflow-hidden">
              <div 
                className="desktop-image-striper"
                style={{ transform: `translate3d(0, -${activeIndex * 100}%, 0)` }}
              >
                {innovationData.map((item, idx) => (
                  <img 
                    key={idx}
                    src={item.image} 
                    alt={item.title} 
                    loading="eager"
                    decoding="sync"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= LIST CONTAINER (Adaptive Tablet + Phone Layout) ================= */}
          <div className="col-lg-7 ps-lg-5 target-list-width">
            <div className="innovation-list-container">
              {innovationData.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={index} className="list-item-wrapper-responsive">
                    
                    {/* Interactive List Item Row */}
                    <div 
                      className={`innovation-list-item ${isActive ? 'active-row' : ''}`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onClick={() => handleClick(index)}
                    >
                      <div className="row align-items-center w-100 g-0">
                        <div className="col-10 col-md-5">
                          <h5 className="list-title m-0 mainsub text-center text-lg-start">{item.title}</h5>
                        </div>
                        {/* Hidden dynamically on 76 system widths */}
                        <div className="col-md-6 d-none d-md-block inline-desc-responsive">
                          <p className="list-desc m-0 maindes">{item.desc}</p>
                        </div>
                        <div className="col-2 col-md-1 text-end">
                          <span className={`list-arrow ${isActive ? 'rotated' : ''}`}>→</span>
                        </div>
                      </div>
                    </div>

                    {/* ================= HIGH-SPEED DROPDOWN PANEL (768px to 994px Lag Solved) ================= */}
                    <div className={`mobile-accordion-panel responsive-accordion-show ${isActive ? 'panel-open' : ''}`}>
                      <div className="mobile-panel-inner">
                        <p className="list-desc hidden-desc-control px-3 pt-3 text-black text-center">
                          {item.desc}
                        </p>
                        <div className="px-3 pb-3">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="img-fluid rounded mobile-gpu-img" 
                            loading="eager"
                            decoding="sync"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(AboutVision);