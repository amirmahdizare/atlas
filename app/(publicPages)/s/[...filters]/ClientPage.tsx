import React from 'react'
import { List } from './components/List/List'
import { Filters } from './components/Filters/Filters'

export const ClientPage = () => {
    return (
        <div className='grid grid-cols-11 gap-2 p-2  bg-seasalt '>

            <div className='col-span-11 lg:col-span-2 bg-white p-2'>
                <Filters />
            </div>

            <div className='col-span-11 lg:col-span-9 '>
                <List />
            </div>

        </div>
    )
}
