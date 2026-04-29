import React from 'react'
import AboutCard1 from '../components/AboutCard1'
import OurStory from '../components/OurStory'
import VisionAndMission from '../components/VisionAndMission'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import HomeLastCard from '../components/HomeLastCard'
import ContactCard from '../components/ContactCard'
import TestSlider from '../components/TestSlider'

const About = () => {
  return (
    <div>
        <AboutCard1 />
        <OurStory />
        <VisionAndMission />
        {/* <Testimonials /> */}
        <TestSlider />
        <FAQ />
        <HomeLastCard />
        <ContactCard />
    </div>
  )
}

export default About