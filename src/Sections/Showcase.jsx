import React from 'react'

const Showcase = () => {
  return (
    <div id="work" className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* {left} */}
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src="/images/project1.png" alt='StaySphere'></img>
                    </div>
                </div>
                {/* Right */}
                <div className='text-content'></div>


            </div>
        </div>

      
    </div>
  )
}

export default Showcase
