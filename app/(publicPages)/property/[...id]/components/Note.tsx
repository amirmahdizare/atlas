import React from 'react'

export const Note = () => {
    return (
        <div className='flex flex-col gap-2'>
            <span className='text-space-codet text-body-2-bolder'>یادداشت</span>

            <textarea
                placeholder='یادداشت شما'
                className='bg-seasalt border border-anti-flash-white-lighter p-2 text-body-2-normal outline-none'

            />

            <p className='text-ultra-violet text-h4-normal'>یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد.</p>

        </div>
    )
}
