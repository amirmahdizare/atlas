import { Button, Input, TextArea } from '@components'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { AdviserCUType } from 'types'
import { useAdvisersSection } from '../../../hooks'
import imageSample from 'images/image.svg'
import { accesses } from '(panel)/panel/data.mock'

export const DataForm = () => {

    const { dispatch, adviserId , mode } = useAdvisersSection()

    const methods = useForm<AdviserCUType<File[]>>()

    const { register, formState: { errors }, watch, getValues } = methods

    watch('avatar')

    const avatarImg = () => getValues('avatar')?.[0] ? URL?.createObjectURL(getValues('avatar')?.[0]) : imageSample.src


    useEffect(() => {
        // fetch with id
    }, [adviserId])

    return (
        <FormProvider {...methods}>
            <div className='flex flex-col gap-4'>

                <Input label='نام و نام خانوادگی مشاور' register={register('name')} />

                <Input label='نام کاربری' register={register('username')} />

                <TextArea label='درباره مشاور' register={register('desc')} />

                <div className='flex flex-col gap-2'>
                    <span className='text-body-3-bolder text-ultra-violet'>تصویر پروفایل مشاور</span>
                    <label className='border border-dashed border-ghost-white rounded flex flex-row gap-2 justify-between cursor-pointer p-2 items-center' htmlFor='adviser-avatar'>
                        <div className='flex flex-row gap-2 items-center'>
                            {getValues('avatar') ? <img src={avatarImg()} className='w-8 object-cover aspect-square rounded-circle shadow border' /> : <Image className='w-6 object-cover aspect-square rounded-circle shadow' src={imageSample} alt='تصویر' />}
                            <span className='text-body-3-normal'>
                                {getValues('avatar') ? 'برای تغییر پروفایل ، تصویر جدید انتخاب کنید' : 'تصویر خود را اضافه کنید.'}
                            </span>

                        </div>

                        <input type='file' hidden id='adviser-avatar' {...register('avatar')} />

                        <Button bgColor='secondary' className='pointer-events-none'>
                            {!getValues('avatar') ? 'افزودن' : 'تغییر'}
                        </Button>

                    </label>

                </div>


                <div className='flex flex-col gap-3'>
                    <span className='text-body-3-bolder text-ultra-violet '>دسترسی های مشاور</span>
                    {accesses.map(item => <label className='flex flex-row gap-1 cursor-pointer items-start ' htmlFor={item.route}>
                        <input type='checkbox' className='mt-0.5 accent-mint-green' id={item.route} />
                        <div className='flex flex-col gap-1'>
                            <span className='text-body-3-bolder text-ultra-violet'>{item.title}</span>
                            <span className='text-body-3-normal leading-3 text-gray-500'>{item.hint}</span>
                        </div>
                    </label>)}
                </div>
                <div className='flex flex-row gap-4'>

                    <Button bgColor='gray' textColor='dark' onClick={() => dispatch({ mode: 'list', adviserId: undefined })} fullWidth>انصراف</Button>
                    <Button bgColor='primaryNormal' textColor='white' fullWidth >ثبت {mode=='add' ? '' : 'تغییرات'}</Button>

                </div>



            </div>
        </FormProvider>
    )
}
