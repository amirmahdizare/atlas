import { IconShare, IconThumbUp } from '@tabler/icons-react'
import React from 'react'
import { BlogDetailType, BlogReadType } from 'types'
import { createMediaUrl } from 'utils'
import { ShareBlog } from './ShareButton'

export const BlogBody = ({ createTime, description, duration, id, images, title, }: BlogReadType) => {
    return (
        <div className='flex flex-col gap-1.5 justify-center'>

            <div className='flex flex-row justify-between items-center py-1'>

                <span className='text-h6-bolder text-raisin-black'>{title}</span>


                <div className='flex flex-row gap-2 items-center'>


                    <ShareBlog description={description} id={id.toString()} title={title} />
                    {/* <div className='bg-anti-flash-white-lighter p-1 rounded-circle flex flex-row items-center justify-center'>
                        <IconShare className='text-ultra-violet' width={20} height={20} />
                    </div> */}

                    {/* <div className='bg-anti-flash-white-lighter p-1 rounded-circle flex flex-row items-center justify-center'>
                        <IconThumbUp className='text-ultra-violet' width={20} height={20} />
                    </div> */}

                </div>

            </div>

            <div className='flex flex-row gap-0.5 items-center text-ultra-violet text-body-3-normal -mt-1'>

                <span>تاریخ انتشار : {createTime}</span>

                <span>|</span>

                <span>{duration} دقیقه مطالعه</span>

            </div>

            <div className='flex flex-col gap-2'>
                <img src={createMediaUrl(images?.[0])} className='object-contain bg-gray-50 w-full max-h-[200px]  lg:max-h-[300px] rounded' />
            </div>

            <div dangerouslySetInnerHTML={{ __html: `${description}` }} className='text-body-3-normal text-ultra-violet leading-3'>

            </div>


        </div>
    )
}
