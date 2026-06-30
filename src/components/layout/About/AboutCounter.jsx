import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./css/AboutCounter.css";

// --- Step 1: Same-Line Vertical Slot Rolling Component ---
const SlotCounter = ({ value, baseDirection = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const digits = Array.from(String(value)); 

  return (
    // inline-flex ensures digits stay side-by-side
    <span ref={ref} className="slot-wrapper-inline">
      {digits.map((digit, i) => {
        // Handle dots or static chars like decimal points
        if (isNaN(parseInt(digit))) return <span key={i} className="slot-static-char">{digit}</span>;

        const isOdd = i % 2 !== 0;
        const finalDirection = isOdd ? (baseDirection === "up" ? "down" : "up") : baseDirection;

        return (
          <span key={i} className="digit-column">
            <motion.div
              initial={{ y: finalDirection === "up" ? "0%" : "-90.9%" }}
              animate={isInView ? { y: finalDirection === "up" ? "-90.9%" : "0%" } : {}}
              transition={{
                duration: 2.5,
                ease: [0.45, 0.05, 0.55, 0.95],
                delay: i * 0.1,
              }}
              className="digit-strip"
            >
              {finalDirection === "up" ? (
                <>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => <span key={num}>{num}</span>)}
                  <span>{digit}</span>
                </>  
              ) : (
                <>
                  <span>{digit}</span>
                  {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => <span key={num}>{num}</span>)}
                </>
              )}
            </motion.div>
          </span>
        );
      })}
    </span>
  );
};

const AboutCounter = () => {
  const leadershipData = [
    { title: "YEARS OF EXPERTISE", count: 30, suffix: "+", desc: "Leveraging decades of truck container manufacturing experience, we deliver durable, reliable, and precision-built transportation solutions." },
    { title: "FAST DELIVERY", count: 3, suffix: "Days", desc: "Retail truck containers are delivered on the same day whenever possible, while custom-built container orders are completed within approximately 3 days." },
    { title: "CUSTOMERS SERVED", count: 450, suffix: "+", desc: "Thousands of businesses trust our retail and custom truck container solutions for quality, reliability, and timely delivery." },
    { title: "QUALITY COMMITMENT", count: 99.9, suffix: "%", desc: "Every truck container undergoes strict quality inspections to ensure durability, safety, and dependable long-term performance." }
  ];

  return (
    <section className="about-counter-section" data-bg="black">
      <div className="container-xxl">
        <div className=" pt-3 border-top">
          <div className="text-center d-flex justify-content-center mb-5">
            <h2 className="leadership-main-title text-center text-black maintit">
             Numbers that prove our leadership in heavy vehicle body manufacturing and industrial fabrication solutions.
            </h2>
          </div>

          <div className="row leadership-grid " style={{width:"100% !important  "}}>
            {leadershipData.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 leadership-card">
                <div className="card-content-wrapper text-center text-lg-start">
                  <h6 className="card-mini-title text-black mainsub">{item.title}</h6>
                  <p className="card-desc-text maindes">{item.desc}</p>
                  
                  {/* HORIZONTAL ALIGNMENT FORCE */}
                  <h1 className="card-big-number d-flex justify-content-center justify-content-lg-start">
                    <SlotCounter value={item.count} baseDirection="up" />
                    <span className="stat-suffix">{item.suffix}</span>
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;