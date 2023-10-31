'use client'
import React from 'react'
import { EnterPhone } from './components/EnterPhone'
import { useLoginPage } from '../hooks'
import { VerifyCode } from './components/VerifyCode'

export const DataForm = () => {

    const step = useLoginPage(s=>s.step)

    return (
        <div className='flex flex-col gap-3 lg:min-w-[350px] text-center'>
            <span className='text-h3-bolder '>
                &nbsp;
                <span className='text-teal-400 '>ثبت نام | ورود</span>
                &nbsp;
                به اطلس
            </span>

            {step=='enter' ? <EnterPhone /> : <VerifyCode />}


        </div>
    )
}
