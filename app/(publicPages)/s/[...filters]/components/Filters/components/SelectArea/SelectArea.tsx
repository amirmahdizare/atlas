import { Divider, Modal } from '@components'
import { IconArrowRight, IconChevronDown, IconChevronLeft, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useSearchProperty } from '../../../../hooks'
// import { cities } from '../SelectCity/data.mock'
import { LocationType, SubLocationReadType } from 'types'
import { useSubCities } from '@hooks'
import { useToggleArea } from './hook'

export const SelectArea = () => {

    const { data, isLoading, isError } = useSubCities()

    const subCities = data?.data

    const { filter, dispatchFilter } = useSearchProperty()

    const { isOpen, setIsOpen } = useToggleArea()

    const [modal, setModal] = useState<boolean>(false)

    const handleToggleCity = (city: SubLocationReadType) => {
        if (filter.subLocation?.find(i => i.toString() == city.id))
            dispatchFilter({ subLocation: filter.subLocation.filter(i => i.toString() != city.id) })
        else
            dispatchFilter({ subLocation: [...(filter?.subLocation ?? []), Number(city.id)] })
    }

    const isLocationInclude = (cityId: string) => filter.subLocation && filter.subLocation?.findIndex(i => i.toString() == cityId) != -1


    if (filter.location?.length == 1 && subCities)

        return (
            <>
                <Divider />

                <div className='flex flex-col gap-2'>

                    <div className={`flex flex-row gap-4 justify-between  items-center cursor-pointer ${isOpen ? 'text-raisin-black' : 'text-ultra-violet'}`} onClick={() => setIsOpen(!isOpen)}>
                        <div className='flex flex-row gap-1 items-center'>
                            <span className='text-body-2-bolder'>محله</span>
                            {!!filter.subLocation?.length && <span className='bg-mint-green w-2 h-2 aspect-square shrink-0
                     rounded-circle text-white flex flex-row items-center justify-center text-body-3-light'>{filter.subLocation?.length}</span>}
                        </div>

                        <div className='flex flex-row gap-2 items-center'>


                            <IconChevronDown className={isOpen ? 'rotate-180' : ''} width={15} height={15} />

                        </div>
                    </div>

                    <div className={`flex flex-col gap-2.5  duration-300 transition-all ${isOpen ? 'max-h-[10000px] opacity-1' : 'max-h-0 h-0 overflow-hidden opacity-0'}`} >

                        {!!filter.subLocation?.length && <span className='text-ultra-violet text-body-3-light cursor-pointer hover:text-coral flex flex-row gap-0.5 items-center' onClick={() => dispatchFilter({ subLocation: [] })}>
                            <IconArrowRight width={15} />
                            <span>
                                همه محله ها
                            </span>
                        </span>}

                        {!filter.subLocation?.length && <div className={`px-1 py-0.5 transition-all duration-150 border-r-2 text-body-3-bolder cursor-pointer  ${(filter?.subLocation && !filter?.subLocation?.length) ? 'border-r-robin-egg-blue-00  text-robin-egg-blue-00 font-bold' : 'text-ultra-violet hover:text-coral border-r-white'}`}>
                            همه محله ها
                        </div>}

                        {subCities.filter(i => i.parentLocation?.id.toString() == filter?.location?.[0]).map(item => <label htmlFor={item.id} className='flex flex-row items-center gap-1.5 cursor-pointer hover:text-coral'>
                            <input checked={isLocationInclude(item.id)} type='checkbox' className='accent-mint-green' id={item.id} onChange={() => handleToggleCity(item)} />
                            <span className='text-body-3-bolder text-ultra-violet'>{item.faTitle}</span>
                        </label>)}
                    </div>

                    <Modal open={modal} setOpen={setModal} >
                        <div className='flex flex-col gap-2 p-1'>
                            <div className='flex flex-row gap-2 justify-between items-center'>

                                <span className='text-h5-bolder'>انتخاب محله</span>
                                <IconX className='cursor-pointer text-gray-500' onClick={() => setModal(false)} />
                            </div>
                            {subCities.map(item => <label htmlFor={item.id} className='flex flex-row items-center gap-1.5 cursor-pointer hover:text-coral'>
                                <input checked={isLocationInclude(item.id)} type='checkbox' id={item.id} onChange={() => handleToggleCity(item)} />
                                <span>{item.faTitle}</span>
                            </label>)}
                        </div>

                    </Modal>



                </div>
            </>
        )

    else if (filter.subLocation?.length != 1)
        return <></>
    return <div className='h-3 w-full animate-pulse bg-gray-100'></div>

}
