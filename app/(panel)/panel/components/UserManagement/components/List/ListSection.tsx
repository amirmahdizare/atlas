import { Button } from '@components'
import { IconPlus, IconUsers } from '@tabler/icons-react'
import React from 'react'
import { useUsersSection } from '../../hooks'
import { List } from './List'

export const ListSection = () => {

  const { dispatch, type } = useUsersSection()

  const typeName = type == 'agent' ? 'مشاور' : 'کاربر'


  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row gap-2 justify-between '>
        <div className='flex flex-row gap-1 items-center'>
          <IconUsers width={25} height={25} className='text-french-gray' />
          {typeName}ان اطلس
        </div>


        {type != 'agent' && <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', userId: undefined })}>افزودن {typeName}</Button>}

      </div>

      <List />


    </div>
  )
}
