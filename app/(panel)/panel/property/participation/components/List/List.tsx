import React from 'react'

import { Button } from '@components'
import { IconClipboard, IconPlus } from '@tabler/icons-react'
import { useCorpSection } from '../../hooks'
import {  CorpCard } from './components/CorpCard'
import {  useCorps } from '@hooks'

export const List = () => {

    const { dispatch } = useCorpSection()

    const { data, isError } = useCorps()

    const corps = data?.data

    if (corps)
        return (
            <>
                <div className='flex flex-row gap-2 justify-between '>

                    <div className='flex flex-row gap-1 items-center'>
                        <IconClipboard width={25} height={25} className='text-french-gray' />
                        <span>لیست پروژه های مشارکت</span>
                    </div>

                    <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', corpId: undefined })}>ثبت پروژه مشارکت</Button>

                </div>
                <div className='  overflow-auto flex flex-col gap-2 h-full' id='property-list'>


                    {/* <InfiniteScroll
                        className='flex flex-col gap-2 h-full'
                        dataLength={corps.length}
                        hasMore={false}
                        loader={<Spinner />}
                        next={() => alert('Next')}
                        style={{ overflow: 'unset' }}
                        scrollableTarget='property-list'
                    > */}
                        {corps?.map(item => <CorpCard {...item} />)}
                    {/* </InfiniteScroll> */}
                </div>
            </>
        )

    else if (isError)
        return <span>خطا در دریافت اطلاعات</span>

    return <div className='flex flex-col gap-2'>
        {Array.from(new Array(10)).map((a ,index)=><div key={index} className='h-4 rounded w-full animate-ping bg-gray-100'></div>)}

    </div>
}
