import React from 'react'
import { pageProps } from 'types'
import { Breadcrumb } from './components/Breadcrumb'
import { sampleProprty } from './data.mock'
import { MobileBreadcrumb } from './components/MobileBreadcrumb'
import { AgentInfo, Descriptions, Note, SimilarCategories, Title } from './components'


export default function page({ params: { id } }: pageProps<{ id: string[] }>) {
    return (
        <div className='grid grid-cols-5 gap-4 py-1.5 '>
            <div className='order-1 col-span-5 lg:block hidden'>
                <Breadcrumb data={sampleProprty} />
            </div>

            <div className='order-1 col-span-5  lg:hidden'>
                <MobileBreadcrumb data={sampleProprty} />
            </div>

            <div className='order-2 lg:order-1 col-span-5 lg:col-span-3 '>
                <Title data={sampleProprty} />
            </div>

            <div className='order-3 col-span-5 lg:col-span-3'>
                <Descriptions data={sampleProprty} />

            </div>

            <div className='order-4 col-span-5 lg:col-span-3'>
                <SimilarCategories data={sampleProprty} />
            </div>

            <div className='order-5 col-span-5 lg:col-span-2 fixed w-full bottom-0 left-0 py-1.5 z-20 border-t-2 border-anti-flash-white-lighter lg:border-none lg:pb-0 bg-seasalt lg:relative'>
                <AgentInfo data={sampleProprty} />
            </div>

            <div className='order-6 col-span-5 lg:col-span-3 hidden lg:block'>

            </div>

            <div className='order-7 col-span-5 lg:col-span-2'>
                <Note />
            </div>


            <div className='order-1 lg:order-2 col-span-5 lg:col-span-2'>
                تصاویر
            </div>








        </div>
    )
}
