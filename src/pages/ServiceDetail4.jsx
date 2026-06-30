import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "../components/common/Footer";
import {Link} from "react-router-dom"
import "./ServiceDetail.css";

// Same images retained
import MARS_AFTER_SALES_BANNER from "../assets/mars-solutions/MARS-AFTER-SALES-BANNER.webp"
import service123 from "../assets/mars-solutions/MARS-AFTER-SALES (3).webp";
import service456 from "../assets/mars-solutions/MARS-AFTER-SALES (1).webp";
import service789 from "../assets/mars-solutions/MARS-AFTER-SALES (2).webp";
import Navbar from '../components/common/Navbar';

const ServiceDetail4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const capabilities = [
    { title: "FC ASSISTANCE", desc: "Support for Fitness Certificate (FC) requirements, helping customers maintain vehicle compliance and operational readiness." },
    { title: "24×7 CUSTOMER SUPPORT", desc: "Our automated query support and dedicated assistance help customers receive quick responses whenever they need information or guidance." },
    { title: "SERVICE & WHATSAPP SUPPORT", desc: "Service assistance is available within 6 working days, while holiday support is provided through WhatsApp communication for uninterrupted customer care." },
  ];

  const serviceLinks = [
    { title: "FC SUPPORT", desc: "We assist customers with Fitness Certificate (FC) requirements for continued vehicle compliance." },
    { title: "24×7 CUSTOMER CARE", desc: "Our support team and automated query system provide prompt assistance whenever you need help." },
    { title: "WHATSAPP ASSISTANCE", desc: "Holiday communication and service coordination are available through WhatsApp for customer convenience." }
  ];

  return (
    <div className="service-detail-root">
      <Navbar />
      <section
              className="detail-hero"
              style={{ // rgba(0, 0, 0, 0.6) - Indha 0.6 thaan opacity (0-1 varaikum kudukalam)
          // 0.6 na 60% black layer irukkum. 0.3-ku mathuna light-a dark aagum.
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${MARS_AFTER_SALES_BANNER}")`,
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
        <h1 className="hero-title">AFTER-SALES SUPPORT</h1>
      </section>

       <section className="precision-section py-5">
       <div className="container">
         {/* Row 1: Title, Text & Button */}
         <div className="row align-items-start mb-4">
           <div className="col-lg-9">
             <h2 className="title-text text-center text-lg-start">
               DEPENDABLE SUPPORT FOR<br/> LONG-TERM CONTAINER PERFORMANCE
             </h2>
             <p className="mb-3 text-black compact-text maindess text-center text-lg-start pe-lg-4">
               As one of the trusted Heavy Truck Container Manufacturers in Madurai, Mars
Automotive Designers provides dependable after-sales support to ensure every truck
container continues to perform efficiently. From post-delivery assistance to service
coordination, our team is committed to helping customers maintain reliable
transportation operations.
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
               src={service123}
               className="img-fluid w-100  main-service-img"
               alt="Welding"
             />
           </div>
     
           {/* Right Column: Small Images, Text & Cards */}
           <div className="col-lg-6 pl-lg-4">
             <div className="row g-2 mb-4 image-container-row">
               <div className="col-6">
                 <img
                   src={service456}
                   className="img-fluid w-100 rounded-0"
                   alt="Welder"
                 />
               </div>
               <div className="col-6">
                 <img
                   src={service789}
                   className="img-fluid w-100 rounded-0"
                   alt="Service"
                 />
               </div>
             </div>
     
             <p className="service-desc-text maindess text-center text-lg-start">
               Our support services focus on timely assistance, customer communication, and
continuous service, ensuring every truck container delivers dependable performance
throughout its operational life.
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
          <h2 className="text-center mb-2">OUR SUPPORT CAPABILITIES</h2>
          <p className="text-center mb-5">Dedicated after-sales support designed to keep your truck containers operating efficiently and reliably.</p>
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

export default ServiceDetail4;