import { useFiltersList } from '(panel)/panel/base/categories/hooks'
import { IconPlus } from '@tabler/icons-react'
import React from 'react'
import { SubCategoryType } from 'types'
import { SingleFilter } from './components/SingleFilter'
import { MutateFilter } from './components/MutateFilter'

export const Filters = ({ subCategory: { id: subId, title: subTitle } }: { subCategory: SubCategoryType<string, string> }) => {

  const { data } = useFiltersList()

  const targetFilters = data?.data.filter(i => i.subCategory.id == subId)
  return (
    <div className='border p-1 rounded flex flex-col gap-2 bg-blue-100 border-blue-500'>

      <div className='flex flex-row items-center justify-between'>

        <span className='text-gray-500 text-body-3-normal'>لیست ویژگی ها (اختصاصی این زیردسته بندی)</span>

        <MutateFilter parentTitle={subTitle} mode='add' parentId={subId}>
          <div className='flex flex-row gap-0.5 items-center text-blue-600 cursor-pointer'>
            <IconPlus />
            <span>
              افزودن
            </span>
          </div>
        </MutateFilter>

      </div>

      {targetFilters?.map((i, index) => <SingleFilter index={index + 1} {...i} />)}
    </div>
  )
}
