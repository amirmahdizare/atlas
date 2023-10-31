import React from 'react'
import { useForm } from 'react-hook-form'

export const VerifyCode = () => {
    const { register, handleSubmit } = useForm<{ verifyCode: string }>()

    const handleEnter = (data: { verifyCode: string }) => {
        console.log(data.verifyCode)
    }

    return (
        <form className='flex flex-col gap-3' onSubmit={handleSubmit(handleEnter)}>
            <span className='text-h5-normal text-gray-400'>لطفا کد ارسال شده به موبایل خود را وارد کنید</span>

            <input className='border p-1 rounded outline-none text-body-2-normal' {...register('verifyCode', { required: true })} placeholder='کد تایید' />

            <button className='bg-gray-300 p-2 text-gray-800 rounded'>تایید</button>

        </form>
    )
}
