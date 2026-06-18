import React from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import HowItWorks from '../components/home/HowItWorks'
import CTA from '../components/home/CTA'

const Home = () => {
  return (
    <>
        <Hero />
        <Services />
        <HowItWorks />
        <CTA />
    </>
  )
}

export default Home