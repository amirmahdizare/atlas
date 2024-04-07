import React from 'react'
import { Button } from '@components'
import { IconPencil, IconTrash } from '@tabler/icons-react'
import { BlogItemType, BlogItemTypeAPI } from 'types'
import { useBlogsSection } from '../../../hooks'

export const BlogCard = ({ title,description , duration , images  , id, summary,  }: BlogItemTypeAPI<string , string>) => {

    const { dispatch } = useBlogsSection()

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 border-b pb-2'>

            <div className='col-span-1'>
                <img src={images[0]} className='rounded object-cover' />
            </div>

            <div className='flex flex-col gap-2  col-span-1 lg:col-span-2'>
                <span className='text-body-2-bolder line-clamp-1 text-ellipsis overflow-hidden'>{title}</span>

                <span className='text-body-3-normal text-ultra-violet line-clamp-2 text-ellipsis overflow-hidden leading-3'>{summary}</span>

                {/* <span className='text-ultra-violet'>{(new Date(createdAt)).toLocaleString('fa-ir')}</span> */}
            </div>

            <div className='col-span-2 lg:col-span-1 flex flex-row items-start justify-evenly'>
                <Button icon={IconTrash} bgColor='white' textColor='secondary'>حذف</Button>
                <Button icon={IconPencil} bgColor='primaryLighter' textColor='white' onClick={() => dispatch({ mode: 'edit', blogId: id })}>ویرایش</Button>
            </div>

        </div>
    )
}
