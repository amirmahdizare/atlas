import React from 'react'
import { List } from './components/List/List'
import { Filters } from './components/Filters/Filters'

export const ClientPage = () => {
    return (
        <div className='grid grid-cols-6 gap-2 p-2  bg-seasalt '>

            <div className='col-span-6 lg:col-span-1 bg-white p-2'>
                <Filters />
            </div>

            <div className='col-span-6 lg:col-span-5 '>
                <List />
            </div>

        </div>
    )
}
