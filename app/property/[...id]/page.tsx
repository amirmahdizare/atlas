import React from 'react'
import { pageProps } from 'types'
import { Breadcrumb } from './components/Breadcrumb'
import { sampleProprty } from './data.mock'
import { MobileBreadcrumb } from './components/MobileBreadcrumb'


export default function page({ params: { id } }: pageProps<{ id: string[] }>) {
    return (
        <div className='grid grid-col-5 gap-2 py-1 '>
            <div className='col-span-5 lg:block hidden'>
                <Breadcrumb data={sampleProprty} />
            </div>

            <div className='col-span-5  lg:hidden'>
                <MobileBreadcrumb data={sampleProprty} />
            </div>



        </div>
    )
}
