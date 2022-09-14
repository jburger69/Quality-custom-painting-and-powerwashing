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
            <ul>Services We Offer
              <li>Window Washing</li>
              <li>Power Washing</li>
              <li>Painting</li>
              <li>Interior / Exterior</li>
              <li>Commercial / Residental</li>
            </ul>
        </div>
    </div>
    <div className='opening_content_two'>
        <div className='opening_text_two'>
            <ul>Why Us?
              <li>Fully Insured Company</li>
              <li>Over 25 years of painting experience</li>
              <li>We are known for our quality work and competitive pricing.</li>
            </ul>
        </div>
        <div className='opening_images_two'>
          <h1>Images</h1>
        </div>
      </div>
      <hr className='opening_content_line'></hr>
    </>
  )
}
