import React from 'react';
import { motion } from 'framer-motion';
// --- STEP 1: IMPORT THE IMAGE FROM ASSETS ---
import serviceBg from '../../assets/mars-solutions/MARS-AUTOMOTIVE-DESIGNERS-BANNERS (1).webp'; 
import './css/ServiceHero.css';
import {Link} from "react-router-dom"

const ServiceHero = () => {
  // --- STEP 2: USE THE IMPORTED IMAGE IN INLINE STYLES ---
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${serviceBg}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Parallax effect
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };

  return (
    <section style={heroStyle} className="service-hero overflow-hidden">
      <div className="container serviceHero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Main Typography */}
          <h1 className="service-main-title text-white text-uppercase mt-5 pt-5">
            CUSTOM TRUCK CONTAINERS <br />
            <span className="text-orange">BUILT FOR LIGHT & HEAVY COMMERCIAL VEHICLES</span>
          </h1>

          {/* Subtext */}
          <p className="service-sub-text text-uppercase mt-4">
          Precision Truck Container Manufacturing For Light <br/> and Heavy Commercial Vehicle.
          </p>

          {/* Button */}
          <Link to="/contact" className='text-decoration-none'>
                  
                  <motion.div 
                    className="mt-5 mb-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="d-flex justify-content-center ">
                      <Link className='text-decoration-none' to="/contact-us">
                      <button className="homeaboutblog-swap">
                        <span className="homeaboutarrow">→</span>
                        <span className="homeabouttext">Let's Build Your Vehicle</span>
                      </button>
                      </Link>
                      </div>
                  </motion.div>
               
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;