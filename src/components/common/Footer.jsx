import React from "react";
import "../layout/css/Footer.css";
import marslogo from "../../assets/marslogo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
const forceScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    
    // Oruvela CSS lock iruntha ithu help pannum
    const appContainer = document.querySelector(".App");
    if (appContainer) {
      appContainer.scrollTop = 0;
    }
  };
  return (
    <footer className="footer-section bg-black text-white pt-5 pb-3">
      <div className="container-xxl">
        {/* Top Heading */}
        <div className="row mb-5 align-items-center ps-md-5">
          <div className="col-lg-9">
            <h2 className="footer-main-title text-center text-lg-start maintit">
              DELIVERING DURABLE <br/>TRUCK CONTAINERS FOR <br/> EVERY TRANSPORTATION NEED
            </h2>
          </div>
          <div className="col-lg-3 text-center text-lg-end mt-3 mt-lg-0">
            <div className="icon-frame mx-auto mx-lg-0">
              <span className="corner top-left"></span>
              <span className="corner top-right"></span>
              <span className="corner bottom-left"></span>
              <span className="corner bottom-right"></span>
              <div className="arrow-footer"></div>
            </div>
          </div>
        </div>

        {/* Footer Main Grid */}
        <div className="row mt-5 ps-md-5">
          {/* Left Column: Logo & Contact together */}
          <div className="col-md-7 border-firsts-custom d-flex flex-column flex-md-row">
            {/* Logo Section */}
            <div className="footer-div p-4 text-center text-md-start">
              <img src={marslogo} alt="Mars Logo" className="footer-logo mb-4" />
              <p className="footer-desc small maindes mx-auto mx-md-0">
                Advancing innovation in heavy vehicle body manufacturing with efficient and responsible production practices.
              </p>
              <div className="d-flex justify-content-center justify-content-md-start">
              <Link to="/contact-us" onClick={forceScroll} className="text-decoration-none">
                <button className="mt-3 blog-swap-Footers">
                  <span className="arrows">→</span>
                  <span className="texts">GET A QUOTE</span>
                </button>
              </Link>
              </div>
            </div>

            {/* Contact Section (Beside Logo) */}
            <div className="footer-col p-4 border-start-md">
              <div className="mb-4">
                <h6 className="footer-label mb-2 mainsub">CONTACT</h6>
                <p className="small mb-0 maindes">(+91)9876543210</p>
              </div>
              <div>
                <h6 className="footer-label mb-2 mainsub">ADDRESS</h6>
                <p className="small maindes">
                  418/3A, 418/3B, Sholavandan to Nagari Road, Taluk, Vadipatti, Sholavandan, Madurai, Tamil Nadu 625214<br />
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-2 px-md-4 border-starts-custom p-4 text-center text-md-start">
            <h6 className="footer-label mb-4 mainsub">QUICK LINKS</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/" className="text-white" onClick={forceScroll}>Home</Link></li>
              <li><Link to="/about-us" className="text-white" onClick={forceScroll}>About</Link></li>
              <li><Link to="/mars-solutions" className="text-white" onClick={forceScroll}>Mars Solution</Link></li>
              <li><Link to="/contact-us" className="text-white" onClick={forceScroll}>Contact</Link></li>
              <li><Link to="/blog" className="text-white" onClick={forceScroll}>Blog</Link></li>
            </ul>
          </div>

          {/* Utility Pages Column */}
          <div className="col-md-3 ps-md-4 border-starts-custom p-4 text-center text-md-start">
            <h6 className="footer-label mb-4 mainsub">UTILITY PAGES</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/gallery" className="text-white" onClick={forceScroll}>Gallery</Link></li>
              <li><Link to="/contact-us" className="text-white" onClick={forceScroll}>Get Quote</Link></li>
              <li><Link to="/terms" className="text-white" onClick={forceScroll}>Terms & Conditions</Link></li>
              <li><Link to="/location" className="text-white" onClick={forceScroll}>Mars Location</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;