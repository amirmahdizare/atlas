'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { PropertyDetailType } from 'types'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { IconChevronLeft, IconChevronRight, IconX } from '@tabler/icons-react';
import { Thumb } from './components/Thumb';
import { View } from './components/View';
import ClickAwayListener from 'react-click-away-listener';
import { createMediaUrl } from 'utils';
import Image from 'next/image';

export const Media = ({ data: { medias, title, category, subCategory, location, subLocation } }: { data: PropertyDetailType }) => {

    const [state, setState] = useState<boolean>(false)

    const [slide, setSlide] = useState<number>(0)

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const [isInit, setIsInit] = useState<boolean>(false)

    useEffect(() => {
        setIsInit(true)
    }, [])


    const imageAltProp = `${title} | ${category?.title} | ${subCategory?.title} | ${location?.faTitle} | ${subLocation?.faTitle} | دپارتمان املاک اطلس`


    if (medias?.length == 0)
        return <img src={createMediaUrl(undefined)} alt={imageAltProp} className='aspect-video w-full rounded' />

    return (
        <div className={`w-full ${state ? 'fixed top-0 left-0 w-full h-full backdrop-brightness-[12.5%] transitio n-all duration-300  !transition-none lg:backdrop-brightness-[12.5%] p-1  box-border flex justify-center items-center z-30' : 'relative '}`}>

            <IconX className='cursor-pointer absolute top-4 left-4 text-white w-3.5 h-3.5' onClick={() => setState(!state)} />



            {!!slide && <div className='absolute top-1/2 right-1.5 -translate-y-1/2 cursor-pointer p-0.5 aspect-square lg:hover:bg-gray-50 rounded-circle z-10 text-gray-100 lg:text-gray-700' id='prevSlideMedia'>
                <IconChevronRight />
            </div>}

            {slide + 1 != medias?.length && <div className='absolute top-1/2 -translate-y-1/2 left-1.5 cursor-pointer p-0.5 aspect-square hover:bg-gray-50 rounded-circle z-10 text-gray-100 lg:text-gray-700' id='nextSlideMedia'>
                <IconChevronLeft />
            </div>}


            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={(e) => setSlide(e.activeIndex)}
                onSwiper={(swiper) => console.log(swiper)}
                className={`flex flex-col items-center justify-center backdrop-brigh tness-50 relative ${state ? '!h-full' : ''} `}
                modules={[Pagination, Navigation, Thumbs, FreeMode]}
                loop
                pagination={{
                    enabled: state ? false : true,
                    el: '.pagination-ss',
                    bulletActiveClass: 'active',
                    bulletClass: 'w-2 h-1 rounded bg-gray-200 cursor-pointer',
                    clickable: true
                    // currentClass:'bg-red-500',
                    // dynamicMainBullets:
                    // renderBullet:(index , className )=>{
                    //     console.log(className)
                    //     return `<span class="w-2 h-1 rounded  ${className =='active' ? 'bg-mint-green'  : 'bg-white'} "></span>`

                    // }
                }}
                navigation={
                    {
                        enabled: true,
                        nextEl: '#nextSlideMedia',
                        prevEl: '#prevSlideMedia',

                    }
                }
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}

            >
                <div className='pagination-ss left-4 flex flex-row gap-1 items-center justify-end -bottom-8 absolute px-1 z-10 [&_.active]:!bg-mint-green' />
                {medias?.map(item => <SwiperSlide className={` !flex !flex-row !justify-center !items-center relative ${state ? 'h-screen' : 'max-h-[70vh]'}`} >
                    <div className='flex flex-row justify-center w-full relative ' onClick={() => setState(s => !s)}>
                        <View altProps={imageAltProp} isOpen={state} src={item} />
                    </div>
                </SwiperSlide>)}

            </Swiper>


            {!state && <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mt-1"
                onClick={()=>setState(true)}
            >
                {medias?.map(item => <SwiperSlide className='h-full'>
                    <Thumb altProps={imageAltProp} src={item} onClick={() => { }} />
                </SwiperSlide>)}
            </Swiper>}

        </div>
    )
}
