import React from 'react'
import { EnterPhone } from './components/EnterPhone'

export const DataForm = () => {
    return (
        <div className='flex flex-col gap-4'>
            <span className='text-h3-bolder'>
                &nbsp;
                <span className='text-teal-400 '>ثبت نام | ورود</span>
                &nbsp;
                به اطلس
            </span>

            <EnterPhone />


        </div>
    )
}
