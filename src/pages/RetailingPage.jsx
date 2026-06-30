import React from 'react';
import { motion } from 'framer-motion';

const RetailingPage = () => {
  const styles = {
    page: { 
      padding: '80px 20px', 
      // Background Image add panniyaachu
      backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4d5ebe69947?auto=format&fit=crop&q=80&w=1600")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', // Scroll pannum pothu image ninnu irukkum
      background: 'linear-gradient(rgba(248, 250, 252, 0.8), rgba(248, 250, 252, 0.8)), url("https://images.unsplash.com/photo-1504917595217-d4d5ebe69947?auto=format&fit=crop&q=80&w=1600")',
      color: '#1e293b', 
      minHeight: '100vh', 
      fontFamily: "'Inter', sans-serif" 
    },
    section: { 
      maxWidth: '1000px', 
      margin: '50px auto', 
      padding: '50px', 
      background: 'rgba(255, 255, 255, 0.95)', // Section innum clear-a theriyum
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)' 
    },
    title: { 
      color: '#2563eb', 
      fontSize: '1.8rem', 
      marginBottom: '25px', 
      borderLeft: '5px solid #2563eb', 
      paddingLeft: '15px',
      textTransform: 'uppercase'
    },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={styles.page}>
      
      {/* --- Header --- */}
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ color: '#0f172a', fontSize: '3rem', marginBottom: '10px' }}>RETAILING & SOLUTIONS</h1>
        <div style={{ width: '80px', height: '4px', background: '#2563eb', margin: '0 auto' }}></div>
      </header>

      {/* --- Manufacturing Section --- */}
      <section style={styles.section}>
        <h2 style={styles.title}>MANUFACTURING PROCESS</h2>
        <div style={styles.grid}>
          <div style={{ background: '#f1f5f9', padding: '25px', borderRadius: '15px' }}>
            <h3 style={{ color: '#2563eb' }}>01. DESIGN PLANNING</h3>
            <p>Driving innovation and efficiency across the entire landscape.</p>
          </div>
          <div style={{ background: '#f1f5f9', padding: '25px', borderRadius: '15px' }}>
            <h3 style={{ color: '#2563eb' }}>02. FRAME FABRICATION</h3>
            <p>Driving innovation and operational refinements with robotic precision.</p>
          </div>
        </div>
      </section>

      {/* --- Specifications Section --- */}
      <section style={styles.section}>
        <h2 style={styles.title}>TECHNICAL SPECIFICATIONS</h2>
        <div style={{ display: 'flex', gap: '50px', alignItems: 'center', flexWrap: 'wrap' }}>
          <img 
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" 
            alt="Mars Industrial Process" 
            style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '20px' }}
          />
          <ul style={{ listStyle: 'none', lineHeight: '3', flex: 1, padding: 0 }}>
            <li>✅ <strong>Material:</strong> High-Grade MS Steel</li>
            <li>✅ <strong>Welding:</strong> Automated Robotic Accuracy</li>
            <li>✅ <strong>Finish:</strong> Industrial Grade Coating</li>
          </ul>
        </div>
      </section>

    </motion.div>
  );
};

export default RetailingPage;