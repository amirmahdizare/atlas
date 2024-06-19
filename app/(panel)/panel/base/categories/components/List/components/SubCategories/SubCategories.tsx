import { useSubCategoryList } from '(panel)/panel/base/categories/hooks'
import React from 'react'
import { SingleSubcategory } from './components/SingleSubcategory'
import { IconPlus } from '@tabler/icons-react'
import { MutateSubcategory } from './components/MutateSubcategory'

export const SubCategories = ({ catId, catTitle }: { catId: string, catTitle: string }) => {

    const { data } = useSubCategoryList()

    const targetSubCategories = data?.data.filter(i => i.category?.id == catId.toString())

    console.log({ catId, targetSubCategories })
    return (
        <div className='flex flex-col gap-2 rounded border p-2 bg-gray-100'>

            <div className='flex flex-row gap-2 justify-between'>
                <span className='text-gray-400 text-body-3-normal'>لیست زیر دسته بندی ها</span>

                <MutateSubcategory catId={catId} mode='add' catTitle={catTitle}>
                    <div className='flex flex-row gap-0.5 items-center text-mint-green cursor-pointer'>
                        <IconPlus />
                        <span>
                            افزودن
                        </span>
                    </div>
                </MutateSubcategory>
            </div>

            {targetSubCategories && targetSubCategories?.length > 0
                ? targetSubCategories?.map(i => <SingleSubcategory {...i} />)
                : <span>زیر دسته بندی ای موجود نیست.</span>}

        </div>
    )

    return <span className='text-center'>زیر دسته بندی موجود نیست</span>
}
