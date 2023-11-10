import React from 'react'
import { isFileSrcImage, isFileSrcVideo } from 'utils'

export const View = ({ src, onClick , isOpen}: { src: string, onClick?: Function , isOpen:boolean }) => {

    if (isFileSrcImage(src))
        return <img src={src} onClick={() => onClick ? onClick() : undefined} className='cursor-pointer max-h-[80vh]  duration-100 translate-all rounded w-full aspect-video  object-cover bg- seasalt b order border-anti-flash-white-lighter' />

    else if (isFileSrcVideo(src))
        return <div className=' flex flex-row justify-center rounded object-cover h-3/4 aspect-video relative cursor-pointer ' onClick={() => onClick ? onClick() : undefined}>
            <video controls className='rounded object-cover h-full   aspect-auto  duration-100 translate-all '>
                <source src={src} type={`video/${src.split('.').reverse()[0]}`} />

            </video>
            {/* <IconPlayerPlayFilled width={20} height={20} className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white' /> */}
        </div>

    return <></>


}
