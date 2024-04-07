import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Button, Spinner } from '@components'
import { IconClipboard, IconPlus } from '@tabler/icons-react'
import { useBlogsSection } from '../../hooks'
import { BlogCard } from './components/BlogCard'
import { useBlogs } from '@hooks'

export const List = () => {

    const { dispatch } = useBlogsSection()

    const { data, isError } = useBlogs()

    const blogs = data?.data

    if (blogs)
        return (
            <>
                <div className='flex flex-row gap-2 justify-between '>

                    <div className='flex flex-row gap-1 items-center'>
                        <IconClipboard width={25} height={25} className='text-french-gray' />
                        <span>لیست مقالات</span>
                    </div>

                    <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', blogId: undefined })}>ثبت مقاله</Button>

                </div>
                <div className=' h-fit overflow-auto' id='property-list'>

                    <InfiniteScroll
                        className='flex flex-col gap-2 h-full'
                        dataLength={blogs.length}
                        hasMore={false}
                        loader={<Spinner />}
                        next={() => alert('Next')}
                        style={{ overflow: 'unset' }}
                        scrollableTarget='property-list'
                    >
                        {blogs?.map(item => <BlogCard {...item} />)}
                    </InfiniteScroll>
                </div>
            </>
        )

    else if (isError)
        return <span>خطا در دریافت اطلاعات</span>

    return <div className='flex flex-col gap-2'>
        {Array.from(new Array(10)).map((a ,index)=><div key={index} className='h-4 rounded w-full animate-ping bg-gray-100'></div>)}

    </div>
}
