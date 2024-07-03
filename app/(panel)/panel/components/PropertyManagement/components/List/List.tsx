import React from 'react'
import { news } from './data.mock'
import { PropertyCard } from './components/PropertyCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Button, Spinner } from '@components'
import { IconFile, IconHome, IconPlus } from '@tabler/icons-react'
import { usePropertyList, usePropertySection } from '../../hooks'
import { PropertyCUType, PropertyDetailType } from 'types'

export const List = () => {

    const { dispatch } = usePropertySection()

    const { data, isFetching, isError, hasNextPage, fetchNextPage } = usePropertyList()


    const allProprties = data?.pages?.reduce<Array<PropertyDetailType>>((pv, cv) => {
        pv.push(...cv.data)
        return pv
    }, [])

    if (allProprties && allProprties?.length > 0)
        return (
            <>
                <div className='flex flex-row gap-2 justify-between '>

                    <div className='flex flex-row gap-1 items-center'>
                        <IconHome width={25} height={25} className='text-french-gray' />
                        <span>لیست آگهی ها</span>
                    </div>

                    <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', proprtyId: undefined })}>ثبت آگهی</Button>

                </div>
                <div className=' h-full overflow-auto ' id='property-list'>

                    <InfiniteScroll
                        className='grid grid-cols-1 lg:grid-cols-2 gap-2 h-full'
                        dataLength={allProprties?.length ?? 0}
                        hasMore={!!hasNextPage}
                        loader={<div className='flex h-full w-full items-center justify-center bg-gray-50 animate-pulse rounded min-h-[80px]'><Spinner /></div>}
                        next={() => fetchNextPage()}
                        // style={{ overflow: 'unset' }}
                        scrollableTarget='property-list'
                    >
                        {allProprties?.map(item => <div className='bg-white shadow rounded p-1 '>
                            <PropertyCard key={item.id} {...item} />
                        </div>)}
                    </InfiniteScroll>
                </div>
            </>
        )

    else if (allProprties && allProprties?.length == 0)

        return  <div className='flex flex-row gap-2 justify-between '>

            <div className='flex flex-row gap-1 items-center'>
                <IconHome width={25} height={25} className='text-french-gray' />
                <span>لیست آگهی ها</span>
            </div>

            <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', proprtyId: undefined })}>ثبت آگهی</Button>

        </div>
    else if (isError)
        return <span className='text-red-500 text-center'>خطا در دریافت اطلاعات</span>

    return <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 h-full flex-1'>
        {Array.from(new Array(10)).map(i => <div className='  rounded p-1 bg-gray-50 animate-pulse h-16'></div>)}
    </div>
}
