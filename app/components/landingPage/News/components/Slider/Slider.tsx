'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import { news } from '../../data.mock';

import { PropertyListCard } from '@components';
import { PropertyDetailType } from 'types';

export const Slider = ({ data }: { data: PropertyDetailType[] }) => {


  if (data.length == 0)
    return <span>در حال حاضر ملکی وجود ندارد.</span>
  else if (data.length > 0)
    return (
      <div className='w-[calc(100%+80px)]'>

        <Swiper
          // spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5
            },
            300: {
              slidesPerView: 2,
              spaceBetween: 5
            },
            470: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 10
            },

            900: {
              slidesPerView: 5,
              spaceBetween: 10
            },

            1400: {
              slidesPerView: 5,
              spaceBetween: 10
            },
            // 1800: {
            //   slidesPerView: 7,
            //   spaceBetween: 10
            // },

          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='flex flex-col items-stretch justify-stretch'
        >
          {data.map(item => <SwiperSlide key={item.id} className='h-full'><PropertyListCard key={item.id} {...item} /></SwiperSlide>)}

        </Swiper>
      </div>
    );
};