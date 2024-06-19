import React from 'react'
import { useCategorySection } from '../../hooks'
import { IconArrowBack, IconUser } from '@tabler/icons-react'
import { Button } from '@components'
import { DataForm } from './DataForm/DataForm'

export const SingleUser = () => {

    const { dispatch, mode, catId } = useCategorySection()

    return (
        <div className='flex flex-col gap-2 items-stretch'>

            <div className='flex flex-row gap-2 justify-between '>
                <div className='flex flex-row gap-1 items-center'>
                    <IconUser width={25} height={25} className='text-french-gray' />
                    <span>{mode == 'add' ? 'افزودن' : 'ویرایش'} دسته بندی </span>
                </div>


                <Button icon={IconArrowBack} bgColor='secondary' iconSide='right' onClick={() => dispatch({ mode: 'list' })}>بازگشت</Button>

            </div>

            <DataForm />

        </div>
    )
}
