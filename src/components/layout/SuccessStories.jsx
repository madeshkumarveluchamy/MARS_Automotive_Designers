import React from 'react';
import './css/SuccessStories.css'; 
import success_stories1 from "../../assets/mars-solutions/MANUFACTURING EXCELLENCE IMAGES (2).webp";
import success_stories2 from "../../assets/mars-solutions/MARS-MATERIAL-HUB (2).webp";
import success_stories3 from "../../assets/mars-solutions/MARS-MATERIAL-HUB (3).webp"
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  const stories = [
    {
      img: success_stories1,
      title: "TECHNOLOGY-DRIVEN SERVICES"
    },
    {
      img: success_stories2,
      title: "ADVANCED TECHNOLOGY AND EXPERIENCE"
    },
    {
      img: success_stories3,
      title: "RESPONSIBLE AND INNOVATIVE SOLUTIONS"
    }
  ];

  return (
    /* This wrapper acts as the 'rail' for the sticky effect */
    <section className="success-outer-pin" data-bg="white">
      <div className="container-fluid px-md-5">
        <div className="row align-items-start locked-row">
          
          {/* LEFT SIDE: Pinned Title */}
          <div className="col-lg-4 pinned-sidebar1">
            <div className="sidebar-inner-content">
              <p className="text-uppercase small mb-4 text-secondary text-center text-lg-start mainsub">ENGINEERING SUCCESS STORIES</p>
              <h2 className="success-main-title text-center text-lg-start maintit">
                RELIABLE FABRICATION. <br />
                ENGINEERED WITH INTEGRITY, <br />
                SAFETY, AND INNOVATION.
              </h2>
            </div>
          </div>

          {/* CENTER: The Stacking Images */}
          <div className="col-lg-4 stacking-scroller">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className="overlap-sticky-card" 
                style={{ top: '150px' }} // Depth offset
              >
                <div className="img-holder">
                  <img src={story.img} alt={story.title} className="img-fluid w-100" />
                </div>
                <div className="label-holder p-4 bg-cream text-black">
                  <p className="small fw-bold mb-0 text-uppercase text-center text-lg-start maindes">{story.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Pinned Blog Box */}
          <div className="col-lg-4 pinned-sidebar text-center text-lg-start">
            <div className="blog-callout-locked p-4 bg-white text-black shadow-lg">
              <h6 className="fw-bold mb-2 text-center text-lg-start mainsub">WEEKLY ALIGNMENT TO ACHIEVE SHARED SUCCESS</h6>
              <p className="small text-muted mb-3 text-center text-lg-start maindes">
                The solutions offered were highly effective and tailored to our needs.
              </p>
              <div className='w-100 d-flex justify-content-center '>
                <Link  className='text-decoration-none' to="/blog">
              <button className="blog-swap-success p-1">
                <span className="arrow-success">→</span>
                <span className="text-successs">EXPLORE OUR BLOG</span>
              </button>
                </Link>
              </div> 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;