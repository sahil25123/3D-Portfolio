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
                        <img src="/images/project1.jpg" alt='StaySphere'></img>
                        <div className='project-overlay'>
                            <a 
                                href="https://stay-sphere-gules.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='project-link'
                            >
                                View Live
                            </a>
                            <a 
                                href="https://github.com/sahil25123/StaySphere" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='project-link'
                            >
                                View Repo
                            </a>
                        </div>
                    </div>
                    <div className='text-content'>
                        <h2>StaySphere is a web platform that helps users discover, book, and manage short-term stays and accommodations with ease.</h2>
                        <p className='text-white-50 md:text-xl'>
                            A website built with MongoDB, Express.js, Node.js, EJS, and TailwindCSS — delivering a fast and user-friendly experience.
                        </p>
                    </div>
                </div>
                {/* Right */}
                <div className='project-list-wrapper'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#F5F3FF]'>
                            <img src='/images/project2.png' alt="Chatter Box"></img>
                            <div className='project-overlay'>
                                <a 
                                    href="https://chatter-box-av2e.onrender.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='project-link'
                                >
                                    View Live
                                </a>
                                <a 
                                    href="https://github.com/sahil25123/Chat-app" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='project-link'
                                >
                                    View Repo
                                </a>
                            </div>
                        </div>
                        <h2>Chatter Box</h2>
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#EEF3FF]'>
                            <img src='/images/project3.png' alt="PingUp-Social Media"></img>
                            <div className='project-overlay'>
                                <a 
                                    href="https://pingup-mern.vercel.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='project-link'
                                >
                                    View Live
                                </a>
                                <a 
                                    href="https://github.com/sahil25123/pingup-mern" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className='project-link'
                                >
                                    View Repo
                                </a>
                            </div>
                        </div>
                        <h2>PingUp - A Social Media Platform</h2>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="view-more-projects">
            <button className="view-more-btn">
                View More Projects
                <img src="/images/arrow-right.svg" alt="arrow" />
            </button>
            
        </div> */}
    </section>
  )
}

export default Showcase
