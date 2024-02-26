import React from 'react'
import { properties } from './data.mock'
import { PropertyListCard } from '../PropertyListCard/PropertyListCard'

export const List = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1'>
            {properties.map(item => <div className='col-span-1'>
                <PropertyListCard {...item} />
            </div>)}

        </div>
    )
}
