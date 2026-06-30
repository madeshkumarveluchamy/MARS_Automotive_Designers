import React from 'react';
import { motion } from 'framer-motion';
import "./css/AboutHero.css"
// Import your image at the top
import heroBg from '../../assets/about-us/MARS-AUTOMOTIVE-DESIGNERS-BANNERS (3).webp'; 


const AboutHero = () => {
  const sectionStyle = {
    // This applies the image ONLY to this section
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${heroBg}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
  <div>
    <section style={sectionStyle} className="overflow-hidden Abouthero w-100">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white fw-bolder text-uppercase main-titles m-0">
            The Strength of <br/>Transport
          </h1>
          <p className="text-secondary fw-medium text-uppercase mt-4 subtitle-text">
            Precision Built Lasting Performance
          </p>
        </motion.div>
      </div>
    </section>
  </div>
  );
};

export default AboutHero;