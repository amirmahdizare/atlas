import React from 'react'
import { blogs } from './data.mock'
import { SingleBlog } from './components/SingleBlog'
import { LatestBlogs } from './components/LatestBlogs'
import blogPhoto from 'images/blogs.svg'
import Image from 'next/image'

export const ClientPage = () => {
    return (
        <div className='grid grid-cols-5 items-start gap-4 mt-2 lg:mt-0'>

            <div className='col-span-5 relative '>
                <Image src={blogPhoto} alt='مقالات | دپارتمان املاک اطلس'  className='w-full' />
            </div>

            <div className='col-span-5 lg:col-span-1'>
                <LatestBlogs />
            </div>

            <div className='col-span-5 lg:col-span-4 grid grid-cols-2 lg:grid-cols-3 gap-3 p-1'>
                {blogs.map(item => <div className='col-span-1'><SingleBlog {...item} /></div>)}
            </div>



        </div>
    )
}
