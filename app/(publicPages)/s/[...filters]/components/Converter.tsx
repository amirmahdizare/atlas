'use client'
import React, { useEffect } from 'react'
import { useCities, useFullCategories } from '@hooks'
import { useSearchParams } from 'next/navigation'
import { useSearchProperty } from '../hooks'
import { SubCategoryType } from 'types'

export const Converter = ({ filters }: { filters: string[] }) => {



    const cityQry = filters?.[0]
    const catQry = filters?.[1]

    const { data: citiesData, isLoading } = useCities()

    const searchQuery = useSearchParams()


    const { data: catData, isError } = useFullCategories()


    const { dispatchFilter } = useSearchProperty()


    useEffect(() => {

        var citiesFilter: Array<number> = []

        /// From URL  to Client Query


        ///City



        if (cityQry.split('-').length > 1 && cityQry.split('-')[1] == 'city') {
            if (citiesData?.data.find(c => c.name.toLowerCase() == cityQry.split('-')[0].toLowerCase())) {
                citiesFilter = [citiesData?.data.find(c => c.name == cityQry.split('-')[0])?.id ?? 0]
            }
            else {
                //Incorrect City
            }
        }
        else if (cityQry == 'all') {
            if (searchQuery.get('cities')) {
                const citiesIds = searchQuery.get('cities')?.split(',').reduce<number[]>((pv, cv) => {
                    if (!!citiesData?.data.find(c => c.name == cv)?.id)
                        pv.push(citiesData?.data.find(c => c.name == cv)?.id ?? 0)
                    return pv
                }, [])

                citiesFilter = citiesIds ? citiesIds : []
            }
            ///iran
        }
        else {
            //Nothing
        }

        //Category


        var categoryFilter: string | undefined = undefined
        var subCategoryFilter: string | undefined = undefined

        if (catQry) {


            if (catQry.split('-')[1] == 'category' && catQry.split('-').length > 1) {
                //Category 
                if (catData?.data.find(c => c.enTitle.toLowerCase() == catQry.split('-')[0].toLowerCase())) {
                    //CorrectCategory
                    categoryFilter = catData?.data.find(c => c.enTitle.toLowerCase() == catQry.split('-')[0].toLowerCase())?.id
                }
                else {
                    //InCorrectCategory
                }
            }

            else if (catQry.split('-')[1] == 'subcategory' && catQry.split('-').length > 1) {
                //Subcategory 

                const allSubcategories = catData?.data.reduce<SubCategoryType<string, string>[]>((pv, cv) => {
                    pv.push(...cv.subCategories)
                    return pv
                }, [])
                if (allSubcategories?.find(c => c.enTitle.toLowerCase() == catQry.split('-')[0].toLowerCase())) {
                    //CorrectSubCategory
                    subCategoryFilter = allSubcategories?.find(c => c.enTitle.toLowerCase() == catQry.split('-')[0].toLowerCase())?.id
                }
                else {
                    //InCorrectSubCategory
                }
            }
        }


        const categoryFilterFn = () => {
            if (categoryFilter)
                return categoryFilter
            else if (subCategoryFilter)
                return catData?.data.find(c => c.subCategories.findIndex(d => d.id == subCategoryFilter) != -1)?.id
            return undefined
        }

        dispatchFilter({
            location: citiesFilter ?? [],
            category: categoryFilterFn() ? [Number(categoryFilterFn())] : undefined,
            subCategory: subCategoryFilter ? [Number(subCategoryFilter)] : undefined
        })


        console.log({ citiesFilter, categoryFilter, subCategoryFilter })


    }, [citiesData, filters, catData])

    const city = cityQry.split('-')
    return (
        <div>

        </div>
    )
}
