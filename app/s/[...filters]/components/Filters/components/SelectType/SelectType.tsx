'use client'
import React from 'react'
import { useSearchProperty } from 's/[...filters]/hooks'

export const SelectType = () => {

    const {filter , dispatchFilter} = useSearchProperty()
    
    return (
        <div className='flex flex-row gap-0.5 text-body-3-normal bo rder  rounded borde r-mint-green'>
            <button className={`${filter.type=='SELL' ? 'bg-mint-green text-white' : 'bg-white hover:bg-gray-100 border border-gray-100'} flex-1 p-1 rounded transition-all dur`} onClick={()=>dispatchFilter({type:'SELL'})}>فروش</button>
            <button className={`${filter.type=='RENT' ? 'bg-mint-green text-white' : 'bg-white hover:bg-gray-100 border border-gray-100'} flex-1 p-1 rounded transition-all dur`} onClick={()=>dispatchFilter({type:'RENT'})}>رهن و اجاره</button>
        </div>
    )
}
