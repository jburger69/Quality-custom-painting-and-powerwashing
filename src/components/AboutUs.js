import React from 'react'
import './AboutUs.css'

import Button from '@mui/material/Button';

export default function AboutUs() {
  return (
    <div>
        <h1 className='aboutus_header'>About Us</h1>
        <h3 className='aboutus_text'>Chad Elliott Quality Custom Painting and Power Washing
            has been around the poconos since 2020. Located in Pocono Lake, PA.
            We offer all phases of painting and take great pride in our work. We
            aim to please all of our customers to their perception of quality.
        </h3>
        <h1>Don't Wait! Call us for a free estimate today. 570-269-7523</h1>
        <Button variant="contained">Email Us</Button>
        <h4 className='footer_name'>@2022 Quality Custom Painting and Power Washing incorported by Chad Elliot Weiss</h4>
    </div>
  )
}
