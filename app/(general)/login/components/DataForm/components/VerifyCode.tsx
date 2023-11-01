import { Button, Input } from '@components'
import React from 'react'
import Countdown from 'react-countdown';
import { useForm } from 'react-hook-form'
import { startWithZero } from 'utils';


const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
        // Render a completed state
        return <><Button fullWidth  bgColor='gray' textColor='textGray' onClick={() => alert('try Again')}>دریافت مجدد کد</Button></> 
    } else {
        // Render a countdown
        return <span>{startWithZero(minutes)}:{startWithZero(seconds)}           تا دریافت مجدد کد</span>;
    }
};

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
            <div className='flex flex-row gap-2 text-body-3-normal items-center'>
                <Countdown
                    date={Date.now() + 3000}
                    renderer={renderer}
                />
      
            </div>
            <Button bgColor='secondary' >
                تایید
            </Button>

        </form>
    )
}
