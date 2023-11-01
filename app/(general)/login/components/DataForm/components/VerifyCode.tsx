import { Input } from '@components'
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
            <Input
                required
                placeholder='کد تایید'
                register={register('verifyCode')}
                type='tel'
            />
            <button className='bg-gray-300 p-2 text-gray-800 rounded'>تایید</button>

        </form>
    )
}
