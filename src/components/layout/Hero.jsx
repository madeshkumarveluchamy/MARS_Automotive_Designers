import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Link} from "react-router-dom"
import './css/Hero.css';
import whitetruck from "../../assets/whitetruck.webp";
import heropagetruck from "../../assets/homepage/MARS-AUTOMOTIVE-DESIGNERS-BANNERS (4).webp";
import brighttruckbackground from "../../assets/brighttruckbackground.webp";
import bgVideo from "../../assets/homepage/MARS_AUTOMOTIVE_DESIGNER.mp4"; 
import playIcon from "../../assets/play.webp";
import bgMusic from "../../assets/bg-music.mp3";
import whiteTruck1 from "../../assets/truck (1).webp";
import truckImage from "../../assets/truck2.webp";
import waveMp4 from "../../assets/wave.mp4";
import movingTruckImage from "../../assets/movingtruck.webp";

const Hero = () => {
  // SessionStorage check: First time iruntha mattum preloader true
  const [isPreloading, setIsPreloading] = useState(() => !sessionStorage.getItem('hasVisited'));
  const [showAnimation, setShowAnimation] = useState(false); 
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const [audio] = useState(new Audio(bgMusic));
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMusic = () => {
    if (musicPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => console.log("Audio play restriction log:", err));
    }
    setMusicPlaying(!musicPlaying);
  };

  useEffect(() => {
    if (!isPreloading) {
      // Direct-ah animation start panna:
      setShowAnimation(true);
      // Animation mudinja udane video start panna (same timing as below)
      const timer = setTimeout(() => {
        setShowAnimation(false);
        setPlayVideo(true);
      }, 5000); // Neenga truck animation ethana second-la mudiyanum nu ninaikkireengalo antha duration
      return () => clearTimeout(timer);
    }


    // First time visit logic:
    sessionStorage.setItem('hasVisited', 'true');
    const preloadTimer = setTimeout(() => {
      setIsPreloading(false);
      setShowAnimation(true); 
    }, 6000); 
    
    const mainTimer = setTimeout(() => {
      setShowAnimation(false);
      setPlayVideo(true); 
    }, 11000); 

    return () => {
      clearTimeout(preloadTimer);
      clearTimeout(mainTimer);
    };
  }, []);

   useEffect(() => {
  if (!isPreloading) return;

  const speakText = () => {
    // ஸ்பீச் ஏற்கனவே ஓடிக்கொண்டிருந்தால் நிறுத்திவிட்டுப் புதிதாகத் தொடங்கவும்
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance("Welcome to the Future of Fabrication");
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1;

    // குரலைத் தேர்ந்தெடுக்கும் முறை
    const voices = window.speechSynthesis.getVoices();
    const maleVoice = voices.find(v => /male|david|mark/i.test(v.name)) || voices[0];
    
    if (maleVoice) utterance.voice = maleVoice;

    window.speechSynthesis.speak(utterance);
  };

  // பிரவுசர் சப்போர்ட் செய்கிறதா என்று பார்க்க
  if ('speechSynthesis' in window) {
    const timer = setTimeout(() => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        speakText();
      } else {
        window.speechSynthesis.onvoiceschanged = speakText;
      }
    }, 500); // 400ms-ஐ விட சற்று அதிகமாக வைப்பது நல்லது
    
    return () => {
      clearTimeout(timer);
      window.speechSynthesis.onvoiceschanged = null;
    };
  }
}, [isPreloading]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.95 }, 
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  const MileastSeparateTyping = ({ text, customStyle }) => {
    return (
      <motion.span variants={containerVariants} initial="hidden" animate="visible" style={customStyle}>
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block', transformOrigin: 'bottom center' }}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  };


   return (
    <div className="hero-section" data-bg="black" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      
      <AnimatePresence>
        {isPreloading && (
          <motion.div
            key="preloader-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: '#ffffff', zIndex: 9999, display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'flex-start', overflow: 'hidden', padding: '10% 8%'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: '12px', width: '100%', maxWidth: '1400px', position: 'relative' }}>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '0 0 15px 0' }}>
                <span style={{ color: '#eab308', fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', fontWeight: '900', fontFamily: "'Inter', sans-serif", letterSpacing: '5px' }}>
                  // FUTURE OF FABRICATION //
                </span>
              </motion.div>

              <h1 style={{ margin: 0, padding: 0, lineHeight: '1.1' }}>
                <MileastSeparateTyping text="Welcome to the" customStyle={{ fontSize: 'clamp(2.5rem, 7.8vw, 6.8rem)', fontWeight: '400', fontFamily: "'Mileast', 'Georgia', 'Times New Roman', serif", color: '#1e293b', letterSpacing: '-1px' }} />
              </h1>

              <h1 style={{ margin: 0, padding: 0, lineHeight: '1.1', display: 'flex', alignItems: 'center' }}>
                <MileastSeparateTyping text="Future of Fabrication!" customStyle={{ fontSize: 'clamp(2.5rem, 7.8vw, 6.8rem)', fontWeight: '900', fontFamily: "'Mileast', 'Georgia', 'Times New Roman', serif", color: '#000000', letterSpacing: '-1px' }} />
                <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }} style={{ fontWeight: '900', color: '#eab308', marginLeft: '15px' }}>|</motion.span>
              </h1>
            </div>

             {/* --- MOVING TRUCK + LOADING SECTION --- */}
           <div style={{ position: 'absolute', bottom: '10%', left: '8%', display: 'flex', alignItems: 'center', gap: '20px' }}>
  <div style={{ width: '200px', height: 'auto', position: 'relative' }}>

                <img src={movingTruckImage} alt="Loading" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: '800', color: '#000000', letterSpacing: '3px', textTransform: 'uppercase' }}>
                  LOADING
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: '500', color: '#64748b', letterSpacing: '1px' }}>
                  Welcome to the future...
                </span>
              </div>
            </div>

            <motion.img
              src={truckImage}
              alt="Truck"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: [0.2, 1, 0.2], scale: [0.92, 1, 0.92] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
              className="preloader-truck-image"
            />
          </motion.div>
        )}
         </AnimatePresence>

 <div className="hero-bg-wrapper">
  <AnimatePresence mode="wait">
    {!playVideo ? (
      <motion.img 
        key="bg-image" 
        src={brighttruckbackground} 
        alt="Workshop" 
        className="hero-bg-img" 
        exit={{ opacity: 0, transition: { duration: 1.2 } }} 
      />
    ) : (
      <motion.video 
        key="bg-video" 
        ref={videoRef} 
        className="hero-bg-video" 
        autoPlay 
        loop 
        muted 
        playsInline 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5, ease: "easeInOut" }} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          position: 'absolute', 
          top: 0, 
          left: 0 
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </motion.video>
    )}
  </AnimatePresence>

  {/* Overlay வீடியோ வரும்போது மறையவும், இமேஜ் இருக்கும்போது தெரியவும் */}
  {!playVideo && <div className="hero-overlay-dark" style={{ zIndex: 1 }}></div>}
