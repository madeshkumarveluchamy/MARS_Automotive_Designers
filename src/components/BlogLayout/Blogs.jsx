import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Cpu, Leaf } from 'lucide-react'; // Icons import
import { useNavigate } from 'react-router-dom';
import './css/Blog.css';

const Blog = () => {
   const [view, setView] = useState('listing');
 const [selectedPost, setSelectedPost] = useState(null);
 const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  // --- Animation Variants (Intha variables thaan mela missing ah irunthathu) ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // --- Post Data ---
  const dossierPosts = [
    { id: 1, cat: 'FABRICATION', title: 'HIGH-TENSILE STEEL: WHY IT MATTERS FOR TIPPER BODIES', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1000' },
    { id: 2, cat: 'LOAD_TEST', title: '20-TONNE CAPACITY TESTS: STRUCTURAL INTEGRITY ANALYSIS', img: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=1000' },
    { id: 3, cat: 'DESIGN', title: 'AERODYNAMIC TRUCK CABINS: REDUCING FUEL CONSUMPTION', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000' }
  ];

 const handleCardClick = (post) => {
  navigate(`/blog/${post.id}`, {
    state: { post }
  });
};

  return (
    <div className="mars-dossier-root">
      <div className="container-fluid px-md-5 py-5">
          
            <motion.div 
              key="listing" 
              variants={containerVars}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <motion.div className="dossier-header mb-5" variants={itemVars}>
                <div className="system-status mb-2">
                  <span className="dot pulse"></span> WORKSHOP: ACTIVE 
                  <span className="coords ms-4">UNIT: HEAVY_VEHICLE_FABRICATION</span>
                </div>
                <h1 className="dossier-title">MARS <span className="accent">ENGINEERING BLOGS</span></h1>
                <p className="small text-white opacity-100">Exploring Order Based Container Manufacturing for reliable transportation solutions.</p>
              </motion.div>

              <div className="row g-4 dossier-grid">
                {dossierPosts.map((post) => (
                  <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                    <motion.div 
                      className="dossier-card" 
                      variants={itemVars}
                      whileHover={{ scale: 1.03, borderColor: '#ff5f38' }} 
                      onClick={() => handleCardClick(post)}
                    >
                      <div className="card-image" style={{ backgroundImage: `url(${post.img})` }}>
                        <div className="image-overlay"></div>
                      </div>
                      <div className="card-content">
                        <span className="card-tag text-cyan maindes">{post.cat}</span>
                        <h3 className="card-headline mainsub">{post.title}</h3>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
</motion.div>
         
         
        
      </div>

</div>
  );
};

export default Blog;