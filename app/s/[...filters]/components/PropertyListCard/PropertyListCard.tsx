import React from 'react'
import Image from 'next/image'
import { PropertyListItemType } from 'types'
import { Bookmark, BookmarkFilled } from '@icons'
import { IconArrowDownLeft, IconLocation, IconMapPin, IconShare } from '@tabler/icons-react'
import { BookmarkStatus } from './components/BookmarkStatus'
import Link from 'next/link'
import { Divider } from '@components'
import logo from 'images/atlaslight.svg'

export const PropertyListCard = ({ id, img, isSaved, location, price, subLocation, title, agentInfo }: PropertyListItemType) => {


    return (
        <Link href={`/property/${id}`} className='flex flex-col p-1.5 bg-white items-stretch rounded-sm gap-2 hover:shadow ' prefetch={false}>

            <div className='flex flex-row justify-center'>


                <div className='relative aspect-square lg:aspect-[3/2] w- [170px] lg:w-[ 200px] flex-1 w - full rounded-sm overflow-hidden'>

                    <Image src={img} alt={`${title} | دپارتمان املاک اطلس`} title={`${title} | دپارتمان املاک اطلس`} fill className='object-cover aspect-square lg:aspect-[3/2] ' />

                    <div className='absolute aspect-square bg-white rounded shadow left-1 top-1 p-1'>
                        <BookmarkStatus isSaved={isSaved} />
                    </div>

                </div>
            </div>

            <span className='text-raisin-black text-h4-bolder leading-3 line-clamp-2 h-6  text-ellipsis ' title={title}>{title}</span>

            <div className='flex flex-row gap-0.5 items-center'>
                <IconMapPin width={20} height={20} className='text-french-gray' />
                <span className='text-ultra-violet line-clamp-1 text-ellipsis text-body-3-normal' title={`${location} ${subLocation ? `, ${subLocation}` : ''}`}>{location} {subLocation ? `, ${subLocation}` : ''}</span>
            </div>

            <div className='flex flex-row gap-3 justify-between'>
                <p className='line-clamp-1 text-ellipsis overflow-hidden'>
                    <span className='text-space-codet text-h5-bolder'>{price.toLocaleString()}</span>
                    <span className='text-ultra-violet  text-body-3-light mr-[1px]'> تومان</span>
                </p>

                {/* <div className='aspect-square bg-orange-200 rounded hidden lg:block'>
                    <IconArrowDownLeft className='text-orange' />
                </div> */}

            </div>

            <Divider />

            <div className='flex flex-row  justify-around items-center gap-1'>
                <div className='flex flex-row gap-1 items-center'>

                    <div className='w-3 aspect-square rounded-circle overflow-hidden relative shrink-0'>
                        <Image src={agentInfo?.avatar ?? logo} className='object-cover rounded-circle' alt={`مشاور ${agentInfo?.name}  | دپارتمان املاک اطلس`} fill />
                    </div>

                    <span className='text-body-3-normal text-ultra-violet line-clamp-1' title={agentInfo?.name ?? 'مشاور'}>{agentInfo?.name ?? 'مشاور'}</span>
                </div>

                <IconShare className='text-gray-300' width={20} height={20} />

            </div>

        </Link>
    )
}
