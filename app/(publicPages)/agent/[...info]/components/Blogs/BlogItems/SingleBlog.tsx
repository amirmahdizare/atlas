import React from 'react'
import Link from 'next/link'
import { BlogItemType, BlogReadType } from 'types'
import { IconMessage, IconMessages, IconThumbUp } from '@tabler/icons-react'
import { createMediaUrl } from 'utils'

export const SingleBlog = ({ id, title, createTime, duration, images, summary }: BlogReadType) => {

    return (
        <Link href={`/blogs/${id}`} className='flex flex-col gap-1.5'>

            <img src={createMediaUrl(images?.[0])} className='aspect-video rounded w-full object-cover' />

            <span className='text-body-2-bolder line-clamp-2 text-ellipsis leading-3 h-6'>
                {title}
            </span>

            <p className='text-ultra-violet text-body-3-normal line-clamp-2 text-ellipsis leading-3 h-6'>
                {summary}
            </p>

            <div className='flex flex-row gap-2 items-center justify-between'>

                <span className='text-ultra-violet'>{createTime}</span>

                {/* <div className='flex flex-row gap-2 items-center'>

                    <div className='flex flex-row gap-1 items-center rounded-xl text-ultra-violet p-0.5 px-1 bg-anti-flash-white-lighter'>
                        <IconThumbUp width={20} height={20} />
                        <span>{likes}</span>
                    </div>

                    <div className='flex flex-row gap-1 items-center rounded-xl text-ultra-violet p-0.5 px-1 bg-anti-flash-white-lighter'>
                        <IconMessage width={20} height={20} />
                        <span>{comments}</span>
                    </div>
                </div> */}

            </div>

        </Link>
    )

}
