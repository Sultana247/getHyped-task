import React, { useState } from 'react';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa6';
import Tilt from 'react-parallax-tilt';
const LearnMore = () => {
    // Button tilts
    const [manualTilt1, setManualTilt1] = useState({ x: 0, y: 0 });
    // scale with no tilt
    const [scale, setScale] = useState(1.3);
    return (
        <div className='flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-6 justify-between px-3 py-10'>
            <div>
                <img src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp" alt=""
                    className='hidden md:block md:w-50 md:h-70 lg:w-55 lg:h-75 rounded-xl'
                />
            </div>
            <div className='rotate-5 md:hidden justify-center items-center w-[340px] h-[550px] rounded-[40px] flex  overflow-hidden  '>
                <video
                  src="../../public/videos/video1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full  h-full object-cover"
                />
            </div>
            <div>
                <p className='pt-5 font-bold md:w-[450px] text-[22px] mb-4 md:pt-0 lg:pt-23'>
                    We stoppen niet bij mooie plaatjes en
                   vette beelden. We maken het meetbaar.
                    Zo weet je precies wat werkt en wat niet.
                    Nooit meer content zonder strategie.
                    Nooit meer content zonder resultaat.
                </p>
                <div >
                    <Tilt
                        tiltAngleYManual={manualTilt1.y}
                        tiltAngleXManual={manualTilt1.x}
                    >
                        <button onMouseEnter={() => setManualTilt1({ x: 10, y: -25 })} onMouseLeave={() => setManualTilt1({ x: 0, y: 0 })} className="btn bg-transparent px-1 py-3 rounded-xl flex justify-center border border-black">Leer ons kennen
                            <div className='bg-black rounded-lg px-2 py-2 text-white' ><FaArrowRight></FaArrowRight></div>
                        </button>
                    </Tilt>
                </div>
            </div>
            <button href="#" className='hidden md:block pr-25 md:pt-40 lg:pt-70' >
                <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
                    <div className="background-stripes scale-no-tilt">
                        <div className="header">

                            <div className='relative overflow-hidden group w-10 h-10 border border-black rounded-lg px-2 py-2 text-red-500' >
                                <span className='absolute inset-0 flex items-center justify-center transition-transform duration-200 group-hover:translate-y-full'>
                                    <FaArrowDown></FaArrowDown>
                                </span>
                                <span className='absolute inset-0 flex items-center justify-center -translate-y-full transition-transform duration-200 group-hover:translate-y-0'>
                                    <FaArrowDown></FaArrowDown>
                                </span>
                            </div>
                        </div>

                    </div>
                </Tilt>

            </button>


        </div>
    );
};

export default LearnMore;