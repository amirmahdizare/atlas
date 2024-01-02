import React from 'react'
import { news } from './data.mock'
import { PropertyCard } from './components/PropertyCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Button, Spinner } from '@components'
import { IconFile, IconHome, IconPlus } from '@tabler/icons-react'
import { usePropertySection } from '../../hooks'

export const List = () => {

    const { dispatch } = usePropertySection()

    return (
        <>
            <div className='flex flex-row gap-2 justify-between '>

                <div className='flex flex-row gap-1 items-center'>
                    <IconHome width={25} height={25} className='text-french-gray' />
                    <span>لیست آگهی ها</span>
                </div>

                <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', proprtyId: undefined })}>ثبت آگهی</Button>

            </div>
            <div className=' h-fit overflow-auto' id='property-list'>

                <InfiniteScroll
                    className='grid grid-cols-1 lg:grid-cols-2 gap-2 h-full'
                    dataLength={news.length}
                    hasMore={false}
                    loader={<Spinner />}
                    next={() => alert('Next')}
                    style={{ overflow: 'unset' }}
                    scrollableTarget='property-list'
                >
                    {news?.map(item => <div className='bg-white shadow rounded p-1 hover:bg-gray-50'>
                        <PropertyCard {...item} />
                    </div>)}
                </InfiniteScroll>
            </div>
        </>
    )
}
