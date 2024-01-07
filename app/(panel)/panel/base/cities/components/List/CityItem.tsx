import React, { useState } from 'react'
import { IconChevronDown, IconDotsVertical, IconMapPin, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react'
import { CityCUType } from 'types'
import ClickAwayListener from 'react-click-away-listener'
import { SingleCity } from './components/SingleCity'
import { SingleArea } from './components/SingleArea'

export const CityItem = ({ enTitle, title, id, subLocations }: CityCUType) => {

    const [more, setMore] = useState<boolean>(false)

    return (
        <div className='flex flex-col gap-1 p-1 bg-seasalt'>


            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 items-center text-center text-body-2-normal'>

                <div className='flex flex-row gap-2 col-span- items-center'>

                    <div className='bg-anti-flash-white-lighter rounded-circle p-1'>
                        <IconMapPin className='text-french-gray' width={20} height={20} />
                    </div>

                    <span>{title} </span>

                </div>

                <div className='col-span-1'>{1402 - 10 - 12}</div>

                <div className='col-span-1'>{subLocations.length} منطقه</div>

                <div className='flex col-span-1 flex-row gap-2 items-center'>


                    <SingleArea mode='add'>
                        <div className='flex flex-row gap-1 items-center cursor-pointer'>
                            <div className='rounded-circle text-robin-egg border-robin-egg border '>
                                <IconPlus width={20} height={20} />
                            </div>
                            <span className='text-robin-egg'>افزودن منطقه</span>
                        </div>
                    </SingleArea>



                    <div className='border rounded-circle bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5 aspect-square relative' onClick={() => setMore(true)}>
                        <IconDotsVertical width={15} height={15} />
                        {more &&
                            <ClickAwayListener onClickAway={() => setMore(false)}>

                                <div className='absolute shadow-sm rounded border flex flex-col  items-stretch min-w-[234px] top-full mt-1 bg-white z-20 left-1/2 -transla te-x-1/2 text-body-3-normal'>
                                    <SingleCity mode='edit' id='flean'>
                                        <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => { }}>
                                            <span>ویرایش شهر</span>
                                            <IconPencil width={20} height={20} className='text-mint-green' />
                                        </div>
                                    </SingleCity>

                                    {/* <div className='flex-1 bg-gray-300 h-[1px]'></div> */}

                                    <div className='flex flex-row gap-2 items-center justify-between hover:bg-gray-100 transition-all p-1' onClick={() => alert('Delete')}>
                                        <span>حذف شهر</span>
                                        <IconTrash width={20} height={20} className='text-red-500' />
                                    </div>

                                </div>
                            </ClickAwayListener>
                        }
                    </div>

                    {/* <div className='border rounded-circle bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5 aspect-square relative' onClick={() => setMore(true)}>
                        <IconDotsVertical width={15} height={15} />
                    </div> */}

                </div>

            </div>

            <div className='flex flex-row gap-2 items-center'>

                <div className='bg-anti-flash-white flex-1 h-[1px]'></div>

                <div className='flex flex-row gap-1 items-center text-space-codet'>
                    <span className='text-body-3-normal text-space-codet'>مناطق شهر</span>
                    <IconChevronDown width={15} height={15} />
                </div>

                <div className='bg-anti-flash-white flex-1 h-[1px]'></div>

            </div>


            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2'>
                {subLocations.map(s => <div className='col-span-1 bg-white flex flex-row gap-1 items-center justify-between p-1 text-space-codet text-body-3-normal'>
                    <span>{s.title} </span>
                    {/* ({s.enTitle}) */}
                    <div className='flex flex-row gap-1'>
                        <IconTrash width={20} height={20} className='text-ultra-violet cursor-pointer' onClick={() => alert('Delete')} />
                        <SingleArea mode='edit'><IconPencil width={20} height={20} className='text-robin-egg-lighter cursor-pointer' /></SingleArea>
                    </div>
                </div>)}



            </div>




        </div>
    )
}
