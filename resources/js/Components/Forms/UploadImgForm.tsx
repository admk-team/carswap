
import React from 'react';
import ImageGallery from '@/Assets/image-gallery.png';
import ImagCheck from '@/Assets/check.png';

const UploadImgForm = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-6">
                <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md">
                    <h1 className="text-xl text-gray-950 font-bold">Upload Image:</h1>
                    <div className="py-2">
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-500 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex items-center justify-center pb-3">
                                    <img src={ImageGallery} className="mb-2 w-12 h-12 mr-4" alt="" />
                                    <div className="bg-green-500 text-white py-2.5 px-3">
                                        + Add Photos
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-around">
                                    <span className='flex pt-4'>
                                        <img src={ImagCheck} className="w-5 h-5 mr-2" alt="" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            <b>Add at least 15 pictures</b> to improve chances for a quick sale.
                                        </p>
                                    </span>
                                    <span className='flex pt-4'>
                                        <img src={ImagCheck} className="w-5 h-5 mr-2" alt="" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            <b>Adding clear Front, Back, and Interior Pictures</b> of your car increases
                                            the quality of your Ad and gets you noticed more.
                                        </p>
                                    </span>
                                    <span className='flex pt-4'>
                                        <img src={ImagCheck} className="w-5 h-5 mr-2" alt="" />
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            <b>Photos should be in</b> jpeg, jpg, png, gif format only.
                                        </p>
                                    </span>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UploadImgForm;
