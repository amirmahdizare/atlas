import React, { useEffect } from 'react'
import { useRequestSection } from '../../../hooks'
import { useBuyOrSells } from '@hooks'
import { createMediaUrl, isFileSrcImage, isFileSrcVideo } from 'utils'


const RenderContent = ({ file }: { file: string }) => {

    const url = createMediaUrl(file)

    if (isFileSrcImage(url))
        return <img src={url} className='object-cover h-full w-full ' onClick={() => window.open(url)} />

    else if (isFileSrcVideo(url))
        return <video width="100%" height="100%" className='h-full w-full' controls muted >
            <source src={url} type={`video/${url.split('.').reverse()[0]}`} />
        </video>


    else return <div className='bg-gray-50 hover:bg-gray-100 rounded cursor-pointer w-full h-full flex gap-1 text-raisin-black text-body-3-light flex-col justify-center items-center' onClick={() => window.open(url)}>
        <span>فایل</span>
        <span className='text-ellipsis line-clamp-2 text-center leading-3'>{url.toString().substring(url.toString().length - 15)}...</span>

    </div>


}


export const DataForm = () => {

    const { dispatch, reqId } = useRequestSection()

    const { data } = useBuyOrSells()
    // useEffect(() => {
    //     // fetch with id
    // }, [reqId])

    const targetRecord = data?.data.find(i => i.id.toString() == reqId)

    return <div className='flex flex-col gap-2'>

        <span className='font-bold'>{targetRecord?.title ?? '-'}</span>

        <p className='leading-4 text-body-3-normal' dangerouslySetInnerHTML={{ __html: targetRecord?.description ?? '-' }} />

        {!!targetRecord?.medias && targetRecord?.medias?.length != 0 && <div className='grid grid-cols-3 lg:grid-cols-6 gap-2 border rounded p-1'>

            <div className='col-span-3 lg:col-span-6 text-gray-500'>فایل های پیوست</div>
            {

                targetRecord?.medias?.map(item => <div className='col-span-1 aspect-square relative border rounded p-0.5 cursor-pointer'>
                    <RenderContent file={item} />
                </div>)}

        </div>}
    </div>
}
