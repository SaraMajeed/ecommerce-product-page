import { useRef } from "react";
import { Carousel } from '@material-tailwind/react';
import ThumbnailCarousel from './ThumbnailCarousel';
import p1 from '../assets/images/image-product-1.jpg'
import p2 from '../assets/images/image-product-2.jpg'
import p3 from '../assets/images/image-product-3.jpg'
import p4 from '../assets/images/image-product-4.jpg'

 
export function ProductCarousel() {
  return (
    <>
      <div className='md:p-10 lg:hidden'>
        <Carousel className="lg:hidden z-0">
          <img
            src={p1}
            alt="image 1"
            className=""
          />
          <img
            src={p2}
            alt="image 2"
            className=""
          />
          <img
            src={p3}
            alt="image 3"
            className=""
          />
          <img
            src={p4}
            alt="image 3"
            className=""
          />
        </Carousel>
      </div>
      <ThumbnailCarousel />
    </>
    
    
  );
  
}