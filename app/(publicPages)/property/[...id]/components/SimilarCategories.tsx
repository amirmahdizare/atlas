// import Link from 'next/link'
// import React from 'react'
// import { PropertyDetailType } from 'types'


// const Item = ({ name, id }: { name: string, id: string }) => {
//     return <Link href={`/categories/${id}`} className='rounded-lg hover:bg-gray-200 transition-all duration-100 p-1.5 text-ultra-violet bg-anti-flash-white-lighter'>{name}</Link>
// }


// export const SimilarCategories = ({ data: { category, subCategory } }: { data: PropertyDetailType }) => {
//     return (
//         <div className='flex flex-col gap-2'>

//             <span className='text-space-codet text-body-2-bolder'>دسته بندی مرتبط</span>

//             <div className='flex flex-row gap-2'>
//                 <Item {...category} />
//                 {!!subCategory && <Item {...subCategory} />}

//             </div>
//         </div>
//     )
// }
