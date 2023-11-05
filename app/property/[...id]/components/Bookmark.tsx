import React, { useState } from 'react'
import { BookmarkFilled , Bookmark as BookmarkIcon } from '@icons'

export const Bookmark = ({ isBookmarked , id }: { isBookmarked?: boolean ,id:string }) => {

    const [bookmark, setBookmark] = useState<boolean>(isBookmarked || false)


    return (
        <div className='bg-anti-flash-white-lighter rounded-circle p-2'>
            {bookmark
                ? <BookmarkFilled width={15} height={15} className='text-orange cursor-pointer' onClick={() => setBookmark(false)} />
                : <BookmarkIcon width={15} height={15} className='text-raisin-black cursor-pointer' onClick={() => setBookmark(true)} />}

        </div>
    )
}
