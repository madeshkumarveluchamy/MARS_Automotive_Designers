import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./css/About.css";
import { Link } from "react-router-dom";

// Assets
import aboutclients from "../../../assets/homepage/MARS_HOME_ABOUT_IMAGE.webp";
import aboutsmallimage1 from "../../../assets/aboutsmallimage1.webp";
import aboutsmallimage2 from "../../../assets/aboutsmallimage2.webp";
import aboutsmallimage3 from "../../../assets/aboutsmallimage3.webp";
import aboutsmallimage5 from "../../../assets/aboutsmallimage5.webp";
import aboutsmallimage6 from "../../../assets/aboutsmallimage6.webp";
import aboutchangeimg1 from "../../../assets/MARS-Requirement & Design Planning-01.webp";
import aboutchangeimg2 from "../../../assets/MARS -Material Selection-02.webp";
import aboutchangeimg3 from "../../../assets/MARS-Frame Fabrication-03.webp";
import aboutchangeimg4 from "../../../assets/MARS-Panel & Container Assembly-04.webp";
import aboutchangeimg5 from "../../../assets/MARS-Surface Finishing & Painting-05.webp";
import aboutchangeimg6 from "../../../assets/MARS-Quality Inspection & Delivery-06.webp";

const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const digits = Array.from(String(value));

  return (
    <span ref={ref} className="homeaboutslot-wrapper-inline">
      {digits.map((digit, i) => {
        if (isNaN(parseInt(digit)))
          return (
            <span key={i} className="homeaboutslot-static-char">
              {digit}
            </span>
          );
        const isOdd = i % 2 !== 0;
        const finalDirection = isOdd
          ? baseDirection === "up"
            ? "down"
            : "up"
          : baseDirection;

        return (
          <span key={i} className="homeaboutdigit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={
                isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}
              }
              transition={{
                duration: 2.5,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: i * 0.1,
              }}
              className="homeaboutdigit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <span key={num}>{num}</span>
                  ))}
                  <span className="homeabouttarget-digit">{digit}</span>
                </>
              ) : (
                <>
                  <span className="homeabouttarget-digit">{digit}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
                    <span key={num}>{num}</span>
                  ))}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

