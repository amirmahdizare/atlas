
'use client'
import React, { useEffect } from 'react'
import { BookmarkFilled, Bookmark as BookmarkIcon } from '@icons'
import { useBookmark } from '@hooks'
import { Spinner } from '@components'
// import { usePathname } from 'next/navigation'
// import { revalidatePath } from 'next/cache'

export const Bookmark = ({ isBookmarked, id }: { isBookmarked: boolean, id: string }) => {


    const { isActive, mutate, isLoading } = useBookmark(id, isBookmarked)

    // const pathname = usePathname()

    // useEffect(() => {
    //     if(isActive)
    //     revalidatePath(pathname)
    // }, [isActive])

    return (
        <div className='bg-anti-flash-white-lighter rounded-circle p-1.5 shrink-0 hover:bg-gray-200 cursor-pointer transition-all duration-100' onClick={() => mutate({})} >

            {isLoading
                ? <Spinner  className='w-[15px] h-[15px]' /> : <>
                    {isActive && <BookmarkFilled width={15} height={15} className='text-orange cursor-pointer' />}
                    {!isActive && <BookmarkIcon width={15} height={15} className='text-raisin-black cursor-pointer' />}
                </>}

        </div>
    )
}
