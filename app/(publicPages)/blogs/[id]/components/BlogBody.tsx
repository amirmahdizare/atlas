import { IconShare, IconThumbUp } from '@tabler/icons-react'
import React from 'react'
import { BlogDetailType } from 'types'

export const BlogBody = ({ createdAt, description, duration, id, img, title, comments, likes }: BlogDetailType) => {
    return (
        <div className='flex flex-col gap-1.5 justify-center'>

            <div className='flex flex-row justify-between items-center'>

                <span className='text-h6-bolder text-raisin-black'>{title}</span>


                <div className='flex flex-row gap-2 items-center'>

                    <div className='bg-anti-flash-white-lighter p-1 rounded-circle flex flex-row items-center justify-center'>
                        <IconShare className='text-ultra-violet' width={20} height={20}/>
                    </div>

                    <div className='bg-anti-flash-white-lighter p-1 rounded-circle flex flex-row items-center justify-center'>
                        <IconThumbUp className='text-ultra-violet' width={20} height={20}/>
                    </div>

                </div>

            </div>

            <div className='flex flex-row gap-0.5 items-center text-ultra-violet text-body-3-normal -mt-1'>

                <span>تاریخ انتشار : {(new Date(createdAt)).toLocaleDateString('fa-ir')}</span>

                <span>|</span>

                <span>{duration} دقیقه مطالعه</span>

            </div>

            <div className='flex flex-col gap-2'>
                <img src={img} className='object-cover w-full max-h-[200px]  lg:max-h-[300px] rounded' />
            </div>

            <div dangerouslySetInnerHTML={{__html:description}} className='text-body-3-normal text-ultra-violet leading-3'>

            </div>


        </div>
    )
}
