import { IconPlayerPlayFilled } from '@tabler/icons-react'
import React from 'react'
import { isFileSrcImage, isFileSrcVideo } from 'utils'

export const Thumb = ({ src, onClick }: { src: string, onClick: Function }) => {

    if (isFileSrcImage(src))
        return <img src={src} onClick={() => onClick()} className='cursor-pointer border-2 duration-100 translate-all hover:border-mint-green rounded w-full aspect-video  object-cover bg- seasalt b order border-anti-flash-white-lighter' />

    else if (isFileSrcVideo(src))

        return <div className='rounded object-cover h-full aspect-video relative cursor-pointer '>
            <video height="100%" onClick={() => onClick()} className='rounded object-cover h-full aspect-video border-2 duration-100 translate-all hover:border-mint-green'>
                <source src={src} type={`video/${src.split('.').reverse()[0]}`} />

            </video>
            <IconPlayerPlayFilled width={20} height={20} className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white' />
        </div>

    return <></>


}
