import React from 'react';
import { motion } from 'framer-motion';
import "./css/AboutCertificates.css"

const CertificationSection = () => {
  const certifications = [
    { name: "Light Commercial Vehicles", img: "path_to_iso.webp" },
    { name: "Medium Duty Vehicles", img: "path_to_osha.webp" },
    { name: "Heavy Commercial Vehicles", img: "path_to_dot.webp" },
    { name: "Custom Applications", img: "path_to_sae.webp" }
  ];

  return (
    <section className="cert-section bg-black py-5" data-bg="white">
      <div className="container text-center py-5">
        
        {/* Small Orange Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="cert-subtitle text-uppercase mb-5 mainsub"
        >
          Manufacturing Containers for India's <br></br>Leading Commercial Vehicle Brands
        </motion.p>

        {/* Logos Grid */}
        <div className="row justify-content-center align-items-center g-4">
          {certifications.map((cert, index) => (
            <div key={index} className="col-6 col-md-3">
              <motion.div 
                className="cert-box"
                whileHover={{ scale: 1.05, borderColor: "#c4711e" }}
                transition={{ duration: 0.3 }}
              >
                {/* Use <img> if you have logos, otherwise <span> for text */}
                <span className="cert-text text-uppercase maindes">{cert.name}</span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;