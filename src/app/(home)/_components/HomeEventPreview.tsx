'use client';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function HomeEventPreview() {
  return (
    <div className="flex gap-4 py-8 pr-0 pl-4 md:px-20 md:py-20">
      <Swiper
        slidesPerView={1.7}
        spaceBetween={16}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {[...Array(3)].map((_, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <div>
              <div className="aspect-4/5 w-full rounded-3xl bg-zinc-200" />
              <div className="mt-4 pl-1">
                <p className="text-base font-medium md:text-xl">SUMMER EVENT</p>
                <p className="mt-1 text-sm text-zinc-700 md:text-lg">
                  6~8월 여름 시즌 전용 색소·여드름·지방분해·보톡스 관리 프로그램. 슈링크 유니버스
                  런칭 기념, 리프팅 및 피부관리 시술을 합리적한 가격에 제공.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
