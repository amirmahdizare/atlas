'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useLoginPage } from '../../hooks'
import { Button, Input } from '@components'
import { api } from '_api/config'
import { AuthEndpointType, AuthEndpoints } from '_api/endpoints/auth'
import { useCustomMutation } from 'hooks'
import { toast } from 'react-toastify'
import { generateTenDigitOfPhoneNumber } from 'utils'

export const EnterPhone = () => {

    const { dispatch } = useLoginPage()

    const { register, handleSubmit, formState: { errors } } = useForm<{ phoneNumber: string }>()

    const { data, mutate, isLoading } = useCustomMutation<AuthEndpointType['SEND_OTP']>({
        mutationFn: (data) => api.post(AuthEndpoints.SEND_OTP, data),
        onSuccess: (data, { phoneNumber }) => {
            toast.success(`کد احراز هویت برای شما ارسال شد. ${data?.data?.code?.code}`)
            dispatch({ step: 'verify', phoneNumber })
        },
        onError: () => {
            toast.error('خطا در ارسال کد احراز هویت.. دوباره تلاش نمایید.')
        }
    })

    const handleEnter = (data: { phoneNumber: string }) => {
        mutate({ phoneNumber: generateTenDigitOfPhoneNumber(data.phoneNumber) })
    }

    return (
        <form className='flex flex-col gap-2 items-stretch' onSubmit={handleSubmit(handleEnter)}>
            <span className='text-h5-normal text-gray-400'>لطفا شماره موبایل خود را وارد کنید</span>

            <Input
                required
                placeholder='شماره موبایل'
                register={register('phoneNumber', {
                    required: { value: true, message: 'شماره تلفن وارد نشده است.' },
                    pattern: { value: /9(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/, message: 'شماره موبایل صحیح نیست' }
                })}
                type='tel'
                // error
                errorText='sdf'
                autoComplete='off'
            />

            {errors.phoneNumber && <span className='text-red-500 text-body-3-light font-bold text-right'>{errors.phoneNumber.message}</span>}

            <Button bgColor='primaryNormal' loading={isLoading} fullWidth>
                ورود
            </Button>

        </form>
    )
}
