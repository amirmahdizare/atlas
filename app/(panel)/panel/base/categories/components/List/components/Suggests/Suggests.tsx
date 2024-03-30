import { useSuggestList } from '(panel)/panel/base/categories/hooks'
import React from 'react'
import { FilterReadType } from 'types'
import { SingleSuggest } from './components/SingleSuggest'

export const Suggests = ({ id: filterId }: FilterReadType) => {

    const { data } = useSuggestList()

    const targetSuggests = data?.data.filter(i => i.filter?.id == filterId)

    return (
        <div className='border p-1 rounded flex flex-col gap-2  border-yellow-300 bg-yellow-50'>

            <div className='flex flex-row items-center justify-between'>

                <span className='text-gray-500 text-body-3-normal'>لیست پیشنهاد ها </span>

                {/* <MutateFilter parentTitle={subTitle} mode='add' parentId={subId}>
            <div className='flex flex-row gap-0.5 items-center text-blue-600 cursor-pointer'>
              <IconPlus />
              <span>
                افزودن
              </span>
            </div>
          </MutateFilter> */}

            </div>

            {targetSuggests?.length == 0
                ? <span className='text-body-3-normal'>پیشنهادی تعریف نشده است.</span>
                : targetSuggests?.map((s ,index) => <SingleSuggest  index={index+1} {...s} />)}

            {/* {targetFilters?.map((i, index) => <SingleFilter index={index + 1} {...i} />)} */}
        </div>
    )
}
