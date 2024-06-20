'use client'
import React from 'react'
import { IconShare } from '@tabler/icons-react'
import { PropertyDetailType } from 'types'

export const Share = ({ id, data }: { id: string, data: PropertyDetailType }) => {

    const { title, description, user } = data

    const shareData = {
        title: `${title} |  دپارتمان املاک اطلس  | مشاور ${user?.firstName} ${user?.lastName}`,
        text: description,
        url: `${window?.location?.origin}/property/${id}/${title}`
    };

    const handleShare = () => {

        if (navigator && typeof navigator?.share === 'function')
            navigator.share(shareData);
    }

    return (
        <div onClick={handleShare} className='bg-anti-flash-white-lighter rounded-circle p-1.5 shrink-0 hover:bg-gray-200 cursor-pointer transition-all duration-100'>
            {/* <Bookmark width={15} height={15}/> */}
            <IconShare width={15} height={15} />
        </div>
    )
}
