import React from 'react'
import ContactHero from '../components/ContactLayout/ContactHero'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ContactInfo from '../components/ContactLayout/ContactInfo'
import ContactForm from '../components/ContactLayout/ContactForm'
import ContactFAQ from '../components/ContactLayout/ContactFAQ'
import MapSection from '../components/ContactLayout/MapSection'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <MapSection />
      <ContactFAQ />
      <Footer />
    </div>
  )
}

export default Contact
