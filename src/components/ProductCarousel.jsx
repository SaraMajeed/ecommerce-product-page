import { useRef } from "react";
import { Carousel } from '@material-tailwind/react';
import ThumbnailCarousel from './ThumbnailCarousel';

 
export function ProductCarousel() {
  return (
    <>
      <div className='md:p-10 lg:hidden'>
        <Carousel className="lg:hidden z-0">
          <img
            src="./src/assets/images/image-product-1.jpg"
            alt="image 1"
            className=""
          />
          <img
            src="./src/assets/images/image-product-2.jpg"
            alt="image 2"
            className=""
          />
          <img
            src="./src/assets/images/image-product-3.jpg"
            alt="image 3"
            className=""
          />
          <img
            src="./src/assets/images/image-product-4.jpg"
            alt="image 3"
            className=""
          />
        </Carousel>
      </div>
      <ThumbnailCarousel />
    </>
    
    
  );
  
}