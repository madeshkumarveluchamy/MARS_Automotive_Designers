import React from 'react';
import { motion } from 'framer-motion';
import "./css/ServiceTypes.css";
import MARS_PORTFOLIO_IMAGES1 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (7).webp";
import MARS_PORTFOLIO_IMAGES2 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (2).webp"
import MARS_PORTFOLIO_IMAGES3 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (3).webp"
import MARS_PORTFOLIO_IMAGES4 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (4).webp"
import MARS_PORTFOLIO_IMAGES5 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (5).webp"
import MARS_PORTFOLIO_IMAGES6 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (6).webp"

const ServiceTypes = () => {
  const projects = [
    { title: "CARGO CONTAINER UNIT", img: MARS_PORTFOLIO_IMAGES1, desc: "HEAVY REINFORCED HIGH-CUBE SPECIALIZED CHASSIS." },
    { title: "TIPPER TRUCK SYSTEM", img: MARS_PORTFOLIO_IMAGES2, desc: "ADVANCED HYDRAULIC DUMP MECHANISMS FOR MINING." },
    { title: "REFRIGERATED LOGISTICS", img: MARS_PORTFOLIO_IMAGES3, desc: "MULTI-ZONE CLIMATE CONTROLLED THERMAL SHELLS." },
    { title: "FUEL TANKER CHASSIS", img: MARS_PORTFOLIO_IMAGES4, desc: "HAZARD-CERTIFIED ALUMINUM TANK FABRICATION." },
    { title: "MINING SPECIALIZED", img: MARS_PORTFOLIO_IMAGES5, desc: "EXTREME-ENVIRONMENT STRUCTURAL REINFORCEMENTS." },
    { title: "HEAVY LOAD TRANSPORT", img: MARS_PORTFOLIO_IMAGES6, desc: "MULTI-AXLE MODULAR TRAILERS FOR OVERSIZED CARGO." },
  ];

  return (
    <section className="portfolio-section py-5" data-bg="black">
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="mb-5 text-center text-md-start">
          <span className="text-orange small fw-bold tracking-widest text-uppercase">Portfolio</span>
          <h2 className="portfolio-main-title text-uppercase mt-2">Bespoke Vehicle Builds</h2>
        </div>

        {/* Portfolio Grid */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 ">
              <motion
                className="portfolio-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Wrapper */}
                <div className="portfolio-img-wrapper mb-3 d-flex justify-content-center justify-content-md-start">
                  <img src={project.img} alt={project.title} className="img-fluid portfolio-img" />
                </div>
                
                {/* Text Content */}
                <h6 className="portfolio-card-title text-uppercase m-0 d-flex justify-content-center justify-content-md-start">{project.title}</h6>
                 <div className='d-flex justify-content-center justify-content-md-start text-center text-md-start'><p className="portfolio-card-desc text-muted mt-2 text-uppercase small ">
                  {project.desc}
                </p>
               </div>
              </motion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTypes;