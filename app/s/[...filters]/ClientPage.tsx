import React from 'react'
import { List } from './components/List/List'

export const ClientPage = () => {
    return (
        <div className='grid grid-cols-6 gap-4 p-2  bg-seasalt '>

            <div className='col-span-6 lg:col-span-1'>
                فیلترها
            </div>

            <div className='col-span-6 lg:col-span-5'>
                <List />
            </div>

        </div>
    )
}
