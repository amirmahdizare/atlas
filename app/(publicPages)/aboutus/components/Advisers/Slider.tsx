'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AdviserCard } from '@components'
import { UserInfoType } from 'types'
import { Navigation } from 'swiper/modules'

export const Slider = ({ advisers }: { advisers: Array<UserInfoType<string>> }) => {
    return (
        <div className='box-border relative '>

            <div id='nextEl' className='absolute left-0 top-0 h-full  w-3 lg:w-4  z-30 bg-gradient-to-r from-seasalt to-[rgba(255,255,255,0.001)]'></div>
            <div id='prevEl' className='absolute right-0 top-0 h-full  w-3 lg:w-4  z-30 bg-gradient-to-l from-seasalt to-[rgba(255,255,255,0.001)]'></div>

            <Swiper
                // spaceBetween={30}
                // loop
                modules={[Navigation]}
                navigation={{
                    enabled: true,
                    hiddenClass: 'hidden',
                    disabledClass: 'hidden',
                    nextEl: '#nextEl',
                    prevEl: '#prevEl'
                }}

                breakpoints={{

                    300: {
                        slidesPerView: 2,
                        spaceBetween: 15,

                    },
                    470: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },

                    900: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },

                    2000: {
                        slidesPerView: 6,
                        spaceBetween: 10
                    },
                    // 1800: {
                    //   slidesPerView: 7,
                    //   spaceBetween: 10
                    // },

                }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                className='flex flex-col items-stretch justify-stretch'
            >
                {advisers.map(item => <SwiperSlide className='h-full'>
                    <AdviserCard {...item} />
                </SwiperSlide>)}

            </Swiper>
        </div>
    )
}
