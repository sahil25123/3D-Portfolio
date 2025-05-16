import React from 'react'

const HeroLights = () => {
  return (
    <>
     <ambientLight  intensity={0.2} color="#1a1a40"/>
        <directionalLight position={[5,5,5]} intensity={5}/>
        
    </>
  )
}

export default HeroLights
