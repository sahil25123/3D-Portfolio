import React, { useEffect, useState } from 'react'
import { navLinks } from '../Constants'

const Navbar = () => {

    const [scrolled , setScrolled] = useState(false);

    useEffect (() =>{
        const handleScroll =() =>{
            // const isScrolled = window.scrollY >10 ;
            setScrolled(true);

        }
        window.addEventListener("scroll" , handleScroll, { passive: true });

        return () => window.removeEventListener("scroll" , handleScroll)
    },[])
  return (
   <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
    <div className='inner'>
        <a className='logo' href="#hero">Jagrat Gupta</a>

        <nav className='desktop ml-6 lg:ml-8'>
            <ul>
                {navLinks.map(({link , name}) =>(
                    <li key={name} className='group'>
                        <a href={link}>
                            <span>{name}</span>
                            <span className='underline'></span>
                        </a>
                    </li>
                ))}
                </ul>


        </nav>

                <div className="actions ml-auto flex items-center gap-3">
                    <a href="#contact" className="contact-btn group">
                        <div className='inner'>
                                <span>Contact me</span>
                        </div>
                    </a>

                    <a
                        href={"https://drive.google.com/file/d/1cTSAHKgC3Mk2Wltx2gag1iLalBCdGQlU/view?usp=drive_link"}
                        className="resume-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>

    </div>

   </header>
  )
}

export default Navbar
