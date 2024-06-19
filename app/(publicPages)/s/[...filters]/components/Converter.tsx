'use client'
import React, { useEffect } from 'react'
import { useCities } from '@hooks'
import { useSearchParams } from 'next/navigation'
import { useSearchProperty } from '../hooks'

export const Converter = ({ filters }: { filters: string[] }) => {



    const cityQry = filters?.[0]

    const { data, isLoading } = useCities()

    const searchQuery = useSearchParams()


    const { dispatchFilter } = useSearchProperty()


    useEffect(() => {

        var citiesFilter: Array<number | undefined> = []

        /// From URL  to Client Query

        console.log({cityQry ,c: cityQry.split('-').length > 1 && cityQry.split('-')[1] == 'city'})


        if (cityQry.split('-').length > 1 && cityQry.split('-')[1] == 'city') {
            console.log(data?.data)
            if (data?.data.find(c => c.name == cityQry.split('-')[0])) {
                console.log('Here')
                citiesFilter = [data?.data.find(c => c.name == cityQry.split('-')[0])?.id]

            }
            else {
                console.log('FAlse')
                //False City
            }
        }
        else if (cityQry == 'iran') {
            if (searchQuery.get('cities')) {
                const citiesIds = searchQuery.get('cities')?.split(',').reduce<number[]>((pv, cv) => {
                    if (!!data?.data.find(c => c.name == cv)?.id)
                        pv.push(data?.data.find(c => c.name == cv)?.id ?? 0)
                    return pv
                }, [])

                citiesFilter = citiesIds ? citiesIds : []
            }
            ///iran
        }
        else {
            //Nothing
        }


        console.log({citiesFilter})
    }, [data , filters])

    const city = cityQry.split('-')
    return (
        <div>

        </div>
    )
}
