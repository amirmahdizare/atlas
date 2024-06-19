
'use client'
import React from 'react'
import { properties } from './data.mock'
import { PropertyListCard } from '../PropertyListCard/PropertyListCard'
import { usePropertySearchResults } from '../../hooks'
import { PropertyDetailType } from 'types'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Button, Spinner } from '@components'
import { IconArrowDownLeft } from '@tabler/icons-react'

export const List = () => {

    const { data, isLoading, isError, hasNextPage, fetchNextPage } = usePropertySearchResults()

    const allProprties = data?.pages.reduce<Array<PropertyDetailType>>((pv, cv) => {
        pv.push(...cv.data)
        return pv
    }, [])

    if (allProprties && allProprties?.length > 0)
        return (
            <div className='max-h-full overflow-auto' id='search-results'>

                <InfiniteScroll
                    className='grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 items-stretch justify-stretch'
                    dataLength={allProprties?.length ?? 0}
                    hasMore={!!hasNextPage}
                    loader={<>
                        {Array.from(new Array(5)).map(f => <div key={f} className='flex h-full w-full col-span-1 items-center justify-center bg-white animate-pulse rounded min-h-[80px]'> </div>)}
                        {/* <div className='flex h-full w-full items-center justify-center bg-gray-50 animate-pulse rounded min-h-[80px]'> </div> */}
                    </>
                    }
                    next={() => fetchNextPage()}
                    style={{ overflow: 'unset' }}
                // scrollableTarget='search-results'
                >
                    {/* <div className='grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 items-stretch justify-stretch'> */}
                    {allProprties?.map(item => <div className='col-span-1 '>
                        <PropertyListCard {...item} />
                    </div>)}
                    {/* </div > */}
                </InfiniteScroll>
            </div>
        )

    else if (isError)
        return <span>خطا در دریافت آگهی ها</span>

    //TODO Replace NoProperty Found

    else if (allProprties && allProprties?.length == 0)
        return <div className='h-full flex flex-col gap-1 items-center justify-center'>
            <div className='text-center p-2 w-full  text-dark-orange flex-row justify-center items-center'>آگهی ای با این مشخصات یافت نشد!</div>
            <Button icon={IconArrowDownLeft} iconSide='left' bgColor='secondary' href='/requestproperty' textColor='white'>درخواست ملک</Button>
        </div>

    return <div className='grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 '>
        {Array.from(new Array(20)).map((i, index) => <div key={index} className='col-span-1 bg-gray-100 animate-pulse  w-full aspect-[10/16]'></div>)}
    </div>
}
