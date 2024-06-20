// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { categories } from '../../data.mock';
import { SingleItem } from './components/SingleItem';
import { useFullCategories } from '@hooks';

export const Slider = () => {

  const { data, isError } = useFullCategories()

  if (isError) {
    console.error('Error in Services')
    return <></>
  }

  else if (data?.data)
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
              slidesPerView: 3,
              spaceBetween: 5
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
          {data.data.map(item => <SwiperSlide key={item.id} className='h-full'><SingleItem enTitle={item.enTitle} title={item.title} id={item.id} key={item.title} /></SwiperSlide>)}
        </Swiper>
      </div>
    );


  return <div className='flex flex-row gap-2 items-center w-full'>
    {Array.from(new Array(4)).map(f => <div key={f} className='bg-gray-50 animate-pulse rounded flex-1 h-8'></div>)}
  </div>
};