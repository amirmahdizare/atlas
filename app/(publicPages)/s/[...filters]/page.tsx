import { Metadata } from 'next'
import React from 'react'
import { LocationType, pageProps } from 'types'
import { Breadcrumb } from './components'
import { ClientPage } from './ClientPage'
import { Converter } from './components/Converter'
import { ApiBaseURL } from '_api/serverSideConfig'
import { LocationEndPoints } from '_api/endpoints/location'


// export const metadata: Metadata = {
//     title: 'جستجوی ملک در دپارتمان املاک اطلس'
// }


export const generateMetadata = async ({ params: { filters } , searchParams:{cities}}: pageProps<{ filters: string[]}  , {cities:string}>): Promise<Metadata> => {

    const response = await fetch(`${ApiBaseURL}${LocationEndPoints.GET_LIST}`)

    const citiesData: LocationType[] = await response.json()



    try {

        const cityQry = filters[0]

        if (cityQry.split('-').length > 1 && cityQry.split('-')[1] == 'city') {
            if (citiesData.find(c => c.name.toLowerCase() == cityQry.split('-')[0].toLowerCase())) {
                // citiesFilter = [citiesData?.find(c => c.name == cityQry.split('-')[0])?.id ?? 0]
                const targetCity = citiesData?.find(c => c.name == cityQry.split('-')[0])
                return {
                    title: `خرید و فروش ملک در شهر ${targetCity?.faTitle}`.concat(' | دپارتمان املاک اطلس'),
                    description:`خرید و فروش املاک در همه مناطق شهر ${targetCity?.faTitle} با مشاوره مشاورین دپارتمان اطلس`.concat(' | دپارتمان املاک اطلس')
                }
            }
            else {
                //Incorrect City
            }
        }
        else if (cityQry == 'all') {
            if (cities) {
                const citiesParams = cities?.split(',').reduce<LocationType[]>((pv, cv) => {
                    if (!!citiesData.find(c => c.name == cv)?.id)
                        pv.push(citiesData?.find(c => c.name == cv) ?? {} as  any)
                    return pv
                }, [])
                return {
                    title: `خرید و فروش ملک در شهر های  ${citiesParams.map(i=>i.faTitle).join(' و ')}`.concat(' | دپارتمان املاک اطلس'),
                    description:`خرید و فروش املاک در همه مناطق شهر های ${citiesParams.map(i=>i.faTitle).join(' و ')} با مشاوره مشاورین دپارتمان اطلس`.concat(' | دپارتمان املاک اطلس')
                }
            }
            // ///iran
        }
        else {
            //Nothing
        }
        return ({
            title: 'جستجوی ملک در دپارتمان املاک اطلس'
        })
        // return (
        //     {
        //         title: `${data.title} | دپارتمان املاک اطلس`,
        //         description: data.summary
        //     }
        // )

    } catch (error) {
        return ({
            title: 'جستجوی ملک در دپارتمان املاک اطلس'
        })
    }
}


export default function page({ params }: pageProps<{ filters: Array<string> }, { [key: string]: any }>) {

    // console.log(params)
    return (
        <div className='flex flex-col gap-2'>
            {/* <Breadcrumb /> */}
            <Converter filters={params.filters} />
            <ClientPage />
        </div>
    )
}
