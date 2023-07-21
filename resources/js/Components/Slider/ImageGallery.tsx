import { Carousel } from 'flowbite'
import React from 'react'
import Slider from './Slider'

const ImageGallery = ({images, setImages}:any) => {
    return (
        <div>
            <button type="button" onClick={()=>setImages([])}>Close</button>
            <Slider images={images} />
        </div>
    )
}

export default ImageGallery
