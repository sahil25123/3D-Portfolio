import React from 'react'
// import { useHelper } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const HeroLights = () => {
  const directionalLightRef = useRef()
  
  // Optional: Uncomment to see light helper
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'red')

  return (
    <>
      {/* Main ambient light for overall scene brightness */}
      <ambientLight intensity={0.3} color="#1a1a40" />
      
      {/* Main directional light for primary shadows and highlights */}
      <directionalLight
        ref={directionalLightRef}
        position={[5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* Fill light from opposite side */}
      <directionalLight
        position={[-5, 3, -5]}
        intensity={0.8}
        color="#b9d5ff"
      />
      
      {/* Rim light for edge highlighting */}
      <directionalLight
        position={[0, -2, 5]}
        intensity={0.5}
        color="#ffffff"
      />
      
      {/* Spotlight for foot glow */}
      <spotLight
        position={[0, -5, 0]}
        intensity={1.5}
        angle={0.3}
        penumbra={0.2}
        color="#ffffff"
      />
      
      {/* Platform light */}
      <spotLight
        position={[0, -6, 0]}
        intensity={0.5}
        angle={0.8}
        penumbra={0.5}
        color="#b9d5ff"
      />
    </>
  )
}

export default HeroLights
