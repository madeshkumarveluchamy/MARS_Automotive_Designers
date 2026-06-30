import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './css/GalleryCategories.css';

// Asset Imports
import Gallery_truck_container_1 from '../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (1).webp';
import Gallery_truck_container_2 from '../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (7).webp';
import Gallery_truck_container_3 from '../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (3).webp';
import Gallery_truck_container_4 from '../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (4).webp';
import Gallery_truck_container_5 from '../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (5).webp';
import Gallery_truck_container_6 from '../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (6).webp';
import Gallery_truck_container_7 from '../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (2).webp';


export const galleryItems = [
  { id: 1, category: "HEAVYDUTY", title: "Bharat Benz", img: Gallery_truck_container_1, desc: "Mars Automotive Designers" },
  { id: 2, category: "HEAVYDUTY", title: "TATA Motors", img: Gallery_truck_container_2, desc: "Mars Automotive Designers" },
  { id: 3, category: "SPECIALIZED BUILDS", title: "Bharat Benz", img: Gallery_truck_container_3, desc: "Mars Automotive Designers" },
  { id: 4, category: "SPECIALIZED BUILDS", title: "TATA AC", img: Gallery_truck_container_4, desc: "Mars Automotive Designers" },
  { id: 5, category: "FABRICATION", title: "Ashok Leyland", img: Gallery_truck_container_5, desc: "Mars Automotive Designers" },
  { id: 6, category: "FABRICATION", title: "Bharat Benz", img: Gallery_truck_container_6, desc: "Mars Automotive Designers" },
  { id: 7, category: "DESIGN R&D", title: "Bharat Benz", img: Gallery_truck_container_7, desc: "Mars Automotive Designers" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const categories = ["ALL", "HEAVYDUTY", "SPECIALIZED BUILDS", "FABRICATION", "DESIGN R&D"];

  const filteredItems = activeFilter === "ALL" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section className="gallery-sections bg-white" data-bg="black">
      <div className="container py-5">
        
        {/* Navigation Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The Grid - LAG FIX APPLIED HERE */}
        <div className="row g-4 transition-grid">
          {/* Changed popLayout to wait to prevent layout thrashing */}
          <AnimatePresence mode='wait'>
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                /* layout prop removed to stop heavy recalculations on grid items */
                initial={{ opacity: 0, y: 15 }} /* Changed scale to y (slide) for better performance */
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }} /* Faster, smoother transition */
                className="col-lg-4 col-md-6"
              >
                <div className="mars-gallery-card">
                  <div className="img-container">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                    <div className="img-overlay">
                      <span className="text-orange fw-bold small">{item.category}</span>
                      <h4 className="text-white text-uppercase mt-2">{item.title}</h4>
                      <p className="text-secondary smaller">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Gallery;