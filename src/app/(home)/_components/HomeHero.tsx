'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function HomeHero() {
  return (
    <div className="relative h-[700px] w-full md:h-screen">
      <Swiper
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="flex h-full w-full items-center justify-center bg-zinc-100 md:h-full"
      >
        <SwiperSlide className="relative h-full w-full">
          <Image
            src="https://placehold.co/1920x1080.jpg"
            alt="hero-image"
            fill
            className="object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
