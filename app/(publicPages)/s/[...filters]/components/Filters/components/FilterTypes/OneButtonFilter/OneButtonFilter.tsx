import { IconChevronDown, IconX } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { useSearchProperty } from 's/[...filters]/hooks'
import { CategorySpecialFieldType, PropertyListFilterType } from 'types'

export const OneButtonFilter = ({ title, type, hint, unit , itemKey, suggest }: CategorySpecialFieldType) => {


    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { filter, dispatchFilter } = useSearchProperty()

    const [isActive, setIsActive] = useState<{ [key: string]: boolean }>({})

    const fieldfilter = (key: keyof PropertyListFilterType) => filter?.[key]


    useEffect(() => {
        setIsActive({})
    }, [filter])


    const dispachFilter = (item: keyof PropertyListFilterType, value: any) => {
        dispatchFilter({ [item]: value })
    }



    return (
        <div className={`flex flex-col ${isOpen ? ' gap-2' : ''}`}>

            <div className={`flex flex-row gap-4 justify-between  items-center cursor-pointer ${isOpen ? 'text-raisin-black' : 'text-ultra-violet'}`} onClick={() => setIsOpen(!isOpen)}>
                <div className='flex flex-row gap-1 items-center'>
                    <span className='text-body-2-bolder'>{title}</span>
                    {/* {!!filter.zone?.length && <span className='bg-mint-green w-2 h-2 aspect-square shrink-0
         rounded-circle text-white flex flex-row items-center justify-center text-body-3-light'>{filter.zone?.length}</span>} */}
                </div>


                <div className='flex flex-row gap-1.5 items-center'>
                    {itemKey && filter?.[itemKey] && <span className='cursor-pointer text-vermilion text-body-3-normal ' onClick={() => dispachFilter(itemKey, undefined)}>حذف</span>}

                    <IconChevronDown className={isOpen ? 'rotate-180 transition-all duration-300' : ' transition-all duration-300'} width={15} height={15} />

                </div>
            </div>

            <div className={`flex flex-col gap-2.5  duration-300 transition-all ${isOpen ? 'max-h-[10000px] opacity-1' : 'max-h-0 h-0 overflow-hidden opacity-0'}`} >

                {suggest?.map(item => <div className='flex flex-col gap-1.5 w-full'>

                    <div className={`rounded-app w- full justify -stretch items-center gap-1  flex flex-wrap flex-row  relative  text-body-3-normal cursor-pointer`} onClick={() => setIsActive({ ...isActive, [itemKey]: !isActive[itemKey] })}>

                        {/* <div className='flex flex-row gap-1 flex-1 w  '>
                            {!!fieldfilter(item.itemKey) && <IconX width={15} height={15} className='cursor-pointer' onClick={() => dispachFilter(item.itemKey, undefined)} />}

                            {item.items.find(i => i.value == fieldfilter(item.itemKey)) ?
                                <span>{item.items.find(i => i.value == fieldfilter(item.itemKey))?.title}</span> :
                                <span className='text-ultra-violet'>{hint}</span>
                            }
                        </div>

                        <div className='flex flex-row gap-1 text-french-gray items-center text-body-3-light'>
                            <span>{unit}</span>
                            <IconChevronDown className={isActive?.[item.itemKey] ? 'rotate-180 transition-all duration-300' : ' transition-all duration-300'} width={15} height={15} />
                        </div> */}

                        {item.items.map(op => <span className={`text-body-3-normal  rounded-lg border-anti-flash-white  p-1 px-1 border  hov er:bg-s easalt ${fieldfilter(itemKey) == op.value ? 'bg-robin-egg text-white' : 'text-french-gray bg-white'}`} onClick={() => dispachFilter(itemKey, op.value)}>{op.title}</span>)}


                    </div>

                </div>)}
            </div>
        </div>
    )
}
