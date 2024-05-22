import { usePropertySearchResults } from '(publicPages)/s/[...filters]/hooks'
import React from 'react'
import { RangeFilter } from '../RangeFilter/RangeFilter'
import { priceFilterData } from './data'

export const PriceFilter = () => {

    const { filter, dispatchFilter } = usePropertySearchResults()

    
    if (filter?.productType == 'sell')
        return <RangeFilter {...priceFilterData} />

    return (
        <div>هیج</div>
    )
}
