'use client'
import React, { ReactNode } from 'react'
import ClickAwayListener from 'react-click-away-listener'

interface IProps {
    open: boolean,
    setOpen: (state: boolean) => void,
    children: ReactNode

}

export const Modal = ({ open, setOpen, children }: IProps) => {

    if (open)
        return (
            <div className='fixed h-full w-full z-20 backdrop-blur backdrop-brightness-90  top-0 left-0 rounded   flex flex-row justify-center items-center'>
                <ClickAwayListener onClickAway={() => setOpen(false)}>
                    <div className='lg:h-[660px] z-10 lg:w-[360px] w-full h-full  lg:rounded-sm bg-white shadow p-1 overflow-auto'>
                        {children}
                    </div>
                </ClickAwayListener>
            </div>
        )

    return <></>
}
