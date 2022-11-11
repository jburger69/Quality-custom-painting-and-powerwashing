import React from 'react'
import './OpeningContent.css'

import image8 from '../images/Image_8.jpeg';
import image17 from '../images/Image_17.jpeg';

export default function OpeningContent() {
  return (
    <>
    <div className='opening_content'>
        <div className='opening_images'>
            <div className='under_image'>
              <img className='image_one' src={image8} alt=".." width={500} height={400}/>
            </div>
        </div>
        <div className='opening_text'>
            <ul className='unordered_list_one'><h1 className='ul_title'>Services We Offer</h1>
              <li className='list_item'>Window Washing</li>
              <li className='list_item'>Power Washing</li>
              <li className='list_item'>Painting</li>
              <li className='list_item'>Interior / Exterior</li>
              <li className='list_item'>Commercial / Residental</li>
            </ul>
        </div>
    </div>
    <div className='opening_content_two'>
        <div className='opening_text_two'>
            <ul className='unordered_list_one'><h1 className='ul_title'>Why Us?</h1>
              <li className='list_item'>Fully Insured Company</li>
              <li className='list_item'>Over 25 years of painting experience</li>
              <li className='list_item'>We are known for our quality work and competitive pricing.</li>
              <li className='list_item'>Our customer's always return for more work.</li>
            </ul>
        </div>
        <div className='opening_images_two'>
            <div className='over_image_two'>
              <img className='image_two' src={image17} alt=".." width={400} height={400}/>
          </div>
        </div>
      </div>
      <hr className='opening_content_line'></hr>
    </>
  )
}
