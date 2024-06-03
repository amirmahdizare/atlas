import { Metadata } from 'next'
import React from 'react'
import { BlogReadType, CorpReadType, pageProps } from 'types'
import { ClientPage } from './ClientPage'
import { ApiBaseURL } from '_api/serverSideConfig'
import { BlogEndPoints } from '_api/endpoints/blog'
import { CorpEndPoints } from '_api/endpoints/participation'


export const generateMetadata = async ({ params: { id } }: pageProps<{ id: string[] }>): Promise<Metadata> => {

    const response = await fetch(`${ApiBaseURL}${CorpEndPoints.SINGLE(Number(id[0]))}`)
    
    const data: CorpReadType = await response.json()


    try {
        return (
            {
                title: `پروژه مشارکت | ${data.title} | دپارتمان املاک اطلس`,
                description: data.description
            }
        )

    } catch (error) {
        return ({
            title: 'پروژه مشارکت | دپارتمان املاک اطلس'
        })
    }
}


export default async function page({ params: { id } }: pageProps<{ id: string }>) {


    const response = await fetch(`${ApiBaseURL}${CorpEndPoints.SINGLE(Number(id[0]))}`)

    const data: CorpReadType = await response.json()

    try {

        if (response.ok)
            return (
                <>
                    <ClientPage id={id} data={data} />
                </>
            )
        return <span className='text-red-500 font-bold text-center p-4'>پروژه مشارکت مورد نظر یافت نشد.</span>
    } catch (error) {
        return <span className='text-red-500 font-bold text-center p-4'>پروژه مشارکت مورد نظر یافت نشد.</span>
    }
}
