import ReactCurvedText from 'react-curved-text';
import { useRef, useState } from 'react';
import { BsFire } from 'react-icons/bs';
import { IoMail } from "react-icons/io5";
import Tilt from 'react-parallax-tilt';
import { AnimatePresence, motion } from 'motion/react';
import { TiKey, TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { useScroll, useTransform } from 'framer-motion';
import './header.css'
import useMenuItems from '../hooks/useMenuItems';
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
    // Button tilts
    const [manualTilt1, setManualTilt1] = useState({ x: 0, y: 0 });
    const [manualTilt2, setManualTilt2] = useState({ x: 0, y: 0 });
    // mouse monve and popups
    const colors = [
        "bg-rose-500",
        "bg-amber-400",
        "bg-emerald-500",
        "bg-sky-400",
        "bg-violet-600",
    ];
    const lastSpawnRef = useRef(0);
    const [popups, setPopups] = useState([]);

    const handleMouseMove = (e) => {
        const now = Date.now();


        if (now - lastSpawnRef.current < 900) return; // 900ms gap

        lastSpawnRef.current = now;

        const rect = e.currentTarget.getBoundingClientRect();

        const startX = e.clientX - rect.left;
        const startY = e.clientY - rect.top;

        const moveX = (Math.random() - 0.5) * 150;
        const moveY = (Math.random() - 0.5) * 150;

        const id = now + Math.random();

        const newPopup = {
            id,
            startX,
            startY,
            moveX,
            moveY,
            bg: colors[Math.floor(Math.random() * colors.length)],
        };

        setPopups((prev) => [...prev, newPopup]);

        setTimeout(() => {
            setPopups((prev) => prev.filter((p) => p.id !== id));
        }, 1200);
    };
    // Scrool part
    // 1. Track the scroll progress of the page
    const { scrollYProgress } = useScroll();

    // 2. Map scroll (0 to 1) to rotation (0 to 360 degrees)
    const rotate = useTransform(scrollYProgress, [0, 10], [0, -20]);
    // menu items
    const menuItems = useMenuItems();

    // scale with no tilt
    const [scale, setScale] = useState(1.3);

    return (
        <div className=''>
            <div
                onMouseMove={handleMouseMove}
                className="relative top-45"
            >
                <div className='flex flex-col gap-8 justify-center items-center'>
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-[100px]">
                        Let's Get Hyped!
                    </h1>

                    <div className='flex gap-6'>
                        <Tilt
                            tiltAngleYManual={manualTilt1.y}
                            tiltAngleXManual={manualTilt1.x}
                        >
                            <button onMouseEnter={() => setManualTilt1({ x: 10, y: -25 })} onMouseLeave={() => setManualTilt1({ x: 0, y: 0 })} className="btn bg-transparent px-1 py-3 rounded-xl flex justify-center border border-black">Mail ons direct <div className='bg-black rounded-lg px-2 py-2 text-white' ><IoMail></IoMail></div></button>
                        </Tilt>

                        {/* BUTTON 2 */}
                        <Tilt
                            tiltAngleYManual={manualTilt2.y}
                            tiltAngleXManual={manualTilt2.x}
                        >
                            <button onMouseEnter={() => setManualTilt2({ x: 10, y: -25 })} onMouseLeave={() => setManualTilt2({ x: 0, y: 0 })} className="btn px-1 py-3 rounded-xl flex justify-center bg-orange-600 text-white">Get Results <div className='bg-white rounded-lg px-2 py-2' ><BsFire className='text-orange-600'></BsFire></div></button>
                        </Tilt>
                    </div>
                </div>


                {/* POPUPS */}
                <AnimatePresence>
                    {popups.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{
                                opacity: 0,
                                scale: 0,
                                x: p.startX,
                                y: p.startY,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: p.startX + p.moveX,
                                y: p.startY + p.moveY,
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`absolute top-0 left-0  z-0`} // ✅ FIXED
                            style={{
                                transform: "translate(-50%, -50%)", // center from cursor
                            }}
                        >

                            <div className="inline-block rotate-[-8deg]">
                                <div className={`${p.bg}  rounded-xl`}>

                                    <div className={`${p.bg}  rounded-xl px-1 py-1 flex items-center gap-1`}>

                                        <span className="text-black font-extrabold text-2xl md:text-5xl">
                                            GET
                                        </span>

                                        <span className={` text-white rounded-r-xl rounded-br-xl font-extrabold text-2xl md:text-5xl bg-black`}>
                                            HYPED
                                        </span>

                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* curved text and circle */}
            <div className=''>
            

                <motion.div
                    style={{ rotate }} // handles the scroll rotation
                    className="relative top-18 -right-10/12 w-40 h-40 flex z-20 items-center justify-center bg-fuchsia-300 rounded-full transform rotate-40"
                >
                    <span className="absolute font-extrabold  text-5xl z-10">GH</span>

                    {/* The Rotating Text */}
                    <ReactCurvedText
                        width={160}
                        height={160}
                        cx={80}
                        cy={80}
                        rx={55}
                        ry={55}
                        startOffset={0}
                        reversed={true}
                        text="GET HYPED  •  GET NOTICED  •  GET RESULTS  •  "
                        textProps={{
                            style: {
                                fontSize: 12, // Smaller font looks more like your reference image
                                fontWeight: 'normal',
                                letterSpacing: '2px', // This closes the gap
                                textTransform: 'uppercase'
                            }
                        }}
                        tspanProps={{ dy: -5 }}
                    />
                </motion.div>
            </div>
            {/* footer's angle part */}
            <div className="w-full h-[280px] relative overflow-hidden">
                {/* Inner Layer - Removed opacity-10 class */}
                <div
                    className="bg-amber-950/10 rounded-t-[20px] w-full h-full relative z-10"
                    style={{
                        clipPath: "polygon(0% 60%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                >

                    <div className='flex z-30 '>
                        <div className='relative h-full w-full '>
                            <img
                                src="https://i.ibb.co.com/F4Qs5vyp/logo.png"
                                alt="logo"
                                className='w-[340px] h-[350px] text-white absolute  top-5 2 left-0 rounded-t-[20px] object-contain'
                            />
                        </div>
                        <div className=' relative top-22'>
                            <div className='flex gap-8 pr-12'>
                                <div className='flex flex-col gap-2'>
                                    {/* menu items */}
                                    <div className='flex gap-2 text-[14px] mb-3 font-bold'>
                                        {menuItems}
                                    </div>
                                    {/* social icons */}
                                    <div className='flex gap-2 items-center'>
                                        <h4 className='font-bold pr-3'>Follow us</h4>
                                        {/* linked in */}
                                        <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
                                            <div className="background-stripes scale-no-tilt">
                                                <div className="header">
                                                    <div className='rounded-full w-8 h-8 bg-white flex justify-center items-center'><TiSocialLinkedin></TiSocialLinkedin></div>

                                                </div>

                                            </div>
                                        </Tilt>
                                        {/* tiktok */}
                                        <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
                                            <div className="background-stripes scale-no-tilt">
                                                <div className="header">
                                                    <div className='rounded-full w-8 h-8 bg-white flex justify-center items-center'><FaTiktok></FaTiktok></div>

                                                </div>

                                            </div>
                                        </Tilt>
                                        {/* instagram */}
                                        <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
                                            <div className="background-stripes scale-no-tilt">
                                                <div className="header">
                                                    <div className='rounded-full w-8 h-8 bg-white flex justify-center items-center'><FaInstagram></FaInstagram></div>

                                                </div>

                                            </div>
                                        </Tilt>
                                        {/* youtube */}
                                        <Tilt tiltEnable={false} scale={scale} transitionSpeed={2500}>
                                            <div className="background-stripes scale-no-tilt">
                                                <div className="header">
                                                    <div className='rounded-full w-8 h-8 bg-white flex justify-center items-center'><TiSocialYoutube></TiSocialYoutube></div>

                                                </div>

                                            </div>
                                        </Tilt>

                                    </div>
                                    {/* copyright */}
                                    <div className='flex text-base-content text-[11px] mt-12 mb-2'>
                                        <p> © {new Date().getFullYear()} Get Hyped</p>
                                        <a href='#' className='pl-30 hover:text-red-500'> © Design by Dylan</a>
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <h4 className='font-bold'>Contact</h4>
                                    <div className='flex flex-col gap-1'>
                                        <a href='#' className='text-[11px]  hover:text-red-500 font-bold'>info@gethyped.nl</a>
                                    <a href='#' className='text-[11px]  hover:text-red-500 font-bold'>+31 6 1533 7496</a>
                                    </div>

                                    <h4 className='font-bold pt-3'>Address</h4>
                                    <div className='flex flex-col gap-1'>
                                        <a href='#' className='text-[11px]  hover:text-red-500 font-bold'>Beltrumsestraat 6,<br />7575 AG Oldenzaal</a>
                                   
                                    <a href='#' className='pt-2 hover:text-red-500 text-[11px] text-base-content'>Privacyvoorwaarden</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Footer;