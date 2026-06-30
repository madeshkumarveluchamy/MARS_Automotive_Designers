import React, { useState, useCallback, memo } from 'react';
import './css/Inovation.css';
import { Link } from 'react-router-dom';

// 3day-delivery.webp
// advanced-technology.webp
// custom image.webp
// precision image.webp
// retail section image.webp

// Smooth rendering-kaga images-ah munnadiye import panniduvom
import advanced_technology from "../../../assets/homepage/advanced-technology.webp";
import custom_image from "../../../assets/homepage/custom image.webp";
import Three_day_delivery from "../../../assets/homepage/3day-delivery.webp";
import precision_image from "../../../assets/homepage/precision image.webp";

const Innovation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const innovationData = [
    { 
      title: "CUSTOM MANUFACTURING", 
      desc: "Every order is manufactured according to your vehicle specifications, cargo requirements, and operational needs.",
      image: custom_image
    },
    { 
      title: "PRECISION ENGINEERING", 
      desc: "Engineered with accuracy and quality craftsmanship for durable, reliable, and longlasting truck container solutions.",
      image: precision_image
    },
    { 
      title: "FAST 3-DAY DELIVERY", 
      desc: "Our efficient production process enables most custom truck container orders to be completed within 3 days.",
      image: Three_day_delivery
    },
    { 
      title: "ADVANCED TECHNOLOGY", 
      desc: "Modern machinery and skilled manufacturing techniques ensure precision, consistency, and superior structural performance.",
      image: advanced_technology
    }
  ];

  const handleMouseEnter = useCallback((index) => {
    if (window.innerWidth > 991) {
      setActiveIndex(index);
    }
  }, []);

  const handleClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  return (
    <section className="innovation-section bg-black text-white" data-bg="white">
      {/* Visual Memory Engine: Load images instantly in background */}
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
                <p className="text-orange-small mb-3">SUSTAINABILITY & INNOVATION</p>
              </div> 
              <div className="d-flex flex-column flex-lg-row col-12 col-lg-7 align-items-start align-items-lg-end text-center text-lg-start">
                <h2 className="innovation-main-title col-12 col-lg-8">
                  CUSTOM TRUCK CONTAINER MANUFACTURING WITH PRECISION FABRICATION, DURABLE MATERIALS, AND SOLUTIONS BUILT TO YOUR REQUIREMENTS.
                </h2>
                
                <div className='w-100 d-flex justify-content-center justify-content-lg-end text-center text-lg-start'>
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
          
          {/* ================= DESKTOP VIEW ONLY (992px and up) ================= */}
          <div className="col-lg-5 d-none d-lg-block">
            <div className="innovation-img-frame rounded overflow-hidden">
              <div 
                className="desktops-image-striper"
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

          {/* ================= LIST CONTAINER (Adaptive Framework) ================= */}
          <div className="col-lg-7 ps-lg-5">
            <div className="innovation-list-container">
              {innovationData.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={index} className="list-item-wrapper-responsive">
                    
                    {/* Interactive List Item Row */}
                    <div 
                      className={`innovation-list-items ${isActive ? 'active-row' : ''}`}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onClick={() => handleClick(index)}
                    >
                      <div className="row align-items-center  w-100 g-0">
                        <div className="col-10 col-md-5">
                          <h5 className="list-title text-center text-lg-start">{item.title}</h5>
                        </div>
                        {/* Desktop Description: Hidden only on clean custom responsive query blocks */}
                        <div className="col-md-6 d-none d-md-block responsive-desc-hide">
                          <p className="list-desc m-0">{item.desc}</p>
                        </div>
                        <div className="col-2 col-md-1 text-end">
                          <span className={`list-arrow ${isActive ? 'rotated' : ''}`}>→</span>
                        </div>
                      </div>
                    </div>

                    {/* ================= HIGH-SPEED ACCORDION CONTAINER (Active below 991px) ================= */}
                    <div className={`mobile-accordion-panel ${isActive ? 'panel-open' : ''}`}>
                      <div className="mobile-panel-inner">
                        <p className="list-desc px-3 pt-3 text-black text-center">
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

export default memo(Innovation);