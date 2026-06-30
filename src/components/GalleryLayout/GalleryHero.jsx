import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../assets/aboutbackgroundimage.webp'; 
// import heroImg from '../../assets/galleryhero.webp'; // Path to your new 
import "./css/GalleryHero.css";

const GalleryHero = () => {
  return (
    <section 
      className="gallery-hero d-flex align-items-center"
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 30%, transparent), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh'
      }} data-bg="white"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='d-flex justify-content-center justify-content-md-start'><span className="badge-orange text-uppercase mb-3">Established Precision</span></div>
          <h1 className="gallery-main-title text-uppercase m-0 text-center text-md-start">
            Engineering <br /> 
            <span className="text-oranges">In Motion</span>
          </h1>
    
          <p className="gallery-sub-text mt-4 text-secondary text-center text-md-start maindes">
            Explore our gallery showcasing Ready-Made Truck Containers in Madurai, along with custom-built container solutions crafted through precision manufacturing, quality materials, and skilled workmanship for reliable commercial transportation.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHero; 