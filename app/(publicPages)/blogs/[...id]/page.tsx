import { Metadata } from 'next'
import React from 'react'
import { BlogReadType, pageProps } from 'types'
import { ClientPage } from './ClientPage'
import { ApiBaseURL } from '_api/serverSideConfig'
import { BlogEndPoints } from '_api/endpoints/blog'


export const generateMetadata = async ({ params: { id } }: pageProps<{ id: string[] }>): Promise<Metadata> => {

    const response = await fetch(`${ApiBaseURL}${BlogEndPoints.SINGLE(Number(id[0]))}`)
    
    const data: BlogReadType = await response.json()



    try {
        return (
            {
                title: `${data.title} | دپارتمان املاک اطلس`,
                description: data.summary
            }
        )

    } catch (error) {
        return ({
            title: 'مقاله | دپارتمان املاک اطلس'
        })
    }
}


export default async function page({ params: { id } }: pageProps<{ id: string }>) {


    const response = await fetch(`${ApiBaseURL}${BlogEndPoints.SINGLE(Number(id[0]))}`)

    const data: BlogReadType = await response.json()

    try {

        if (response.ok)
            return (
                <>
                    <ClientPage id={id} data={data} />
                </>
            )
        return <span className='text-red-500 font-bold text-center p-4'>مقاله مورد نظر یافت نشد.</span>
    } catch (error) {
        return <span className='text-red-500 font-bold text-center p-4'>مقاله مورد نظر یافت نشد.</span>
    }
}
