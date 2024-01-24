import React from 'react'
import { useRequestSection } from '../../hooks'
import { IconArrowBack, IconClipboard, IconUser } from '@tabler/icons-react'
import { Button } from '@components'
import { DataForm } from './DataForm/DataForm'

export const SingleRequest = () => {

    const { dispatch, mode , reqId} = useRequestSection()

    return (
        <div className='flex flex-col gap-2 items-stretch'>

            <div className='flex flex-row gap-2 justify-between '>
                <div className='flex flex-row gap-1 items-center'>
                    <IconClipboard width={25} height={25} className='text-french-gray' />
                    <span>جزییات درخواست {reqId}</span>
                </div>


                <Button icon={IconArrowBack} bgColor='secondary' iconSide='right' onClick={() => dispatch({ mode: 'list' })}>بازگشت</Button>

            </div>

            <DataForm />

        </div>
    )
}
