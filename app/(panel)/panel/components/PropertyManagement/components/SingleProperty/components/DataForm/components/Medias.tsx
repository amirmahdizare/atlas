import { Button } from '@components'
import { IconUpload, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { createMediaUrl, isFileSrcImage, isFileSrcVideo } from 'utils'
import upload from 'images/upload.svg'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { PropertyCUType } from 'types'


const RenderContent = ({ file, id }: { file: File | string, id?: string }) => {

    const url = typeof file == 'string' ? file : URL.createObjectURL(file)


    if (isFileSrcImage(typeof file == 'string' ? url : file.name))
        return <img src={url} className='object-cover h-full w-full ' onClick={() => window.open(url)} id={id} />

    else if (isFileSrcVideo(typeof file == 'string' ? url : file.name))
        return <video width="100%" height="100%" className='h-full w-full' controls muted id={id}>
            <source src={url} type={`video/${url.split('.').reverse()[0]}`} />
        </video>


    else return <div className='bg-gray-50 hover:bg-gray-100 rounded cursor-pointer w-full h-full flex gap-1 text-raisin-black text-body-3-light flex-col justify-center items-center' onClick={() => window.open(url)}>
        <span>فایل</span>
        <span className='text-ellipsis line-clamp-2 text-center leading-3'>{url.toString().substring(url.toString().length - 15)}...</span>

    </div>


}

export const Medias = () => {

    const { formState: { errors }, control, watch } = useFormContext<PropertyCUType<{ content: File }>>()

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'medias'
    })


    const addMedias = (files: File[]) => {
        append(files?.map(i => ({ content: i })))
    }

    const removeMedia = (index: number) => {
        remove(index)
    }

    return (
        <>
            {fields?.length != 0 && <div className='grid grid-cols-3 lg:grid-cols-6 gap-2'>
                {fields?.map((item, index) => <div className='col-span-1 aspect-square relative border rounded p-0.5 cursor-pointer'>
                    <div className='absolute left-1 top-1 text-red-600 cursor-pointer bg-white rounded-circle p-0.5 shadow z-10 hover:bg-gray-50' onClick={() => removeMedia(index)}>
                        <IconX width={15} height={15} />
                    </div>
                    <RenderContent file={item.content} id={`media-${index}`} />
                </div>)}
            </div>}


            <label className='flex flex-row p-4 gap-4 items-center justify-between cursor-pointer bg-seasalt border-ghost-white border-dashed' htmlFor='file-select'>

                <Image src={upload} alt='آپلود فایل ها' className='hidden lg:block' />

                <input id='file-select' type='file' multiple hidden onChange={({ target: { files } }) => typeof files != 'undefined' && files && files?.length > 0 ? addMedias(Array.from(files)) : alert('Invalid')} />

                <span className='text-h5-normal text-ultra-violet'>افزودن مستندات ، تصاویر ،ویدیو ها آگهی</span>

                <Button bgColor='secondary' icon={IconUpload} className='pointer-events-none'>افزودن فایل</Button>

            </label>
        </>
    )
}
