'use client'
import React from 'react'
import { Button, Input, Select, TextArea } from '@components'
import Image from 'next/image'
import upload from 'images/upload.svg'
import vector from 'images/housesVector.svg'
import { IconUpload } from '@tabler/icons-react'

export const ClientPage = () => {
    return (
        <div className='grid grid-cols-3 py-4 gap-2'>

            <div className='col-span-3 lg:col-span-2 flex flex-col gap-3'>

                <div className='flex flex-col gap-2'>
                    <span className='text-h3-bolder'>
                        <span className='text-robin-egg'>ثبت ملک</span>
                        &nbsp;
                        &nbsp;
                        <span className='text-space-codet'>در دپارتمان اطلس</span>
                    </span>
                    <span className='text-ultra-violet'>برای ثبت ملک خود اطلاعات زیر را پر کنید.</span>
                </div>

                <Input placeholder='مثلا : آپارتمان دوبلکس' label='عنوان ملک' />

                <Input placeholder='مثلا :  علی رضایی' label='نام و نام خانوادگی' />

                <TextArea label='توضیحات' placeholder='مثلا : آپارتمان 200 متری دارای پارکینگ و آسانسور و ...' />

                <div className='grid grid-cols-2 gap-2'>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'هشتگرد' }, { lable: 'شهر جدید هشتگرد', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب شهر'
                            label='شهر'

                        />
                    </div>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'فاز 7 ' }, { lable: 'فاز 4', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب منظقه'
                            label='منطقه'

                        />
                    </div>

                </div>

                <div className='grid grid-cols-2 gap-2'>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'باغ' }, { lable: 'زمین', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب دسته بندی'
                            label='دسته بندی'

                        />
                    </div>

                    <div className='col-span-2 lg:col-span-1'>

                        <Select
                            items={[{ value: 'hashtgerd', lable: 'مسکونی' }, { lable: 'اداری', value: 'newCirty' }]}
                            onChange={() => { }}
                            value={'hashtgerd'}
                            placeHolder='انتخاب زیردسته بندی'
                            label='زیر دسته بندی'

                        />
                    </div>

                </div>


                <div className='flex flex-row p-4 gap-4 items-center justify-between bg-seasalt border-ghost-white border-dashed'>

                    <Image src={upload} alt='آپلود فایل ها' className='hidden lg:block' />

                    <span className='text-h5-normal text-ultra-violet'>افزودن مستندات ، تصاویر ،ویدیو ها آگهی</span>

                    <Button bgColor='primaryNormal' icon={IconUpload}>افزودن فایل</Button>

                </div>

                <div className='flex flex-row gap-4'>

                    <Button bgColor='gray' textColor='dark' fullWidth>انصراف</Button>
                    <Button bgColor='secondary' textColor='white' fullWidth>ثبت درخواست</Button>

                </div>



            </div>


            <div className='col-span-3 lg:col-span-1 relative p-4 lg:p-2'>
                <Image src={vector} alt='تصویر خانه' className='object-cover' />
            </div>

        </div>
    )
}
