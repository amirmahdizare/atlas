'use client'
import React, { ReactNode } from 'react'
import ClickAwayListener from 'react-click-away-listener'

interface IProps {
    open: boolean,
    setOpen: (state: boolean) => void,
    children: ReactNode,
    fitWidth?: boolean,
    fitHeight?: boolean,

}

export const Modal = ({ open, setOpen, children, fitWidth, fitHeight }: IProps) => {

    if (open)
        return (
            <div className='fixed h-full w-full z-30 backdrop-blur backdrop-brightness-90  top-0 left-0 rounded   flex flex-row justify-center items-center'>
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <div className={`z-10  lg:rounded-sm bg- white shadow p-1 max-h-[calc(100vh-10%)] overflow-auto bg-white ${fitHeight ? '' : 'lg:h-[660px] h-full'}  ${fitWidth ? '' : 'lg:w-[360px] w-full'}`}>
                        {children} 
                    </div>
                </ClickAwayListener>
            </div>
        )

    return <></>
}
