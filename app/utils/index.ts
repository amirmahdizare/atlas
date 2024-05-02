import { DOMAttributes, KeyboardEvent } from "react";

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


export const createFormData = (data: { [key: string]: any }, arrayItems?: string[]) => {

  var form_data = new FormData();

  console.log(data)

  var key: string

  for (key in data) {
    if (typeof data[key] != 'undefined' && arrayItems?.indexOf(key) == -1) {


      if (typeof data[key] == 'object' && !Array.isArray(data[key]))
        form_data.append(key, JSON.stringify(data[key]));

      else if (!Array.isArray(data[key]))
        form_data.append(key, data?.[key] as any);
    }
  }

  arrayItems?.forEach(item => {
    if (Array.isArray(data[item]))
      data[item].forEach((f: string | Blob) => form_data.append(item, f))
  })

  return form_data
}


export const createMediaUrl = (url: string) => {
  if (url.includes('http'))
    return url
  else return `${process.env.NEXT_PUBLIC_API}/uploads/${url}`
}

