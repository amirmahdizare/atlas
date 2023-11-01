export const startWithZero = (num: number, totalLength: number = 2) => {
    return String(num).padStart(totalLength, '0');
}