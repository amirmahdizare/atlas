import React from 'react'
import { SideBox } from './components/SideBox'
import Image from 'next/image'
import fullLogo from 'images/logo-full.svg'
import { DataForm } from './components/DataForm/DataForm'


export const ClientPage = () => {
    return (
        <div className='container max-w-[1400px] mx-auto h-full'>
            <div className='grid grid-cols-7 gap-1 lg:gap-4  h-full'>

                <div className='col-span-7 lg:col-span-4 flex flex-row items-center justify-center  p-2 relative'>

                    <div className='w-[133px] aspect-[2/1] relat ive absolute top-4 right-4 lg:block hidden'>
                        <Image src={fullLogo} alt='لوگوی دپارتمان املاک اطلس' fill />
                    </div>

                    <DataForm/>
                </div>

                <SideBox />


            </div>

        </div>
    )
}
