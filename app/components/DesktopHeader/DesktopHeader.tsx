'use client'
import React from 'react'
import fullLogo from 'images/logo-full.svg'
import Image from 'next/image'
import { AccordionMenu } from './components/AccordionMenu/AccordionMenu'
import Link from 'next/link'
import { UserStatus } from './components/UserStatus/UserStatus'
import { ActionButtons } from './components/ActionButtons/ActionButtons'
import { usePathname } from 'next/navigation'
import { useCities } from '@hooks'
// import { ActionButtons } from './components/ActionButtons/ActionButtons'


const LinkComponent = ({ title, link }: { title: string, link: string }) => {


    const pathname = usePathname()

    const isActive = pathname != '/' ? pathname == link : pathname.includes(link)

    if (isActive)
        return <Link href={link} className='text-robin-egg-lighter  relative'>
            {title}
            <div className='w-3/4 bg-robin-egg-lighter h-[1px] top-full mt-1 right-1/2 translate-x-1/2 absolute'></div>
        </Link>

    return <Link href={link} className='hover:text-coral'>{title}</Link>
}
export const DesktopHeader = () => {

    const { data , isLoading} = useCities()
    return (
        <div className='lg:flex flex-row gap-4 items-center justify-between p-2 text-body-3-bolder text-ultra-violet hidden'>
            <Link href={'/'}><Image src={fullLogo} alt='لوگوی دپارتمان اطلس' className='h-5' /></Link>

            <div className='flex flex-row gap-5 items-center justify-between'>

                <LinkComponent link='/' title='صفحه اصلی' />
                {/* <Link href={'/'} className='text-robin-egg-lighter  relative'>
                    صفحه اصلی
                    <div className='w-3/4 bg-robin-egg-lighter h-[1px] top-full mt-1 right-1/2 translate-x-1/2 absolute'></div>
                </Link> */}

                <AccordionMenu
                    title='جستجوی ملک'
                    href='/s/all/all'
                    items={
                        data?.data.map(item => ({link:`/s/all/${item.name}-city` , title:`جستجوی ملک در ${item.faTitle}`})) ?? []
                    //     [
                    //     {
                    //         link: '#',
                    //         title: 'خرید آپارتمان در شهرجدید هشتگرد'
                    //     },
                    //     {
                    //         link: '#',
                    //         title: 'خرید آپارتمان در هشتگرد'
                    //     },
                    //     {
                    //         link: '#',
                    //         title: 'خرید ویلا در هشتگرد'
                    //     }
                    // ]
                    
                    } />


                {/* <AccordionMenu
                    title='رهن و اجاره'
                    items={[
                        {
                            link: '#',
                            title: 'اجاره آپارتمان در شهرجدید هشتگرد'
                        },
                        {
                            link: '#',
                            title: 'اجاره آپارتمان در هشتگرد'
                        },
                        {
                            link: '#',
                            title: 'اجاره ویلا در هشتگرد'
                        }
                    ]} /> */}
                {/* //Todo Search Property For All Cities and SubCities */}

                {/* <LinkComponent link='/s/all' title='جستجوی ملک' /> */}
                <LinkComponent link='/blogs' title='اخبار و مقالات' />
                <LinkComponent link='/aboutus' title='درباره ما' />
                <LinkComponent link='/contactus' title='تماس با ما' />
                {/* <Link href={'/blogs'} className='hover:text-coral'>اخبار و مقالات</Link>
                <Link href={'/aboutus'} className='hover:text-coral'>درباره ما</Link>
                <Link href={'/contactus'} className='hover:text-coral'>تماس با ما</Link> */}

            </div>
            <div className='flex flex-row gap-4 items-center'>

                <UserStatus />
                <ActionButtons />

            </div>

        </div>
    )
}
