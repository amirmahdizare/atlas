'use client'
import React  from 'react'
import { Button, Input } from '@components'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export const Search = () => {

    const { push } = useRouter()

    const { register, handleSubmit } = useForm<{ title: string }>()

    const handleGotoSearch = ({ title }: { title: string }) => {
        push(`/s/all?title=${title}`)
    }
    
    return (
        <form className='bg-white p-1 flex flex-row gap-1 lg:gap-2 items-center border border-gray-100  whitespace-nowrap w-full' onSubmit={handleSubmit(handleGotoSearch)}>
            <Input register={register('title')} customMinWidthClass='-' fullWidth placeholder='مثلا : ویلا یا خانه' />
            <Button bgColor='secondary'>جستجو کن !</Button>
        </form>
    )
}
