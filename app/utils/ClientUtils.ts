'use client'
import imageCompression from "browser-image-compression";
import heic2any from "heic2any";
import { isFileSrcImage } from "utils";

export const convertIOSImage = async (file: File, { imageType = 'jpg', quality = 0.5 }: { imageType?: 'png' | 'jpg' | 'jpeg' | string, quality?: number }) => {


    const fileType = file.name.split('.').toReversed()[0].toLowerCase()

    if (!window || typeof window == 'undefined') return Promise.reject()


    const heifBuffer = await file.arrayBuffer();

    const imageBuffer = await heic2any({
        blob: new Blob([heifBuffer]), toType: `image/${imageType}`, quality
    })


    const resBlog = new Blob([imageBuffer as any], { type: `image/${imageType}` });


    const res = new File([resBlog], file.name.toLowerCase().replace(fileType, imageType.toUpperCase()), { type: `image/${imageType}` })


    ///const url = URL.createObjectURL(res)
    //console.log({ res, url })

    return res


}


export const compressImage = async (imageFile: File) => {
    const fileType = imageFile.name.split('.').toReversed()[0].toLowerCase()
    const options = {
        // maxSizeMB: imageFile.size > Math.pow(10, 6) ? (imageFile.size / Math.pow(10, 6)) * (0.2) : 0.25,
        maxSizeMB: 0.3,
        maxWidthOrHeight: 1200,
        useWebWorker: true
    }
    const resBlob = await imageCompression(imageFile, options);


    const res = new File([resBlob], imageFile.name, { type: `image/${fileType}` })

    return res
}


export const mapMedias = async (file: File) => {


    const fileType = file.name.split('.').toReversed()[0].toLowerCase()

    if (fileType == 'heic' || fileType == 'heif')
        return compressImage(await convertIOSImage(file, { quality: 0.5, imageType: 'jpeg' }))

    if (isFileSrcImage(file.name))
        return await compressImage(file)

    return file

}