'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoginPage } from '../../hooks'

export const EnterPhone = () => {

    const { dispatch } = useLoginPage()

    const { register, handleSubmit } = useForm<{ phoneNumber: string }>()

    const handleEnter = (data: { phoneNumber: string }) => {
        console.log(data.phoneNumber)
        dispatch({ step: 'verify' })
    }

    return (
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(handleEnter)}>
            <span className='text-h5-normal text-gray-400'>لطفا شماره موبایل خود را وارد کنید</span>

            <input className='border p-1 rounded outline-none text-body-2-normal' {...register('phoneNumber', { required: true })} placeholder='شماره تلفن' />

            <button className='bg-gray-300 p-2 text-gray-800 rounded'>ورود</button>

        </form>
    )
}
