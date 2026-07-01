import React, { useState, useRef, useEffect } from 'react';
import './css/SustainableManufacturing.css';

import reviewVideo1 from '../../assets/homepage/MARS-Reels (1).mp4';
import reviewVideo2 from '../../assets/homepage/MARS-Reels (2).mp4';
import reviewVideo3 from '../../assets/homepage/MARS-Reels (3).mp4';
import reviewVideo4 from '../../assets/homepage/MARS-Reels (4).mp4';
import reviewVideo5 from '../../assets/homepage/MARS-Reels (5).mp4';
import reviewVideo6 from '../../assets/homepage/MARS-Reels (6).mp4';
import user1 from '../../assets/homepage/MARS-Thumbails.webp';
import user2 from '../../assets/homepage/MARS-Thumbails_2.webp';
import user3 from '../../assets/homepage/MARS-Thumbnails_3.webp';
const UnimaxxReviews = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  
  // 1. அதிகப்படியான Re-render களைத் தவிர்க்க State-க்கு பதிலாக useRef பயன்படுத்தப்பட்டுள்ளது (Very Important for Performance)
  const isDragging = useRef(false);
  const isMoved = useRef(false); 
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const initialReviewsData = [
    { id: 1, thumbnailUrl: user1, videoUrl: reviewVideo1 },
    { id: 2, thumbnailUrl: user2, videoUrl: reviewVideo2 },
    { id: 3, thumbnailUrl: user3, videoUrl: reviewVideo3 },
    { id: 4, thumbnailUrl: user1, videoUrl: reviewVideo4 },
    { id: 5, thumbnailUrl: user2, videoUrl: reviewVideo5 },
    { id: 6, thumbnailUrl: user3, videoUrl: reviewVideo6 },
  ];

  const extendedReviewsData = [...initialReviewsData, ...initialReviewsData];

  const videoRefs = useRef([]);
  const sliderRef = useRef(null);
  const [loopResetPoint, setLoopResetPoint] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setLoopResetPoint(sliderRef.current.scrollWidth / 2);
    }
  }, [extendedReviewsData]);

  // Auto-scroll logic 
  useEffect(() => {
    if (!sliderRef.current || loopResetPoint === 0) return;
    let intervalId = null;
    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        // useRef மதிப்பை (.current) வைத்து சரிபார்க்கிறோம்
        if (isDragging.current || activeVideoIndex !== null) return;
        
        let newScrollLeft = sliderRef.current.scrollLeft + 1;
        if (newScrollLeft >= loopResetPoint) {
          newScrollLeft = 0;
        }
        sliderRef.current.scrollLeft = newScrollLeft;
      }, 20); 
    };
    startAutoScroll();
    return () => clearInterval(intervalId);
  }, [activeVideoIndex, loopResetPoint]); // isDragging dependency-ல் இருந்து நீக்கப்பட்டுள்ளது

  // ==========================================
  // DESKTOP MOUSE EVENTS 
  // ==========================================
  const handleMouseDown = (e) => {
    isDragging.current = true;
    isMoved.current = false; 
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    
    const x = e.pageX - sliderRef.current.offsetLeft;
    if (Math.abs(x - startX.current) > 5) {
      isMoved.current = true; 
    }
    
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
    setTimeout(() => {
      isMoved.current = false;
    }, 50);
  };

  // ==========================================
  // MOBILE TOUCH EVENTS 
  // ==========================================
  const handleTouchStart = () => {
    isDragging.current = true;
    isMoved.current = false;
  };

  const handleTouchMove = () => {
    isMoved.current = true; 
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    setTimeout(() => {
      isMoved.current = false;
    }, 50);
  };

  // ==========================================
  // CLICK (Play / Pause)
  // ==========================================
  const handleCardClick = (index) => {
    if (isMoved.current) return; // Drag செய்திருந்தால் கிளிக் ஆகாது

    const targetVideo = videoRefs.current[index];

    if (activeVideoIndex === index) {
      if (targetVideo) targetVideo.pause();
      setActiveVideoIndex(null); 
    } else {
      if (activeVideoIndex !== null && videoRefs.current[activeVideoIndex]) {
        const prevVideo = videoRefs.current[activeVideoIndex];
        prevVideo.pause();
        prevVideo.currentTime = 0; 
      }
      if (targetVideo) {
        targetVideo.play().catch(() => {});
      }
      setActiveVideoIndex(index); 
    }
  };

  return (
    <div className="um-reviews-master">
      <section className="um-reviews-section">
      <div className="text-center mb-2 mb-md-5">
          <h2 className="gallery-main-titles maintit">
            SUSTAINABLE <br /> MANUFACTURING 
          </h2>
        </div>

        <div
          className="um-reviews-carousel"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedReviewsData.map((review, index) => {
            const isPlaying = activeVideoIndex === index;

            return (
              <div
                key={index}
                className={`um-review-card ${isPlaying ? 'video-active' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                {/* 2. கண்ணுக்குத் தெரியாத Overlay - வீடியோ Swipe-ஐ தடுப்பதில் இருந்து காக்க */}
                <div className="um-card-touch-overlay"></div>

                {!isPlaying && (
                  <img 
                    src={review.thumbnailUrl} 
                    className="um-card-thumbnail" 
                    alt="Thumbnail" 
                    draggable="false" 
                  />
                )}

                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={review.videoUrl}
                  className="um-card-video-bg"
                  loop
                  playsInline
                  draggable="false"
                />

                {!isPlaying && (
                  <div className="um-center-play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default UnimaxxReviews;