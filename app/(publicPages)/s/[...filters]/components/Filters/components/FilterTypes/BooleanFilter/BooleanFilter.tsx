import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import { usePropertySearchResults, useSearchProperty } from '../../../../../hooks'
import { CategorySpecialFieldType, FullFilterType } from 'types'

export const BooleanFilter = ({ title, itemKey, id }: FullFilterType) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { filter, dispatchFilter } = usePropertySearchResults()

    const targetFilter = filter.featureValues?.find(i => i.filterId == id)


    const toggleFilter = (targetState: boolean) => {
        if (targetState)
            dispatchFilter({ featureValues: [...(filter?.featureValues ?? []), { filterId: id, value: "true" }] })
        else
            dispatchFilter({ featureValues: filter.featureValues?.filter(i => i.filterId != id) })

    }


    if (itemKey)
        return (
            <div className={`flex flex-col ${isOpen ? ' gap-3' : ''}`}>

                <div className={`flex flex-row gap-4 justify-between  items-center cursor-pointer ${isOpen ? 'text-raisin-black' : 'text-ultra-violet'}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex flex-row gap-1 items-center'>
                        <span className='text-body-2-bolder'>{title}</span>

                    </div>

                    <div className='flex flex-row gap-2 items-center'>


                        <ReactSwitch checkedIcon={false} uncheckedIcon={false} handleDiameter={15} height={22} width={42} onChange={(checked) =>toggleFilter(checked)} checked={targetFilter?.value =='true' ? true : false} offColor='#EBEBF0' onColor='#05BAC6' />

                    </div>
                </div>
                {/* <div className={`flex flex-col gap-2.5  duration-300 transition-all ${isOpen ? 'max-h-[10000px] opacity-1' : 'max-h-0 h-0 overflow-hidden opacity-0'}`} >
                        <IconChevronDown className={isOpen ? 'rotate-180 transition-all duration-300' : ' transition-all duration-300'} width={15} height={15} />
                </div> */}
            </div>
        )

    return <></>
}
