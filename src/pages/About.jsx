import React from 'react'
import AboutHero from '../components/AboutLayout/AboutHero'
import Navbar from '../components/common/Navbar'
import AboutNumber from '../components/AboutLayout/AboutNumbers'
import AboutVision from '../components/AboutLayout/AboutVision'
import AboutFabrication from '../components/AboutLayout/AboutFabrication'
import AboutCertificates from '../components/AboutLayout/AboutCertificates'
import AboutTeam from '../components/AboutLayout/AboutTeam'
import Footer from "../components/common/Footer"
import CTASection from '../components/AboutLayout/CTASection'
import ScrollToTop from './ScrollToTop'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutNumber />
      <AboutVision />
      <AboutCertificates />
      <AboutTeam />
      <CTASection />
      <Footer />

    </div>
  )
}

export default About
