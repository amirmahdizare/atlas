import { Modal } from '@components'
import { IconArrowRight, IconChevronDown, IconChevronLeft, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useSearchProperty } from '../../../../hooks'
import { CityType } from 'types'
import { useCities } from '@hooks'
import { useToggleCity } from './hook'

export const SelectCity = () => {

    const { data, isLoading, isError } = useCities()

    const cities = data?.data

    const { filter, dispatchFilter } = useSearchProperty()

    const { isOpen, setIsOpen } = useToggleCity()

    const [modal, setModal] = useState<boolean>(false)

    const handleToggleCity = (city: CityType) => {
        if (filter.location?.find(i => i == city.id))
            dispatchFilter({ location: filter.location.filter(i => i != city.id), subLocation: [] })
        else
            dispatchFilter({ location: [...(filter?.location ?? []), city.id] , subLocation:[] })
    }

    const isLocationInclude = (cityId: number) => !!filter?.location && filter.location?.findIndex(i => i == cityId) != -1


    if (cities)
        return (
            <div className={`flex flex-col ${isOpen ? ' gap-2' : ''}`}>

                <div className={`flex flex-row gap-4 justify-between  items-center cursor-pointer ${isOpen ? 'text-raisin-black' : 'text-ultra-violet'}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex flex-row gap-1 items-center'>
                        <span className='text-body-2-bolder'>شهر</span>
                        {!!filter.location?.length && <span className='bg-mint-green w-2 h-2 aspect-square shrink-0
                     rounded-circle text-white flex flex-row items-center justify-center text-body-3-light'>{filter.location?.length}</span>}
                    </div>

                    <div className='flex flex-row gap-2 items-center'>


                        <IconChevronDown className={isOpen ? 'rotate-180' : ''} width={15} height={15} />

                    </div>
                </div>

                <div className={`flex flex-col gap-1.5  duration-300 transition-all ${isOpen ? 'max-h-[10000px] opacity-1' : 'max-h-0 h-0 overflow-hidden opacity-0'}`} >

                    {!!filter.location?.length && <span className='text-ultra-violet text-body-3-light cursor-pointer hover:text-coral flex flex-row gap-0.5 items-center' onClick={() => dispatchFilter({ location: [], subLocation: [] })}>
                        <IconArrowRight width={15} />
                        <span>
                            همه شهر ها
                        </span>
                    </span>}

                    {!filter.location?.length && <div className={`px-1 py-0.5 transition-all duration-150 border-r-2 text-body-3-bolder cursor-pointer  ${filter?.location?.length == 0 ? 'border-r-robin-egg-blue-00  text-robin-egg-blue-00 font-bold' : 'text-ultra-violet hover:text-coral border-r-white'}`}>
                        همه شهر ها
                    </div>}

                    {cities.map(item => <label htmlFor={item.id.toString()} className='flex flex-row items-center gap-1.5 cursor-pointer hover:text-coral'>
                        <input checked={isLocationInclude(item.id)} type='checkbox' className='accent-mint-green' id={item.id.toString()} onChange={() => handleToggleCity(item)} />
                        <span className='text-body-3-bolder text-ultra-violet leading-3'>{item.faTitle}</span>
                    </label>)}
                </div>

                <Modal open={modal} setOpen={setModal} >
                    <div className='flex flex-col gap-2 p-1'>
                        <div className='flex flex-row gap-2 justify-between items-center'>

                            <span className='text-h5-bolder'>انتخاب شهر</span>
                            <IconX className='cursor-pointer text-gray-500' onClick={() => setModal(false)} />
                        </div>
                        {cities.map(item => <label htmlFor={item.id.toString()} className='flex flex-row items-center gap-1.5 cursor-pointer hover:text-coral'>
                            <input checked={isLocationInclude(item.id)} type='checkbox' id={item.id.toString()} onChange={() => handleToggleCity(item)} />
                            <span>{item.faTitle}</span>
                        </label>)}
                    </div>

                </Modal>



            </div>
        )


    return <div className='h-3 w-full animate-pulse bg-gray-100'></div>
}
