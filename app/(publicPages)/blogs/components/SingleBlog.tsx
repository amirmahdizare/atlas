import React from 'react'
import Link from 'next/link'
import { BlogItemType } from 'types'

export const SingleBlog = ({ id, title, createdAt, duration, img, summary }: BlogItemType) => {

    return (
        <Link href={`/blog/${id}`} className='flex flex-col gap-2'>

            <img src={img} className='aspect-video rounded w-full object-cover' />

            <span className='text-body-2-bolder line-clamp-2 text-ellipsis leading-3 h-6'>
                {title}
            </span>

            <p className='text-ultra-violet text-body-3-normal line-clamp-2 text-ellipsis leading-3'>
                {summary}
            </p>

            <div className='flex flex-row gap-2'>

                <span>{createdAt}</span>

            </div>

        </Link>
    )

}
