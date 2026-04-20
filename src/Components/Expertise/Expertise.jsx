import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Tilt from 'react-parallax-tilt';
import { BsFire } from 'react-icons/bs';
import './Expertise.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
const Expertise = () => {
    const { scrollYProgress } = useScroll();
    // Button tilts

    const [manualTilt2, setManualTilt2] = useState({ x: 0, y: 0 });
    const slides = [
        {
            id: 1,
            video: "./../../../public/videos/swiper1.mp4",
            title: "Social strategy",
            subtitle: "Slimme strategie. Sterke start.",
            desc: "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
            buttontitle: "Meer over social strategy",
            bg: "bg-white",
        },
        {
            id: 2,
            video: "./../../../public/videos/swiper2.mp4",
            title: "Content creation",
            subtitle: "Content die opvalt en raakt.",
            desc: "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
            buttontitle: "Meer over content creatie",
            bg: "bg-fuchsia-300",
        },
        {
            id: 3,
            video: "./../../../public/videos/swiper3.mp4",
            title: "Activation",
            subtitle: "Zichtbaar waar en wanneer het telt.",
            desc: "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
            buttontitle: "Meer over activatie",
            bg: "bg-emerald-500",
        },
        {
            id: 4,
            video: "./../../../public/videos/swiper4.mp4",
            title: "Data",
            subtitle: "Inzichten die impact maken.",
            desc: "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
            buttontitle: "Meer over data",
            bg: "bg-blue-500",
        }

    ]


    return (
        
        <div className="h-[410vh] md:h-[550vh] lg:h-[500vh] relative py-25 md:py-75 lg:py-45 ">
            {slides.map((slide, index) => {
                const start = index * 0.25;
                const end = index === slides.length - 1
                    ? 1
                    : start + 0.25;

                const scale = useTransform(
                    scrollYProgress,
                    [start, end],
                    [0.9, 1.001]
                );

                const opacity = useTransform(
                    scrollYProgress,
                    [start, end],
                    [1, 1]
                );

                const y = useTransform(
                    scrollYProgress,
                    [start, end],
                    [0, -150]
                );
                

                return (
                    <motion.div
                        key={index}
                        style={{
                            opacity,
                            y,
                            scale,
                            zIndex: slides.length + index,
                        }}
                        className="h-screen snap-start md:sticky md:top-[80px] "
                    >
                        <div className={` p-10 w-full  ${slide.bg} rounded-4xl shadow-xl flex flex-col text-4xl  `}>
                            <div className=''>
                                <button className={slide.id === 1 ? `px-2 py-2 rounded-lg font-medium text-lg bg-amber-950/10` : `px-2 py-2 rounded-lg font-bold text-lg bg-white `}>Expertise</button>
                                <h2 className='text-[40px] md:text-[50px] lg:text-[90px] roboto-font font-bold pt-2 md:pt-8 lg:pt-4'>{slide.title}</h2>
                                <div className='flex flex-col flex-col-reverse lg:flex-row justify-between gap-4 pt-5 mt-4'>

                                    <div>
                                        <p className='text-xl pt-5 lg:pt-35 font-bold'>{slide.subtitle}</p>
                                        <p className='pt-5 text-lg font-medium w-[300px] lg:w-[400px] '>{slide.desc}</p>

                                        <div className='pt-6'>
                                            <Tilt
                                                tiltAngleYManual={manualTilt2.y}
                                                tiltAngleXManual={manualTilt2.x}
                                            >
                                                <button onMouseEnter={() => setManualTilt2({ x: 10, y: -25 })} onMouseLeave={() => setManualTilt2({ x: 0, y: 0 })} className={slide.id === 1 ? `btn border-0 px-1 py-3 rounded-xl flex justify-center bg-orange-600 text-white` : `btn border-0 px-1 py-3 rounded-xl flex justify-center bg-white text-black`}>{slide.buttontitle}<div className={slide.id === 1 ? `bg-white rounded-lg px-2 py-2 text-black` : `bg-black rounded-lg px-2 py-2 text-white`} ><FaArrowRight></FaArrowRight></div></button>
                                            </Tilt>
                                        </div>
                                    </div>
                                    <div className='relative lg:-top-20'>
                                        <h2 className={slide.id === 1 ? `relative -top-32  lg:top-11 left-55 lg:left-30 md:text-7xl text-5xl lg:text-[100px] font-bold text-amber-950/10` : `relative -top-32 left-55 lg:top-11 lg:left-30 md:text-7xl text-5xl lg:text-[100px] font-bold text-[#FFFFFFBF] opacity-75`}>0{slide.id}</h2>
                                        <div className={slide.id === 1 ? ` border-orange-400 border-8 rotate-5 justify-center items-center w-[250px] h-[380px]  rounded-3xl   overflow-hidden` : `border-white border-8 rotate-5 justify-center items-center w-[250px] h-[380px]  rounded-2xl overflow-hidden  `}>

                                            <video
                                                src={slide.video}
                                                autoPlay
                                                muted

                                                loop
                                                playsInline
                                                className="w-full  h-full object-cover"
                                            />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default Expertise;