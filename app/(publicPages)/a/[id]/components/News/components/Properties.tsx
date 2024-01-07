'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import { news } from '../data.mock';

import { PropertyListCard } from '@components';

export const Properties = () => {
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-1'>

            {news.map(item => <div className='col-span-1'>
                <PropertyListCard key={item.id} {...item} />
            </div>)}

        </div>
    );
};