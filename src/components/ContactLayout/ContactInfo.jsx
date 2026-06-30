import React from 'react';
import { motion } from 'framer-motion';
import "./css/ContactInfo.css";
import contacticon1 from "../../assets/contacticon1.webp";
import contacticon2 from "../../assets/contacticon2.webp"
import contacticon3 from "../../assets/contacticon3.webp"

const ContactInfo = () => {
  const infoData = [
    {
      title: "ENGINEERING",
      subtitle: "HUB",
      iconImg: contacticon1,
      details: "418/3A, 418/3B, Sholavandan to Nagari Road, Taluk, Vadipatti, Sholavandan, Tamil Nadu 625214",
      linkText: "VIEW ON MAP",
      linkSymbol: "↗",
      // 💡 நீங்கள் கொடுத்த Google Maps ஷார்ட் லிங்க் இங்கே சேர்க்கப்பட்டுள்ளது
      linkUrl: "https://maps.app.goo.gl/qteSyH1dmX18rDiJ7?g_st=aw",
      target: "_blank" // புதிய டேப்பில் ஓபன் ஆகும்
    },  
    {
      title: "TECHNICAL",
      subtitle: "SALES",
      iconImg: contacticon2,
      details: <>+91 98765 432 01 <br /> Mon — Fri, 08:00 - 18:00 EST</>,
      linkText: "DIRECT CALL",
      linkSymbol: "📞",
      // 💡 Dialpad-க்கு செல்ல
      linkUrl: "tel:+13135550192", 
      target: "_self"
    },
    {
      title: "GENERAL",
      subtitle: "INQUIRY",
      iconImg: contacticon3,
      details: <>support@marsautomotivedesigners.com <br /> Response within 12 technical hours</>,
      linkText: "SEND MESSAGE",
      linkSymbol: "@",
      // 💡 ஈமெயில் ஆப்பிற்கு செல்ல
      linkUrl: "#contact-form",
      target: "_self"
    }
  ];

  return (
    <section className="bg-white border-top border-bottom" data-bg="white">
      <div className="container">
        <div className="row ">
          {infoData.map((item, index) => (
            <div key={index} className="col-md-4 contact-info-col">
              <motion.div 
                className="p-5 h-100 d-flex flex-column align-items-center align-items-md-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="contact-icon-wrapper mb-4">
                  <img src={item.iconImg} alt={item.title} className="contact-icon-img" />
                </div>
                
                <h3 className="contact-info-title text-uppercase text-center text-md-start maintit">
                  {item.title} <br /> {item.subtitle}
                </h3>
                <p className="contact-info-details text-center text-md-start maindes">
                  {item.details}
                </p>
                <div className="mt-5">
                  <a 
                    href={item.linkUrl} 
                    target={item.target} 
                    rel={item.target === "_blank" ? "noopener noreferrer" : ""}
                    className="contact-info-link text-uppercase fw-bold text-center text-md-start maindes"
                  >
                    {item.linkText} <span className="ms-1 ">{item.linkSymbol}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;