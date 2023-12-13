'use client'
import React from 'react'
import { SwiperSlide, Swiper  } from 'swiper/react'
import { advisers } from './data.mock'
import { AdviserCard } from '@components'

export const Advisers = () => {
    return (
        <div className='flex flex-col gap-4  overflow-hidden '>

            <div className='flex flex-col gap-2'>
                <div className='flex flex-row justify-center relative py-2'>
                    <span className='text-h6-bolder text-raisin-black'>کارشناسان دپارتمان املاک اطلس</span>
                    <div className='h-[3px] w-8 bg-robin-egg-blue-00 rounded absolute left-1/2 -translate-x-1/2 bottom-0'></div>
                </div>
                <span className='text-body-2-bolder text-ultra-violet text-center'>خانه دلخواه تان را به کمک مشاورین متخصص اطلس پیدا کنید.</span>
            </div>

            <div className='w-[calc(100%+80px)] '>

                <Swiper
                    // spaceBetween={30}                    
                    breakpoints={{

                        300: {
                            slidesPerView: 2,
                            spaceBetween: 15
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
        </div>
    )
}
