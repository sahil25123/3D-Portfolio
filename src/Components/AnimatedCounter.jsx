import React, { useRef, useEffect, useState } from 'react'
import { counterItems } from '../Constants'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Stop observing once visible
        }
      },
      {
        threshold: 0.2 // Trigger when 20% of the element is visible
      }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id="counter" ref={counterRef} className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((item, index) => (
                <div key={index} className='bg-zinc-900 rounded-lg p-10 flex flex-col'>
                <div className='counter-number text-white text-5xl font-bold mb-2'>
                    {isVisible && (
                      <CountUp 
                        suffix={item.suffix} 
                        end={item.value}
                        duration={2.5}
                        delay={index * 0.2}
                      />
                    )}
                </div>
                <div className='text-white-50 text-lg'>
                    {item.label}
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter
