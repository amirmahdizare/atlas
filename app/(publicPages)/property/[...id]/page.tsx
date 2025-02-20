import React from 'react'
import { PropertyDetailType, pageProps } from 'types'
import { Breadcrumb } from './components/Breadcrumb'
// import { sampleProprty } from './data.mock'
import { MobileBreadcrumb } from './components/MobileBreadcrumb'
import { AgentInfo, AgentNote, Descriptions, FeatureFields, Media, Note, Title } from './components'
import { PropretyEndPoints, PropretyEndPointsType } from '_api/endpoints/property'
import { Metadata } from 'next'
import { createMediaUrl } from 'utils'
import { Tags } from './components/Tags'
import { cookies } from 'next/headers'

export async function generateMetadata(
    { params }: pageProps<{ id: string[] }>,
): Promise<Metadata> {


    try {

        const id = params.id

        const response = await fetch(`${process.env.NEXT_PUBLIC_API}${PropretyEndPoints.SINGLE(id[0])}`,{cache:'reload'})

        const data: PropertyDetailType = await response.json()

        return {
            title: `${data.title}  | ${data.category?.title} | ${data.subCategory?.title} | ${data.location?.faTitle} | ${data.subLocation?.faTitle}  | دپارتمان املاک اطلس`,
            keywords: [
                data.title,
                data.productType == 'sell' ? 'فروش' : 'اجاره',
                data.category?.title ?? '',
                data.subCategory?.title ?? '',
                data.location?.faTitle ?? '',
                data.subLocation?.faTitle ?? ''
            ],
            description: data.description,
            authors: [{ name: 'دپارتمان املاک اطلس', url: 'https://amlakatlas.com' }, { name: `${data?.user?.firstName} ${data?.user?.lastName}`, url: `https://amlakatlas.com/${data?.user?.userName}` }],
            category: `${data.productType == 'sell' ? 'فروش' : 'اجاره'} ${data.category?.title ?? ''} ${data.subCategory?.title ?? ''} `,
            creator: `${data?.user?.firstName} ${data?.user?.lastName} | دپارتمان املاک اطلس`,
            openGraph: {
                images: data?.medias?.map(i => createMediaUrl(i)),
                title: `${data.title}  | ${data.category?.title} | ${data.subCategory?.title} | ${data.location?.faTitle} | ${data.subLocation?.faTitle}  | دپارتمان املاک اطلس`,
                type: 'article',
                authors: ['دپارتمان املاک اطلس', `${data?.user?.firstName} ${data?.user?.lastName}`],
                countryName: 'ایران',
                phoneNumbers: [data?.user?.phoneNumber ?? ''],
                locale: 'fa',
                tags: [data.title,
                data.productType == 'sell' ? 'فروش' : 'اجاره',
                data.category?.title ?? '',
                data.subCategory?.title ?? '',
                data.location?.faTitle ?? '',
                data.subLocation?.faTitle ?? '',],
                description: data.description,
                siteName: 'دپارتمان املاک اطلس'
            },

        }
    } catch (error) {
        return ({
            title: 'جزییات آگهی | دپارتمان املاک اطلس'
        })
    }
}


export default async function page({ params: { id } }: pageProps<{ id: string[] }>) {


    try {

        const possibleAccessToken = cookies()?.get('access_token')

        const response = await fetch(`${process.env.NEXT_PUBLIC_API}${PropretyEndPoints.SINGLE(id[0])}` ,{
            headers:!!possibleAccessToken?.value ? {
                Authorization:`bearer ${possibleAccessToken?.value}`
            } : {}
        })

        const data: PropertyDetailType = await response.json()

        return (
            <div className='grid grid-cols-5 gap-2 lg:gap-3 p-1.5 '>
                {(data?.subCategory?.id || data?.category?.id) && <div className='order-1 col-span-5 lg:block hidden'>
                    <Breadcrumb data={data} />
                </div>}

                <div className='order-1 col-span-5  lg:hidden'>
                    <MobileBreadcrumb data={data} />
                </div>

                <div className='order-2 flex flex-col gap-4 lg:gap-7 col-span-5 lg:col-span-3'>
                    <div className='lg:hidden'><Media data={data} /></div>
                    <Title data={data} />
                    <FeatureFields data={data} />
                    <Descriptions data={data} />
                    {Array.isArray(data.tags) && data?.tags?.length > 0 && <Tags data={data} />}
                    {/* <SimilarCategories data={data} /> */}
                </div>

                <div className='order-3 flex flex-col gap-4 col-span-5 lg:col-span-2'>
                    <div className='lg:flex hidden'><Media data={data} /></div>
                    <div className=' fixed w-full bottom-0 left-0 pt-1.5 pb-3 z-20 lg:p-1 border-mint-green shadow lg:shadow-none  border-t lg:border-anti-flash-white-lighter lg:border-none lg:py-0 bg-seasalt lg:relative'>
                        <AgentInfo data={data} />
                    </div>
                    <AgentNote {...data} />
                    <Note propertyId={data.id} />
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
    } catch (error) {
        return <></>
    }
}
