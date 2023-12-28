import React from 'react'
import { news } from './data.mock'
import { PropertyCard } from './components/PropertyCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Spinner } from '@components'

export const List = () => {
    return (
        <div className=' h-fit overflow-auto' id='property-list'>

            <InfiniteScroll
                className='grid grid-cols-1 lg:grid-cols-2 gap-2 h-full'
                dataLength={news.length}
                hasMore={true}
                loader={<Spinner />}
                next={() => alert('Next')}
                style={{overflow:'unset'}}
                scrollableTarget='property-list'
            >
                {news?.map(item => <div className='bg-white shadow rounded p-1 hover:bg-gray-50'>
                    <PropertyCard {...item} />
                </div>)}
            </InfiniteScroll>
        </div>
    )
}
