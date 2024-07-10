import { Metadata } from 'next'
import React from 'react'
import { CategoryFullType, LocationType, SubCategoryType, pageProps } from 'types'
import { Breadcrumb } from './components'
import { ClientPage } from './ClientPage'
import { Converter } from './components/Converter'
import { ApiBaseURL } from '_api/serverSideConfig'
import { LocationEndPoints } from '_api/endpoints/location'
import { CategoryEndPoints } from '_api/endpoints/category'


// export const metadata: Metadata = {
//     title: 'جستجوی ملک در دپارتمان املاک اطلس'
// }


export const generateMetadata = async ({ params: { filters }, searchParams: { cities } }: pageProps<{ filters: string[] }, { cities: string }>): Promise<Metadata> => {

    const response = await fetch(`${ApiBaseURL}${LocationEndPoints.GET_LIST}`, { cache: 'reload' })

    const citiesData: LocationType[] = await response.json()


    const responseCat = await fetch(`${ApiBaseURL}${CategoryEndPoints.ALL_WITH_RELATION}`,{method:'POST'})

    const catsData: CategoryFullType[] = await responseCat.json()

    const returnSide = (side: string) => {
        if (side == 'rent') return 'رهن و اجاره'
        else if (side == 'sell') return 'خرید و فروش'
        return 'خرید و فروش و رهن و اجاره'

    }

    const side = filters?.[0]
    const catQry = filters?.[2]

    const sideTranslate = returnSide(side)

    var catTitle = undefined

    var cityTitle = undefined



    if (catQry) {


        if (catQry.split('-')[1] == 'category' && catQry.split('-').length > 1) {
            //Category 
            if (catsData?.find(c => c.enTitle.toLowerCase() == catQry.split('-')[0].toLowerCase())) {
                //CorrectCategory
                catTitle = catsData?.find(c => c.enTitle.toLowerCase() == catQry.split('-')[0].toLowerCase())?.title
            }
            else {
                //InCorrectCategory
            }
        }

        else if (catQry.split('-')[1] == 'subcategory' && catQry.split('-').length > 1) {
            //Subcategory 

            const allSubcategories = catsData?.reduce<SubCategoryType<string, string>[]>((pv, cv) => {
                pv.push(...cv.subCategories)
                return pv
            }, [])
            if (allSubcategories?.find(c => c.enTitle.toLowerCase() == catQry.split('-')[0].toLowerCase())) {
                const targetSubcategory = allSubcategories?.find(c => c.enTitle.toLowerCase() == catQry.split('-')[0].toLowerCase())
                //CorrectSubCategory
                catTitle = (catsData.find(i => i.subCategories.findIndex(a => a.id == targetSubcategory?.id) != -1)?.title ?? '')
                    .concat(` ${targetSubcategory?.title}`)

            }
            else {
                //InCorrectSubCategory
            }
        }
    }


    try {

        const cityQry = filters?.[1]

        if (cityQry.split('-').length > 1 && cityQry.split('-')[1] == 'city') {
            if (citiesData.find(c => c.name.toLowerCase() == cityQry.split('-')[0].toLowerCase())) {
                // citiesFilter = [citiesData?.find(c => c.name == cityQry.split('-')[0])?.id ?? 0]
                const targetCity = citiesData?.find(c => c.name == cityQry.split('-')[0])

                cityTitle = targetCity?.faTitle
                // return {
                //     title: `${sideTranslate} ملک در  ${targetCity?.faTitle}`.concat(' | دپارتمان املاک اطلس'),
                //     description: `${sideTranslate} املاک در همه مناطق  ${targetCity?.faTitle} با مشاوره مشاورین دپارتمان اطلس`.concat(' | دپارتمان املاک اطلس')
                // }
            }
            else {
                //Incorrect City
            }
        }
        else if (cityQry == 'all') {
            if (cities) {
                const citiesParams = cities?.split(',').reduce<LocationType[]>((pv, cv) => {
                    if (!!citiesData.find(c => c.name == cv)?.id)
                        pv.push(citiesData?.find(c => c.name == cv) ?? {} as any)
                    return pv
                }, [])

                cityTitle = citiesParams.map(i => i.faTitle).join(' و ')
                // return {
                //     title: `${sideTranslate} ملک در    ${citiesParams.map(i => i.faTitle).join(' و ')}`.concat(' | دپارتمان املاک اطلس'),
                //     description: `${sideTranslate} املاک در همه مناطق   ${citiesParams.map(i => i.faTitle).join(' و ')} با مشاوره مشاورین دپارتمان اطلس`.concat(' | دپارتمان املاک اطلس')
                // }
            }
            // ///iran
        }
        else {
            //Nothing
        }
        // return ({
        //     title: 'جستجوی ملک در دپارتمان املاک اطلس'
        // })
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

    return ({
        title: sideTranslate.concat(' ')
            .concat(catTitle ? catTitle.concat(' ') : 'ملک ')
            .concat(cityTitle ? 'در '.concat(cityTitle).concat(' ') : '')
            .concat(' | دپارتمان املاک اطلس'),
        //description: ''
    })
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
