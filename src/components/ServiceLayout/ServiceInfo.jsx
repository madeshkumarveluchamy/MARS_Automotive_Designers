import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Link import panniruken
import "./css/ServiceInfo.css";
import serviceicon1 from "../../assets/serviceicon1.webp";
import serviceicon2 from "../../assets/serviceicon2.webp";
import serviceicon3 from "../../assets/serviceicon3.webp";
import serviceicon4 from "../../assets/serviceicon4.webp";

const ServiceInfo = () => {
  const infoData = [
    { id: 1,path:"mars-solutions/manufacturing-excellence-hub" , title: "MANUFACTURING EXCELLENCE", subtitle: "HUB", iconImg: serviceicon1, details: "Precision-built retail and custom truck containers manufactured using advanced fabrication methods, quality materials, and skilled craftsmanship for reliable transportation solutions.", linkText: "Explore On Service", linkSymbol: "↗" },
    { id: 2, path:"mars-solutions/advanced-machinery-sales",title: "ADVANCED MACHINERY", subtitle: "SALES", iconImg: serviceicon2, details: "Hydraulic press brakes, shearing machines, forming equipment, MIG welding, drilling, cutting, ARC welding, and EOT cranes ensure accurate, efficient manufacturing.",linkText: "Explore Services", linkSymbol: "↗" },
    { id: 3,path:"mars-solutions/premium-materials-enquiry", title: "PREMIUM MATERIALS", subtitle: "INQUIRY", iconImg: serviceicon3, details: "Quality-tested Tata, Jindal, and JSW sheet metal, JSW structural sections, and Asian Paints coatings ensure strength, durability, and lasting performance.", linkText: "Explore Services", linkSymbol: "↗" },
    { id: 4,path:"mars-solutions/after-sales-support-hub", title: "AFTER-SALES SUPPORT", subtitle: "HUB", iconImg: serviceicon4, details: "FC assistance, 24×7 bot support, six working-day service, and WhatsApp communication provide dependable after-sales support for every customer.", linkText: "Explore Services", linkSymbol: "↗" },
  ];

  return (
    <section className="bg-white border-top border-bottom">
      <div className="container py-5">
        <div className="row g-0">
          {infoData.map((item, index) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3 contact-info-col">
              <motion.div 
                className="pt-3 pb-3 p-md-4 h-100 d-flex flex-column text-center text-md-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="contact-icon-wrapper mb-4">
                  <img src={item.iconImg} alt={item.title} className="contact-icon-img" />
                </div>
                
                <h3 className="contact-info-title text-uppercase mb-3">
                  {item.title} <br /> {item.subtitle}
                </h3>
                
                <div className='d-flex justify-content-center justify-content-md-start'>
                  <p className="contact-info-details mb-4 text-center text-md-start">
                    {item.details}
                  </p>
                </div>

                <div className="mt-auto">
                  {/* INGA THAAN DYNAMIC LINK ADD PANNIRUKKEN */}
                  <Link to={`/${item.path}`} className="contact-info-link text-uppercase fw-bold text-decoration-none">
                    {item.linkText} <span className="ms-1">{item.linkSymbol}</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;