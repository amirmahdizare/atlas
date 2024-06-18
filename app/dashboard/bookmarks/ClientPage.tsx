'use client'
import React from 'react'
import { IconArticle } from '@tabler/icons-react'
import { bookmarks } from './data.mock'
import { BookmarkCard } from './components/BookmarkCard'
import { useMyBookmarks } from '@hooks'

export const ClientPage = () => {


    const { data, isError } = useMyBookmarks()

    if (isError)
        return <span>خطا در دریافت نشان شده ها</span>

    else if (data?.data)

        return (
            <div className='flex flex-col gap-2  overflow-auto max-h-full '>
                <div className='flex flex-row gap-1 col-span-4 items-center sticky top-0 bg-white p-0.5'>
                    <IconArticle width={25} height={25} className='text-french-gray' />
                    <span className='text-body-2-bolder text-space-codet'>لیست نشان شده ها </span>
                </div>

                <div className='grid grid-cols-2 xl:grid-cols-3 gap-2 '>

                    {data.data.toReversed().map(item => <div className='col-span-2 lg:col-span-1 border rounded p-1'>
                        <BookmarkCard key={item.id} {...item} />
                    </div>)}

                    {/* {bookmarks.map(item => <div className='col-span-2 lg:col-span-1'>
                        <BookmarkCard {...item} />
                    </div>)} */}

                </div>


            </div>
        )


    return <div className='grid grid-cols-2 xl:grid-cols-3 gap-2  w-full'>
        {Array.from(new Array(15)).map((i, index)=><div className='col-span-2 lg:col-span-1 animate-pulse bg-gray-50 w-full h-12 lg:h-16'></div>)}

    </div>
}
