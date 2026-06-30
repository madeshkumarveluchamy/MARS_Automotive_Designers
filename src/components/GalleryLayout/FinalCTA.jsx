import React from 'react';
import { motion } from 'framer-motion';
import "./css/FinalCTA.css"
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  const stats = [
    { label: "BUILDS COMPLETED", value: "250+" },
    { label: "WELDING GUARANTEE", value: "15YR" },
    { label: "STRUCTURAL RATING", value: "99.9%" }
  ];

  return (
    <section className="final-cta-section bg-light-grey py-5 position-relative overflow-hidden" data-bg="black">
      {/* Background Watermark Text */}
      <div className="bg-watermark">MARS</div>

      <div className="container py-5 text-center position-relative" style={{ zIndex: 2 }}>
        
        {/* Main Heading */}
        <motion.h1 
          className="display-3 fw-black text-uppercase m-0 cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         Ready to build your<br/> next container?
        </motion.h1>

        {/* Gradient Button */}
        <Link to="/contact" className='text-decoration-none'>
        <motion.div 
          className="mt-5 mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="d-flex justify-content-center ">
            <button className="homeaboutblog-swap">
              <span className="homeaboutarrow">→</span>
              <span className="homeabouttext">Let's Build Your Vehicle</span>
            </button>
            </div>
        </motion.div>
      </Link>
      </div>
    </section>
  );
};

export default FinalCTA;