'use client'
import { TablerIconsProps } from '@tabler/icons-react'
import React from 'react'
import cx from 'classnames'
import { Spinner } from '../Spinner/Spinner'
import { useRouter } from 'next/navigation'

const bgColors = {
    secondary: 'bg-coral',
    dark: 'bg-raisin-black',
    primaryDarker: 'mint-green',
    primaryNormal: 'bg-robin-egg',
    primaryLighter: 'bg-robin-egg-lighter',
    gray: 'bg-anti-flash-white-lighter',
    white: 'bg-white',
    textGray: 'bg-ultra-violet',
    lightBlue: 'bg-celeste-lighter',
}

const textColors = {
    secondary: 'text-coral',
    dark: 'text-raisin-black',
    primaryDarker: 'mint-green',
    primaryNormal: 'text-robin-egg',
    primaryLighter: 'text-robin-egg-lighter',
    gray: 'text-anti-flash-white-lighter',
    white: 'text-white',
    textGray: 'text-ultra-violet',
    lightBlue: 'text-celeste-lighter'
}


interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    loading?: boolean,
    icon?: (props: TablerIconsProps) => JSX.Element,
    iconSide?: 'left' | 'right',
    textColor?: keyof typeof bgColors
    bgColor?: keyof typeof bgColors,
    fullWidth?: boolean,
    href?: string

}
const renderColor = (item: string, defaultColor: string, pre: string) => {
    if (pre == 'bg')
        return item ? `${(bgColors as any)?.[item]}` : `${(bgColors as any)[defaultColor]}`
    else
        return item ? `${(textColors as any)?.[item]}` : `${(textColors as any)[defaultColor]}`
}




export const Button = ({ loading, bgColor, icon: Icon, fullWidth, onClick, href, iconSide, children, textColor, className, ...props }: Props) => {

    const router = useRouter()

    return (
        <button
            className={cx(
                bgColor ? `${(bgColors as any)?.[bgColor]}` : `${bgColors.primaryNormal}`,
                textColor ? `${(textColors as any)?.[textColor]}` : `${textColors.white}`,
                // renderColor(bgColor ?? '', 'primaryNormal', 'bg'),
                // renderColor(textColor ?? '', 'white', 'text'),
                iconSide == 'left' ? 'flex-row' : 'flex-row-reverse',
                'px-2 py-1.5 rounded-[4px] flex  gap-1 items-center  bg-r ed-500 justify-center bor der bg-g ray-400',

                fullWidth && 'flex-1',
                className
            )}

            {...props}
            onClick={(e)=>href ? router.push(href) : typeof onClick=='function' && onClick(e)}
        >
            {loading
                ? <Spinner />
                : <>
                    {children}
                    {!!Icon && <Icon width={20} height={20} />}</>}



        </button>
    )
}
