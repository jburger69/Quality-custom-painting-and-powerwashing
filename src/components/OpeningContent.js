import React from 'react'
import './OpeningContent.css'

export default function OpeningContent() {
  return (
    <>
    <div className='opening_content'>
        <div className='opening_images'>
            {/* images */}
            <h1>Images</h1>
        </div>
        <div className='opening_text'>
            <h1>Services We Offer</h1>
            <h3>Window Washing</h3>
            <h3>Power Washing</h3>
            <h3>Painting</h3>
            <h3>Interior / Exterior</h3>
            <h3>Commercial / Residental</h3>
        </div>
    </div>
    <div className='opening_content_two'>
        <div className='opening_text_two'>
            <h1>Why Us?</h1>
            <h3>Fully Insured Company</h3>
            <h3>Over 25 years of painting experience</h3>
            <h3>We are known for our quality work and competitive pricing.</h3>
        </div>
        <div className='opening_images_two'>
          <h1>Images</h1>
        </div>
      </div>
      <hr className='opening_content_line'></hr>
    </>
  )
}
