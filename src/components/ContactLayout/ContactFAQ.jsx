import React from 'react';
import './css/ContactFAQ.css';

const FAQSection = () => {
  const faqs = [
    {
      id: "01",
      question: "WHO ARE THE BEST TRUCK CONTAINER MANUFACTURERS IN MADURAI?",
      answer: "Mars Automotive Designers is a trusted truck container manufacturer in Madurai, offering retail-ready and custom-built container solutions for light commercial vehicles and heavy-duty transport applications."
    },
    {
      id: "02",
      question: "DO YOU PROVIDE READY-TO-USE TRUCK CONTAINERS?",
      answer: "Yes. We supply ready-to-use truck containers for customers who need faster delivery. Most retail containers are available within one to two working days, depending on stock availability."
    },
    {
      id: "03",
      question: "WHAT SIZES OF TRUCK CONTAINERS DO YOU MANUFACTURE?",
      answer: "We manufacture truck containers from 7 feet to 32 feet, providing reliable solutions for light commercial vehicles and heavy-duty transportation requirements."
    },
    {
      id: "04",
      question: "HOW LONG DOES IT TAKE TO DELIVER A CUSTOM TRUCK CONTAINER?",
      answer: "Custom order-based truck containers are typically manufactured and delivered within three working days, depending on the design specifications and project requirements."
    }
  ];

  return (
    <section className="faq-sections bg-black text-white py-5" data-bg="black">
      <div className="container-xxl py-3">
        {/* Main Title */}
        <div className="text-center mb-5">
          <h2 className="faq-main-titles maintit">
            Reliable Truck Container Solutions <br/>for Businesses Across Madurai<br/> and Tamil Nadu
          </h2>
        </div>

        {/* FAQ Rows Container */}
        <div className="faq-list mt-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-rows py-3 px-3 border-bottom border-secondary">
              <div className="row align-items-center text-center text-lg-start py-1 py-lg-2">
                {/* Number */}
                <div className="col-md-1">
                  <span className="faq-numbers fw-bold maindes">{faq.id}</span>
                </div>
                {/* Question */}
                <div className="col-md-5">
                  <h6 className="faq-questions fw-bold mb-0 text-uppercase mainsub">{faq.question}</h6>
                </div>
                {/* Answer */}
                <div className="col-md-5">
                  <p className="faq-answers small mb-0 maindes">{faq.answer}</p>
                </div>
                {/* Arrow Icon */}
                <div className="col-md-1 text-center text-lg-end">
                  <span className="faq-arrows">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="text-center mt-5 d-flex justify-content-center">
          <a className='text-decoration-none' href='#contactform'>
          <button className="still-questions-btn blog-swap-FAQs">
            <span className="arrow">→</span>
            <span className="text">STILL HAVE QUESTIONS?</span>
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;