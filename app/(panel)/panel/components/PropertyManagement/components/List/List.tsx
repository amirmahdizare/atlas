import React from 'react'
import { news } from './data.mock'
import { PropertyCard } from './components/PropertyCard'

export const List = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {news.map(item => <div className='bg-white shadow rounded p-1 hover:bg-gray-50'>
                <PropertyCard {...item} />
            </div>)}
        </div>
    )
}
