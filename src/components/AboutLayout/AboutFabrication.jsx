import React from 'react';
import './css/AboutFabrication.css';

// Unga images a inga import pannikonga
import img1 from "../../assets/mars-solutions/MARS-PROTOCOL IMAGES (1).webp"; 
import img2 from "../../assets/mars-solutions/MARS-PROTOCOL IMAGES (2).webp";
import img3 from "../../assets/mars-solutions/MARS-PROTOCOL IMAGES (3).webp";
import img4 from "../../assets/mars-solutions/MARS-PROTOCOL IMAGES (4).webp";
import img5 from "../../assets/mars-solutions/MARS-PROTOCOL IMAGES (5).webp";

const FabricationProtocol = () => {
  const protocolData = [
    {
      id: "01",
      title: "FLOORING INSTALLATION",
      desc: "High-strength flooring is installed with precision to create a durable foundation for every truck container.",
      img: img1
    },
    {
      id: "02",
      title: "TINKERING & PAINTING",
      desc: "Skilled fabrication, surface preparation, and premium painting ensure durability, corrosion resistance, and a professional finish.",
      img: img2
    },
    {
      id: "03",
      title: "FLOORING SHEET FITTING",
      desc: "Quality-tested flooring sheets are accurately fitted to enhance load-bearing capacity and long-term structural performance.",
      img: img3
    },
    {
      id: "04",
      title: "CONTAINER & DOOR ASSEMBLY",
      desc: "Arrow-top container structures and door assemblies are precisely installed for secure operation and reliable cargo protection.",
      img: img4
    },
    {
      id: "05",
      title: "FINAL FIXING & DELIVERY",
      desc: "Every truck container undergoes final inspection, finishing, and secure fitting before timely delivery to the customer.",
      img: img5
    }
  ];

  const renderCard = (item) => (
    <div className="minimal-card">
      <div className="card-image-wrapper">
        <img src={item.img} alt={item.title} loading="lazy" />
        <span className="step-num-overlay">{item.id}</span>
      </div>
      
      <div className="card-content-bottom">
        <h4 className="minimal-title">{item.title}</h4>
        <p className="minimal-desc">{item.desc}</p>
      </div>
    </div>
  );

  return (
    <section className="benefits-section">
      <div className="benefits-wrapper">
         
        {/* Section Title */}
        <div className="section-header text-center">
          <h2 className="protocol-main-title">THE FABRICATION PROTOCOL</h2>
          <p className="protocol-sub-title">Precision engineering in every step of the process</p>
        </div>

        {/* 5-Column Staggered Grid Container */}
        <div className="benefits-grid-container">
          <div className="custom-staggered-grid">
            
            {/* --- ROW 1 --- */}
            <div className="grid-cell empty-cell"></div>
            <div className="grid-cell card-cell">
              {renderCard(protocolData[0])}
            </div>
            <div className="grid-cell empty-cell"></div>
            <div className="grid-cell card-cell">
              {renderCard(protocolData[1])}
            </div>
            <div className="grid-cell empty-cell"></div>

            {/* --- ROW 2 --- */}
            <div className="grid-cell card-cell">
              {renderCard(protocolData[2])}
            </div>
            <div className="grid-cell empty-cell crosshair-target"></div>
            <div className="grid-cell card-cell">
              {renderCard(protocolData[3])}
            </div>
            <div className="grid-cell empty-cell"></div>
            <div className="grid-cell card-cell">
              {renderCard(protocolData[4])}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FabricationProtocol;