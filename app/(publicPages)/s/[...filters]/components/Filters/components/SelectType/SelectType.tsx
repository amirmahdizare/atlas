'use client'
import React from 'react'
import { useSearchProperty } from '../../../../hooks'

export const SelectType = () => {

    const { filter, dispatchFilter } = useSearchProperty()

    return (
        <div className='flex flex-col gap-2'>
            {/* <span className='text-space-codet text-body-3-bolder'>نوع آگهی</span> */}

            <div className='flex flex-row lg:flex-col gap-0.5 text-body-3-normal bo rder  rounded borde r-mint-green'>
                <button className={`${!filter?.productType ? 'bg-mint-green text-white' : 'bg-white hover:bg-gray-100 border border-gray-100'} flex-1 p-1 rounded transition-all dur`} onClick={() => dispatchFilter({ productType: undefined })}>همه</button>
                <button className={`${filter.productType == 'sell' ? 'bg-mint-green text-white' : 'bg-white hover:bg-gray-100 border border-gray-100'} flex-1 p-1 rounded transition-all dur`} onClick={() => dispatchFilter({ productType: 'sell' })}>فروش</button>
                <button className={`${filter.productType == 'rent' ? 'bg-mint-green text-white' : 'bg-white hover:bg-gray-100 border border-gray-100'} flex-1 p-1 rounded transition-all dur`} onClick={() => dispatchFilter({ productType: 'rent' })}>رهن و اجاره</button>
            </div>
        </div>
    )
}
