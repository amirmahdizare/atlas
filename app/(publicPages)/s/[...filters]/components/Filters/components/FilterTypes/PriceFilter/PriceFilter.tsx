import React from 'react'

import { usePropertySearchResults } from '(publicPages)/s/[...filters]/hooks'
import { RangeFilter } from '../RangeFilter/RangeFilter'
import { prePriceFilterData, priceFilterData, rentPriceFilterData } from './data'
import { Divider } from '@components'

export const PriceFilter = () => {

    const { filter } = usePropertySearchResults()


    if (filter?.productType == 'sell')
        return <>
            <Divider />
            <RangeFilter {...priceFilterData} />
        </>

    else if (filter?.productType == 'rent')
        return <>
            <Divider />
            <RangeFilter {...prePriceFilterData} />
            <Divider />
            <RangeFilter {...rentPriceFilterData} />
            

        </>

    return (
        <></>
    )
}
