import React, { useEffect, useState } from 'react';
import { BannerCards } from '../scripts/BannerCards';
import { motion } from 'framer-motion';

const Banner = () => {
  const cards = BannerCards;
  const [hovered, setHovered] = useState(null);
  const [count, setCount] = useState(4)
  const visibleCards = cards.slice(0, count);
  console.log(visibleCards)
  // spacing
  const [spacing, setSpacing] = useState({ stack: 280, spread: 310 });
  const { stack, spread } = spacing;
const hoveredIndex = cards.findIndex(c => c.id === hovered);
  // for different device card count
  useEffect(() => {
    const updateCount = () => {
      // mobile devices
      if (window.innerWidth < 768) {
        setCount(2);
        setSpacing({ stack: 120, spread: 180 });
      }
      // medium devices
      else if (window.innerWidth < 1024) {
        setCount(3);
        setSpacing({ stack: 180, spread: 240 });
      }
      // large devices
      else {
        setCount(4);
        setSpacing({ stack: 280, spread: 310 });
      }
    }

    // call the function and load
    updateCount();
    // add event listener for window resize
    window.addEventListener("resize", updateCount)
    // cleanup the event listener      
    return () => {

      window.removeEventListener("resize", updateCount)
    }
  }, [])

  return (
    <div>
      <h1 className='roboto-font font-extrabold text-3xl md:text-6xl lg:text-[100px]'>Get Hyped. Get <br />Noticed. Get Results.</h1>
      <p className='mx-5  lg:mb-35 font-bold text-xl md:text-3xl'>Klaar met gokken op content <br />die niets oplevert?</p>
      {/* banner cards */}
      <div className="relative  my-45 md:my-45 lg:my-65 flex items-center justify-center  md:left-5 lg:-left-30 ">
        {visibleCards.map((card, index) => {
          const isActive = hovered === card.id;


          return (
            <motion.div
              key={card.id}
              onMouseEnter={() => setHovered(card.id)}
              onMouseLeave={() => setHovered(null)}
              className="absolute  w-[200px] md:w-[250px] lg:w-[350px] h-[280px] md:h-[300px] lg:h-[450px] rounded-[40px] flex gap-5 overflow-hidden shadow-xl cursor-pointer "
              animate={{
                x: hovered
                  ? index * spread - spread * 1.2
                  : index * stack - stack,
                scale: isActive ? 1.1 : hovered ? 0.9 : 1,
                rotate: isActive
                  ? 0
                  : hovered
                    ? (index - hoveredIndex) * 8
                    : index % 2 === 0
                      ? -10
                      : 10,
                zIndex: isActive ? 20 : index + 5,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 30,
              }}
            >
              {/* CONTENT */}
              {card.vedio ? (
                <video
                  src={card.vedio}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className={`w-full h-full ${card.bg} flex flex-col md:justify-between p-6`}
                >
                  <h1 className="text-7xl font-extrabold text-black roboto-font">
                    {card.title}
                  </h1>

                  <div>
                    <p className="text-3xl font-medium text-black roboto-font mt-55">
                      {card.subtitle}
                    </p>
                    <div className="border-1 border-black mt-2 w-full"></div>
                  </div>
                  <p className="text-xl font-normal -mt-2 text-black ">
                    {card.des}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;