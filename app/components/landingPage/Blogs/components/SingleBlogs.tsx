import { IconArrowDownLeft } from '@tabler/icons-react'
import { api } from '_api/config'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogItemType, BlogReadType } from 'types'
import { createMediaUrl } from 'utils'
import { NO_PHOTO_IMAGE } from 'variables'

export const SingleBlog = ({ createTime, duration, id, images, summary, title }: BlogReadType) => {

    console.log(images)
    return (
        <Link href={`/blogs/${id}/${title}`} prefetch={false} className=' flex-row grid grid-cols-4 gap-2 p-1 rounded overflow-hidden'>

            <div className='col-span-1 aspect-square  w-full relative rounded overflow-hidden'>
                <Image src={createMediaUrl(images?.[0])} className='w-full object-cover rounded' alt={`${title}  | دپارتمان املاک اطلس`} fill />
                <div className='backdrop-blur-sm  backdrop-brightness-75 text-body-3-normal absolute rounded-b overflow-hidden bottom-0 hidden lg:flex text-white left-0  p-1 w-full items-center justify-between'>
                    <span>{duration} دقیقه مطالعه</span>
                    <span>{createTime}</span>
                </div>
            </div>

            <div className='col-span-3'>
                <div className='flex flex-row gap-4 items-center'>

                    <span className='text-raisin-black text-h6-bolder line-clamp-2 text-ellipsis overflow-hidden leading-4 hover:text-coral'>{title}</span>

                    <div className='aspect-square   rounded hidden lg:block'>
                        <IconArrowDownLeft className='text-orange' />
                    </div>

                </div>

                <span className='leading-3 line-clamp-3 lg:line-clamp-4 lg:h-12 h-9 text-h4-normal text-ellipsis overflow-hidden '>
                    {summary}
                </span>
            </div>


        </Link>
    )
}
