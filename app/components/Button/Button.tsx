'use client'
import { Icon123 } from '@tabler/icons-react'
import React from 'react'
import cx from 'classnames'

const bgColors = {
    secondary: 'bg-orange-500',
    dark: 'bg-blue-900',
    primaryDarker: 'bg-blue-500',
    primaryNormal: 'bg-blue-700',
    primaryLighter: 'bg-blue-400',
    gray: 'bg-gray-200',
    white: 'bg-white',
    textGray: 'bg-gray-700'
}

const textColors = {
    secondary: 'text-orange-500',
    dark: 'text-blue-900',
    primaryDarker: 'text-blue-500',
    primaryNormal: 'text-blue-700',
    primaryLighter: 'text-blue-400',
    gray: 'text-gray-200',
    white: 'text-white',
    textGray: 'text-gray-700'
}


interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loading?: boolean,
    icon?: typeof Icon123,
    iconSide?: 'left' | 'right',
    textColor?: keyof typeof bgColors
    bgColor: keyof typeof bgColors

}
const renderColor = (item: string, defaultColor: string, pre: string) => {
    if (pre == 'bg')
        return item ? `${(bgColors as any)?.[item]}` : `${(bgColors as any)[defaultColor]}`
    else
        return item ? `${(textColors as any)?.[item]}` : `${(textColors as any)[defaultColor]}`
}



export const Button = ({ loading, bgColor, icon: Icon, iconSide, textColor, className, ...props }: Props) => {
    return (
        <button
            className={cx(
                renderColor(bgColor, 'primaryNormal', 'bg'),
                renderColor(textColor ?? '', 'white', 'text'),
                'p-2 rounded-[4px] flex flex-row gap-2 items-center  bg-r ed-500 justify-center bor der bg-g ray-400'
            )}

            {...props}>

        </button>
    )
}
