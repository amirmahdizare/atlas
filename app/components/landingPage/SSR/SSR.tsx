import { LocationEndPoints } from '_api/endpoints/location'
import { ApiBaseURL } from '_api/serverSideConfig'
import React from 'react'
import { LocationType } from 'types'

export default async function SSR() {

    try {

        const response = await fetch(`${ApiBaseURL}${LocationEndPoints.GET_LIST}`)

        const citiesData: LocationType[] = await response.json()

        return <ul className='sr-only'>
            {citiesData.map(i => <li><a href={`/s/${i.name}-city`}>خرید و فروش ملک در {i.faTitle}</a></li>)}
        </ul>
    } catch (error) {

    }

    return (
        <div className='sr-only'></div>
    )
}
