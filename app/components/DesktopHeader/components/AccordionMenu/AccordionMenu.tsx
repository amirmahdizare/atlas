'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { IconArrowDown, IconChevronDown } from '@tabler/icons-react'

export const AccordionMenu = ({ items, title }: { title: string, items: Array<{ title: string, link: string }> }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className='flex flex-row gap-0.5 items-center text-ultra-violet relative cursor-pointer '
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            // onMouseOut={() => setIsOpen(false)}
        >
            <span className='hover:text-coral'>{title}</span>

            <IconChevronDown width={15} height={15} className={isOpen ? 'rotate-180 transition-all duration-300' : ' transition-all duration-300'} />

            <div className={`absolute flex flex-col gap-2 p-2 rounded shadow bg-white text-body-3-normal top-full mt-1 right-1/2 border translate-x-1/2 whitespace-nowrap transition-all duration-300 ${isOpen ? 'opacity-1' : ' opacity-0'}`}>
                {items.map(item => <Link key={item.link} className='hover:text-coral' href={item.link}>{item.title}</Link>)}
            </div>

        </div>
    )

}
