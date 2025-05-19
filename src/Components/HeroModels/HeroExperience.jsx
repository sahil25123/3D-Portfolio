import { OrbitControls, Environment, ContactShadows, PresentationControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import { Sahil } from './Sahil-GLB'
import HeroLights from './HeroLights'
import * as THREE from 'three'
import Particles from './Particle'

// Animation component for subtle movement
const AnimatedModel = ({ children, isMobile }) => {
  const group = React.useRef()
  
  const updateAnimation = useCallback((state) => {
    if (!group.current) return
    
    const t = state.clock.getElapsedTime()
    const rotation = Math.sin(t / 3) / 8
    const position = Math.sin(t / 3) / 6
    
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      rotation,
      0.05
    )
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      position,
      0.05
    )
  }, [])

  useFrame(updateAnimation)

  // Increased scale for both desktop and mobile
  return (
    <group 
      ref={group} 
      scale={isMobile ? 2.2 : 3.5} 
      position={[
        isMobile ? 1.5 : 0, // Add x offset for mobile
        -2.8, 
        0
      ]}
    >
      {children}
    </group>
  )
}

const HeroExperience = () => {
//   const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 50,
        near: 0.1,
        far: 1000
      }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
        outputColorSpace: THREE.SRGBColorSpace,
        powerPreference: "high-performance"
      }}
      dpr={[1, 2]} // Limit pixel ratio for better performance
      performance={{ min: 0.5 }} // Allow frame rate to drop to maintain performance
    >
      <Suspense fallback={null}>
        <PresentationControls
          global={false}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 3, Math.PI / 3]}
          config={{ mass: 2, tension: 400 }}
          snap={null}
          touch-action="none"
        >
          <AnimatedModel isMobile={isMobile}>
            <Sahil />
          </AnimatedModel>
        </PresentationControls>
        <OrbitControls 
          enableZoom={true} 
          enableRotate={false}
          minDistance={5}
          maxDistance={12}
          enableDamping={false} // Disable damping for better performance
        />

        <HeroLights />
        <Particles count={30}/> {/* Reduced particle count */}
        
        {/* Environment and shadows */}
        <Environment preset="city" />
        <ContactShadows
          position={[0, -4, 0]}
          opacity={0.6}
          scale={10}
          blur={2.5}
          far={4}
        />

      </Suspense>
    </Canvas>
  )
}

export default HeroExperience