</div>

<div className="hero-content-layer" style={{ zIndex: 2 }}>
  <AnimatePresence>
    {showAnimation && (
      <>
        <motion.div 
          initial={{ opacity: 0, scale: 0.3 }} 
          animate={{ opacity: 1, scale: 1 }} 
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }} 
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} 
          className="mars-text-bg"
        >
          <h1 className="massives-text">MARS</h1>
        </motion.div>
        
        <motion.div 
          initial={{ x: "100vw", opacity: 1 }} 
          animate={{ x: "5vw", opacity: 1 }} 
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }} 
          transition={{ type: "spring", stiffness: 15, damping: 15, mass: 1.2, delay: 0.2 }} 
          className="truck-foreground"
        >
          <img src={whitetruck} alt="Mars Truck" className="truck-img" />
        </motion.div>
      </>
    )}
  </AnimatePresence>
</div>


         <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "circOut", delay: 1.5 }} className="hero-bottom-container container-fluid d-flex flex-row col-12 justify-content-start align-items-md-end">
          <div className="mb-sm-0">
            <div className="info-box-elite justify-content-start d-flex">
              <div className="info-img-wrapper"><img src={heropagetruck} alt="Info Truck" className="info-thumb"/></div>
              <div className="info-text-wrapper ps-3"><p className="infos-title mb-0 text-muted">YOUR ENERGY, OUR EXPERTISE</p><div className="info-arrow-bottom">→</div></div>
            </div>
          </div>
          <div className="d-flex justify-content-start">
            <Link className='text-decoration-none' to="/mars-solutions" >
            <div className="explore-split-box justify-content-start">
              <button className="blog-swap-hero"><span className="arrow">→</span><span className="text">EXPLORE NOW</span></button>
            </div>
            </Link>
          </div>
        </motion.div>
  
      {/* FIXED: Placed inside hero canvas level with absolute mapping constraints */}
     {/* --- RESTRUCTURED SINGLE INTEGRATED CAPSULE PLAYER --- */}
      <div className="floating-music-panel-group">
        <motion.div 
          layout
          className={`music-unified-capsule ${musicPlaying ? 'capsule-expanded' : 'capsule-collapsed'}`}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
        >
          {/* Main Toggle Play/Pause Button inside the capsule */}
          <button 
            onClick={toggleMusic}
            className={`floating-music-toggle-btn ${musicPlaying ? 'music-active' : ''}`}
          >
            <img src={playIcon} alt="Music Toggle" className="music-icon-webp-img" />
          </button>

          {/* Hidden layout modules that slide out cleanly when playing */}
          <AnimatePresence>
            {musicPlaying && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="capsule-internal-contents"
              >
                {/* Truck Overlay on the specified side */}
                <div className="music-truck-icon-overlay">
                  <img src={whiteTruck1} alt="Truck Icon" />
                </div>

                {/* Smooth Video Wave Track running on the left side */}
                <video className="music-bg-wave-mp4" autoPlay loop muted playsInline>
                  <source src={waveMp4} type="video/mp4" />
                </video>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;