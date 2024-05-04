import React from 'react'
import { BlogItems } from './BlogItems/BlogItems'
import { UserFullInfo } from 'types'

export const Blogs = ({ data }: { data: UserFullInfo }) => {

    if (data?.blogs?.length > 0)
        return (
            <div className='flex flex-col gap-4 items-stretch py-2'>
                <div className='flex flex-row gap-4 justify-between lg:justify-center'>

                    <div className='text-raisin-black text-h3-bolder relative text-center'>
                        مقاله های مشاور
                        <div className='absolute bg-mint-green w-[80px] right-0 lg:left-1/2 lg:-translate-x-1/2 h-[2px] top-full mt-1.5 rounded '></div>
                    </div>


                </div>

                <BlogItems data={data} />
            </div>
        )

    return <></>
}
