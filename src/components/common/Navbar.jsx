import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../layout/css/Navbar.css';
import { Link } from 'react-router-dom';
import marslogo from "../../assets/marslogo.webp"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSectionBg, setCurrentSectionBg] = useState('black');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const sections = document.querySelectorAll("section[data-bg]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSectionBg(entry.target.getAttribute("data-bg"));
        }
      });
    }, { threshold: 0.6 });

    sections.forEach((s) => observer.observe(s));
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const activeTheme = scrolled 
    ? (currentSectionBg === 'black' ? 'theme-white-nav' : 'theme-black-nav') 
    : 'default-nav'; 

  // Function to close mobile menu when a link is clicked
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // --- BACKGROUND LOCK LOGIC ---
  // Menu open aagum pothu background scroll & click aaguratha thadukka
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Menu open-la iruntha background-ah lock pannidum
      document.body.style.overflow = 'hidden';
    } else {
      // Menu close aana normal aagidum
      document.body.style.overflow = 'unset';
    }

    // Component unmount aagum pothu cleanup panna
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  const forceScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    
    // Oruvela CSS lock iruntha ithu help pannum
    const appContainer = document.querySelector(".App");
    if (appContainer) {
      appContainer.scrollTop = 0;
    }
  };
  return (
    <nav className={`mars-navbar-main ${scrolled ? 'is-scrolled' : ''} ${activeTheme}`} >
      <div className="nav-flex-wrapper d-flex flex-column flex-xl-row justify-content-between gap-5 col-12 position-relative">
        
        <div className="nav-white-container col-8">
          
          <AnimatePresence mode="wait">
              <motion.div 
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="nav-logo-area d-flex flex-wrap"
              >
                <Link className='text-decoration-none' to="/" onClick={forceScroll}><img src={marslogo} alt="Logo" href="#home" className="logo-main-img" /></Link>
              </motion.div>
          </AnimatePresence>
          
  
          {/* Desktop Links - Hidden in Mobile View via CSS */}
          <div className="nav-links-area w-100 d-flex m-2 desktop-links-only">
            <div className="nav-links-list d-flex justify-content-evenly w-100 flex-wrap align-items-center">
              <Link to="/" className="nav-item" onClick={forceScroll}>HOME</Link>
              <Link to="/about-us" className="nav-item" onClick={forceScroll}>ABOUT</Link>
              <Link to="/mars-solutions" className="nav-item" onClick={forceScroll}>MARS SOLUTIONS</Link>
              <Link to="/contact-us" className="nav-item" onClick={forceScroll}>HOW TO CONTACT</Link>
              <Link to="/blog" className="nav-item" onClick={forceScroll}>BLOG</Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button (Right Side Close / Opposite Direction) */}
          <motion.div 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.85 }}
          >
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Top Line */}
              <motion.line 
                x1="4" y1="12" x2="20" y2="12"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                animate={{
                  y: isMobileMenuOpen ? 0 : -3.5,     
                  rotate: isMobileMenuOpen ? -45 : 0   /* Right side close */
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ originX: "50%", originY: "50%" }} 
              />
              
              {/* Bottom Line */}
              <motion.line 
                x1="4" y1="12" x2="20" y2="12"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                animate={{
                  y: isMobileMenuOpen ? 0 : 3.5,      
                  rotate: isMobileMenuOpen ? 45 : 0  /* Right side close */
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ originX: "50%", originY: "50%" }}
              />
            </svg>
          </motion.div>
        </div>

        {/* --- MOBILE DROPDOWN MENU (Appears Below) --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mobile-dropdown-menu d-md-none"
            >
              <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu,forceScroll} >HOME</Link>
              <Link to="/about-us" className="mobile-nav-link" onClick={closeMobileMenu,forceScroll} >ABOUT</Link>
              <Link to="/mars-solutions" className="mobile-nav-link" onClick={closeMobileMenu,forceScroll}>MARS SOLUTIONS</Link>
              <Link to="/contact-us" className="mobile-nav-link" onClick={closeMobileMenu,forceScroll}>HOW TO CONTACT</Link>
              <Link to="/blog" className="mobile-nav-link" onClick={closeMobileMenu,forceScroll}>BLOG</Link>
              
              {/* SOCIAL MEDIA ICONS (Horizontal Line) */}
              <div className="mobile-social-links d-flex justify-content-center align-items-center gap-4 mt-4 mb-3">
                <a href="#" aria-label="Instagram" onClick={closeMobileMenu}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" aria-label="YouTube" onClick={closeMobileMenu}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                </a>
                <a href="#" aria-label="LinkedIn" onClick={closeMobileMenu}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" aria-label="Facebook" onClick={closeMobileMenu}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!scrolled && (
        <AnimatePresence>
            <motion.div 
              initial={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="external-button-box hide-mobile col-3 d-flex justify-content-center align-items-center d-none d-md-block"
            >
              <Link to="/contact-us"><button className="blog">
                <span className="arrow">→</span>
                <span className="text">LET'S BUILD YOUR OWN VEHICLE</span>
              </button>
              </Link>
            </motion.div>
        </AnimatePresence>
        )}
      </div>
    </nav>
  );
};

export default Navbar;