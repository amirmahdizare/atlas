import React, { ReactNode } from 'react'
import { Input } from '@components'
import { NumericFormat } from 'react-number-format'

const AttrContainer = ({ children }: { children: ReactNode }) => {
    return <div className='border-r-2  border-r-coral pr-1.5'>{children}</div>
}

export const Attributes = () => {

    const attrs: Array<{ key: string, type: 'string' | 'number' | 'boolean', title: string }> = [
        {
            key: 'metr', title: 'متراژ بنا', type: 'number',
        },
        {
            key: 'asansor', title: 'آسانسور', type: 'boolean'
        },
        {
            key: 'document', title: 'نوع سند', type: 'string'
        }
    ]

    return (
        <div className='flex flex-col gap-4'>
            <span className='text-french-gray text-body-2-normal  text-right'>ویژگی ها</span>
            {attrs.map(item => {
                if (item.type == 'string')
                    return <AttrContainer><Input label={item.title} type='string' /></AttrContainer>
                else if (item.type == 'number')
                    return <AttrContainer><NumericFormat thousandSeparator placeholder={item.title} /></AttrContainer>
                else if (item.type === 'boolean')
                    return <AttrContainer><label id={item.key} className='flex flex-row gap-1 items-center cursor-pointer'>
                        <span className='text-french-gray text-body-2-normal  text-right'>{item.title}</span>
                        <input type='checkbox' />
                    </label></AttrContainer>
                else
                    return <></>
            })}
        </div>

    )
}
