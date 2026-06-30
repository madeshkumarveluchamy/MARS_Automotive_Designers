import React from 'react'
import GalleryHero from '../components/GalleryLayout/GalleryHero'
import Navbar from '../components/common/Navbar';
import GalleryCategories from "../components/GalleryLayout/GalleryCategories"
import TheRevolution from '../components/GalleryLayout/TheRevolution';
import FinalCTA from '../components/GalleryLayout/FinalCTA';
import Footer from "../components/common/Footer"

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <GalleryHero />
      <GalleryCategories />
      <TheRevolution />
      <FinalCTA/>
      <Footer />
    </div>
  )
}

export default Gallery
