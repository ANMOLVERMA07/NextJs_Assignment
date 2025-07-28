'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

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
    description: 'Lorem ipsum dolor sit amet elit. Adipisci assumenda quasi explicabo quas laborum ratione incidunt dolorem aut!',
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
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      navigation
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 }
      }}
      style={{ padding: '2rem 1rem' }}
    >
      {cards.map((card, idx) => (
        <SwiperSlide key={idx}>
          <motion.div
          whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}

 className="card cursor-pointer">
  <div className="icon-wrapper">
    {card.icon}
  </div>
  <h3 className="card-title">{card.title}</h3>
  <p className="card-text">{card.description}</p>
  <div className="mt-4 w-16 h-0.5 bg-white" />

</motion.div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;