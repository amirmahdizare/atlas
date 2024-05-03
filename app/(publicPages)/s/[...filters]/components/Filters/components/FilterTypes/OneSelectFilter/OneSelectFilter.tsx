import React, { useEffect, useState } from 'react'
import { IconChevronDown, IconX } from '@tabler/icons-react'
import ClickAwayListener from 'react-click-away-listener'
import { useSearchProperty } from '../../../../../hooks'
import { FullFilterType, PropertyListFilterType } from 'types'

export const OneSelectFilter = ({ title, suggests, itemKey, hint, unit, id }: FullFilterType) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { filter, dispatchFilter } = useSearchProperty()

    const [isActive, setIsActive] = useState<{ [key: string]: boolean }>({})

    const targetFilter = filter.featureValues?.find(i => i.filterId == id)


    const dispachFilter = (item: keyof PropertyListFilterType, value: any) => {

        const isExist = filter.featureValues?.findIndex(c => c.filterId == id) != -1

        if (!isExist)
            dispatchFilter({ featureValues: [...(filter?.featureValues ?? []), { filterId: id, value }] })
        else
            dispatchFilter({ featureValues: filter.featureValues?.filter(i => i.filterId != id) })
    }


    useEffect(() => {
        setIsActive({})
    }, [filter])



    return (
        <div className={`flex flex-col ${isOpen ? ' gap-3' : ''}`}>

            <div className={`flex flex-row gap-4 justify-between  items-center cursor-pointer ${isOpen ? 'text-raisin-black' : 'text-ultra-violet'}`} onClick={() => setIsOpen(!isOpen)}>
                <div className='flex flex-row gap-1 items-center'>
                    <span className='text-body-2-bolder'>{title}</span>
                </div>


                <div className='flex flex-row gap-2 items-center'>
                    {targetFilter && <span className='cursor-pointer text-vermilion text-body-3-normal ' onClick={() => dispachFilter(itemKey, undefined)}>حذف</span>}

                    <IconChevronDown className={isOpen ? 'rotate-180 transition-all duration-300' : ' transition-all duration-300'} width={15} height={15} />

                </div>
            </div>

            <div className={`flex flex-col gap-2.5  duration-300 transition-all ${isOpen ? 'max-h-[10000px] opacity-1' : 'max-h-0 h-0 overflow-hidden opacity-0'}`} >

                {suggests?.map(item => <div className='flex flex-col gap-1.5 w-full'>

                    <ClickAwayListener onClickAway={() => setIsActive({ ...isActive, [itemKey]: false })}>
                        <div className={`border border-anti-flash-white-lighter rounded-app w- full justify -stretch items-center   flex flex-row  relative p-1.5 text-body-3-normal cursor-pointer ${isActive?.[itemKey] ? 'bg-white' : 'bg-seasalt'}`} onClick={() => setIsActive({ ...isActive, [itemKey]: !isActive[itemKey] })}>

                            <div className='flex flex-row gap-1 flex-1 w  '>
                                {!!targetFilter && <IconX width={15} height={15} className='cursor-pointer' onClick={() => dispachFilter(itemKey, undefined)} />}

                                {item.items.find(i => i.value == targetFilter?.value) ?
                                    <span>{item.items.find(i => i.value == targetFilter?.value)?.title}</span> :
                                    <span className='text-ultra-violet'>{hint}</span>
                                }
                            </div>

                            <div className='flex flex-row gap-1 text-french-gray items-center text-body-3-light'>
                                <span>{unit}</span>
                                <IconChevronDown className={isActive?.[itemKey] ? 'rotate-180 transition-all duration-300' : ' transition-all duration-300'} width={15} height={15} />
                            </div>

                            {isActive?.[itemKey] &&
                                <div className='flex flex-col gap-1 p-1 rounded-app z-10 bg-white absolute top-full left-0 w-full shadow'>

                                    <div className='flex flex-col  overflow-y-auto max-h-[300px] h-fit'>
                                        {item.items.map(op => <span className={`text-ultra-violet text-body-3-normal p-0.5 py-1  hover:bg-seasalt ${targetFilter?.value == op.value ? 'bg-seasalt' : ''}`} onClick={() => dispachFilter(itemKey, op.value)}>{op.title}</span>)}
                                    </div>

                                </div>
                            }
                        </div>

                    </ClickAwayListener>
                </div>)}
            </div>
        </div>
    )
}
