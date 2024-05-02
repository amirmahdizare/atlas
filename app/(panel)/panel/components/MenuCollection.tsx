'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AccessType } from 'types'

export const MenuCollection = ({ title, baseLink, icon: Icon, items }: { title: string, baseLink: string, items: AccessType[], icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element }) => {


    const pathname = usePathname()

    if (items.filter(i => i.isMenuItem && i.route.includes(baseLink)).length == 0)
        return <></>

    return (
        <div className='flex flex-col gap-2'>

            <div className='text-ultra-violet text-body-2-normal flex flex-row gap-1 items-center'>
                <Icon width={20} height={20} className={pathname.includes(baseLink) ? 'text-coral' : ''} />
                <span className={pathname.includes(baseLink) ? 'text-raisin-black' : ''}>{title}</span>

            </div>

            <div className='flex flex-col  pr-2 '>
                {items.filter(i => i.isMenuItem && i.route.includes(baseLink)).map(item => <Link href={'/panel/'+item.route}
                    className={pathname.includes(item.route) ? 'text-coral bg-orange-200 p-1 text-body-3-bolder border-r border-r-coral' : 'p-1 text-ultra-violet text-body-3-normal hover:text-coral border-r leading-2'}
                >
                    {item.title}
                </Link>)}
            </div>


        </div>
    )
}
