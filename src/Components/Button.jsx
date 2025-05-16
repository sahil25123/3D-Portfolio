import React from 'react'

const Button = ({text , className }) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
        <div className='cta-button group'>
            <div className='bg-circle'/>
            <p className='text'>{text}</p>
            <div className='arrow-wrapper'>
                <img src='/images/arrow-down.svg' alt="arrow"></img>
            </div>

        </div>

    </a>
    
  )
}

export default Button
