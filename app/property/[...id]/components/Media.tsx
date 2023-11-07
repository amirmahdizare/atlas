'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PropertyDetailType } from 'types'

export const Media = ({ data: { medias } }: { data: PropertyDetailType }) => {

    const [state, setState] =useState<boolean>(false)
    
    return (
        <div className={`w-full ${state ? 'fixed top-0 left-0 w-full h-full backdrop-brightness-[25%] p-4 box-border flex justify-center items-center' : 'relative'}`}>

            <Swiper
                spaceBetween={2}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='flex flex-col items-stretch justify-stretch backdrop-brigh tness-50'
            >
                {medias?.map(item => <SwiperSlide className='h-full'>
                    <img onClick={()=>setState(!state)} src={item} className=' rounded w-full aspect-video  object-contain bg- seasalt b order border-anti-flash-white-lighter' />
                </SwiperSlide>)}

            </Swiper>
        </div>
    )
}
