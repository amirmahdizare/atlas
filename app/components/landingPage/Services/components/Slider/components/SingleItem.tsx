import Link from 'next/link'
import React from 'react'

export const SingleItem = ({ title, id }: { title: string  , id:string}) => {

    return (
        <Link href={`/categories/${id}`} className='hover:bg-gray-100 text-center h-[75px] lg:h-[90px] overflow-hidden  bg-white cursor-pointer rounded-[4px] p-3 flex flex-col items-center justify-center border'>
            <span className='text-body-2-bolder leading-3 line-clamp-2 text-ellipsis overflow-hidden'>{title}</span>
        </Link>
    )

}
