import { Button } from '@components'
import { IconUpload, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { isFileSrcImage, isFileSrcVideo } from 'utils'
import upload from 'images/upload.svg'


const RenderContent = ({ file }: { file: File }) => {

    const url = URL.createObjectURL(file)

    if (isFileSrcImage(file.name))
        return <img src={url} className='object-cover h-full w-full ' onClick={() => window.open(url)}/>

    else if (isFileSrcVideo(file.name))
        return <video width="100%" height="100%" className='h-full w-full' controls muted >
            <source src={url} type={`video/${file.name.split('.').reverse()[0]}`} />
        </video>


    else return <div className='bg-gray-50 hover:bg-gray-100 rounded cursor-pointer w-full h-full flex gap-1 text-raisin-black text-body-3-light flex-col justify-center items-center' onClick={() => window.open(url)}>
        <span>فایل</span>
        <span className='text-ellipsis line-clamp-2 text-center leading-3'>{file.name.toString().substring(file.name.toString().length-15)}...</span>

    </div>


}

export const Medias = () => {
    const [files, setFiles] = useState<{ array: Array<{ content: File, id: string }> }>({ array: [] })

    const addMedia = (file: File) => {
        setFiles({ array: [...files.array, { content: file, id: Math.random().toString() }] })
    }

    const removeMedia = (id: string) => {
        setFiles({ array: files.array.filter(item => item.id != id) })
    }

    return (
        <>
                {files?.array?.length != 0 && <div className='grid grid-cols-3 lg:grid-cols-6 gap-2'>
                    {files.array.map(item => <div className='col-span-1 aspect-square relative border rounded p-0.5 cursor-pointer'>
                        <div className='absolute left-1 top-1 text-red-600 cursor-pointer bg-white rounded-circle p-0.5 shadow z-10 hover:bg-gray-50' onClick={() => removeMedia(item.id)}>
                            <IconX width={15} height={15} />
                        </div>
                        <RenderContent file={item.content} />
                    </div>)}
                </div>}


                <label className='flex flex-row p-4 gap-4 items-center justify-between cursor-pointer bg-seasalt border-ghost-white border-dashed' htmlFor='file-select'>

                    <Image src={upload} alt='آپلود فایل ها' className='hidden lg:block' />

                    <input id='file-select' type='file' hidden onChange={({ target: { files } }) => files?.[0] ? addMedia(files?.[0]) : undefined} />

                    <span className='text-h5-normal text-ultra-violet'>افزودن مستندات ، تصاویر ،ویدیو ها آگهی</span>

                    <Button bgColor='secondary' icon={IconUpload} className='pointer-events-none'>افزودن فایل</Button>

                </label>
        </>
    )
}
