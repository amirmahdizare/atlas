import React from 'react'
import Image from 'next/image'
import { PropertyDetailType, PropertyListItemType } from 'types'
import { Bookmark, BookmarkFilled } from '@icons'
import { IconArrowDownLeft, IconLocation, IconMapPin } from '@tabler/icons-react'
import { BookmarkStatus } from './components/BookmarkStatus'
import Link from 'next/link'
import { createMediaUrl } from 'utils'

export const PropertyListCard = ({ id, medias, location, price, subLocation, title, prePrice, rentPrice }: PropertyDetailType) => {


    return (
        <Link href={`/property/${id}/${title}`} className='flex flex-col p-2 bg-white items-stretch rounded-[2px] gap-2 hover:shadow h-auto ' prefetch={false}>

            <div className='flex flex-row justify-center'>


                <div className='relative aspect-square lg:aspect-[3/2] w-[200px] lg:w-[200px] flex -1 w- full rounded-sm overflow-hidden  h-auto'>

                    <Image src={createMediaUrl(medias?.[0])} alt={`${title} | دپارتمان املاک اطلس`} title={`${title} | دپارتمان املاک اطلس`} fill className='object-cover aspect- square  h-[100px] w- full lg:aspect-[3/2] ' />

                    {/*TODO <div className='absolute aspect-square bg-white rounded shadow left-1 top-1 p-1'>
                        <BookmarkStatus isSaved={isSaved} />
                    </div> */}

                </div>
            </div>

            <span className='text-raisin-black text-h5-bolder leading-3 line-clamp-2 h-6  text-ellipsis ' title={title}>{title}</span>

            <div className='flex flex-row gap-0.5 items-center'>
                <IconMapPin width={20} height={20} className='text-french-gray' />
                <span className='text-ultra-violet line-clamp-1 text-ellipsis' title={`${location?.faTitle} ${subLocation ? `, ${subLocation.faTitle}` : ''}`}>{location?.faTitle} {subLocation ? `, ${subLocation.faTitle}` : ''}</span>
            </div>

            {!Number(rentPrice) && <div className='flex flex-row gap-3 justify-between h-2'></div>}

            <div className='flex flex-row gap-3 justify-between h-2'>
                {!!Number(price) && <p className='line-clamp-1 text-ellipsis overflow-hidden'>
                    <span className='text-space-codet text-h5-bolder'>{Number(price ?? 0)?.toLocaleString()}</span>
                    <span className='text-ultra-violet  text-body-3-light mr-[1px]'> تومان</span>
                </p>}


                {!!Number(prePrice) && <p className='line-clamp-1 text-ellipsis overflow-hidden flex flex-row gap-1 items-center'>
                    <span className='text-gray-400 text-body-3-normal'>ودیعه:</span>
                    <span className='text-space-codet text-h5-bolder'>{Number(prePrice ?? 0)?.toLocaleString()}</span>
                    <span className='text-ultra-violet  text-body-3-light mr-[1px]'> تومان</span>
                </p>}





                {/* <div className='aspect-square bg-orange-200 rounded hidden lg:block'>
                    <IconArrowDownLeft className='text-orange' />
                </div> */}

            </div>


            {!!Number(rentPrice) && <div className='flex flex-row gap-3 justify-between h-2'>

                <p className='line-clamp-1 text-ellipsis overflow-hidden flex flex-row gap-1 items-center'>
                    <span className='text-gray-400 text-body-3-normal'>اجاره:</span>
                    <span className='text-space-codet text-h5-bolder'>{Number(rentPrice ?? 0)?.toLocaleString()}</span>
                    <span className='text-ultra-violet  text-body-3-light mr-[1px]'> تومان</span>
                </p>

            </div>}
            {/* <div className='flex flex-row gap-3 justify-between'>
                <p className='line-clamp-1 text-ellipsis overflow-hidden'>
                    <span className='text-space-codet text-h6-bolder'>{Number(price).toLocaleString()}</span>
                    <span className='text-ultra-violet  text-body-3-light mr-[1px]'> تومان</span>
                </p>

                <div className='aspect-square bg-orange-200 rounded hidden lg:block'>
                    <IconArrowDownLeft className='text-orange' />
                </div>

            </div> */}

        </Link>
    )
}
