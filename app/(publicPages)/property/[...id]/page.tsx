import React from 'react'
import { pageProps } from 'types'
import { Breadcrumb } from './components/Breadcrumb'
import { sampleProprty } from './data.mock'
import { MobileBreadcrumb } from './components/MobileBreadcrumb'
import { AgentInfo, Descriptions, FeatureFields, Media, Note, SimilarCategories, Title } from './components'


export default function page({ params: { id } }: pageProps<{ id: string[] }>) {
    return (
        <div className='grid grid-cols-5 gap-2 lg:gap-4 py-1.5 '>
            <div className='order-1 col-span-5 lg:block hidden'>
                <Breadcrumb data={sampleProprty} />
            </div>

            <div className='order-1 col-span-5  lg:hidden'>
                <MobileBreadcrumb data={sampleProprty} />
            </div>

            <div className='order-2 flex flex-col gap-7 col-span-5 lg:col-span-3'>
                <div className='lg:hidden'><Media data={sampleProprty} /></div>
                <Title data={sampleProprty} />
                <FeatureFields />
                <Descriptions data={sampleProprty} />
                <SimilarCategories data={sampleProprty} />
            </div>

            <div className='order-3 flex flex-col gap-4 col-span-5 lg:col-span-2'>
                <div className='lg:flex hidden'><Media data={sampleProprty} /></div>
                <div className=' fixed w-full bottom-0 left-0 py-1.5 z-20 border-t-2 border-anti-flash-white-lighter lg:border-none lg:pb-0 bg-seasalt lg:relative'>
                    <AgentInfo data={sampleProprty} />
                </div>
                <Note />
            </div>


            {/* <div className='order-2 lg:order-1 col-span-5 lg:col-span-3 '>
                <Title data={sampleProprty} />
            </div>

            <div className='order-3 col-span-5 lg:col-span-3 mt-3 lg:mt-0'>
                <Descriptions data={sampleProprty} />
            </div>

            <div className='order-5 col-span-5 lg:col-span-3'>
                <SimilarCategories data={sampleProprty} />
            </div>

            <div className='order-4 col-span-5 lg:col-span-2 fixed w-full bottom-0 left-0 py-1.5 z-20 border-t-2 border-anti-flash-white-lighter lg:border-none lg:pb-0 bg-seasalt lg:relative'>
                <AgentInfo data={sampleProprty} />
            </div>

            <div className='order-7 col-span-5 lg:col-span-3 hidden lg:block'>

            </div>

            <div className='order-6 col-span-5 lg:col-span-2'>
                <Note />
            </div>


            <div className='order-1 lg:order-2 col-span-5 lg:col-span-2'>
                <Media data={sampleProprty} />
            </div> */}








        </div>
    )
}
