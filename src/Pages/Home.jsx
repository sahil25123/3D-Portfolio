import React from 'react'
import Hero from '../Sections/Hero'
import Showcase from '../Sections/Showcase'
import Navbar from '../Components/Navbar'
import LogoSection from '../Components/LogoSection'
import FeatureCards from '../Sections/FeatureCards'
import TechStack from '../Sections/TechStack'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Showcase/>
      <LogoSection/>
      <FeatureCards/>
      {/* Journey Section */}
      <TechStack/>
    </div>
  )
}

export default Home
