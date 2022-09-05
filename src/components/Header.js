import React from 'react'
import './Header.css'
import heroImage from '../images/painters photo.webp'
import estimateImage from '../images/free estimates-fococlipping-standard.png'

export default function Header() {
  return (
    <div className='Header'>
        <h1 className='company_name'>Quality Custom Painting and PowerWashing</h1>
        <h1 className='company_number'>570-269-7523</h1>
        <img className='company_image' src={heroImage} alt=""/>
        {/* <img className='company_estimate_image' src={estimateImage} alt=""/> */}
    </div>
  )
}
