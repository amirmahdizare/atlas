import { ReadonlyURLSearchParams } from "next/navigation";
import { DOMAttributes, KeyboardEvent } from "react";
import { ProductType, RoleTypeName } from "types";
import { NO_PHOTO_IMAGE, agentRoles } from "variables";

export const startWithZero = (num: number, totalLength: number = 2) => {
  return String(num).padStart(totalLength, '0');
}

export const isFileSrcImage = (src: string) => !['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'tiff'].every(i => !src.split('.').reverse()[0].toLowerCase().includes(i.toLowerCase()) && !src.split('/').reverse()[0].toLowerCase().includes(i.toLowerCase()))
export const isFileSrcVideo = (src: string) => !['mp4', 'webm', 'ogg', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'm4v', '3gp'].every(i => !src.split('.').reverse()[0].toLowerCase().includes(i.toLowerCase()) && !src.split('/').reverse()[0].toLowerCase().includes(i.toLowerCase()))
export const isFileSrcAudio = (src: string) => !['mp3', 'ogg'].every(i => !src.split('.').reverse()[0].includes(i) && !src.split('/').reverse()[0].includes(i))
export const isFileSrcFile = (src: string) => !['doc', 'txt', 'pdf'].every(i => !src.split('.').reverse()[0].includes(i) && !src.split('/').reverse()[0].includes(i))
export const handleKeyPress = (onEnter: React.KeyboardEventHandler<HTMLInputElement>): React.KeyboardEventHandler<HTMLInputElement> | undefined => (e) => {
  if (e.key === 'Enter' && typeof onEnter == 'function') {
    onEnter(e)
  }

  return () => { }
  // return e
}

export const isStringExist = (string?: string) => typeof string == 'string' && string?.length > 0

export const generateTenDigitOfPhoneNumber = (phoneNumber: string) => phoneNumber.substring(phoneNumber.length - 10)


const cookieValue = (item: 'access_token') => document?.cookie
  .split("; ")
  .find((row) => row.startsWith(item + "="))
  ?.split("=")[1];


export const storeToken = (access_token: string) => {
  document.cookie = `access_token=${access_token}; path=/;`


}



export const clearToken = () => {
  document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export const getToken = () => cookieValue('access_token')


export const captilizeFirstLetter = (text: string) => text?.[0].toUpperCase().concat(text.substring(1))


export const createFormData = (data: { [key: string]: any }, arrayItems: string[] = []) => {

  var form_data = new FormData();

  var key: string

  for (key in data) {
    if (typeof data[key] != 'undefined' && arrayItems?.indexOf(key) == -1) {


      if (typeof data[key] == 'object' && Array.isArray(data[key]))
        form_data.append(key, JSON.stringify(data[key]));

      else if (!Array.isArray(data[key]))
        form_data.append(key, data?.[key] as any);
    }
  }

  arrayItems?.forEach(item => {
    if (Array.isArray(data[item]))
      data[item].forEach((f: string | Blob) => form_data.append(item, f))
  })

  console.log(form_data)

  return form_data
}


export const createMediaUrl = (url: string | undefined) => {
  if (!url || typeof url == 'undefined')
    return NO_PHOTO_IMAGE
  else if (url.includes('http'))
    return url
  else if (url.includes('uploads/'))
    return `${process.env.NEXT_PUBLIC_API}/${url}`
  else return `${process.env.NEXT_PUBLIC_API}/uploads/${url}`
}

export const getBase64Image = (img: HTMLImageElement) => {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx?.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/?[A-z]*/g, 'base64');
}


export const convertMediaUrlToFile = async (img: string) => {

  try {
    const response = await fetch(img)

    const image = await response.blob()
    // .then((res) => res.blob())
    const file = new File([image], `image.jpeg`, { type: image.type })

    console.log(file)
    return file

  } catch (error) {
    return Promise.resolve(undefined)
  }
}


export const isNumber = (value: any) => {
  return !isNaN(value)
}

export const isBoolean = (value: any) => {
  return value == 'true' || value == 'false'
}


export const convertProductType = (type: ProductType) => {
  if (type == 'rent')
    return 'اجاره'
  else if (type == 'sell')
    return 'فروش'
  else if (type == 'buy')
    return 'فروش'

  return ''
}


export const translateRole = (roleEng: RoleTypeName) => {
  switch (roleEng) {
    case 'agent': return 'مشاور'
    case 'admin': return 'ادمین'
    case 'guest': return 'میهمان'
    case 'superAdmin': return 'مدیریت'
    case 'user': 'کاربر'
    default: return 'میهمان'
  }

}


export const isUserAgent = (role: RoleTypeName) => agentRoles.indexOf(role) != -1


export const minuteToMs = (minute: number) => 1000 * 60 * minute


export const convertSearchParamToObject = <T extends {[k:string]:string}  ,> (searchParam: ReadonlyURLSearchParams)  :T=>{
  return Object.fromEntries(searchParam.entries()) as T
}


export const redirectJs = (path: string) => {

  if (typeof window != 'undefined')
      window.location.href = path

  return
}


export const copyLink = (text: string) => {

  navigator.clipboard.writeText(text);

}