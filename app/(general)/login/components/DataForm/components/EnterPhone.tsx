'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoginPage } from '../../hooks'
import { Button, Input } from '@components'

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

            <Input
                required
                placeholder='شماره موبایل'
                register={register('phoneNumber')}
                type='tel'
                // error
                errorText='sdf'
            />

            <Button  bgColor='primaryNormal' >
                ورود
            </Button>

        </form>
    )
}
