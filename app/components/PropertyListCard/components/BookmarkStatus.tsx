'use client'
import { Bookmark, BookmarkFilled } from '@icons'
import React, { useState } from 'react'

export const BookmarkStatus = ({ isSaved }: { isSaved: boolean }) => {


    const [bookmark, setBookmark] = useState(isSaved)

    return (bookmark
        ? <BookmarkFilled width={15} height={15} className='text-orange cursor-pointer' onClick={() => setBookmark(false)} />
        : <Bookmark width={15} height={15} className='text-raisin-black cursor-pointer' onClick={() => setBookmark(true)} />
    )
}
