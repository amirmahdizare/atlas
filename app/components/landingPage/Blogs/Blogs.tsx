'use client'
import { IconArrowDownLeft, IconBook } from '@tabler/icons-react'
import React from 'react'
import { TopBlog } from './components/TopBlog'
// import { blogs } from './data.mock'
import { SingleBlog } from './components/SingleBlogs'
import { useBlogs } from '@hooks'

export const Blogs = () => {

    const { data, isError } = useBlogs()


    const blogs = data?.data

    if (blogs)
        return (
            <div className='flex flex-col gap-3 items-stretch'>
                <div className='flex flex-row gap-4 justify-between lg:justify-center'>

                    <div className='text-raisin-black text-h3-bolder relative text-center'>
                        اخبار و مقالات
                        <div className='absolute bg-mint-green w-[80px] left-1/2 -translate-x-1/2 h-[2px] top-full mt-1.5 rounded '></div>
                    </div>



                    <div className='flex flex-row gap-1 cursor-pointer hover:text-coral lg:hidden'>
                        <span className='text-mint-green text-body-2-bolder hover:text-coral'>همه مقالات</span>
                        <IconArrowDownLeft width={15} height={15} />
                    </div>
                </div>

                <div className='flex flex-col p-0.5   gap-2 overflow-hidden'>
                    <div className='flex flex-row gap-2 justify-between items-center'>

                        <div className='flex flex-row gap-2 items-center'>
                            <IconBook width={25} height={25} className='text-raisin-black' />
                            <p className='text-h6-bolder text-ellipsis line-clamp-1'>
                                <span className='text-mint-green'>مطالبی</span>
                                &nbsp;
                                برای مطالعه شما
                            </p>



                        </div>

                        <div className=' flex-row gap-1 cursor-pointer hover:text-coral hidden lg:flex'>
                            <span className='text-mint-green text-body-2-bolder hover:text-coral'>همه مقالات</span>
                            <IconArrowDownLeft width={15} height={15} />
                        </div>

                    </div>

                </div>

                <div className='grid grid-cols-3 gap-2'>

                    <div className='col-span-3 lg:col-span-1'>
                        <TopBlog {...blogs[0]} />

                    </div>

                    <div className='col-span-3 lg:col-span-2 flex flex-col gap-1'>
                        {blogs.slice(1, 3).map(item => <SingleBlog {...item} />)}
                    </div>

                </div>

            </div>
        )

    else if (isError)
        return <></>

    return <div className='grid grid-cols-4 gap-4'>{Array.from(new Array(4)).map(i=><div className='aspect-square col-span-4 md:col-span-2 lg:col-span-1 animate-pulse bg-gray-100'></div>)}</div>
}
