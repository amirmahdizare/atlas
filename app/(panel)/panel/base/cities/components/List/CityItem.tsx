import React, { useState } from 'react'
import { IconChevronDown, IconDotsVertical, IconMapPin, IconPencil, IconPlus, IconTrash } from '@tabler/icons-react'
import { CityCUType } from 'types'

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

                    <div className='flex flex-row gap-1 items-center cursor-pointer'>
                        <div className='rounded-circle text-robin-egg border-robin-egg border '>
                            <IconPlus width={20} height={20} />
                        </div>
                        <span className='text-robin-egg'>افزودن منطقه</span>
                    </div>

                    <div className='border rounded-circle bg-anti-flash-white-lighter cursor-pointer hover:bg-gray-200 transition-all text-raisin-black p-0.5 aspect-square relative' onClick={() => setMore(true)}>
                        <IconDotsVertical width={15} height={15} />
                    </div>

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
                        <IconTrash width={20} height={20} className='text-ultra-violet' />
                        <IconPencil width={20} height={20} className='text-robin-egg-lighter' />
                    </div>
                </div>)}



            </div>




        </div>
    )
}
