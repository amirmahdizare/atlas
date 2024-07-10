import { CategoryEndPoints } from '_api/endpoints/category'
import { LocationEndPoints, SubLocationEndPoints } from '_api/endpoints/location'
import { ssrGet, ssrMutate } from '_api/serverSideConfig'
import React from 'react'
import { CategoryFullType, LocationType, SubCategoryType, SubLocationReadType } from 'types'

export default async function SSR() {


    try {


        var links: string[] = []

        const locations: LocationType[] = await ssrGet({ path: LocationEndPoints.GET_LIST })
        
        const subLocations: SubLocationReadType[] = await ssrGet({ path: SubLocationEndPoints.GET_LIST })

        const categories: CategoryFullType[] = await ssrMutate({ path: CategoryEndPoints.ALL_WITH_RELATION ,method:'POST'})

        const sideOptions = ['all', 'rent', 'sell']

        const cityOptions = ['all', ...locations.map(i => i.name.concat('-city'))]

        const catsOptions = ['all', ...categories.map(i => i.enTitle.concat('-category')), ...categories.reduce<SubCategoryType<string, string>[]>((pv, cv) => {
            return [...pv, ...cv.subCategories]
        }, []).map(i => i.enTitle.concat('-subcategory'))]




        {
            sideOptions.forEach(side => {

                cityOptions.forEach(city => {

                    catsOptions.forEach(cat => {

                        links = [...links, `/s/${side}/${city}/${cat}`]

                        if(subLocations.find(i=>i.parentLocation?.name==city.split('-')[0]))
                        {
                            subLocations.filter(i=>i.parentLocation?.name==city.split('-')[0]).forEach(sub=>{
                                links = [...links, `/s/${side}/${city}/${cat}?sublocations=${sub.name}`]
                            })
                        }
                    })
                })
            })
        }


        return (
            <div className='flex flex-col gap-2 sr-only'>

                {links.map(f => <a href={f}> {f.split('/').slice(2).join(' ')}</a>)}

            </div>
        )

    } catch (error) {

        return <></>
    }

}
