'use client'
import { Button } from '@components'
import { IconArrowBigUp, IconLocation, IconMapPin, IconPencil, IconUser } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import ReactSwitch from 'react-switch'
import { PropertyListItemType } from 'types'
import { useCorpSection } from '../../../hooks'

export const PropertyCard = ({ img, id, price, location, agentInfo, title }: PropertyListItemType) => {

    const { dispatch } = useCorpSection()
    return (
        <Link className='grid grid-cols-3 gap-1.5 ' href={`/property/${id}`}>

            <div className='col-span-1'>
                <img src={img} className='object-cover aspect-square w-full rounded ' />
            </div>


            <div className='col-span-2 flex flex-col gap-2 p-0.5'>
                <span className='line-clamp-1 text-ellipsis overflow-hidden text-body-2-bolder text-raisin-black'>{title}</span>

                <div className='flex flex-row gap-1 items-center '>
                    <IconMapPin className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{location}</span>
                </div>

                <div className='flex flex-row gap-1 items-center '>
                    <IconUser className='text-ultra-violet' width={15} height={18} />
                    <span className='text-body-3-normal text-gray-400'>{agentInfo?.name}</span>
                </div>

                <div className='flex flex-row gap-1'>
                    <span className='text-h6-bolder text-space-codet'>{price.toLocaleString()}</span>
                    <span className='text-ultra-violet text-body-2-normal'>تومان</span>
                </div>

            </div>
            <div className='flex flex-row gap-1 justify-evenly col-span-3'>
                <Button bgColor='lightBlue' textColor='primaryNormal' onClick={(e) => {e.preventDefault();  e.stopPropagation() ; dispatch({ mode: 'edit', corpId: Number(id) })}} icon={IconPencil}>ویرایش</Button>
                <Button bgColor='gray' textColor='secondary' icon={IconArrowBigUp}>نردبان</Button>
                <label className='flex flex-row gap-1 items-center'>
                    <ReactSwitch
                        checked={true}
                        onChange={() => { }}
                        size={10}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        width={40}
                        handleDiameter={22}
                        height={25}
                        onColor='#FF734C'
                        offColor='#E4E4EB'

                    />
                    <span className='text-body-2-normal text-ultra-violet'>غیرفعال</span>
                </label>
            </div>
        </Link>
    )
}
