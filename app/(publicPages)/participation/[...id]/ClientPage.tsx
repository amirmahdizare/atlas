
import React from 'react'
// import blogPhoto from 'images/blogs.svg'
// import Image from 'next/image'
import { RelatedBlogs } from './components/RelatedBlogs'
import { BlogBody } from './components/BlogBody'
import { singleBlogDetail } from './data.mock'
import { BlogReadType, CorpReadType } from 'types'

export const ClientPage = ({ id, data }: { id: string, data: CorpReadType }) => {
    return (
        <div className='grid grid-cols-5 items-start gap-4  py-2'>

            {/* <div className='order-1 col-span-5 relative '>
                <Image src={blogPhoto} alt='مقالات | دپارتمان املاک اطلس' className='w-full' />
            </div> */}

            {/* <div className='lg:order-2 order-3 col-span-5 lg:col-span-1'>
                <RelatedBlogs />
            </div> */}

            <div className='lg:order-3 order-2 col-span-5 lg:col-span-4'>
                <BlogBody {...data} />
            </div>



        </div>
    )
}
