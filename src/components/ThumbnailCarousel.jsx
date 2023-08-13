import { useRef, useState } from 'react'
import p1 from '../assets/images/image-product-1.jpg'
import p2 from '../assets/images/image-product-2.jpg'
import p3 from '../assets/images/image-product-3.jpg'
import p4 from '../assets/images/image-product-4.jpg'


export default function ThumbnailCarousel() {

    const [currentImg, setCurrentImg] = useState('');

    const imgs = [p1, p2, p3, p4];

  return (
    <div className="hidden lg:block w-1/3 p-10">
        <img className='rounded-2xl' src={currentImg ? currentImg : p1} alt="product image"  />
        <ul className='flex justify-between'>
            {
                imgs.map((img, i) => {
                    return <li key={i} >
                                <button onClick={(e) => setCurrentImg(e.target.src)}>
                                    <img className='rounded-2xl w-20 my-5 hover:opacity-60' src={img} alt={`product image ${i + 1}`} />
                                </button>
                            </li>
                })
            }
        </ul>
    </div>
    
  )
}
