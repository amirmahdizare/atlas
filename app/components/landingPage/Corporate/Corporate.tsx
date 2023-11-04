import React from 'react'
import {  IconCurrencyDollar, IconScale, IconUser, IconUserCheck, TablerIconsProps } from '@tabler/icons-react'
import corporate from 'images/corporate.png'
import Image from 'next/image'
import { Button } from '@components'
import logo from 'images/atlaslight.svg'
import corpBack from 'images/corp-back.svg'

const CorporateOption = ({ icon: Icon, title }: { icon: (props: TablerIconsProps) => JSX.Element, title: string }) => <div className=' col-span-1 flex flex-row gap-2 items-center '>
    <div className='bg-robin-egg-lighter rounded-circle aspect-square p-2 text-white'>
        <Icon width={22.5} height={22.5} />
    </div>
    <span className='text-body-2-bolder leading-3'>{title}</span>
</div>

export const Corporate = () => {
    return (
        <div className='flex flex-col gap-4 relative'>
            <div className='absolute left-0 bottom-0 top-2/3 lg:-translate-y-1/2'>
                <Image src={corpBack} alt='' className='max-w-[200px] lg:max-w-[300px]' />
            </div>
            <div className='text-h3-bolder text-raisin-black relative text-center z-2'>
                مشارکت در ساخت با اطلس
                <div className='absolute bg-mint-green w-[80px] left-1/2 -translate-x-1/2 h-[2px] top-full mt-1.5 rounded '></div>
            </div>
            <span className='sr-only'>مشارکت در ساخت شهر جدید هشتگرد مهستان</span>

            <div className='grid grid-cols-3 gap-4 z-2'>


                <div className='col-span-3 lg:col-span-1 '>

                    <div className='w-full relative max-h-[400px]'>

                        <Image src={corporate} alt='مشارکت در ساخت | دپارتمان املاک اطلس' className='w-full object-contain rounded max-h-[400px]'  />

                        <div className='flex flex-col bg-white rounded gap-2 absolute bottom-2 left-1/2 -translate-x-1/2 p-2'>
                            <span className='text-space-codet text-h4-bolder leading-3 text-center'>برای مشارکت در ساخت قدم به قدم با اطلس همراه باشید.</span>
                            <Button bgColor='secondary'>مشارکت در ساخت</Button>
                            <div className='absolute top-0 -translate-y-3/4 bg-white border aspect-square p-1.5 border-robin-egg right-1/2 translate-x-1/2 rounded-circle '>
                                <div className='w-6 h-6 relative'>
                                <Image src={logo} alt='لوگوی دپارتمان املاک اطلس' fill />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='col-span-3 lg:col-span-2 flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>

                        <span className='text-raisin-black text-h6-bolder'>مشارکت در ساخت</span>
                        <span className='text-h5-light leading-3'>در صورتی که قصد دریافت مشاوره و یا همکاری در پروژهای ساختمانی را دارید ، میتوانید با کارشناسان اطلس تماس بگیرید. شرکت ساختمانی اطلس با تجربه ای ارزشمند و اجرای پروژه های موفق ، آماده پذیرش و همکاری با متقاضیان گرامی می باشد.</span>
                    </div>


                    <div className='grid grid-cols-2 gap-2'>

                        <CorporateOption icon={IconUserCheck} title='معرفی مالک و سازنده' />
                        <CorporateOption icon={IconUser} title='دستیار حقوقی' />
                        <CorporateOption icon={IconScale} title='طرح دعوی و پیگیری حقوقی' />
                        <CorporateOption icon={IconCurrencyDollar} title='سودآوری مشارکت' />

                    </div>
                </div>



            </div>

        </div>
    )
}
