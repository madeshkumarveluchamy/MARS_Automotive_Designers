import React from 'react';
import './css/FAQSection.css';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  const faqs = [
    {
      id: "01",
      question: "What types of truck containers are available? ",
      answer: "Mars Automotive Designers manufactures truck containers for Light Commercial Vehicles, Heavy Commercial Vehicles, commercial vehicles, and cargo transport needs. We provide both retail-based and order-based container solutions."
    },
    {
      id: "02",
      question: "What size truck containers do manufacturers offer",
      answer: "We manufacture truck containers from 7 feet to 32 feet, suitable for small delivery vehicles, light commercial vehicles, heavy trucks, and custom cargo applications."
    },
    {
      id: "03",
      question: "Do you provide custom truck container solutions?",
      answer: "Yes. We provide order-based truck container manufacturing according to vehicle size, load requirement, business usage, and customer specifications."
    },
    {
      id: "04",
      question: "Do you offer ready-made truck containers for fast delivery?",
      answer: "Yes. Retail-based truck containers are available for faster delivery. Based on availability, retail containers can usually be delivered within half a day to one days."
    },
    {
      id: "05",
      question: "What is the delivery time for an order-based truck container?",
      answer: "Order-based truck containers are usually completed within 3 days, depending on size, design requirements, and customization needs."
    },
    {
      id: "06",
      question: "Who are the best truck container manufacturers in Madurai?",
      answer: "Mars Automotive Designers is one of the trusted Truck Container Manufacturers in Madurai, offering durable containers for LCV, HCV, commercial vehicles, and custom transport needs."
    },
    {
      id: "07",
      question: "What materials are used in truck container manufacturing?",
      answer: "We use quality-tested steel, durable structural components, and reliable fabrication materials to ensure strength, safety, and long-term performance."
    },
    {
      id: "08",
      question: "Why choose Mars Automotive Designers?",
      answer: "We use quality-tested steel, durable structural components, and reliable fabrication materials to ensure strength, safety, and long-term performance."
    },

  ];

  return (
    <section className="faq-ssection bg-black text-white py-5" data-bg="white">
      <div className="container-xxl py-5">
        {/* Main Title */}
        <div className="text-center mb-5">
          <h2 className="faq-smain-title maintit">
            BUILDING DURABLE TRUCK <br/> CONTAINERS FOR LIGHT WEIGHT <br/>VEHICLES, HEAVY WEIGHT VEHICLES, AND<br/> COMMERCIAL TRANSPORT NEEDS 
          </h2>
        </div>

        {/* FAQ Rows Container */}
        <div className="faq-slist mt-5">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-srow py-4 px-3 border-bottom border-secondary">
              <div className="row align-items-center text-center text-lg-start py-1 py-lg-2">
                {/* Number */}
                <div className="col-md-1">
                  <span className="faq-snumber fw-bold">{faq.id}</span>
                </div>
                {/* Question */}
                <div className="col-md-5">
                  <h6 className="faq-squestion fw-bold mb-0 text-uppercase mainsub">{faq.question}</h6>
                </div>
                {/* Answer */}
                <div className="col-md-5">
                  <p className="faq-sanswer fw-light maindes mb-0">{faq.answer}</p>
                </div>
                {/* Arrow Icon */}
                <div className="col-md-1 text-end">
                  <span className="faq-sarrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-5 d-flex justify-content-center">
          <Link className='text-decoration-none' to="/contact-us">
          <button className="still-questions-btn blog-swap-FAQs">
            <span className="arrow">→</span>
            <span className="text">STILL HAVE QUESTIONS?</span>
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;