import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./css/ServiceFlowChart.css";

const VerticalWorkflow = () => {
  const scrollRef = useRef(null);
  const [scaleY, setScaleY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const rect = scrollRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 🎯 MAGIC TRICK 1: ஸ்கிரீனின் 65% பகுதியை (நடுப்பகுதிக்கு கொஞ்சம் கீழே) தொடும்போது அனிமேஷன் ஆரம்பிக்கும்
      const triggerPoint = windowHeight * 0.65; 
      const scrolled = triggerPoint - rect.top;
      
      // 🎯 MAGIC TRICK 2: செக்ஷனின் மொத்த உயரத்தில் 85% தூரம் வரும்போதே லைன் 100% ஃபுல்லாக முடிந்துவிடும்!
      // (இதனால் செக்ஷன் மேலே மறைவதற்கு முன்பே லைன் முழுவதுமாக ஃபில் ஆகிவிடும்)
      const totalScrollable = rect.height * 0.85; 
      
      let progress = scrolled / totalScrollable;
      
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      setScaleY(progress);
    };

    window.addEventListener("scroll", handleScroll, { capture: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  // 💡 புதிய வேகத்திற்கு ஏற்றவாறு Threshold அளவுகள் துல்லியமாக மாற்றப்பட்டுள்ளன:
  const steps = [
    { id: "01", title: "CONSULTATION", desc: "Requirement Analysis & Planning", side: "left", progressThreshold: 0.05 },
    { id: "02", title: "DESIGN & PREPARATION", desc: "Engineering & Material Selection", side: "right", progressThreshold: 0.25 },
    { id: "03", title: "PRECISION FABRICATION", desc: "Cutting, Welding & Assembly", side: "left", progressThreshold: 0.50 },
    { id: "04", title: "FINISHING & INSTALLATION", desc: "Painting, Flooring & Door Assembly", side: "right", progressThreshold: 0.70 },
    { id: "05", title: "QUALITY & DELIVERY", desc: "Inspection & Customer Handover", side: "left", progressThreshold: 0.90 },
  ];

  return (
    <section ref={scrollRef} className="mars-eng-flow-bg pt-5 pb-5">
      <div className="container text-center">
        
        {/* Title Section */}
        <div className="mb-5 pb-4">
          <span className="mars-eng-subtitle">OUR PROCESS</span>
          <h2 className="mars-eng-flow-title text-white text-uppercase mt-2">Engineering Workflow</h2>
          <div className="mars-eng-title-underline"></div>
        </div>

        <div className="mars-eng-flow-container position-relative">
          
          {/* Base Line (Dashed) */}
          <div className="mars-eng-base-line"></div>
          
          {/* Animated Filling Line (Solid Orange Glow) */}
          <motion.div 
            className="mars-eng-filling-line" 
            style={{ scaleY: scaleY }} 
          ></motion.div>

          {/* Steps */}
          {steps.map((step, index) => {
            // Check if the filling line has reached this step
            const isActive = scaleY >= step.progressThreshold;

            return (
              <div key={index} className={`mars-eng-step-row d-flex align-items-center mb-5 ${step.side === 'right' ? 'flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="col-5">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`mars-eng-step-content ${step.side === 'left' ? 'text-end pe-4' : 'text-start ps-4'}`}
                  >
                    <h3 className={`fw-black text-uppercase mars-eng-service-title mb-2 ${isActive ? 'text-white' : 'text-muted'}`} style={{ transition: 'color 0.4s ease' }}>
                      {step.title}
                    </h3>
                    <p className="mars-eng-tracking-wide small mars-eng-service-desc text-uppercase m-0" style={{ color: isActive ? '#E38524' : '#666', transition: 'color 0.4s ease' }}>
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Center Circle with Glow Effect */}
                <div className="col-2 d-flex justify-content-center position-relative" style={{ zIndex: 5 }}>
                  <div className={`mars-eng-step-box-large ${isActive ? 'active-step' : ''}`}>
                    <span className="mars-eng-step-num-large">{step.id}</span>
                  </div>
                </div>

                <div className="col-5"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VerticalWorkflow;