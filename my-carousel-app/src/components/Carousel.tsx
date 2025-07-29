'use client';

import React, { useRef, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

// interface Card {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// const cards: Card[] = [
//   {
//     title: 'Efficiency',
//     description: 'Lorem ipsum dolor sit amet elit. Adipisci assumenda quasi explicabo quas laborum ratione incidunt dolorem aut!',
//     icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=IOqNKauMiZ6W&format=png&color=000000" alt="Commitment" />
//   },
//   {
//     title: 'Accountability',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque optio, dolores numquam sit laboriosam ipsam',
//     icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=1u7j3FdzY1su&format=png&color=000000" alt="Accountability" />
//   },
//   {
//     title: 'Commitment',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque optio, dolores numquam sit laboriosam ipsam',
//     icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=p08Z6JR6xt6X&format=png&color=000000" alt="Commitment" />
//   },
//   {
//     title: 'Team Work',
//     description: 'Lorem ipsum dolor sit amet elit. Adipisci assumenda quasi explicabo quas laborum ratione incidunt dolorem aut!',
//     icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=GNjpmJOfO8fT&format=png&color=000000" alt="Team Work" />
//   },
//   {
//     title: 'Commitment',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque optio, dolores numquam sit laboriosam ipsam',
//     icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=p08Z6JR6xt6X&format=png&color=000000" alt="Commitment" />
//   },
//   {
//     title: 'Accountability',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque optio, dolores numquam sit laboriosam ipsam',
//     icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=1u7j3FdzY1su&format=png&color=000000" alt="Accountability" />
//   }
// ];

// const Carousel: React.FC = () => {
//   return (
//     <Swiper
//       modules={[Navigation]}
//       spaceBetween={20}
//       navigation
//       breakpoints={{
//         0: { slidesPerView: 1 },
//         768: { slidesPerView: 3 }
//       }}
//       style={{ padding: '2rem 1rem' }}
//     >
//       {cards.map((card, idx) => (
//         <SwiperSlide key={idx}>
//           <motion.div
//           whileHover={{ scale: 1.05 }}
//   transition={{ type: "spring", stiffness: 300, damping: 20 }}

//  className="card cursor-pointer">
//   <div className="icon-wrapper">
//     {card.icon}
//   </div>
//   <h3 className="card-title">{card.title}</h3>
//   <p className="card-text">{card.description}</p>
//   <div className="mt-4 w-16 h-0.5 bg-white" />

// </motion.div>

//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Carousel;



interface Card {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const cards: Card[] = [
  {
    title: 'Efficiency',
    description: 'Lorem ipsum dolor sit amet elit. Adipisci assumenda quasi explicabo quas laborum ratione incidunt dolorem aut!',
    icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=IOqNKauMiZ6W&format=png&color=000000" alt="Commitment" />
  },
  {
    title: 'Accountability',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque optio, dolores numquam sit laboriosam ipsam',
    icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=1u7j3FdzY1su&format=png&color=000000" alt="Accountability" />
  },
  {
    title: 'Commitment',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque optio, dolores numquam sit laboriosam ipsam',
    icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=p08Z6JR6xt6X&format=png&color=000000" alt="Commitment" />
  },
  {
    title: 'Team Work',
    description: 'Lorem ipsum dolor sit amet elit. Adipisci assumenda quasi explicabo quas laborum ratione incidunt dolorem',
    icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=GNjpmJOfO8fT&format=png&color=000000" alt="Team Work" />
  },
  {
    title: 'Commitment',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque optio, dolores numquam sit laboriosam ipsam',
    icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=p08Z6JR6xt6X&format=png&color=000000" alt="Commitment" />
  },
  {
    title: 'Accountability',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque optio, dolores numquam sit laboriosam ipsam',
    icon: <img className='scale-80' src="https://img.icons8.com/?size=100&id=1u7j3FdzY1su&format=png&color=000000" alt="Accountability" />
  }
];

const Carousel: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

  }, []);

  return (
    <div className="relative px-1 p-2">

      <div className="absolute top-1/2 -translate-y-1/2 left-[-2rem] z-10">
        <div ref={prevRef} className="swiper-button-prev cursor-pointer p-2 bg-white text-black rounded-full shadow-lg hover:bg-orange-300 transition" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[-2rem] z-10">
        <div ref={nextRef} className="swiper-button-next cursor-pointer p-2 bg-white text-black rounded-full shadow-lg hover:bg-orange-300 transition" />
      </div>


      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const { navigation } = swiper.params;
          if (navigation && typeof navigation === 'object') {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 3 }
        }}
        className="py-8 "
      >
        {cards.map((card, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-[98%] sm:w-full max-w-[24rem] mx-auto">
  <motion.div
    whileHover={{ scale: 1.04 }}
    transition={{ duration: 0.1, ease: "easeInOut" }}
    className="card cursor-pointer px-4 py-6 sm:px-5 sm:py-6 rounded-xl bg-gradient-to-r from-gray-900 to-black text-white shadow-md hover:shadow-lg transition mt-2 mb-2"
  >
    <div className="icon-wrapper mb-6 mt-2 flex justify-center items-center h-[80px] sm:h-[64px] mx-auto">
      <div className="w-[64px] h-[64px]">{card.icon}</div>
    </div>
    <h3 className="card-title text-base sm:text-lg font-bold mb-2 text-center">{card.title}</h3>
    <p className="card-text text-sm sm:text-sm text-gray-300 text-center">{card.description}</p>
    <div className="mt-4 w-14 h-0.5 bg-white mx-auto border" />
  </motion.div>
</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
