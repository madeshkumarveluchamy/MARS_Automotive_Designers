import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/common/Footer";
import {Link} from "react-router-dom"
import "./ServiceDetail.css";
import "./ServiceDetail1";

// Original images-ai retain pannirukken
import MARS_MACHINERY_BANNERS from "../assets/mars-solutions/MARS-MACHINERY-BANNERS.webp";
import MARS_MACHINERY_1 from "../assets/mars-solutions/MARS-MACHINERY (2).webp";
import MARS_MACHINERY_2 from "../assets/mars-solutions/MARS-MACHINERY (1).webp";
import MARS_MACHINERY_3 from "../assets/mars-solutions/MARS-MACHINERY (3).webp";
import Navbar from "../components/common/Navbar";

const ServiceDetail2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const capabilities = [
    {
      title: "HYDRAULIC PRESS BRAKE",
      desc: "Performs accurate bending and forming operations, ensuring precise dimensions and consistent structural quality for every truck container.",
    },
    {
      title: "SHEARING & FORMING",
      desc: "High-precision shearing and forming machines deliver clean cutting, smooth shaping, and efficient fabrication of container components.",
    },
    {
      title: "MIG, ARC & HAND WELDING",
      desc: "Professional welding techniques create strong structural joints, providing superior durability, safety, and long-term performance.",
    },  
    {
      title: "DRILLING & CUTTING",
      desc: "Precision drilling and cutting equipment ensures accurate fabrication, seamless assembly, and reliable component fitting throughout production.",
    },
    {
      title: "EOT CRANE SYSTEM",
      desc: "Electric Overhead Travel cranes safely lift and position heavy structural components, improving workflow, efficiency, and manufacturing accuracy.",
    },
    {
      title: "SINGLE STROKE BENDING",
      desc: "Advanced bending technology produces uniform angles and precise profiles for stronger, high-quality truck container fabrication.",
    }
  ];

  const serviceLinks = [
    {
      title: "PRECISION FABRICATION",
      desc: "Advanced machinery ensures accurate cutting, bending, and fabrication for durable truck container manufacturing.",
    },
    {
      title: "CONSISTENT QUALITY",
      desc: "Modern equipment and skilled workmanship maintain precision, structural strength, and consistent manufacturing standards.",
    },
    {
      title: "FASTER PRODUCTION",
      desc: "Efficient fabrication processes help reduce production time while delivering reliable truck containers without compromising quality.",
    },
  ];

  return (
    <div className="service-detail-root">
      <Navbar />
       <section
             className="detail-hero"
             style={{ // rgba(0, 0, 0, 0.6) - Indha 0.6 thaan opacity (0-1 varaikum kudukalam)
         // 0.6 na 60% black layer irukkum. 0.3-ku mathuna light-a dark aagum.
         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("${MARS_MACHINERY_BANNERS}")`,
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
        <h1 className="hero-title ">ADVANCED FABRICATION MACHINERY</h1>
      </section>

        <section className="precision-section py-5">
        <div className="container">
          {/* Row 1: Title, Text & Button */}
          <div className="row align-items-start mb-4">
            <div className="col-lg-9">
              <h2 className="title-text text-center text-lg-start">
                PRECISION FABRICATION<br/> WITH MODERN MACHINERY
              </h2>
              <p className="mb-3 text-black compact-text maindess text-center text-lg-start pe-lg-4">
                As one of the trusted Cargo Container Manufacturers in Madurai, Mars Automotive
Designers utilizes advanced fabrication machinery, precision engineering, and skilled
craftsmanship to manufacture durable truck containers for light commercial and heavyduty vehicles, ensuring reliable quality and consistent performance.
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
                src={MARS_MACHINERY_1}
                className="img-fluid w-100  main-service-img"
                alt="Welding"
              />
            </div>
      
            {/* Right Column: Small Images, Text & Cards */}
            <div className="col-lg-6 pl-lg-4">
              <div className="row g-2 mb-4 image-container-row">
                <div className="col-6">
                  <img
                    src={MARS_MACHINERY_2}
                    className="img-fluid w-100 rounded-0"
                    alt="Welder"
                  />
                </div>
                <div className="col-6">
                  <img
                    src={MARS_MACHINERY_3}
                    className="img-fluid w-100 rounded-0"
                    alt="Service"
                  />
                </div>
              </div>
      
              <p className="service-desc-text maindess text-center text-lg-start">
                Our manufacturing process focuses on precision, structural strength, and efficient
               production, combining modern equipment with strict quality standards to deliver
                durable truck containers that provide long-term reliability, operational efficiency, and
                dependable performance.
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
          <p className="text-center mb-5">
            Advanced fabrication machinery delivering precision, strength, and manufacturing efficiency.
          </p>
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

export default ServiceDetail2;
