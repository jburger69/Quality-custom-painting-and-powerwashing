import React from 'react'
import './ClientGallery.css'
import image1 from '../images/Image_1.jpeg';
import image2 from '../images/Image_2.jpeg';
import image3 from '../images/Image_3.jpeg';
import image4 from '../images/Image_4.jpeg';
import image5 from '../images/Image_5.jpeg';
import image6 from '../images/Image_6.jpeg';
import image7 from '../images/Image_7.jpeg';
import image8 from '../images/Image_8.jpeg';
import image9 from '../images/Image_9.jpeg';
import image10 from '../images/Image_10.jpeg';
import image11 from '../images/Image_11.jpeg';
import image12 from '../images/Image_12.jpeg';
import image13 from '../images/Image_13.jpeg';
import image14 from '../images/Image_14.jpeg';
import image15 from '../images/Image_15.jpeg';
import image16 from '../images/Image_16.jpeg';
import image17 from '../images/Image_17.jpeg';
import image18 from '../images/Image_18.jpeg';
import image19 from '../images/Image_19.jpeg';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { width } from '@mui/system';

export default function ClientGallery() {
  return (
    <>
        <h1>Client Gallery</h1>
        <div className='client_gallery_images'>
            <ImageList sx={{ width: 1000, height: 1000 }} cols={4} rowHeight={300}>
                {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </div>
    </>
  )
}

const itemData = [
    {
        img: image1,
        title: 'Breakfast',
    },
    {
        img: image2,
        title: 'Breakfast',
    },
    {
        img: image3,
        title: 'Breakfast',
    },
    {
        img: image4,
        title: 'Breakfast',
    },
    {
        img: image5,
        title: 'Breakfast',
    },
    {
        img: image6,
        title: 'Breakfast',
    },
    {
        img: image7,
        title: 'Breakfast',
    },
    {
        img: image8,
        title: 'Breakfast',
    },
    {
        img: image9,
        title: 'Breakfast',
    },
    {
        img: image10,
        title: 'Breakfast',
    },
    {
        img: image11,
        title: 'Breakfast',
    },
    {
        img: image12,
        title: 'Breakfast',
    },
    {
        img: image13,
        title: 'Breakfast',
    },
    {
        img: image14,
        title: 'Breakfast',
    },
    {
        img: image15,
        title: 'Breakfast',
    },
    {
        img: image16,
        title: 'Breakfast',
    },
    {
        img: image17,
        title: 'Breakfast',
    },
    {
        img: image18,
        title: 'Breakfast',
    },
    {
        img: image19,
        title: 'Breakfast',
    },
      
]
