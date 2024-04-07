import React from 'react'
import { blogs } from '../data.mock'
import { IconArrowDownLeft } from '@tabler/icons-react'
import Link from 'next/link'
import { useBlogs } from '@hooks'

export const LatestBlogs = () => {


    const { data, isError } = useBlogs()

    const blogs = data?.data

    if (blogs)

        return (
            <div className='flex flex-col gap-2'>
                <p className='flex flex-row gap-0.5 items-center font-bold'>
                    <span className='text-coral'>آخرین</span>
                    <span className='text-raisin-black'>مقالات</span>
                </p>

                <div className='flex flex-col gap-2'>
                    {blogs?.slice(0, 5).map(item => <Link href={`/blogs/${item.id}`} className='bg-seasalt p-1 flex flex-col gap-1 hover:bg-gray-100'>
                        <span className='text-body-3-normal text-ellipsis line-clamp-2 leading-3'>
                            {item.title}
                        </span>

                        <div className='flex flex-row gap-2 items-center justify-between text-body-3-normal'>
                            <span className='text-ultra-violet'>{item.createTime}</span>

                            <div className='flex flex-row gap-0.5 items-center'>
                                <span className=' text-ultra-violet'>مطالعه</span>
                                <IconArrowDownLeft className='text-mint-green' />
                            </div>

                        </div>

                    </Link>)}

                </div>

            </div>
        )

    else if (isError)
        return <span className='text-red-500 font-bold items-center'>خطا در دریافت اطلاعات</span>

    return <div className='flex flex-col gap-2'>  {Array.from(new Array(5)).map(item => <div className='h-8 aspect-video bg-gray-100 animate-pulse w-full'></div>)}</div>

}
