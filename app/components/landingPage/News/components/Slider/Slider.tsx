'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import {  news } from '../../data.mock';

import { PropertyListCard } from '@components';

export const Slider = () => {
  return (
    <div className='w-[calc(100%+40px)]'>

      <Swiper
        // spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 5
          },
          360: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          510: {
            slidesPerView: 4,
            spaceBetween: 10
          },

          // 900: {
          //   slidesPerView: 5,
          //   spaceBetween: 10
          // },

          // 1400: {
          //   slidesPerView: 6,
          //   spaceBetween: 10
          // },
          // 1800: {
          //   slidesPerView: 7,
          //   spaceBetween: 10
          // },

        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='flex flex-col items-stretch justify-stretch'
      >
        {news.map(item => <SwiperSlide className='h-full'><PropertyListCard key={item.id} {...item}/></SwiperSlide>)}

      </Swiper>
    </div>
  );
};