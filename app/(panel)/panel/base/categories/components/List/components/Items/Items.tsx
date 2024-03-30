import { useItemsList, useSuggestList } from '(panel)/panel/base/categories/hooks'
import React from 'react'
import { FilterReadType, SuggestReadType } from 'types'
import { SingleItem } from './components/SingleItem'
import { MutateItem } from './components/MutateItem'
import { IconPlus } from '@tabler/icons-react'
// import { SingleSuggest } from './components/SingleSuggest'
// import { MutateSuggest } from './components/MutateSuggest'
// import { IconPlus } from '@tabler/icons-react'

export const Items = ({ id: sugId, title: sugTitle }: SuggestReadType) => {

  const { data } = useItemsList()

  const targetItems = data?.data.filter(i => i.suggest?.id == sugId)

  return (
    <div className='border p-1 rounded flex flex-col gap-2  border-purple-300 bg-purple-50'>

      <div className='flex flex-row items-center justify-between'>

        <span className='text-gray-500 text-body-3-normal'>لیست آیتم های پیشنهاد  </span>

        <MutateItem parentTitle={sugTitle} mode='add' parentId={sugId}>
          <div className='flex flex-row gap-0.5 items-center text-blue-600 cursor-pointer'>
            <IconPlus />
            <span>
              افزودن
            </span>
          </div>
        </MutateItem>

      </div>

      {targetItems?.length == 0
        ? <span className='text-body-3-normal'>پیشنهادی تعریف نشده است.</span>
        : targetItems?.map((s, index) => <SingleItem key={s.id} index={index + 1} {...s} />)}

    </div>
  )
}
