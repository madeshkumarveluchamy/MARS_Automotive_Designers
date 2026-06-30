import React from 'react';
import { motion } from 'framer-motion';
import "./css/ContactHero.css";
// Image correct-a import aagi irukku
import contacthero from "../../assets/contact-us/MARS-AUTOMOTIVE-DESIGNERS-BANNERS (7).webp"

const ContactHero = () => {
  return (
    <section 
      className="contact-hero-bg position-relative overflow-hidden" 
      data-bg="white"
      style={{
        // Quotes issue fix panniyachu
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${contacthero}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-lg-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h6 className="text-orange fw-bold tracking-widest mb-3 text-uppercase text-center text-md-start ">
                Direct Engineering Access
              </h6>
              
              <h1 className="contact-title text-white text-uppercase m-0  text-center text-md-start">
                Let's Build The <br />
                <span className="text-orange-title">Future</span> of <br />
                Transport
              </h1>

              <p className="contact-subtext text-secondary mt-4  text-center text-md-start">
                Contact Truck Container Manufacturers in Madurai for custom truck container
                solutions and fleet consultations. Our engineering team is ready to understand your
                requirements and deliver durable container solutions built to your exact specifications.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Vertical Scale Indicator (Decorative) */}
          <div className="col-lg-4 d-none d-lg-flex justify-content-end">
            <div className="scale-indicator-container">
              <div className="orange-dot"></div>
              <div className="vertical-line"></div>
              <span className="vertical-text text-uppercase">Future of Fabrication</span>
              <div className="hollow-square"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;