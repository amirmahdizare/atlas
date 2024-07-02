'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

import { news } from '../data.mock';

import { PropertyListCard } from '@components';
import { UserFullInfo } from 'types';

export const Properties = ({ data }: { data: UserFullInfo }) => {

    if (data.products.filter(i => !!i.active)?.length == 0)
        return <span className='text-center'>مشاور آگهی فعالی ندارد</span>

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1'>

            {data.products?.filter(i => !!i.active).map(item => <div className='col-span-1 lg:col-span-1'>
                <PropertyListCard key={item.id} {...item} />
            </div>)}

        </div>
    );
};