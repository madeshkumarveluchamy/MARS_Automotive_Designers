import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/layout/Hero';
import Operations from "../components/Retailing/Operations"; // Ithu correct-a irukku
import About from '../components/layout/About/About';
import WorkInGallery from '../components/layout/WorkInGallery';
import SuccessStories from '../components/layout/SuccessStories';
import FAQSection from '../components/layout/FAQsection';
import SustainableManufacturing from '../components/layout/SustainableManufacturing';
import Footer from '../components/common/Footer';
import AboutCounter from '../components/layout/About/AboutCounter';
import Innovation from '../components/layout/About/Innovation';
// import RetailingPage from '../components/Retailing/RetailingPage'; // Itha REMOVE pannidunga (ithu illai)

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <AboutCounter />
      <Operations />
      <Innovation />
      <WorkInGallery />
      <SustainableManufacturing />
      <SuccessStories />
      <FAQSection />
      <Footer/>
    </div>
  );
};

export default Home;