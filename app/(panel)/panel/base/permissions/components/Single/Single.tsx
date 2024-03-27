import React from 'react'
import { usePermissionsSection } from '../../hooks'
import { IconArrowBack, IconUser } from '@tabler/icons-react'
import { Button } from '@components'
import { DataForm } from './DataForm/DataForm'

export const Single = () => {

    const { dispatch, mode, permissionId } = usePermissionsSection()

    return (
        <div className='flex flex-col gap-2 items-stretch'>

            <div className='flex flex-row gap-2 justify-between '>
                <div className='flex flex-row gap-1 items-center'>
                    <IconUser width={25} height={25} className='text-french-gray' />
                    <span>{mode == 'add' ? 'افزودن' : 'ویرایش'} دسترسی </span>
                </div>


                <Button icon={IconArrowBack} bgColor='secondary' iconSide='right' onClick={() => dispatch({ mode: 'list' })}>بازگشت</Button>

            </div>

            <DataForm />

        </div>
    )
}
