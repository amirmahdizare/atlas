import React, { useCallback, useState } from 'react'

import { Button, Input } from '@components'
import { api } from '_api/config';
import { AuthEndpointType, AuthEndpoints } from '_api/endpoints/auth';
import { useCustomMutation, useUserInfo } from 'hooks';
import Countdown from 'react-countdown';
import { useForm } from 'react-hook-form'
import { redirectJs, startWithZero, storeToken } from 'utils';
import { useLoginPage } from '../../hooks';
import { toast } from 'react-toastify';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import VerificationInput from 'react-verification-input';



export const VerifyCode = () => {

    const router = useRouter()

    const { refetch } = useUserInfo()

    const [value, setValue] = useState<string>('')

    const callBackUrl = useSearchParams().get('callbackUrl')
    // const { register, handleSubmit, formState: { errors } } = useForm<{ verifyCode: string }>()

    const { phoneNumber, dispatch } = useLoginPage()

    const renderer = useCallback(({ hours, minutes, seconds, completed }: any) => {
        if (completed) {
            // Render a completed state
            return <><Button fullWidth bgColor='gray' textColor='textGray' onClick={() => dispatch({ step: 'enter' })}>دریافت مجدد کد</Button></>
        } else {
            // Render a countdown
            return <span className='text-center w-full'>{startWithZero(minutes)}:{startWithZero(seconds)}           تا دریافت مجدد کد</span>;
        }
    }, [])

    const { mutate, isLoading } = useCustomMutation<AuthEndpointType['VERIFY']>({
        mutationFn: (data) => api.post(AuthEndpoints.VERIFY, data),
        onSuccess: (data) => {
            storeToken(data?.data?.access_token)
            toast.success('با موفقیت وارد شدید.')
            refetch()
            if (callBackUrl)
                redirect(callBackUrl)
            redirectJs('/')
        },
        onError: (data) => {
            toast.error('خطا در تایید کد ورود')
        }
    })

    const handleEnter = (data: { verifyCode: string }) => {
        if (!data.verifyCode) {
            toast.warn('کد تایید وارد نشده است')
            return
        }
        else if (data?.verifyCode?.length != 5) {
            toast.warn('کد تایید به طور کامل وارد نشده است')
            return
        }
        if (phoneNumber)
            mutate({ code: data.verifyCode, phoneNumber })
    }

    return (
        <div className='flex flex-col gap-3'>
            <span className='text-h5-normal text-gray-400'>لطفا کد ارسال شده به موبایل خود را وارد کنید</span>
            {/* <Input
                required
                placeholder='کد تایید'
                register={register('verifyCode'
                    , {
                        required: { value: true, message: 'کد تایید وارد نشده است.' },
                        pattern: { value: /^[0-9]{1,6}$/, message: 'کد تایید به درستی وارد نشده است.' }
                    })}
                type='tel'
                dir='rtl'
            /> */}
            <VerificationInput
                classNames={{
                    container: "container ltr flex-row-reverse flex text-body-2-normal scale-75",
                    character: "character border rounded",
                    characterInactive: "character--inactive border-french-gray",
                    characterSelected: "border-robin-egg",
                    characterFilled: "character--filled",
                }}
                length={5}
                onChange={(f) => setValue(f)}
                value={value}
                onComplete={(f) => handleEnter({ verifyCode: f })}
                autoFocus
                placeholder=' '
                inputProps={{autoComplete:'one-time-code' , inputMode:'numeric'}}
                
            />
            <div className='flex flex-row gap-2 text-body-3-normal items-center '>
                <Countdown
                    date={Date.now() + (1000 * 60 * 2)}
                    renderer={renderer}
                />

            </div>

            {/* {errors.verifyCode && <span className='text-red-500 text-body-3-light font-bold text-right'>{errors.verifyCode.message}</span>} */}

            <Button type='button' onClick={() => handleEnter({ verifyCode: value ?? '' })} bgColor='primaryNormal' loading={isLoading}>
                تایید
            </Button>

        </div>
    )
}
