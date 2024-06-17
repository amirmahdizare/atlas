
import { IconChevronRight, IconShare, IconThumbUp } from '@tabler/icons-react'
import React from 'react'
import { BlogDetailType, BlogReadType, CorpReadType } from 'types'
import { createMediaUrl } from 'utils'
import { ShareBlog } from './ShareButton'
import { ReturnButton } from './ReturnButton'

export const BlogBody = ({ description, id, medias: images, title, side }: CorpReadType) => {
    return (
        <div className='flex flex-col gap-1.5 justify-center'>

            <div className='flex flex-row justify-between items-center  pt-1'>

                <ReturnButton />

                <span className='text-h6-bolder text-raisin-black hidden lg:flex'>{title}</span>


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

            {/* <div className='flex flex-row gap-0.5 items-center text-ultra-violet text-body-3-normal -mt-1'>

                <span>تاریخ انتشار : {createTime}</span>

                <span>|</span>

                <span>{duration} دقیقه مطالعه</span>

            </div> */}

            <div className='flex flex-col gap-2'>
                <img src={createMediaUrl(images?.[0])} className='object-cover w-full max-h-[200px]  lg:max-h-[300px] rounded' />
            </div>

            <span className='text-h6-bolder text-raisin-black  lg:hidden'>{title}</span>

            <span className=' text-body-3-bolder text-raisin-black  border rounded p-1 w-fit'>از طرف {side == 'creator' ? 'سازنده' : 'مالک'}</span>

            <div dangerouslySetInnerHTML={{ __html: `${description}` }} className='text-body-3-normal text-ultra-violet leading-3'>

            </div>


        </div>
    )
}
