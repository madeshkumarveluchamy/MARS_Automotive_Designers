import React, { useState } from "react";
import "./css/SustainableManufacturing.css";

// Assets imports
import MARS_PORTFOLIO_IMAGES1 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (1).webp"
import MARS_PORTFOLIO_IMAGES2 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (2).webp"
import MARS_PORTFOLIO_IMAGES3 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (3).webp"
import MARS_PORTFOLIO_IMAGES4 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (4).webp"
import MARS_PORTFOLIO_IMAGES5 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (5).webp"
import MARS_PORTFOLIO_IMAGES6 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (6).webp"
import MARS_PORTFOLIO_IMAGES7 from "../../assets/mars-solutions/MARS-PORTFOLIO-IMAGES (7).webp"
import { Link } from "react-router-dom";

const SustainableManufacturing = () => {
  const [active, setActive] = useState(null);
  const [pauseOrbit, setPauseOrbit] = useState(false);

  const orbitalImages = [
    { img: MARS_PORTFOLIO_IMAGES1, name: "Shakthi", city: "Tanjavur", desc: "The precision of their robotic welding is unmatched. Our vehicle bodies feel incredibly solid.", rating: 5 },
    { img: MARS_PORTFOLIO_IMAGES2, name: "Murugan", city: "Coimbatore", desc: "Industrial strength at its best! MARS delivered a custom heavy vehicle body that handles extreme loads.", rating: 5 },
    { img: MARS_PORTFOLIO_IMAGES3, name: "Ravi", city: "Chennai", desc: "Exceptional container engineering. The panel insulation works perfectly for our temperature-sensitive cargo.", rating: 5 },
    { img: MARS_PORTFOLIO_IMAGES4, name: "Ashok", city: "Trichy", desc: "Highly impressed with the truck assembly line. The turnaround time was quick and professional.", rating: 5 },
    { img: MARS_PORTFOLIO_IMAGES5, name: "Kavin", city: "Salem", desc: "Their automated fabrication process has significantly improved our fleet's reliability.", rating: 5 },
    { img: MARS_PORTFOLIO_IMAGES6, name: "Mithun", city: "Erode", desc: "Top-tier servicing and inspection. They catch the smallest details during maintenance.", rating: 5 },
    { img: MARS_PORTFOLIO_IMAGES7, name: "Krishna", city: "karur", desc: "A truly modern manufacturing facility. Their team provided practical solutions with great care.", rating: 5 }
  ];

  return (
    <section className="sm-core-section">
      <div className="container sm-orbit-container">
        <div className="sm-center-block text-center">
          <p className="sm-sub-heading">SUSTAINABLE MANUFACTURING</p>
          <h2 className="sm-main-heading">BUILT WITH PRECISION <br /> DELIVERED WITH SAFETY AND STRENGTH</h2>
          <Link className="text-decoration-none" to="/contact-us">
          <button className="sm-hover-swap-btn">
            <span className="sm-btn-arrow">→</span>
            <span className="sm-btn-label">DRIVE INNOVATION</span>
          </button>
          </Link>
        </div>

        <div className={`sm-orbit-ring ${pauseOrbit ? "sm-orbit-paused" : ""}`}>
          {orbitalImages.map((item, index) => (
            <div
              key={index}
              className={`sm-orbit-node ${active === index ? "is-node-active" : ""}`}
              style={{ "--index": index, "--total": orbitalImages.length }}
              onClick={() => {
                setActive(index);
                setPauseOrbit(true);
                setTimeout(() => { setActive(null); setPauseOrbit(false); }, 2000);
              }}
            >
              <div className="sm-node-stabilizer">
                <img src={item.img} alt="mars" className="sm-node-image" />
                <div className="sm-node-overlay">VIEW</div>
                <div className="sm-node-details">
                  <div className="d-flex flex-column flex-d-row align-items-center justify-content-center gap-2 mb-1">
                    <div className="sm-client-name">{item.name}</div>
                    <span className="sm-client-city">{item.city}</span>
                  </div>
                  <div className="sm-client-rating mb-2">★★★★★</div>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainableManufacturing;