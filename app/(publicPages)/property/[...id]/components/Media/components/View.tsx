import React from 'react'
import { createMediaUrl, isFileSrcImage, isFileSrcVideo } from 'utils'

export const View = ({ src, onClick , isOpen , altProps}: { src: string, onClick?: Function , isOpen:boolean  , altProps:string}) => {

    const finalSrc = createMediaUrl(src)

    if (isFileSrcImage(finalSrc))
        return <img src={finalSrc} alt={altProps} title={altProps} onClick={() => onClick ? onClick() : undefined} className={`cursor-pointer max-w-[80vw]  lg:max-w-[60vw] durat ion-100 translate- all rounded w-full    bg- seasalt b order border-anti-flash-white-lighter ${isOpen ?  'object-contain h-full max-h-[80vh] ': 'aspect-video object-cover  max-h-[80vh]'}`} />

    else if (isFileSrcVideo(finalSrc))
        return <div className=' flex flex-row justify-center rounded object-cover h-full max-h-[80vh] w-full lg:max-w-[60vw] aspect-video relative cursor-pointer ' onClick={() => onClick ? onClick() : undefined}>
            <video controls title={altProps} className='rounded object-cover h-full   aspect-auto  duration-100 transla te-all '>
                <source src={finalSrc} type={`video/${finalSrc.split('.').reverse()[0]}`} />

            </video>
            {/* <IconPlayerPlayFilled width={20} height={20} className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white' /> */}
        </div>

    return <></>


}
