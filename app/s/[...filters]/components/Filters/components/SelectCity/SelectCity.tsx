import { Modal } from '@components'
import { IconArrowRight, IconChevronDown, IconChevronLeft, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useSearchProperty } from 's/[...filters]/hooks'
import { cities } from './data.mock'
import { LocationType } from 'types'

export const SelectCity = () => {

    const { filter, dispatchFilter } = useSearchProperty()

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [modal, setModal] = useState<boolean>(false)

    const handleToggleCity = (city: LocationType) => {
        if (filter.city?.find(i => i.value == city.id))
            dispatchFilter({ city: filter.city.filter(i => i.value != city.id), zone: [] })
        else
            dispatchFilter({ city: [...(filter?.city ?? []), { title: city.title, value: city.id }], zone: [] })
    }

    const isLocationInclude = (cityId: string) => filter.city?.findIndex(i => i.value == cityId) != -1

    return (
        <div className='flex flex-col gap-2'>

            <div className='flex flex-row gap-4 justify-between text-raisin-black items-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <div className='flex flex-row gap-1 items-center'>
                    <span className='text-body-3-bolder'>شهر</span>
                    {!!filter.city?.length && <span className='bg-mint-green w-2 h-2 aspect-square shrink-0
                     rounded-circle text-white flex flex-row items-center justify-center text-body-3-light'>{filter.city?.length}</span>}
                </div>

                <div className='flex flex-row gap-2 items-center'>


                    <IconChevronDown className={isOpen ? 'rotate-180' : ''} width={15} height={15} />

                </div>
            </div>

            <div className={`flex flex-col gap-2.5  duration-300 transition-all ${isOpen ? 'max-h-[10000px] opacity-1' : 'max-h-0 h-0 overflow-hidden opacity-0'}`} >

                {!!filter.city?.length && <span className='text-ultra-violet text-body-3-light cursor-pointer hover:text-coral flex flex-row gap-0.5 items-center' onClick={() => dispatchFilter({ city: [] })}>
                    <IconArrowRight width={15} />
                    <span>
                        همه شهر ها
                    </span>
                </span>}

                {!filter.city?.length && <div className={`px-1 py-0.5 transition-all duration-150 border-r-2 text-body-3-bolder cursor-pointer  ${filter?.city?.length == 0 ? 'border-r-robin-egg-blue-00  text-robin-egg-blue-00 font-bold' : 'text-ultra-violet hover:text-coral border-r-white'}`}>
                    همه شهر ها
                </div>}

                {cities.filter(item => !item.parentId).map(item => <label htmlFor={item.id} className='flex flex-row items-center gap-1.5 cursor-pointer hover:text-coral'>
                    <input checked={isLocationInclude(item.id)} type='checkbox' className='accent-mint-green' id={item.id} onChange={() => handleToggleCity(item)} />
                    <span className='text-body-3-bolder text-ultra-violet'>{item.title}</span>
                </label>)}
            </div>

            <Modal open={modal} setOpen={setModal} >
                <div className='flex flex-col gap-2 p-1'>
                    <div className='flex flex-row gap-2 justify-between items-center'>

                        <span className='text-h5-bolder'>انتخاب شهر</span>
                        <IconX className='cursor-pointer text-gray-500' onClick={() => setModal(false)} />
                    </div>
                    {cities.map(item => <label htmlFor={item.id} className='flex flex-row items-center gap-1.5 cursor-pointer hover:text-coral'>
                        <input checked={isLocationInclude(item.id)} type='checkbox' id={item.id} onChange={() => handleToggleCity(item)} />
                        <span>{item.title}</span>
                    </label>)}
                </div>

            </Modal>



        </div>
    )
}
