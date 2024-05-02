import { IconPlayerPlayFilled } from '@tabler/icons-react'
import React from 'react'
import { createMediaUrl, isFileSrcImage, isFileSrcVideo } from 'utils'

export const Thumb = ({ src, onClick  , altProps}: { src: string, onClick: Function , altProps:string }) => {

    const finalSrc = createMediaUrl(src)


    if (isFileSrcImage(finalSrc))
        return <img src={finalSrc} alt={altProps} title={altProps} onClick={() => onClick()} className='cursor-pointer border-2 duration-100 translate-all hover:border-mint-green rounded w-full aspect-video  object-cover bg- seasalt b order border-anti-flash-white-lighter' />

    else if (isFileSrcVideo(finalSrc))

        return <div className='rounded object-cover h-full aspect-video relative cursor-pointer '>
            <video height="100%" title={altProps} onClick={() => onClick()} className='rounded object-cover h-full aspect-video border-2 duration-100 translate-all hover:border-mint-green'>
                <source src={finalSrc} type={`video/${finalSrc.split('.').reverse()[0]}`} />

            </video>
            <IconPlayerPlayFilled width={20} height={20} className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white' />
        </div>

    return <></>


}
