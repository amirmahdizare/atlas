'use client'
import { IconArrowDown, IconChevronDown } from '@tabler/icons-react'
import React, { useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'

export const Select = ({ fullWidth, items, onChange, value, label, error, placeHolder, errorText }: SelectProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <div className={`flex flex-col gap-2 justify-start relative  items-stretch 


${fullWidth ? 'flex-1' : ''}`} onClick={() => setIsOpen(true)}>

                {!!label && <span className='text-french-gray text-body-2-normal  text-right'>{label} </span>}

                <div className={` rounded-[4px] py-1.5 px-1 
            flex flex-row justify-between
            text-body-2-normal
            focus:text-space-codet
            text-french-gray
            focus:bg-white         
            ${(isOpen || value) && 'border-ultra-violet '}
            : 'border -transparent'
            transition-all
            [&:not(:placeholder-shown)]:text-space-codet
            border
            cursor-pointer
            ${error ? 'border-bittersweet bg-white border ' : '    [&:not(:focus):placeholder-shown]:border-anti-flash-white-lighter bg-seasalt'}`}>
                    {!items.find(i => i.value == value)?.lable ? `-- ${placeHolder} --` : items.find(i => i.value == value)?.lable}
                    <IconChevronDown className={`text-ultra-violet transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`} width={18} height={18} />
                </div>


                {isOpen &&

                    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                        <div className='absolute top-full left-0 w-full max-h-[200px] shadow z-40' >
                            {items?.map(item => <div className={`p-1.5 cursor-pointer  ${value == item.value ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'}`} onClick={(e) => {
                                e.stopPropagation()
                                setIsOpen(false)
                                onChange(item.value.toString())
                            }}>
                                {item.lable}
                            </div>)}

                        </div>
                    </ClickAwayListener>
                }


            </div>
            {!!error && !!errorText && <span className=' mt-1 flex text-body-3-normal text-right text-bittersweet'>{errorText}</span>}
        </>
    )
}
