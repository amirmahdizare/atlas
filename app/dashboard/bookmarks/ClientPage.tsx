'use client'
import React from 'react'
import { IconArticle } from '@tabler/icons-react'
import { bookmarks } from './data.mock'
import { BookmarkCard } from './components/BookmarkCard'

export const ClientPage = () => {
    return (
        <div className='flex flex-col gap-2  overflow-auto max-h-full '>
            <div className='flex flex-row gap-1 col-span-4 items-center sticky top-0 bg-white p-0.5'>
                <IconArticle width={25} height={25} className='text-french-gray' />
                <span className='text-body-2-bolder text-space-codet'>لیست علاقه مندی </span>
            </div>

            <div className='grid grid-cols-2 xl:grid-cols-3 gap-4 '>

                {bookmarks.map(item => <div className='col-span-2 lg:col-span-1'>
                    <BookmarkCard {...item} />
                </div>)}

                {bookmarks.map(item => <div className='col-span-2 lg:col-span-1'>
                    <BookmarkCard {...item} />
                </div>)}

            </div>


        </div>
    )
}
