import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { FaArrowRight } from "react-icons/fa6";
const StoryPart = () => {
    const [scale, setScale] = useState(1.3);
    const [manualTilt1, setManualTilt1] = useState({ x: 0, y: 0 });
    return (
        <div className=''>
            <div className=' lg:px-35'>
                <h1 className='roboto-font font-extrabold text-3xl md:text-6xl lg:text-[100px]'>Content<br />dat scoort.</h1>
                <p className='pt-5 text-xl md:text-3xl font-medium w-[300px] lg:w-[450px]'>Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.</p>
                <div className='py-5' >
                    <Tilt
                        tiltAngleYManual={manualTilt1.y}
                        tiltAngleXManual={manualTilt1.x}
                    >
                        <button onMouseEnter={() => setManualTilt1({ x: 10, y: -25 })} onMouseLeave={() => setManualTilt1({ x: 0, y: 0 })} className="btn bg-transparent px-1 py-3 rounded-xl flex justify-center border border-black">Bekijk ons werk
                            <div className='bg-black rounded-lg px-2 py-2 text-white' ><FaArrowRight></FaArrowRight></div>
                        </button>
                    </Tilt>
                </div>
            </div>
            <div className='pt-5 lg:px-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 '>
                {/* Card 1 */}
                <div className="card group bg-base-100 w-50 md:w-70  lg:w-90 border-8 h-[200px] md:h-[300px] lg:h-[400px] bg-orange-500 border-orange-500 rounded-3xl hover:-rotate-5 ">
                    {/* video container */}

                    <video
                        src='./../../../public/videos/video1.mp4'
                        muted // Required for most browsers to allow autoplay/hover play
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()} // Plays when mouse enters card area
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0; // Resets video to start when mouse leaves
                        }}
                        className="w-full h-full rounded-2xl absolute inset-0 object-cover hidden md:block"
                    />

                    <h2 className='block md:hidden relative top-5 w-[100px] md:w-[200px] text-sm lg:text-xl font-bold lg:font-extrabold roboto-font text-white'>Van nul naar vol, binnern 3 weken</h2>
                    <div className='md:hidden block -top-5 left-30 relative overflow-hidden w-6 h-6 lg:w-10 lg:h-10 rounded-full text-black bg-white'>
                        {/* The First Arrow - Slides out to the bottom-right */}
                        <span className='absolute inset-0 flex items-center justify-center -rotate-45 transition-transform duration-300 ease-in-out group-hover:-translate-x-full group-hover:translate-y-full'>
                            <FaArrowRight />
                        </span>

                        {/* The Second Arrow - Slides in from the top-left */}
                        <span className='absolute inset-0 flex items-center justify-center -rotate-45 translate-x-full -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0'>
                            <FaArrowRight />
                        </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full rounded-3xl md:h-[80%] h-[80%] lg:h-[70%] p-2 lg:p-5 ">

                        <div
                            className="bg-orange-500 w-full h-full rounded-t-[20px] hidden md:block"
                            style={{
                                clipPath: "polygon(0% 70%, 100% 0%, 100% 100%, 0% 100%)",
                            }}
                        >
                            <div className='flex lg:flex-col flex-row relative top-18 lg:top-30 text-white left-8 lg:left-16'>
                                <h2 className='w-[100px] md:w-[200px] text-sm lg:text-xl font-bold lg:font-extrabold roboto-font'>Van nul naar vol, binnern 3 weken</h2>
                                <button className='w-1/3 inline-block lg:mt-4 bg-white/30  lg:px-3 lg:py-1 text-[14px] rounded-lg'>Built</button>
                            </div>
                            <button href="#" className='relative -top-10 left-35 lg:-top-20 lg:left-65 rounded-full ' >
                                <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
                                    <div className="background-stripes scale-no-tilt">
                                        <div className="header">

                                            <div className='relative overflow-hidden w-5 h-5 lg:w-10 lg:h-10 rounded-full text-black bg-white'>
                                                {/* The First Arrow - Slides out to the bottom-right */}
                                                <span className='absolute inset-0 flex items-center justify-center -rotate-45 transition-transform duration-300 ease-in-out group-hover:-translate-x-full group-hover:translate-y-full'>
                                                    <FaArrowRight />
                                                </span>

                                                {/* The Second Arrow - Slides in from the top-left */}
                                                <span className='absolute inset-0 flex items-center justify-center -rotate-45 translate-x-full -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0'>
                                                    <FaArrowRight />
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </Tilt>

                            </button>

                        </div>

                    </div>


                </div>
                {/* Card 2 */}
                <div className="card group bg-base-100 w-50 md:w-70  lg:w-90 border-8 h-[200px] md:h-[300px] lg:h-[400px] bg-blue-500  border-blue-500 rounded-3xl hover:-rotate-5 relative -top-25">
                    {/* video container */}

                    <video
                        src='./../../../public/videos/video1.mp4'
                        muted // Required for most browsers to allow autoplay/hover play
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()} // Plays when mouse enters card area
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0; // Resets video to start when mouse leaves
                        }}
                        className="w-full h-full rounded-2xl absolute inset-0 object-cover hidden md:block"
                    />
                    <h2 className='block md:hidden relative top-5 w-[100px] md:w-[200px] text-sm lg:text-xl font-bold lg:font-extrabold roboto-font text-white'>Van nul naar vol, binnern 3 weken</h2>
                    <div className='md:hidden block -top-5 left-30 relative overflow-hidden w-6 h-6 lg:w-10 lg:h-10 rounded-full text-black bg-white'>
                        {/* The First Arrow - Slides out to the bottom-right */}
                        <span className='absolute inset-0 flex items-center justify-center -rotate-45 transition-transform duration-300 ease-in-out group-hover:-translate-x-full group-hover:translate-y-full'>
                            <FaArrowRight />
                        </span>

                        {/* The Second Arrow - Slides in from the top-left */}
                        <span className='absolute inset-0 flex items-center justify-center -rotate-45 translate-x-full -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0'>
                            <FaArrowRight />
                        </span>
                    </div>


                    <div className="absolute bottom-0 left-0 w-full rounded-3xl md:h-[80%] h-[80%] lg:h-[70%] p-2 lg:p-5 ">

                        <div
                            className="bg-blue-500 w-full h-full rounded-t-[20px] hidden md:block"
                            style={{
                                clipPath: "polygon(0% 70%, 100% 0%, 100% 100%, 0% 100%)",
                            }}
                        >
                            <div className='flex lg:flex-col flex-row relative top-18 lg:top-30 text-white left-8 lg:left-16'>
                                <h2 className='w-[100px] md:w-[200px]
                                ] text-sm lg:text-xl font-bold lg:font-extrabold roboto-font'>Van nul naar vol, binnern 3 weken</h2>
                                <button className='w-1/3 inline-block lg:mt-4 bg-white/30  lg:px-3 lg:py-1 text-[14px] rounded-lg'>Built</button>
                            </div>
                            <button href="#" className='relative -top-10 left-35 lg:-top-20 lg:left-65 rounded-full ' >
                                <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
                                    <div className="background-stripes scale-no-tilt">
                                        <div className="header">

                                            <div className='relative overflow-hidden w-5 h-5 lg:w-10 lg:h-10 rounded-full text-black bg-white'>
                                                {/* The First Arrow - Slides out to the bottom-right */}
                                                <span className='absolute inset-0 flex items-center justify-center -rotate-45 transition-transform duration-300 ease-in-out group-hover:-translate-x-full group-hover:translate-y-full'>
                                                    <FaArrowRight />
                                                </span>

                                                {/* The Second Arrow - Slides in from the top-left */}
                                                <span className='absolute inset-0 flex items-center justify-center -rotate-45 translate-x-full -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0'>
                                                    <FaArrowRight />
                                                </span>
                                            </div>-
                                        </div>

                                    </div>
                                </Tilt>

                            </button>

                        </div>

                    </div>


                </div>
                {/* Card 3 */}
                <div className="card group bg-base-100 w-50 md:w-70  lg:w-90 border-8 h-[200px] md:h-[300px] lg:h-[400px] bg-green-500  border-green-500 rounded-3xl hover:-rotate-5 relative -top-50">
                    {/* video container */}

                    <video
                        src='./../../../public/videos/video1.mp4'
                        muted // Required for most browsers to allow autoplay/hover play
                        loop
                        playsInline
                        onMouseEnter={(e) => e.target.play()} // Plays when mouse enters card area
                        onMouseLeave={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0; // Resets video to start when mouse leaves
                        }}
                        className="w-full h-full rounded-2xl absolute inset-0 object-cover hidden md:block"
                    />
                    <h2 className='block md:hidden relative top-5 w-[100px] md:w-[200px] text-sm lg:text-xl font-bold lg:font-extrabold roboto-font text-white'>Van nul naar vol, binnern 3 weken</h2>
                    <div className='md:hidden block -top-5 left-30 relative overflow-hidden w-6 h-6 lg:w-10 lg:h-10 rounded-full text-black bg-white'>
                        {/* The First Arrow - Slides out to the bottom-right */}
                        <span className='absolute inset-0 flex items-center justify-center -rotate-45 transition-transform duration-300 ease-in-out group-hover:-translate-x-full group-hover:translate-y-full'>
                            <FaArrowRight />
                        </span>

                        {/* The Second Arrow - Slides in from the top-left */}
                        <span className='absolute inset-0 flex items-center justify-center -rotate-45 translate-x-full -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0'>
                            <FaArrowRight />
                        </span>
                    </div>


                    <div className="absolute bottom-0 left-0 w-full rounded-3xl md:h-[80%] h-[80%] lg:h-[70%] p-2 lg:p-5 ">

                        <div
                            className="bg-green-500 w-full h-full rounded-t-[20px] hidden md:block"
                            style={{
                                clipPath: "polygon(0% 70%, 100% 0%, 100% 100%, 0% 100%)",
                            }}
                        >
                            <div className='flex lg:flex-col flex-row relative top-18 lg:top-30 text-white left-8 lg:left-16'>
                                <h2 className='w-[100px] md:w-[200px]
                                ] text-sm lg:text-xl font-bold lg:font-extrabold roboto-font'>Van nul naar vol, binnern 3 weken</h2>
                                <button className='w-1/3 inline-block lg:mt-4 bg-white/30  lg:px-3 lg:py-1 text-[14px] rounded-lg'>Built</button>
                            </div>
                            <button href="#" className='relative -top-10 left-35 lg:-top-20 lg:left-65 rounded-full ' >
                                <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
                                    <div className="background-stripes scale-no-tilt">
                                        <div className="header">

                                            <div className='relative overflow-hidden w-5 h-5 lg:w-10 lg:h-10 rounded-full text-black bg-white'>
                                                {/* The First Arrow - Slides out to the bottom-right */}
                                                <span className='absolute inset-0 flex items-center justify-center -rotate-45 transition-transform duration-300 ease-in-out group-hover:-translate-x-full group-hover:translate-y-full'>
                                                    <FaArrowRight />
                                                </span>

                                                {/* The Second Arrow - Slides in from the top-left */}
                                                <span className='absolute inset-0 flex items-center justify-center -rotate-45 translate-x-full -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-x-0 group-hover:translate-y-0'>
                                                    <FaArrowRight />
                                                </span>
                                            </div>-
                                        </div>

                                    </div>
                                </Tilt>

                            </button>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default StoryPart;