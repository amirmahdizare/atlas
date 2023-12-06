import Link from 'next/link'
import React from 'react'

export const MenuItem = ({ title, isLink, link, icon: Icon }: { title: string, isLink: boolean, link: string, icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element }) => {

    if (isLink)
        return <Link href={link} className='text-ultra-violet text-body-2-normal flex flex-row gap-1 items-center hover:text-coral'>
            <Icon width={20} height={20} />
            <span>{title}</span>

        </Link>

    return (
        <div className='text-ultra-violet text-body-2-normal flex flex-row gap-1 items-center hover:text-coral'>
            <Icon width={20} height={20} />
            <span>{title}</span>

        </div>
    )
}
