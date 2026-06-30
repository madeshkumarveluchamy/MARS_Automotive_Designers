import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import "./css/ContactForm.css";
import contact_form from "../../assets/contact-us/Contact-images.webp"
import ContactForms from './ContactForms';

const ContactForm = () => {
  return (
    <section className="contact-form-section bg-custom-dark text-white py-5" data-bg="white">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">
          
          {/* Left Side: The Industrial Form */}
          <ContactForms /> 

          {/* Right Side: The Image Link Area */}
          <div className="col-lg-6 position-relative">
            <Link to="/projects" className="text-decoration-none h-100 d-block">
              <div className="industrial-image-container h-100">
                <img 
                  src={contact_form} 
                  alt="Industrial Machine" 
                  className="industrial-bg-img"
                />
                
                {/* Glassmorphism Text Box */}
                <div className="glass-info-card p-4">
                  <div className="vertical-orange-line"></div>
                  <h5 className="fw-bold text-uppercase m-0 mainsub contactTitle">Machine Precision</h5>
                  <p className="small text-white mt-2 mb-0 maindes">
                    Every inquiry is analyzed by our senior architectural engineers before the first rivet is placed.
                  </p>
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;