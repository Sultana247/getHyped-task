import React, { useState } from 'react';
import { BannerCards } from '../scripts/BannerCards';
import { motion } from 'framer-motion';
const Banner = () => {
    const cards = BannerCards;
    const [hovered, setHovered] = useState(null);
    return (
        <div>
            <h1 className='roboto-font font-extrabold text-5xl md:text-6xl lg:text-[100px]'>Get Hyped. Get <br />Noticed. Get Results.</h1>
            <p className='mx-5 mb-5 font-bold text-2xl md:text-3xl'>Klaar met gokken op content <br />die niets oplevert?</p>
            {/* banner cards */}
            <div className="relative h-[400px] flex items-center justify-center -left-35 ">
      {cards.map((card, index) => {
        const isActive = hovered === card.id;

        return (
          <motion.div
            key={card.id}
            onMouseEnter={() => setHovered(card.id)}
            onMouseLeave={() => setHovered(null)}
            className="absolute w-[280px] h-[350px] rounded-[30px] flex gap-5 overflow-hidden shadow-xl cursor-pointer"
            animate={{
              x: hovered
                ? index * 300-360 // when hovered, spread out
                : index * 280-300, // default stacked position
              scale: isActive ? 1.1 : hovered ? 0.9 : 1,
              rotate: isActive ? 0 : hovered ? (index - cards.findIndex(c => c.id === hovered)) * 10 : index%2 == 0 ? -10 : 10,
              zIndex: isActive ? 20 : index,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            {/* CONTENT */}
            {card.vedio? (
              <video
                src={card.vedio}
                className="w-full h-full object-cover"
               autoPlay
               muted
              />
            ) : (
              <div
                className={`w-full h-full ${card.bg} flex flex-col justify-between p-6`}
              >
                <h1 className="text-5xl font-bold text-black">
                  {card.title}
                </h1>

                <div>
                  <p className="text-lg font-medium text-black">
                    {card.subtitle}
                  </p>
                  <div className="border-b border-black mt-2 w-2/3"></div>
                </div>
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