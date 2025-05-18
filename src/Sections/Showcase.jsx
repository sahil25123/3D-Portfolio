import React, { useRef } from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);



const Showcase = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <section  ref={sectionRef} id="project" className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* {left} */}
                <div className='first-project-wrapper' ref={project1Ref}>

                    <div className='image-wrapper'>
                      <a href="https://staysphere.onrender.com/"  className='project-link' target='_blank' rel='noopener noreferrer'>
                        <img src="/images/project1.jpg" alt='StaySphere'></img>
                      </a>
                    </div>
                     <div className='text-content'>
                        <h2> StaySphere is a web platform that helps users discover, book, and manage short-term stays and accommodations with ease.</h2>
                        <p className='text-white-50 md:text-xl'>
                            A website built with MongoDB, Express.js, Node.js, EJS, and TailwindCSS — delivering a fast and user-friendly experience.
                        </p>
                     </div>
                </div>
                {/* Right */}
                <div className='project-list-wrapper overflow-hidden' >
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#F5F3FF]'>
                            <img src='/images/project2.png' alt="project2"></img>
                        </div>
                        <h2>Chatter Box</h2>
                        
                    </div>

                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#EEF3FF]'>
                            <img src='/images/project3.png' alt="React Hangman Game"></img>
                        </div>
                        <h2>Hangman Game</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase
