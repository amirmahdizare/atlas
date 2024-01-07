import React from 'react'
import { Button, Input, TextArea } from '@components'
import { IconInfoCircle, IconUpload } from '@tabler/icons-react'
import { useBlogsSection } from '../../../hooks'

export const DataForm = () => {

    const { dispatch, blogId, mode } = useBlogsSection()

    return (
        <div className='grid grid-cols-3 gap-2'>

            <div className='col-span-3 lg:col-span-2 flex flex-col gap-2 justify-around'>
                <Input label='عنوان مقاله' />
                <Input label='دسته بندی' />
            </div>

            <div className='flex flex-col gap-2 col-span-3 lg:col-span-1'>
                <span className='text-body-3-normal text-ultra-violet'>افزودن تصاویر مقاله</span>

                <label className=' bg-anti-flash-white flex gap-2 flex-col items-center justify-center cursor-pointer p-2 min-h-[200px] rounded-sm' htmlFor='blogPhoto'>

                    <Button className='pointer-events-none' bgColor='gray' textColor='dark' icon={IconUpload}>افزودن تصویر</Button>

                    <input type='file' hidden id='blogPhoto' />

                    <div className='flex flex-row gap-1'>
                        <IconInfoCircle width={15} height={15} />
                        <span className='text-ultra-violet text-body-3-light'>تصاویر شما باید کمتر 6 مگابایت باشند.</span>
                    </div>

                </label>
            </div>


            <div className='col-span-3 '>
                <TextArea style={{ minHeight: '150px' }} placeholder='متن مقاله' />
            </div>


            <div className='flex flex-row gap-2 col-span-3'>
                <Button bgColor='gray' textColor='dark' onClick={() => dispatch({ mode: 'list' })} fullWidth>انصراف</Button>
                <Button bgColor='primaryNormal' textColor='white' fullWidth >ثبت {mode == 'edit' ? 'تغییرات' : ''} مقاله</Button>
            </div>


        </div>
    )
}
