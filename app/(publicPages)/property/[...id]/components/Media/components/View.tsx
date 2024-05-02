import React from 'react'
import { createMediaUrl, isFileSrcImage, isFileSrcVideo } from 'utils'

export const View = ({ src, onClick , isOpen , altProps}: { src: string, onClick?: Function , isOpen:boolean  , altProps:string}) => {

    const finalSrc = createMediaUrl(src)

    if (isFileSrcImage(finalSrc))
        return <img src={finalSrc} alt={altProps} title={altProps} onClick={() => onClick ? onClick() : undefined} className='cursor-pointer max-h-[80vh]  duration-100 translate-all rounded w-full lg:max-w-[60vw] aspect-video  object-cover bg- seasalt b order border-anti-flash-white-lighter' />

    else if (isFileSrcVideo(finalSrc))
        return <div className=' flex flex-row justify-center rounded object-cover h-full max-h-[80vh] w-full lg:max-w-[60vw] aspect-video relative cursor-pointer ' onClick={() => onClick ? onClick() : undefined}>
            <video controls title={altProps} className='rounded object-cover h-full   aspect-auto  duration-100 translate-all '>
                <source src={finalSrc} type={`video/${finalSrc.split('.').reverse()[0]}`} />

            </video>
            {/* <IconPlayerPlayFilled width={20} height={20} className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white' /> */}
        </div>

    return <></>


}
