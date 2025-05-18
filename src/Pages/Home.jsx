import React from 'react'
import Hero from '../Sections/Hero'
import Showcase from '../Sections/Showcase'
import Navbar from '../Components/Navbar'
import LogoSection from '../Components/LogoSection'
import FeatureCards from '../Sections/FeatureCards'
import TechStack from '../Sections/TechStack'
import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'
import Journey from '../Sections/Journey'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Showcase/>
      <LogoSection/>
      <FeatureCards/>
      {/* Journey Section */}
      <Journey/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
