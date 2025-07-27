// components/Carousel.tsx

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

interface Card {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const cards: Card[] = [
  {
    title: 'Efficiency',
    description: 'Streamline your workflow with best practices.',
    icon: <img src="/icons/efficiency.svg" alt="Efficiency" />
  },
  {
    title: 'Accountability',
    description: 'We own our outcomes and learn from them.',
    icon: <img src="/icons/accountability.svg" alt="Accountability" />
  },
  {
    title: 'Commitment',
    description: 'Dedicated to delivering excellence.',
    icon: <img src="/icons/commitment.svg" alt="Commitment" />
  },
  {
    title: 'Team Work',
    description: 'Collaboration fuels our success.',
    icon: <img src="/icons/teamwork.svg" alt="Team Work" />
  }
];

const Carousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      navigation
      breakpoints={{
        // when viewport ≥ 0px
        0: { slidesPerView: 1 },
        // when viewport ≥ 768px
        768: { slidesPerView: 3 }
      }}
      style={{ padding: '2rem 1rem' }}
    >
      {cards.map((card, idx) => (
        <SwiperSlide key={idx}>
          <div className="card">
  <div className="icon-wrapper">
    {card.icon}
  </div>
  <h3 className="card-title">{card.title}</h3>
  <p className="card-text">{card.description}</p>
</div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;