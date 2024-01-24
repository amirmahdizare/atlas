import { IconClipboard } from '@tabler/icons-react'
import React from 'react'
import { useRequestSection } from '../../hooks'
import {  requests } from '../../data.mock'
import { RowItem } from './RowItem'

export const List = () => {

    const { dispatch } = useRequestSection()

    return (
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2 justify-between '>
                <div className='flex flex-row gap-1 items-center'>
                    <IconClipboard width={25} height={25} className='text-french-gray' />
                    لیست درخواست ها
                </div>


                {/* <Button icon={IconPlus} bgColor='primaryNormal' iconSide='right' onClick={() => dispatch({ mode: 'add', adviserId: undefined })}>افزودن مشاور</Button> */}

            </div>

            <div className='grid grid-cols-7 gap-2 bg-seasalt p-2 text-ultra-violet text-body-3-normal border-y border-gray-100 '>
                <div className='col-span-2'>عنوان</div>
                <div className='col-span-1'>نام و نام خانوادگی</div>
                <div className='col-span-1'>دسته بندی</div>
                <div className='col-span-1'>شهر</div>
                <div className='col-span-1 text-center'>منطقه</div>
                <div className='col-span-1 text-center'>جزییات</div>

            </div>

            {requests?.map((i, index)=> <RowItem odd={index%2==0} { ...i} />)}

            {/* {advisers?.map(ad =>
                <div className='grid grid-cols-6 gap-1 p-1.5 text-space-codet text-body-2-normal items-center'>
                    <div className='col-span-2 flex flex-row gap-1 items-center'>
                        <img src={ad.avatar} className='rounded-circle w-5 aspect-square object-cover' />
                        <span>
                            {ad.name}

                        </span>
                    </div>
                    <div className='col-span-1'>{ad.propertyCount.toLocaleString()}</div>
                    <div className='col-span-1'>{(new Date()).toLocaleDateString('fa-ir')}</div>
                    <a href={`tel:${ad.phoneNumber}`} title='تماس' className='col-span-1 hover:text-coral'>{ad.phoneNumber}</a>
                    <div className='col-span-1 flex flex-row justify-center'>


                        <label className='flex flex-row gap-1 items-center'>
                            <ReactSwitch
                                checked={true}
                                onChange={() => { }}
                                size={10}
                                checkedIcon={false}
                                uncheckedIcon={false}
                                width={35}
                                handleDiameter={16}
                                height={20}
                                onColor='#FF734C'
                                offColor='#E4E4EB'

                            />
                            <span className='text-body-2-normal text-ultra-violet'>فعال</span>
                        </label>

                        

                    </div>

                </div>)} */}

        </div>
    )
}
