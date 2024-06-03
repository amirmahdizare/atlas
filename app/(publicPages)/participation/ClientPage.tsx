'use client'

import React from 'react'
import { blogs } from './data.mock'
import { SinglePart } from './components/SinglePart'
import { LatestBlogs } from './components/LatestBlogs'
import blogPhoto from 'images/blogs.svg'
import Image from 'next/image'
import { useBlogs, useCorps } from '@hooks'

export const ClientPage = () => {

    const { data, isError } = useCorps()

    const blogs = data?.data

    if (blogs)

        return (
            <div className='grid grid-cols-5 items-start gap-2 mt-2 lg:mt-4'>

                {/* <div className='col-span-5 relative '>
                    <Image src={blogPhoto} alt='پروژه های مشارکت | دپارتمان املاک اطلس' className='w-full' />
                </div> */}

                <span className='text-mint-green text-h3-bolder col-span-5'>پروژه های مشارکت اطلس</span>

                {/* <div className='col-span-5 lg:col-span-1'>
                    <LatestBlogs />
                </div> */}

                <div className='col-span-5 flex flex-col gap-3 p-1'>
                    {blogs.map(item => <SinglePart {...item} />)}
                </div>



            </div>
        )

    else if (isError)
        return <div className='text-red-500 font-bold'>خطا در دریافت اطلاعات</div>


    return <div className='grid grid-cols-5 items-start gap-4 mt-2 lg:mt-0'>


        <span className='text-mint-green'>
            پروژه های مشارکت اطلس
        </span>

        {/* <div className='col-span-5 relative '>
            <Image src={blogPhoto} alt='مقالات | دپارتمان املاک اطلس' className='w-full' />
        </div>

        <div className='col-span-5 lg:col-span-1 flex flex-col gap-4'>
            <LatestBlogs/>
        </div> */}

        <div className='col-span-5 lg:col-span-4 grid grid-cols-2 lg:grid-cols-3 gap-3 p-1'>
            {Array.from(new Array(10)).map(item => <div className='col-span-1 aspect-square bg-gray-100 animate-pulse w-full'></div>)}
        </div>



    </div>

}
