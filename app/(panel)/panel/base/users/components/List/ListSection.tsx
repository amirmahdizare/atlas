import { Button } from '@components'
import { IconPlus, IconUsers } from '@tabler/icons-react'
import React from 'react'
import { useAdvisersSection } from '../../hooks'
import { List } from './List'

export const ListSection = () => {

  const { dispatch } = useAdvisersSection()

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row gap-2 justify-between '>
        <div className='flex flex-row gap-1 items-center'>
          <IconUsers width={25} height={25} className='text-french-gray' />
          کاربران اطلس
        </div>


        <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', userId: undefined })}>افزودن کاربر</Button>

      </div>

      <List />


    </div>
  )
}
