import React from 'react'
import { socialImgs } from '../Constants'

const Footer = () => {
  return (
   <footer className='footer'>
    <div className='footer-container'>
        <div className='flex flex-col justify-center items-center'>
            {/* <p> Terms and Condition</p> */}
        </div>
        <div className='socials'>
            {socialImgs.map((img) =>(
                <a className='icon' target='_blank' href={img.url} key={img.url} >
                    <img src={img.imgPath} alt={img.name}></img>
                </a>
            ))}
        </div>
        <div className='flex flex-col justify-center'>
            <p className='text-center md:text-end'>
                @{new Date().getFullYear()} Jagrat Gupta. All rights resevered.
            </p>
        </div>
    </div>

   </footer>
  )
}

export default Footer