const About = () => {
  const servicesData = [
    {
      id: "img1",
      title: "REQUIREMENT & DESIGN PLANNING",
      desc: "Developing truck container solutions based on customer requirements and vehicle specifications.",
      icon: aboutsmallimage1,
      image: aboutchangeimg1,
    },
    {
      id: "img2",
      title: "MATERIAL SELECTION",
      desc: "Selecting quality-tested materials for strength, durability, and reliable performance.",
      icon: aboutsmallimage2,
      image: aboutchangeimg2,
    },
    {
      id: "img3",
      title: "FRAME FABRICATION",
      desc: "Precision fabrication techniques ensure durable container frames for every application.",
      icon: aboutsmallimage3,
      image: aboutchangeimg3,
    },
    {
      id: "img4",
      title: "PANEL & INSULATION INSTALLATION",
      desc: "Accurate panel installation and assembly for reliable truck container construction.",
      icon: aboutsmallimage1,
      image: aboutchangeimg4,
    },
    {
      id: "img5",
      title: "SURFACE FINISHING & PAINTING",
      desc: "Professional finishing and protective coatings enhance durability and appearance.",
      icon: aboutsmallimage5,
      image: aboutchangeimg5,
    },
    {
      id: "img6",
      title: "QUALITY INSPECTION & DELIVERY",
      desc: "Comprehensive inspections ensure every truck container meets quality and delivery standards.",
      icon: aboutsmallimage6,
      image: aboutchangeimg6,
    },
  ];

  const [activeImageId, setActiveImageId] = useState("img1");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHover = (id) => {
    if (isDesktop) {
      setActiveImageId(id);
    }
  };

  return (
    <section className="homeaboutabout-section" data-bg="black" id="about">
      <div className="container-xxl">
        {/* ================= TOP METRICS STATS HEADER BLOCK ================= */}
        <div className="row ps-3 mb-3 align-items-center homeaboutstats-row d-flex flex-md-row-reverse">
          <div className="col-12 col-md-9 ps-lg-5 flex-wrap text-center text-lg-start">
            <p className="homeabouttext-oranges fw-bold mb-md-2 homeaboutmainsub">ABOUT US</p>
            <h2 className="homeaboutabout-heading fw-bold mb-md-4 homeaboutmantit">
              MARS Automotive Designers is a trusted Truck Container Manufacturer in Madurai, delivering durable truck containers for commercial vehicles.
            </h2>
            <p className="text-muted homeaboutabout-desc text-center text-lg-start w-100 homeaboutmaindes">
              MARS Automotive Designers specializes in truck container manufacturing,
              delivering strong, reliable, and precision built container
              solutions for logistics, cargo transportation, and commercial
              vehicle applications
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link to="/about-us" className="text-decoration-none">
                <button className="homeaboutblog-swap">
                  <span className="homeaboutarrow">→</span>
                  <span className="homeabouttext">Learn About Mars</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 pe-3 border-dark homeaboutabout-us homeaboutstats-left">
            <h1 className="display-1 fw-bold mb-0 homeaboutmain-stat-container">
              <SlotCounter value={30} baseDirection="up" />
              <span className="homeaboutstat-suffix">+</span>
            </h1>

            <p className="fw-bold homeaboutletter-spacing-1 d-flex justify-content-center">
              YEARS OF EXPERTISE
            </p>
            <div className="homeabouthorizontalLine"></div>
            <div className="mt-5 d-flex align-items-center justify-content-center gap-3">
              <div className="homeaboutclient-avatars">
                <img
                  src={aboutclients}
                  alt="Happy Clients"
                  className="homeaboutsingle-avatar-img"
                />
              </div>

              <div className="homeaboutclient-stats">
                <div className="fw-bold mb-0 homeaboutcount-text homeaboutsecondary-stat-container position-relative">
                  <SlotCounter
                    value={4}
                    baseDirection="up"
                    className="text-center homeaboutsingam"
                  />
                  <span className="homeaboutstat-suffix">.</span>
                  <SlotCounter
                    value={5}
                    baseDirection="down"
                    className="text-center"
                  />
                  <span className="homeaboutstat-suffix">K</span>
                </div>
                <p className="small text-muted mb-0 homeabouthappy-label">
                  HAPPY CLIENTS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LOWER ROW GRID PIPELINE ================= */}
        <div className="row g-5 mt-3">
          {/* Left Column: Service Selection Lists */}
          <div className="col-lg-6">
            <div className="row g-0 homeaboutservices-grid">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="col-md-6 homeaboutservice-item px-4 py-2"
                  onMouseEnter={() => handleHover(service.id)}
                >
                  <div className="homeaboutservice-icon-wrapper mb-3 d-flex  justify-content-center justify-content-lg-start">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="homeaboutservice-geometric-icon"
                    />
                  </div>
                  <h6 className="fw-bold mb-3 homeaboutservice-title d-flex justify-content-center justify-content-lg-start text-center text-lg-start homeaboutmainsub">
                    {service.title}
                  </h6>
                  <p className="small text-muted mb-3 homeaboutservice-desc d-flex justify-content-center justify-content-lg-start text-center text-lg-start homeaboutmaindes">
                    {service.desc}
                  </p>

                  {/* On Mobile/Tablet Viewports Layer Renders Directly Below Description */}
                  {!isDesktop && (
                    <div className="homeaboutmobile-service-image mb-3 text-center homeaboutwelding-img">
                      <img
                        src={service.image}
                        className="img-fluid rounded homeaboutwelding-img-img"
                        alt={service.title}
                      />
                    </div>
                  )}

                
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          {isDesktop && (
            <div className="col-lg-6">
              <div className="homeaboutwelding-img-wrapper shadow-lg position-relative bg-dark rounded-3 overflow-hidden">
                {servicesData.map((service) => (
                  <img
                    key={service.id}
                    src={service.image}
                    alt={service.title}
                    className={`homeaboutpreloaded-dynamic-swap-img position-absolute top-0 start-0 w-100 h-100 object-fit-cover ${
                      activeImageId === service.id
                        ? "homeaboutopacity-visible"
                        : "homeaboutopacity-hidden"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;