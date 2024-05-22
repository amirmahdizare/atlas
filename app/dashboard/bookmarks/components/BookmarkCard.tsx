'use client'

import React from 'react'
import { Button } from '@components'
import { IconEye} from '@tabler/icons-react'
import Link from 'next/link'
import { BookmarkRecordType } from 'types'
import { createMediaUrl } from 'utils'

export const BookmarkCard = (data: BookmarkRecordType) => {


    const { medias, id, price, title, prePrice, rentPrice } = data.product

    return (
        <Link className='grid grid-cols-4 lg:grid-cols-3 gap-1.5 ' href={`/property/${id}`} prefetch={false} target='_blank'>

            <div className='col-span-1'>
                <img src={createMediaUrl(medias?.[0])} className='object-cover aspect-square w-full rounded ' />
            </div>


            <div className='col-span-2 flex flex-col gap-2 p-0.5 justify-center'>
                <span className='line-clamp-1 text-ellipsis overflow-hidden text-body-2-bolder text-raisin-black'>{title}</span>

                {/* <div className='flex flex-row gap-1 items-center '>
                    <IconMapPin className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{location?.faTitle}</span>
                </div> */}

                {/* <div className='flex flex-row gap-1 items-center '>
                    <IconUser className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{agentInfo?.name}</span>
                </div> */}
                {/* 
                <div className='flex flex-row gap-1'>
                    <span className='text-h6-bolder text-space-codet'>{price.toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-2-normal'>تومان</span>
                </div> */}


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

            </div>
            <div className='flex flex-col lg:flex-row gap-2 justify-end col-span-1 lg:col-span-3'>
                <Button bgColor='lightBlue' textColor='primaryNormal'  icon={IconEye}>مشاهده</Button>
              {/* TODO Delete Bookmark  <Button bgColor='gray' textColor='secondary' onClick={(e) => { e.preventDefault(); e.stopPropagation() }} icon={IconTrash}>حذف</Button> */}
            </div>
        </Link>
    )
}
