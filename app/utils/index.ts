export const startWithZero = (num: number, totalLength: number = 2) => {
    return String(num).padStart(totalLength, '0');
}

export const isFileSrcImage = (src: string) => !['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp', 'tiff'].every(i => !src.split('.').reverse()[0].includes(i) && !src.split('/').reverse()[0].includes(i))
export const isFileSrcVideo = (src: string) => !['mp4', 'webm', 'ogg', 'avi', 'mov', 'wmv', 'flv', 'mkv', 'm4v', '3gp'].every(i => !src.split('.').reverse()[0].includes(i) && !src.split('/').reverse()[0].includes(i))
export const isFileSrcAudio = (src: string) => !['mp3', 'ogg'].every(i => !src.split('.').reverse()[0].includes(i) && !src.split('/').reverse()[0].includes(i))
export const isFileSrcFile = (src: string) => !['doc', 'txt', 'pdf'].every(i => !src.split('.').reverse()[0].includes(i) && !src.split('/').reverse()[0].includes(i))
