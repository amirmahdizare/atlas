import React from 'react'
import Image from 'next/image'
import { PropertyListItemType } from 'types'
import { Bookmark, BookmarkFilled } from '@icons'
import { IconArrowDownLeft, IconLocation, IconMapPin } from '@tabler/icons-react'
import { BookmarkStatus } from './components/BookmarkStatus'
import Link from 'next/link'

export const PropertyListCard = ({ id, img, isSaved, location, price, subLocation, title }: PropertyListItemType) => {


    return (
        <Link href={`/property/${id}`} className='flex flex-col p-2 bg-white items-stretch rounded-[2px] gap-2 hover:shadow ' prefetch={false}>

            <div className='flex flex-row justify-center'>


                <div className='relative aspect-square lg:aspect-[3/2] w- [170px] lg:w-[ 200px] flex-1 w - full rounded-sm overflow-hidden'>

                    <Image src={img} alt={`${title} | دپارتمان املاک اطلس`} title={`${title} | دپارتمان املاک اطلس`} fill className='object-cover aspect-square lg:aspect-[3/2] ' />

                    <div className='absolute aspect-square bg-white rounded shadow left-1 top-1 p-1'>
                        <BookmarkStatus isSaved={isSaved} />
                    </div>

                </div>
            </div>

            <span className='text-raisin-black text-h5-bolder leading-3 line-clamp-2 h-6  text-ellipsis ' title={title}>{title}</span>

            <div className='flex flex-row gap-0.5 items-center'>
                <IconMapPin width={20} height={20} className='text-french-gray' />
                <span className='text-ultra-violet line-clamp-1 text-ellipsis' title={`${location} ${subLocation ? `, ${subLocation}` : ''}`}>{location} {subLocation ? `, ${subLocation}` : ''}</span>
            </div>

            <div className='flex flex-row gap-3 justify-between'>
                <p className='line-clamp-1 text-ellipsis overflow-hidden'>
                    <span className='text-space-codet text-h6-bolder'>{price.toLocaleString()}</span>
                    <span className='text-ultra-violet  text-body-3-light mr-[1px]'> تومان</span>
                </p>

                <div className='aspect-square bg-orange-200 rounded hidden lg:block'>
                    <IconArrowDownLeft className='text-orange' />
                </div>

            </div>

        </Link>
    )
}
