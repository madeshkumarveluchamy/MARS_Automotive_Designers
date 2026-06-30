import React from 'react';
import './css/Operations.css';

// --- IMPORT YOUR MAIN IMAGE ASSET ---
import retail_section_image from '../../assets/homepage/retail section image.webp';
import {Link } from "react-router-dom";

const CargoSolutions = () => {
  const workflowSteps = [
    { num: "01", title: "READY-MADE STOCK", desc: "Browse our ready-made truck containers available in multiple sizes, designed to meet immediate transportation and business requirements" },
    { num: "02", title: "QUICK DELIVERY", desc: "Our retail-based truck containers are ready for dispatch within half a day to one day, helping minimize vehicle downtime and keep business operations running efficiently." },
    { num: "03", title: "CUSTOM MODIFICATION", desc: "Minor modifications and finishing adjustments are completed to ensure the container fits your vehicle and operational requirements perfectly." },
    { num: "04", title: "QUALITY HANDOVER", desc: "Every container undergoes a detailed quality inspection before delivery, ensuring durability, reliability, and readiness for immediate use." }
  ];

  return (
    <section className="cargo-solutions-section bg-white text-dark" id="solutions">
      <div className="container-fluid cargo-fluid-holder px-3 px-sm-4 px-md-5">
        
        {/* ================= TOP HEADER HEADER BLOCK ================= */}
        <div className="text-center cargo-top-header mx-auto mb-5">
          <p className="cargo-mini-badge text-uppercase tracking-widest mt-3 mb-2 inter-font fw-bold mainsub">
            READY-MADE TRUCK CONTAINER SOLUTIONS 
          </p>
          <h2 className="cargo-main-headline fw-bold text-uppercase inter-font m-0 inter-font maintit">
            Retail-Based Truck Containers with Fast Delivery
          </h2>
          <p className="cargo-top-subdesc mx-auto hanken-grotesk-font fw-normal text-muted mt-2 inter-font maindes">
            Need a truck container without a long waiting period? Mars Automotive Designers offers retail-based truck containers that are ready for dispatch within half a day to one day, helping businesses minimize downtime and keep their operations moving. Every container is manufactured using quality-tested materials and precision engineering to ensure durability, safety, and dependable performance.
          </p>
        </div>

        {/* ================= CENTER SHOWCASE MATRIX ROW ================= */}
        <div className="row align-items-center g-4 g-lg-5 mb-5 cargo-middle-showcase">
          
          {/* LEFT COLUMN: HIGH-RES RUGGED VEHICLE IMAGE BLOCK */}
          <div className="col-12 col-lg-6 cargo-image-engine-col">
            <div className="cargo-showcase-img-wrapper rounded-2 overflow-hidden shadow-sm">
              <img 
                src={retail_section_image} 
                alt="MARS Automotive premium industrial cargo container truck manufacturing bay" 
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: CORE VALUES CHECK LIST + CTA CAPSEL BUTTON */}
          <div className="col-12 col-lg-6 cargo-content-engine-col ps-lg-5">
            <h3 className="why-choose-title fw-bold text-uppercase inter-font mb-3 inter-font mainsub">Why Choose Our Retail Containers?</h3>
            <p className="why-choose-subtext  text-muted mb-4 inter-font maindes" >
              We build durable truck containers through precision manufacturing and dependable
            </p>

            {/* INTEGRATED ARCHITECTURAL LIST SEGMENTS */}
            <ul className="cargo-features-checklist p-0 mb-4 d-flex flex-column gap-3 inter-font  maindes">
              <li className="d-flex align-items-center gap-3 inter-font fw-semibold  maindes">
                <span className="check-marker-icon">✓</span> Half a Day to One Day Delivery
              </li>
              <li className="d-flex align-items-center gap-3 inter-font fw-semibold  maindes">
                <span className="check-marker-icon">✓</span>  Ready-Made Retail Containers
              </li>
              <li className="d-flex align-items-center gap-3 inter-font fw-semibold  maindes">
                <span className="check-marker-icon">✓</span> 7 Feet to 32 Feet Container lengths
              </li>
              <li className="d-flex align-items-center gap-3 inter-font fw-semibold  maindes">
                <span className="check-marker-icon">✓</span> Manufactured for Light & Heavy Commercial Vehicles
              </li>
              <li className="d-flex align-items-center gap-3 inter-font fw-semibold  maindes">
                <span className="check-marker-icon">✓</span>Advanced Fabrication Technology
              </li>
              <li className="d-flex align-items-center gap-3 inter-font fw-semibold  maindes">
                <span className="check-marker-icon">✓</span>Quality-Assured Manufacturing
              </li>
            </ul>

            {/* THE SIGNATURE CAPSULE OVERLAP SLIDE BUTTON */}
            <div className="cargo-action-holder mt-4">
              <Link className="text-decoration-none" to="/contact-us" >
              <button className="btn cargo-retail-sales-btn d-inline-flex align-items-center gap-3 text-capitalize inter-font fw-bold  maindes">
                Check Container Availability
                <span className="cargo-arrow-circle d-flex align-items-center justify-content-center">
                  ➔
                </span>
              </button>
              </Link>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM PIPELINE STEPS GRID HORIZONTAL ================= */}
        <div className="cargo-bottom-workflow-grid border-top">
          <div className="row g-4 justify-content-center">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-3 workflow-step-card-col p-0 p-lg-3">
                <div className="workflow-step-card text-center d-flex flex-column align-items-center px-3">
                  
                  {/* Outer circle with absolute index text numbers layer */}
                  <div className="workflow-number-badge-sphere d-flex align-items-center justify-content-center position-relative mb-4">
                    <span className="inner-badge-dot-index position-absolute inter-font">{step.num}</span>
                  </div>

                  <h5 className="workflow-step-title fw-bold text-uppercase inter-font mb-2 inter-font mainsub">{step.title}</h5>
                  <p className="workflow-step-desc m-0 hanken-grotesk-font text-muted fw-normal inter-font  maindes">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CargoSolutions;