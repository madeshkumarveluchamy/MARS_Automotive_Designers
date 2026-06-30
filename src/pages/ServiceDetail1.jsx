import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Link } from "react-router-dom"
import Footer from "../components/common/Footer";
import "./ServiceDetail.css";
import MARS_RETAIL_BANNERS from "../assets/mars-solutions/MARS-RETAIL-BANNERS.webp";
import MANUFACTURING_EXCELLENCE_IMAGES1 from "../assets/mars-solutions/MANUFACTURING EXCELLENCE IMAGES (3).webp";
import MANUFACTURING_EXCELLENCE_IMAGES2 from "../assets/mars-solutions/MANUFACTURING EXCELLENCE IMAGES (2).webp";
import MANUFACTURING_EXCELLENCE_IMAGES3 from "../assets/mars-solutions/MANUFACTURING EXCELLENCE IMAGES (1).webp";
import Navbar from "../components/common/Navbar";
import FabricationProtocol from "../components/AboutLayout/AboutFabrication";

const ServiceDetail1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const capabilities = [
    {
      title: "REQUIREMENT PLANNING",
      desc: "We understand vehicle size, load needs, and customer\n requirements before starting each truck container project.",
    },
    {
      title: "PRECISION FABRICATION",
      desc: "Truck containers are manufactured using skilled welding,\n cutting, bending, and assembly processes for reliable structure",
    },
    {
      title: "FINAL INSPECTION",
      desc: "Every container is checked for finishing, fitting, strength,\n and delivery readiness before customer handover",
    },
  ];

  const serviceLinks = [
    {
      title: "SAFETY FIRST",
      desc: "Every truck container is manufactured under strict quality standards to ensure strength, safety, and dependable performance.",
    },
    {
      title: "Advanced Fabrication",
      desc: "Modern machinery and skilled craftsmanship deliver precision-built truck containers with consistent manufacturing quality.",
    },
    {
      title: "Timely Delivery",
      desc: "Efficient production planning helps us deliver retail and custom truck containers within committed timelines.",
    },
  ];

  return (
    <div className="service-detail-root">
      <Navbar />
      <section
        className="detail-hero"
        style={{ // rgba(0, 0, 0, 0.6) - Indha 0.6 thaan opacity (0-1 varaikum kudukalam)
    // 0.6 na 60% black layer irukkum. 0.3-ku mathuna light-a dark aagum.
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${MARS_RETAIL_BANNERS}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // Hero section height-a specify pannunga, illana image theriyathu
    minHeight: "400px", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center" }}
      >
        <div className="overlay.maintit"></div>
        <h1 className="hero-title ">MANUFACTURING EXCELLENCE</h1>
      </section>

     <section className="precision-section py-5">
  <div className="container">
    {/* Row 1: Title, Text & Button */}
    <div className="row align-items-start mb-4">
      <div className="col-lg-9">
        <h2 className="title-text text-center text-lg-start">
          PRECISION TRUCK <br /> CONTAINER MANUFACTURING
        </h2>
        <p className="mb-3 text-black compact-text maindess text-center text-lg-start pe-lg-4 ">
          At our manufacturing facility, we specialize in precision truck
          container fabrication for Light Weight Vehicles, Heavy Weight
          Vehicles, and commercial transport applications. As one of the
          trusted Truck Container Dealers in Madurai, we manufacture
          durable container solutions designed to meet diverse
          transportation requirements with consistent quality and reliable
          performance.
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
      <div className="col-lg-6 mb-4 mb-lg-0 bigimage">
        <img
          src={MANUFACTURING_EXCELLENCE_IMAGES1}
          className="img-fluid w-100  main-service-img"
          alt="Welding"
        />
      </div>

      {/* Right Column: Small Images, Text & Cards */}
      <div className="col-lg-6 pl-lg-4">
        <div className="row g-2 mb-4 image-container-row">
          <div className="col-6">
            <img
              src={MANUFACTURING_EXCELLENCE_IMAGES2}
              className="img-fluid w-100 rounded-0"
              alt="Welder"
            />
          </div>
          <div className="col-6">
            <img
              src={MANUFACTURING_EXCELLENCE_IMAGES3}
              className="img-fluid w-100 rounded-0"
              alt="Service"
            />
          </div>
        </div>

        <p className="service-desc-text maindess text-center text-lg-start">
          Our manufacturing process combines skilled craftsmanship,
          advanced machinery, and quality-tested materials to deliver
          truck containers that provide long-term durability, structural
          strength, and dependable performance for businesses across
          various industries.
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
      <section className="pb-5 mb-5">
        <FabricationProtocol />
      </section>

      <section className="capabilities-bg py-5 ">
        <div className="container">
          <h2 className="text-center mb-2 maintit">OUR CAPABILITIES</h2>
          <p className="text-center mb-5 mainsub">
            We utilize advanced manufacturing processes to deliver durable,
            precision-built truck container solutions:
          </p>
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              className="cap-row"
              whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
              transition={{ duration: 0.3 }}
            >
              <h4 class="title-with-arrow">
                {item.title}
                <span class="arrow-mobile">↗</span>{" "}
              </h4>
              <p>{item.desc}</p>
              <span class="arrow-desktop">↗</span>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail1;
