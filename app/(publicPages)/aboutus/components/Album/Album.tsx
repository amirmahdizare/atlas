
'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { photos } from './data.mock'
import { IconX } from '@tabler/icons-react'
import ClickAwayListener from 'react-click-away-listener'

export const Album = () => {

    const [selected, setSelected] = useState<string | undefined>(undefined)

    return (
        <div className='flex flex-col gap-2 overflow-hidden'>

            <div className='flex flex-row justify-center relative py-2'>
                <span className='text-h6-bolder text-raisin-black'>گالری تصاویر دپارتمان املاک اطلس</span>
                <div className='h-[3px] w-8 bg-robin-egg-blue-00 rounded absolute left-1/2 -translate-x-1/2 bottom-0'></div>
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
                    {photos.map(item => <SwiperSlide className='h-full'>
                        <img src={item} className='aspect-video rounded cursor-pointer w-full object-cover' onClick={() => setSelected(item)} />
                    </SwiperSlide>)}

                </Swiper>
            </div>
            {selected && <div className='fixed w-full h-full top-0 right-0 backdrop-brightness-50 flex flex-row  justify-center items-center z-20'>
                <div className='absolute left-4 top-4 cursor-pointer text-white' onClick={() => setSelected(undefined)}><IconX /></div>
                <ClickAwayListener onClickAway={() => setSelected(undefined)}>
                    <img src={selected} className='max-w-[80vw]' />
                </ClickAwayListener>
            </div>}
        </div>
    )
}
