'use client'
import React from 'react'
import { Button } from '@components'
import { IconEye, IconMapPin, IconTrash, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import { PropertyListItemType } from 'types'

export const BookmarkCard = ({ img, id, price, location, agentInfo, title }: PropertyListItemType) => {

    return (
        <Link className='grid grid-cols-3 gap-1.5 ' href={`/property/${id}`}>

            <div className='col-span-1'>
                <img src={img} className='object-cover aspect-square w-full rounded ' />
            </div>


            <div className='col-span-2 flex flex-col gap-2 p-0.5'>
                <span className='line-clamp-1 text-ellipsis overflow-hidden text-body-2-bolder text-raisin-black'>{title}</span>

                <div className='flex flex-row gap-1 items-center '>
                    <IconMapPin className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{location}</span>
                </div>

                <div className='flex flex-row gap-1 items-center '>
                    <IconUser className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{agentInfo?.name}</span>
                </div>

                <div className='flex flex-row gap-1'>
                    <span className='text-h6-bolder text-space-codet'>{price.toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-2-normal'>تومان</span>
                </div>

            </div>
            <div className='flex flex-row gap-2 justify-end col-span-3'>
                <Button bgColor='lightBlue' textColor='primaryNormal' onClick={(e) => { e.preventDefault(); e.stopPropagation() }} icon={IconEye}>مشاهده</Button>
                <Button bgColor='gray' textColor='secondary' icon={IconTrash}>حذف</Button>
            </div>
        </Link>
    )
}
