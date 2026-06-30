import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "../components/common/Footer";
import {Link} from "react-router-dom"
import "./ServiceDetail.css";

// Same images retained as per your request
import PREMIUM_MATERIALS_INQUIRY from "../assets/mars-solutions/PREMIUM_MATERIALS_INQUIRY.webp"
import MARS_MATERIAL_HUB1 from "../assets/mars-solutions/MARS-MATERIAL-HUB (1).webp";
import MARS_MATERIAL_HUB2 from "../assets/mars-solutions/MARS-MATERIAL-HUB (2).webp";
import MARS_MATERIAL_HUB3 from "../assets/mars-solutions/MARS-MATERIAL-HUB (3).webp";
import Navbar from '../components/common/Navbar';

const ServiceDetail3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const capabilities = [
    { title: "OUR CAPABILITIES", desc: "Premium materials selected to ensure strength, durability, and long-lasting container performance." },
    { title: "SHEET METAL", desc: "High-quality sheet metal sourced from Tata Steel, Jindal, and JSW ensures superior structural strength, durability, and precision during truck container fabrication." },
    { title: "STRUCTURAL COMPONENTS", desc: "Premium JSW Pipes, Angles, and Channels provide a strong framework, improving load-bearing capacity and long-term structural stability." },
    { title: "PROTECTIVE COATING", desc: "Asian Paints Industrial Coatings protect truck containers against corrosion, weather exposure, and surface wear while enhancing overall finish quality." },
    { title: "QUALITY ASSURANCE", desc: "Every material undergoes strict quality verification before fabrication, ensuring reliable performance, consistent manufacturing standards, and extended service life." }
  ];

  const serviceLinks = [
    { title: "TRUSTED MATERIAL BRANDS", desc: "We source materials from trusted manufacturers to ensure consistent quality, durability, and structural reliability." },
    { title: "STRUCTURAL DURABILITY", desc: "Premium steel and structural components provide excellent strength for demanding transportation applications." },
    { title: "LONG-LASTING PROTECTION", desc: "Industrial-grade protective coatings improve corrosion resistance and extend the service life of every container." }
  ];

  return (
    <div className="service-detail-root">
      <Navbar/>
      <section
              className="detail-hero"
              style={{ // rgba(0, 0, 0, 0.6) - Indha 0.6 thaan opacity (0-1 varaikum kudukalam)
          // 0.6 na 60% black layer irukkum. 0.3-ku mathuna light-a dark aagum.
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${PREMIUM_MATERIALS_INQUIRY}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // Hero section height-a specify pannunga, illana image theriyathu
          minHeight: "400px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center" }}
            >
        <div className="overlay"></div>
        <h1 className="hero-title">PREMIUM <br/>MATERIALS HUB</h1>
      </section>

      <section className="precision-section py-5">
      <div className="container">
        {/* Row 1: Title, Text & Button */}
        <div className="row align-items-start mb-4">
          <div className="col-lg-9">
            <h2 className="title-text text-center text-lg-start">
              QUALITY MATERIALS FOR DURABLE <br/>TRUCK CONTAINER MANUFACTURING

            </h2>
            <p className="mb-3 text-black compact-text maindess text-center text-lg-start pe-lg-4">
              Mars Automotive Designers uses premium-quality materials sourced from trusted
manufacturers to build durable truck containers for commercial transportation. Every
component is carefully selected to ensure structural strength, corrosion resistance, and
long-term performance under demanding operating conditions.
            </p>
          </div>
          <div className="col-lg-3 d-flex align-items-start justify-content-center justify-content-lg-end mt-3 mt-lg-0">
           <Link className="text-decoration-none" to="/contact-us">
            <button
              className="serviceblog-swap-FAQ"
              
            >
              <div className="arrow">→</div>
              <div className="text">CONTACT US</div>
            </button>
            </Link>
          </div>
        </div>
    
        {/* Row 2: Images and Service Cards */}
        <div className="row">
          {/* Left Column: Big Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={MARS_MATERIAL_HUB1}
              className="img-fluid w-100  main-service-img"
              alt="Welding"
            />
          </div>
    
          {/* Right Column: Small Images, Text & Cards */}
          <div className="col-lg-6 pl-lg-4">
            <div className="row g-2 mb-4 image-container-row">
              <div className="col-6">
                <img
                  src={MARS_MATERIAL_HUB2}
                  className="img-fluid w-100 rounded-0"
                  alt="Welder"
                />
              </div>
              <div className="col-6">
                <img
                  src={MARS_MATERIAL_HUB3}
                  className="img-fluid w-100 rounded-0"
                  alt="Service"
                />
              </div>
            </div>
    
            <p className="service-desc-text maindess text-center text-lg-start">
             Our material selection focuses on reliability, durability, and consistent quality, helping
us manufacture Ready-to-Use Truck Containers that deliver maximum strength,
safety, and long service life.
            </p>
    
            <div className="service-links mt-4">
              {serviceLinks.map((item, index) => (
                <div key={index} className="service-item">
                  <div className="mb-2">
                    <h5 className="mb-0 fw-bold">{item.title}</h5>
                  </div>
                  <div>
                    <p className="text-muted mb-0 small">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="capabilities-bg py-5">
        <div className="container">
          <h2 className="text-center mb-2">OUR CAPABILITIES</h2>
          <p className="text-center mb-5">High-impact prototyping services for rapid development:</p>
          {capabilities.map((item, i) => (
            <motion.div 
              key={i} 
              className="cap-row"
              whileHover={{ backgroundColor: "#000", color: "#fff" }} 
              transition={{ duration: 0.3 }}
            >
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <span>↗</span>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail3;