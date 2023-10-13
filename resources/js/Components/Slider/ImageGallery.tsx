import { Carousel } from 'flowbite'
import React from 'react'
import Slider from './Slider'

const ImageGallery = ({ images, setImages }: any) => {
    return (
        <div className="relative">
            <Slider images={images} />
            <div className="flex justify-end absolute top-0 right-0 w-full">
                <button
                    type="button"
                    className="font-bold  mt-2 text-white"
                    onClick={() => setImages([])}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14  h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
            </div>
        </div>


    )
}

export default ImageGallery
