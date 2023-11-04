import { IconArrowDownLeft } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BlogItemType } from 'types'

export const TopBlog = ({ createdAt, duration, id, img, summary, title  }: BlogItemType) => {
    return (
        <Link href={`/blogs/${id}`} prefetch={false} className='flex flex-col gap-2 p-1 rounded overflow-hidden'>

            <div className='flex flex-1 aspect-video w-full relative rounded overflow-hidden'>
                <Image src={img} className='w-full' alt={`${title}  | دپارتمان املاک اطلس`} fill />
                <div className='backdrop-blur-sm  backdrop-brightness-75 text-body-3-normal absolute bottom-0 text-white left-0 flex p-1 w-full items-center justify-between'>
                    <span>{duration} دقیقه مطالعه</span>
                    <span>{new Date(createdAt).toLocaleDateString('fa-ir')}</span>
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
