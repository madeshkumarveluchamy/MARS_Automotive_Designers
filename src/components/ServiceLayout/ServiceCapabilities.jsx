import React from 'react';
import './css/ServiceCapabilities.css';
import capabilities1 from "../../assets/capabilities1.webp";
import capabilities2 from "../../assets/capabilities2.webp"
import capabilities3 from "../../assets/capabilities3.webp"
// Import your orange SVGs here
// import techIcon from '../assets/gear-icon.svg';

const ServiceCapabilities = () => {
  return (
    <section className="capabilities-bg" data-bg="white">
      <div className="container py-3 ">
        <div className="row">
          
          {/* Column 1: Advanced Fabrication */}
          <div className="col-lg-4 capability-col my-3 text-center text-md-start">
            <div className="ps-4 py-4 ">
              <div className="cap-icon-wrapper mb-4">
                <img src={capabilities1} alt="Tech" className="cap-icon-img" />
              </div>
              <h2 className="cap-main-heading text-white text-uppercase maintit">
                Advanced Machinery
              </h2>
              <ul className="cap-list maindes  list-unstyled mt-4 ps-md-0">
                <li >HYDRAULIC PRESS BRAKE</li>
                <li>SHEARING & FORMING MACHINE</li>
                <li>MIG & ARC WELDING</li>
                <li> EOT CRANE SYSTEM</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Custom Design */}
          <div className="col-lg-4 capability-col my-3">
            <div className="py-4 text-center text-md-start">
              <div className="cap-icon-wrapper mb-4">
                <img src={capabilities2} alt="Design" className="cap-icon-img" />
              </div>
              <h2 className="cap-main-heading text-white maintit text-uppercase">
                Premium Materials
              </h2>
              <p className="cap-description maindes text-secondary mt-4">
                We manufacture every truck container using premium materials from trusted brands to ensure
superior structural strength, durability, corrosion resistance, and long-term reliability for
commercial transportation applications.
              </p>
              <div className="mt-4">
                <span className="orange-link-text text-uppercase fw-bold">TATA / JINDAL / JSW STEEL</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quality & Compliance */}
          <div className="col-lg-4 capability-col my-3">
            <div className="ps-4 py-4 text-center text-md-start">
              <div className="cap-icon-wrapper mb-4">
                <img src={capabilities3} alt="Quality" className="cap-icon-img" />
              </div>
              <h2 className="cap-main-heading maintit text-white text-uppercase">
                Complimentary
              </h2>
              <ul className="cap-list  list-unstyled mt-4 ps-2 ps-md-0 maindes">
                <li>BATTERY SAFETY GUARD </li>
                <li>LED SIDE INDICATORS </li>
                <li>FOOT STEP</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;