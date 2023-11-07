import React from 'react'
import { PropertyDetailType } from 'types'
import { Share } from './Share'
import { Bookmark } from './Bookmark'
import { IconMap, IconMapPin } from '@tabler/icons-react'

export const Title = ({ data: { title, id, isBookmarked, location, subLocation, price  , metr} }: { data: PropertyDetailType }) => {
    return (
        <div className='flex flex-col  gap-2  '>

            <div className='flex flex-row justify-between items-center gap-2'>
                <span className='text-space-codet text-body-1-bolder lg:text-[0.50rem] leading-4 whitespace-pre-wrap break-words'>{title}</span>

                <div className=' flex-row gap-1 hidden lg:flewx'>
                    <Share id={id} />
                    <Bookmark id={id} isBookmarked={isBookmarked} />
                </div>


            </div>

            <div className='flex flex-row gap-0.5 items-center text-body-2-bolder text-[#8F909F]'>
                <IconMapPin className='text-gray-400' width={17.5} height={17.5} />
                <span>{location}</span>
                {!!subLocation && <span>,{subLocation}</span>}

            </div>

            <div className='flex flex-row gap-2 items-center text-space-codet justify-between mt-1.5'>
                <span className='text-body-1-bolder'>قیمت کل</span>

                <div className='flex flex-row gap-1 items-center'>
                    <span className='text-h3-bolder'>{price.toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-1-bolder' >تومان</span>
                </div>

            </div>

            <div className='bg-anti-flash-white-lighter w-full h-[1px]'>

            </div>


            <div className='flex flex-row gap-2 items-center text-ultra-violet justify-between '>
                <span className='text-body-2-normal'>قیمت هرمتر</span>

                <div className='flex flex-row gap-1 items-center'>
                    <span className='text-h6-normal'>{(Math.floor(price / metr )).toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-2-normal' >تومان</span>
                </div>

            </div>

        </div>
    )
}
