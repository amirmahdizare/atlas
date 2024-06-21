import React from 'react'
import { Button } from '@components'
import { IconArrowBack, IconHome } from '@tabler/icons-react'
import { usePropertySection } from '../../hooks'
import Head from 'next/head'
import { DataForm } from './components/DataForm/DataForm'

export const SingleProperty = ({ propertyId }: { propertyId?: string }) => {

    const { dispatch, mode } = usePropertySection()

    return (
        <div className='flex flex-col gap-2'>

            <div className='flex flex-row gap-2 justify-between '>
                <div className='flex flex-row gap-1 items-center'>
                    <IconHome width={25} height={25} className='text-french-gray' />
                    <span>{mode == 'add' ? 'افزودن' : 'ویرایش'} آگهی </span>
                </div>


                <Button icon={IconArrowBack} bgColor='secondary' iconSide='right' onClick={() => dispatch({ mode: 'list'  , proprtyId:undefined})}>بازگشت</Button>

            </div>
            <DataForm />

        </div>
    )
}
