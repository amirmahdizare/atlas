'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PropertyDetailType } from 'types'
import { Navigation, Pagination } from 'swiper/modules';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export const Media = ({ data: { medias } }: { data: PropertyDetailType }) => {

    const [state, setState] = useState<boolean>(false)

    const [slide, setSlide] = useState<number>(0)

    return (
        <div className={`w-full ${state ? 'fixed top-0 left-0 w-full h-full backdrop-brightness-[25%] transition-all duration-300  lg:backdrop-brightness-[25%] p-1  box-border flex justify-center items-center z-30' : 'relative'}`}>

            {!!slide && <div className='absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer p-0.5 aspect-square lg:hover:bg-gray-50 rounded-circle z-10 text-gray-100 lg:text-gray-700' id='prevSlideMedia'>
                <IconChevronRight />
            </div>}

            {slide + 1 != medias?.length && <div className='absolute top-1/2 -translate-y-1/2 left-1.5 cursor-pointer p-0.5 aspect-square hover:bg-gray-50 rounded-circle z-10 text-gray-100 lg:text-gray-700' id='nextSlideMedia'>
                <IconChevronLeft />
            </div>}

            <Swiper
                spaceBetween={2}
                slidesPerView={1}
                onSlideChange={(e) => setSlide(e.activeIndex)}
                onSwiper={(swiper) => console.log(swiper)}
                className='flex flex-col items-stretch justify-stretch backdrop-brigh tness-50'
                modules={[Pagination, Navigation]}
                pagination
                navigation={
                    {
                        enabled: true,
                        nextEl: '#nextSlideMedia',
                        prevEl: '#prevSlideMedia'
                    }
                }

            >
                {medias?.map(item => <SwiperSlide className='h-full'>
                    <img onClick={() => setState(!state)} src={item} className=' rounded w-full max-h-[80vh] aspect-video  object-contain bg- seasalt b order border-anti-flash-white-lighter' />
                </SwiperSlide>)}

            </Swiper>
        </div>
    )
}
