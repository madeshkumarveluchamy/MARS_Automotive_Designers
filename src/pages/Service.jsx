import React from 'react'
import ServiceHero from "../components/ServiceLayout/ServiceHero";
import Navbar from "../components/common/Navbar"
import ServiceInfo from '../components/ServiceLayout/ServiceInfo';
import ServiceTypes from '../components/ServiceLayout/ServiceTypes';
import ServiceCapabilities from '../components/ServiceLayout/ServiceCapabilities';
import ServiceFlowChart from '../components/ServiceLayout/ServiceFlowChart';
import ServiceCTA from '../components/ServiceLayout/ServiceCTA';
import Footer from "../components/common/Footer"


const Service = () => {
  return (
    <div>
      <Navbar />
      <ServiceHero />
      <ServiceInfo />
      <ServiceTypes/>
      <ServiceCapabilities/>
      <ServiceFlowChart />
      <ServiceCTA />
     <Footer />
    </div>
  )
}

export default Service
