import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./css/AboutNumber.css";

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

const AboutNumber = () => {
  const leadershipData = [
    { title: "YEARS OF EXPERTISE", count: 30, suffix: "+", desc: "Leveraging years of fabrication and engineering experience, we deliver durable heavy vehicle body solutions." },
    { title: "FAST DELIVERY", count: 3, suffix: "Days", desc: "We proudly deliver heavy vehicle body manufacturing and fabrication solutions to clients across diverse sectors." },
    { title: "CUSTOMER SERVED", count: 450, suffix: "+", desc: "Thousands of heavy vehicle bodies are fabricated through our advanced manufacturing facility." },
  ];

  return (
    <section className="about-counter-section py-5" data-bg="black">
      <div className="container-xxl">
      
        

          <div className="row g-3  " style={{width:"100% !important  "}}>
            {leadershipData.map((item, index) => (
              <div key={index} className=" col-md-4  px-lg-4">
                <div className="card-content-wrapper text-center text-lg-center">
                  {/* HORIZONTAL ALIGNMENT FORCE */}
                  <h1 className="card-big-number d-flex justify-content-center justify-content-lg-center">
                    <SlotCounter value={item.count} baseDirection="up" />
                    <span className="stat-suffix">{item.suffix}</span>
                  </h1>
                  <h5 className="card-desc-text mainsub">{item.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default AboutNumber;