
'use client'
import React, { useState } from 'react'
import { BookmarkFilled , Bookmark as BookmarkIcon } from '@icons'

export const Bookmark = ({ isBookmarked , id }: { isBookmarked?: boolean ,id:string }) => {

    const [bookmark, setBookmark] = useState<boolean>(isBookmarked || false)


    return (
        <div className='bg-anti-flash-white-lighter rounded-circle p-1.5 shrink-0 hover:bg-gray-200 cursor-pointer transition-all duration-100'onClick={() => setBookmark(!bookmark)} >
            {bookmark
                ? <BookmarkFilled width={15} height={15} className='text-orange cursor-pointer' />
                : <BookmarkIcon width={15} height={15} className='text-raisin-black cursor-pointer' />}

        </div>
    )
}
