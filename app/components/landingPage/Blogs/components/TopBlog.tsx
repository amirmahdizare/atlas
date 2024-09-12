import { IconArrowDownLeft } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogItemType, BlogReadType } from 'types'
import { createMediaUrl } from 'utils'
import { NO_PHOTO_IMAGE } from 'variables'

export const TopBlog = ({ createTime, duration, id, images, summary, title }: BlogReadType) => {
    return (
        <Link href={`/blogs/${id}/${title}`} prefetch={false} className='flex flex-col gap-2 p-1 rounded overflow-hidden'>

            <div className='flex flex-1 aspect-video w-full relative rounded overflow-hidden'>
                <Image src={createMediaUrl(images?.[0])} className='w-full object-cover' alt={`${title}  | دپارتمان املاک اطلس`} fill />
                <div className='backdrop-blur-sm  backdrop-brightness-75 text-body-3-normal absolute bottom-0 text-white left-0 flex p-1 w-full items-center justify-between'>
                    <span>{duration} دقیقه مطالعه</span>
                    <span>{createTime}</span>
                </div>
            </div>

            <div className='flex flex-row gap-4 items-center'>

                <span className='text-raisin-black text-h3-bolder line-clamp-2 text-ellipsis overflow-hidden leading-4 hover:text-coral'>{title}</span>

                <div className='aspect-square   rounded hidden lg:block'>
                    <IconArrowDownLeft className='text-orange' />
                </div>

            </div>

            <span className='leading-3 line-clamp-3 text-h5-normal text-ellipsis overflow-hidden '>
                {summary}
            </span>


        </Link>
    )
}
