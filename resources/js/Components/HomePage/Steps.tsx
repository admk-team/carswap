import React from "react";
import Calender from "@/Assets/StepsImages/preview.png";
import Delivery from "@/Assets/StepsImages/delivery-van.png";
import PostCar from "@/Assets/StepsImages/share-ride.png";
import Swap from "@/Assets/StepsImages/Swap.png";

const Steps = () => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl w-full h-full mt-12 ">
                <div className="text-center font-bold md:text-center text-lg md:text-3xl lg:text-3xl">
                    <h1 className="text-gray-950">
                        4 Simple Steps To Swap A Car
                    </h1>
                </div>

                <div>
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="flex justify-center">
                                    <h1 className="text-emerald-500 text-7xl md:text-7xl font-bold -mr-1">
                                        1
                                    </h1>
                                    <img
                                        src={PostCar}
                                        alt=""
                                        className="w-10 h-10 md:w-15 md:h-15 mt-6 md:mt-6"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center text-center mt-2 md:mt-0">
                                    <p className="font-semibold text-sm md:text-base">
                                        Post your car
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center p-4">
                                <div className="flex justify-center">
                                    <h1 className="text-emerald-500 text-7xl md:text-7xl font-bold -mr-0">
                                        2
                                    </h1>
                                    <img
                                        src={Calender}
                                        alt="Image 2"
                                        className="w-10 h-10 md:w-15 md:h-15 mt-6 md:mt-6"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center text-center mt-2 md:mt-0">
                                    <p className="font-semibold text-sm md:text-base">
                                        We Evaluate it.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center p-4">
                                <div className="flex justify-center">
                                    <h1 className="text-emerald-500 text-7xl md:text-7xl font-bold -mr-0">
                                        3
                                    </h1>
                                    <img
                                        src={Swap}
                                        alt="Image 3"
                                        className="w-10 h-10 md:w-15 md:h-15 mt-6 md:mt-6"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center text-center mt-2 md:mt-0">
                                    <p className="font-semibold text-sm md:text-base">
                                        Choose car to swap
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center p-4">
                                <div className="flex justify-center">
                                    <h1 className="text-emerald-500 text-7xl md:text-7xl font-bold -mr-0">
                                        4
                                    </h1>
                                    <img
                                        src={Delivery}
                                        alt="Image 4"
                                        className="w-10 h-10 md:w-15 md:h-15 mt-6 md:mt-6"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center text-center mt-2 md:mt-0">
                                    <p className="font-semibold text-sm md:text-base">
                                        Your Inspection and Delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Steps;
