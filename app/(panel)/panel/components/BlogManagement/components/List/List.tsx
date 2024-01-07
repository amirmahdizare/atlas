import React from 'react'
import { blogs } from './data.mock'
import { PropertyCard } from './components/PropertyCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Button, Spinner } from '@components'
import { IconClipboard, IconPlus } from '@tabler/icons-react'
import { usePropertySection } from '../../hooks'
import { BlogCard } from './components/BlogCard'

export const List = () => {

    const { dispatch } = usePropertySection()

    return (
        <>
            <div className='flex flex-row gap-2 justify-between '>

                <div className='flex flex-row gap-1 items-center'>
                    <IconClipboard width={25} height={25} className='text-french-gray' />
                    <span>لیست مقالات</span>
                </div>

                <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', proprtyId: undefined })}>ثبت مقاله</Button>

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
                    {blogs?.map(item => 
                            <BlogCard {...item} />
                    )}
                </InfiniteScroll>
            </div>
        </>
    )
}
