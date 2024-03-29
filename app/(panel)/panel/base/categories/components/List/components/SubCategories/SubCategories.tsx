import { useSubCategoryList } from '(panel)/panel/base/categories/hooks'
import React from 'react'

export const SubCategories = ({ catId }: { catId: string }) => {

    const { data } = useSubCategoryList()

    const targetSubCategories  = data?.data.filter(i=>i.category?.id==catId)

    if (targetSubCategories)
        return (
            <div>
                {targetSubCategories.map(i=>i.title)}
            </div>
        )

    return <span className='text-center'>زیر دسته بندی موجود نیست</span>
}
