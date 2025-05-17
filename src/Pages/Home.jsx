import React from 'react'
import Hero from '../Sections/Hero'
import Showcase from '../Sections/Showcase'
import Navbar from '../Components/Navbar'
import LogoSection from '../Components/LogoSection'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Showcase/>
      <LogoSection/>
    </div>
  )
}

export default Home
