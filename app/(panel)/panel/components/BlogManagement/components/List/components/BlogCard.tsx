'use client'
import React from 'react'
import { Button } from '@components'
import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react'
import { BlogItemType, BlogItemTypeAPI, BlogReadType } from 'types'
import { useBlogsSection } from '../../../hooks'
import { DeleteBlog } from './DeleteBlog'
import { createMediaUrl } from 'utils'
import Link from 'next/link'
import { usePermission, useUserInfo } from '@hooks'

export const BlogCard = ({ title, description, duration, images, id, summary, createTime, user }: BlogReadType) => {

    const { dispatch } = useBlogsSection()

    const { data: userData } = useUserInfo()

    const editPermission = usePermission('BLOG_UPDATE')
    const deletePermission = usePermission('BLOG_DELETE')

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 border-b pb-2'>

            <div className='col-span-1'>
                <img src={createMediaUrl(images?.[0])} className='rounded object-cover w-full aspect-video' />
            </div>

            <div className='flex flex-col gap-2  col-span-1 lg:col-span-2'>
                <span className='text-body-2-bolder line-clamp-1 text-ellipsis overflow-hidden'>{title}</span>

                <span className='text-body-3-normal text-ultra-violet line-clamp-2 text-ellipsis overflow-hidden leading-3'>{summary}</span>

                <span className='text-ultra-violet'>{createTime}</span>
            </div>

            <div className='col-span-2 lg:col-span-1 flex flex-row items-start justify-evenly'>
                <Link target='_blank' title='مشاهده پیش نمایش' href={`/blogs/${id}`}><Button icon={IconEye} textColor='primaryDarker' bgColor='gray'> </Button></Link>
                {(deletePermission || userData?.data.id == user.id.toString()) && <DeleteBlog id={id} />}
                {/* <Button icon={IconTrash} bgColor='white' textColor='secondary'>حذف</Button> */}
                {(editPermission || userData?.data.id == user.id.toString() ) && <Button title='ویرایش' icon={IconPencil} bgColor='primaryLighter' textColor='white' onClick={() => dispatch({ mode: 'edit', blogId: id })}></Button>}
            </div>

        </div>
    )
}
