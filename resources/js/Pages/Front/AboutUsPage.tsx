import NavBar from "@/Components/Navbar/NavBar";
import AnotherBG from "@/Assets/AboutUsWalpeper.png";
import SecondImage from "@/Assets/AboutUsSecond.png";
import smallImage from "@/Assets/aboutussmall.png";
import React from "react";
import Footer from "../Footer/Footer";
import Icon1 from "@/Assets/AboutIsIcon1.png";
import Icon2 from "@/Assets/AboutUsIcon2.png";
import Icon3 from "@/Assets/AboutUsIcon3.png";
import Icon4 from "@/Assets/AboutUsicon4.png";

const AboutUsPage = ({ auth }: any) => {
    return (
        <>
            <NavBar auth={auth} />

            <section className="bg-white">
                <div
                    className=" hero-section bg-cover bg-center h-96 flex justify-center items-center"
                    style={{ backgroundImage: `url(${AnotherBG})` }}
                >
                    <div className="hero-content text-center">
                        <h1 className="text-5xl text-emerald-500 font-bold ">
                            About Us
                        </h1>
                        <p className="text-xl text-white">Home - About Us.</p>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl w-full h-full mt-12 ">
                    <div className="flex flex-col justify-center md:flex-row mx-8">
                        <div className="">
                            <div className="bg-white border border-gray-300 rounded-lg shadow-md mt-10 lg:mt-36">
                                <img src={smallImage} alt="" />
                            </div>
                        </div>
                        <div className="md:w-2/3 ll-2 lg:pl-28">
                            <h1 className="text-gray-950 text-lg font-extrabold mb-2 mt-4">
                                Welcome To Carswap.ng
                            </h1>
                            <p className="text-gray-900 text-lg border-b border-gray-950 pb-4 mb-2 leading-8">
                               CARSWAP.NG is Nigeria's first car swap
                                marketplace launched in 2018 and Incorporated in
                                Nigeria at Corporate Affairs Commission Nigeria
                                as Carswap Limited. Our Objective is to end the
                                hassle car replacements or liquidations among
                                users<br /><br />
                                <h4>Our Core Services:</h4><br />
                                <p>
                                    A. Upgrade: An upgrade allows users to use
                                    their existing cars to buy their dream car
                                    by simply using our Swap Calculator to check
                                    the price of their car and the price of the
                                    better car they want. They pay price
                                    difference to get such cars. (Mrs. Adekunle
                                    has a car worth N3,000,000 and wants a
                                    better car worth N5,000,000. She will simply
                                    use our swap calculator to add N2,000,000
                                    for her new car).<br /><br /> 
                                    B. Downgrade: A downgrade
                                    allows users to get cash on their cars by
                                    taking a cheap car. (Mr. Emeka's car is
                                    worth N10,000,000. He is in need of an
                                    urgent N6,000,000. Mr. Emeka uploads his car
                                    on our app, pick a car worth N4,000,000 and
                                    the cash of N6,000,000 is transferred to his
                                    bank account. Note: All swap process is
                                    covered by car inspection, ownership
                                    verification, Evaluation.<br/><br />
                                    C. Car dealership.
                                    We are the easiest market for car dealers to
                                    sell their cars. D. New car users can buy
                                    cars for cash at carswap.ng and get 2 years
                                    free swap warranty.
                                </p>
                            </p>
                            <div className="flex ">
                                <div className="flex flex-col ">
                                    <div className="flex flex-col items-center mt-3 mr-10 ">
                                        <img
                                            src={Icon1}
                                            alt=""
                                            className="w-20 h-20"
                                        />
                                        <h2 className="text-gray-900 text-base font-bold text-center mt-2">
                                            24/7 Assistance Support
                                        </h2>
                                        <p className="text-gray-700 text-sm text-center">
                                            We are here for you around the
                                            clock. Our dedicated support team is
                                            ready to assist you anytime,
                                            ensuring prompt responses and
                                            resolving any queries or concerns
                                            you may have.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center mt-12 mr-10">
                                        <img
                                            src={Icon3}
                                            alt=""
                                            className="w-16 h-16"
                                        />
                                        <h2 className="text-gray-900 text-base text-center font-bold mt-3">
                                            Zero Wait Time
                                        </h2>
                                        <p className="text-gray-700 text-sm text-center">
                                            You don't have to wait for replies
                                            and after purchase your car will be
                                            delivered to you.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-col items-center  mt-3 ml-10">
                                        <img
                                            src={Icon2}
                                            alt=""
                                            className="w-20 h-20"
                                        />
                                        <h2 className="text-gray-900 text-base text-center font-bold mt-2 ">
                                            Cilent Satisfication
                                        </h2>
                                        <p className="text-gray-700 text-sm text-center">
                                            We have a client satisfaction rate.
                                            Our dedicated support team is ready
                                            to assist you anytime, ensuring
                                            prompt responses and resolving any
                                            queries or concerns you may have
                                            contact with us.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center mt-9 ml-10">
                                        <img
                                            src={Icon4}
                                            alt=""
                                            className="w-20 h-20"
                                        />
                                        <h2 className="text-gray-900 text-base text-center font-bold mt-2">
                                            Fixed Rates
                                        </h2>
                                        <p className="text-gray-700 text-sm text-center">
                                            There are fixed rates of car the car
                                            will be of price that is being
                                            negotiated and there will be no
                                            complains about it{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mx-auto max-w-screen-xl w-full h-full mt-12 flex items-center justify-center">
                    <div className="md:container md:mx-auto bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${SecondImage})` }}>
                        <div className="mx-auto lg:mx-12 xl:mx-36 text-center">
                            <h1 className="uppercase text-xl md:text-2xl font-bold text-emerald-500 mt-24 text-center">Our Company Status</h1>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24'>
                                <div className='mt-16'>
                                    <h2 className="text-1xl md:text-2xl text-emerald-500">100k+</h2>
                                    <h1 className="uppercase font-extrabold text-2xl md:text-3xl text-white mt-3">Cars</h1>
                                </div>
                                <div className='mt-16'>
                                    <h2 className="text-1xl md:text-2xl text-emerald-500">100k+</h2>
                                    <h1 className="uppercase font-extrabold text-2xl md:text-3xl text-white mt-3">Deals</h1>
                                </div>
                                <div className='mt-16'>
                                    <h2 className="text-1xl md:text-2xl text-emerald-500">100k+</h2>
                                    <h1 className="uppercase font-extrabold text-2xl md:text-3xl text-white mt-3">Clients Annually</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
            <Footer auth={auth} />
        </>
    );
};

export default AboutUsPage;
