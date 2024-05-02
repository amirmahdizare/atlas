import React from 'react'
import { RelatedBlogs } from './components/RelatedBlogs'

export default function loading() {
    return (
        <div className='grid grid-cols-5 items-start gap-4  py-2'>


            <div className='lg:order-2 order-3 col-span-5 lg:col-span-1'>
                <RelatedBlogs/>
            </div>

            <div className='lg:order-3 order-2 col-span-5 lg:col-span-4 flex flex-col gap-2'>
                <div className='h-8 bg-gray-100 animate-pulse w-full'></div>
                <div className='h-3 bg-gray-100 animate-pulse w-full'></div>
                <div className='h-20 bg-gray-100 animate-pulse w-full'></div>
                <div className='h-10 bg-gray-100 animate-pulse w-full'></div>
            </div>



        </div>
    )
}
