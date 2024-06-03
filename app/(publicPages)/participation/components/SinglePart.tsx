import React from 'react'
import Link from 'next/link'
import { BlogItemType, BlogReadType, CorpReadType } from 'types'
import { IconArrowDownLeft, IconArrowLeftRight, IconMessage, IconMessages, IconThumbUp } from '@tabler/icons-react'
import { createMediaUrl } from 'utils'
import { Button } from '@components'

export const SinglePart = ({ id, title, description, side, user, medias: images }: CorpReadType) => {

    return (
        <Link href={`/participation/${id}`} className=' gap-2 grid grid-cols-4  p-1 rounded border hover:bg-gray-50 relative'>

            <div className=' lg:col-span-1 relative'>


                <img src={createMediaUrl(images?.[0])} className='aspect-video rounded w-full object-cover ' />

                <span className='absolute left-0.5 bottom-0.5 rounded bg-mint-green text-white p-1 shadow'>  {side == 'creator' ? 'سازنده' : 'مالک'}</span>
            </div>

            <div className='flex flex-col gap-2 items-start col-span-3'>

                <span className='text-body-2-bolder line-clamp-2 text-ellipsis leading-3 h-6'>
                    {title}
                </span>

                <p className='text-ultra-violet text-body-3-normal line-clamp-2 text-ellipsis leading-3 h-6' dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            {/* <div className='flex flex-row gap-2 items-center justify-between'>


                <span className='text-ultra-violet'>{createTime}</span>

                <div className='flex flex-row gap-2 items-center'>

                    <div className='flex flex-row gap-1 items-center rounded-xl text-ultra-violet p-0.5 px-1 bg-anti-flash-white-lighter'>
                        <IconThumbUp width={20} height={20} />
                        <span>{likes}</span>
                    </div>

                    <div className='flex flex-row gap-1 items-center rounded-xl text-ultra-violet p-0.5 px-1 bg-anti-flash-white-lighter'>
                        <IconMessage width={20} height={20} />
                        <span>{comments}</span>
                    </div>
                </div>

            </div> */}

            <div className='absolute left-0.5 bottom-0.5 hidden lg:flex'>
                <Button icon={IconArrowDownLeft} bgColor='secondary' iconSide='left'>مشاهده جزییات</Button>

            </div>

        </Link>
    )

}
