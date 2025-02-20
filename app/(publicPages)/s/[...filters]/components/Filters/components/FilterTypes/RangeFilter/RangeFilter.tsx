import { IconChevronDown, IconX } from '@tabler/icons-react'
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import ClickAwayListener from 'react-click-away-listener'
import { NumericFormat } from 'react-number-format'
import { usePropertySearchResults } from '../../../../../hooks'
import { FullFilterType, PropertyListFilterType } from 'types'
import { handleKeyPress, isStringExist } from 'utils'

export const RangeFilter = ({ title, type, hint, unit, itemKey, suggests, id }: FullFilterType) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const [isActive, setIsActive] = useState<{ [key: string]: boolean }>({})

    const { filter, dispatchFilter } = usePropertySearchResults()

    const customNumberInputRef = useRef<HTMLInputElement>(null)

    const targetFilter = filter.featureValues?.find(i => i.filterId == id)

    const fieldfilterByIndex = (key: keyof PropertyListFilterType, index: number) => !!targetFilter?.value?.toString().includes('-') ? targetFilter.value?.toString().split('-')[index] : undefined

    const dispachFilter = (item: keyof PropertyListFilterType, value: any, index: number) => {


        if (!isStringExist(fieldfilterByIndex(itemKey, index == 0 ? 1 : 0)) && !isStringExist(value)) {
            return dispatchFilter({ featureValues: filter.featureValues?.filter(i => i.filterId != id) })
        }


        const isFilterExist = filter.featureValues?.findIndex(i => i.filterId == id) != -1

        if (!isFilterExist)
            dispatchFilter({
                featureValues: [...(filter?.featureValues ?? []), {
                    filterId: id,
                    value: `${index == 0 ? value : (fieldfilterByIndex(itemKey, 0) ?? '')}-${index == 1 ? value : (fieldfilterByIndex(itemKey, 1) ?? '')}`
                }]
            })
        else
            dispatchFilter({
                featureValues: filter?.featureValues?.map(f => f.filterId == id ? ({
                    filterId: id,
                    value: `${index == 0 ? value : (fieldfilterByIndex(itemKey, 0) ?? '')}-${index == 1 ? value : (fieldfilterByIndex(itemKey, 1) ?? '')}`
                }) : f) ?? []
            })

    }


    const [searchKey, setSearchKey] = useState('')

    useEffect(() => {
        setIsActive({})
    }, [filter])


    return (
        <div className={`flex flex-col ${isOpen ? ' gap-3' : ''}`}>

            <div className={`flex flex-row gap-4 justify-between  items-center cursor-pointer ${isOpen ? 'text-raisin-black' : 'text-ultra-violet'}`} onClick={() => setIsOpen(!isOpen)}>
                <div className='flex flex-row gap-1 items-center'>
                    <span className='text-body-2-bolder leading-3'>{title}</span>
                    {/* {!!filter.zone?.length && <span className='bg-mint-green w-2 h-2 aspect-square shrink-0
         rounded-circle text-white flex flex-row items-center justify-center text-body-3-light'>{filter.zone?.length}</span>} */}
                </div>


                <div className='flex flex-row gap-2 items-center'>


                    <IconChevronDown className={isOpen ? 'rotate-180 transition-all duration-300' : ' transition-all duration-300'} width={15} height={15} />

                </div>
            </div>


            <div className={`flex flex-col gap-2.5  duration-300 transition-all ${isOpen ? 'max-h-[10000px] opacity-1' : 'max-h-0 h-0 overflow-hidden opacity-0'}`} >

                {suggests?.map((item, index) => <div className='flex flex-col gap-1.5 w-full'>

                    <span className='text-body-3-bolder text-ultra-violet '>{item.title}</span>

                    <ClickAwayListener onClickAway={() => setIsActive({ ...isActive, [index]: false })}>
                        <div className={`border border-anti-flash-white-lighter rounded-app w- full justify -stretch items-center   flex flex-row  relative p-1.5 text-body-3-normal cursor-pointer ${isActive?.[index] ? 'bg-white' : 'bg-seasalt'}`} onClick={() => setIsActive({ ...isActive, [index]: !isActive[index] })}>

                            <div className='flex flex-row gap-1 flex-1 w  items-center '>
                                {!!fieldfilterByIndex(itemKey, index) && <IconX width={15} height={15} className='cursor-pointer' onClick={() => dispachFilter(itemKey, '', index)} />}

                                {item.items.find(i => {
                                    return i.value == fieldfilterByIndex(itemKey, index)
                                }) ?
                                    <span className='leading-3'>{item.items.find(i => i.value == fieldfilterByIndex(itemKey, index))?.title}</span>
                                    : <>
                                        <NumericFormat
                                            onKeyDown={handleKeyPress((e) => dispachFilter(itemKey, e.currentTarget.value.replaceAll(',', ''), index))}
                                            placeholder={hint}
                                            size={7}
                                            thousandSeparator
                                            className={`${isActive?.[index] ? 'bg-white' : 'bg-seasalt'} outline-none shri nk-0 ba sis-0 w-fit input-range`}
                                            // onBlur={({ target: { value } }) => value ? dispachFilter(itemKey, value.replaceAll(',', ''), index) : undefined}
                                            value={fieldfilterByIndex(itemKey, index) ?? ''}
                                            decimalScale={0}
                                            autoFocus
                                            getInputRef={customNumberInputRef}
                                            type='tel'
                                            dir='rtl'
                                        />
                                    </>
                                }


                            </div>
                            <div className='flex flex-row gap-1 text-french-gray items-center text-body-3-light'>
                                <span>{unit}</span>
                                <IconChevronDown className={isActive?.[itemKey] ? 'rotate-180 transition-all duration-300' : ' transition-all duration-300'} width={15} height={15} />
                            </div>



                            {isActive?.[index] &&
                                <div className='flex flex-col gap-1 p-1 rounded-app z-10 bg-white absolute top-full left-0 w-full shadow'>

                                    <input
                                        className='border-b bg-seasalt border-anti-flash-white-lighter p-1 outline-none'
                                        placeholder='جستجو'
                                        value={searchKey}
                                        onChange={({ target: { value } }) => setSearchKey(value)}
                                        onClick={e => e.stopPropagation()}
                                    />

                                    <div className='flex flex-col  overflow-y-auto max-h-[300px] h-fit'>
                                        <span className='text-ultra-violet text-body-3-normal p-0.5 py-1  hover:bg-seasalt' onClick={(e) => { dispachFilter(itemKey, '', index); customNumberInputRef.current?.focus() }}>وارد کردن مبلغ دلخواه</span>
                                        {item.items.filter(f => f.title.includes(searchKey)).map(op => <span className={`text-ultra-violet text-body-3-normal p-0.5 py-1  hover:bg-seasalt ${fieldfilterByIndex(itemKey, index)?.toString() == op.value.toString() ? 'bg-seasalt' : ''}`} onClick={() => dispachFilter(itemKey, op.value, index)}>{op.title}</span>)}
                                        {/* || f.value == fieldfilterByIndex(itemKey, index)  || Belong To Top Filter &&  */}
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
