import React from 'react'

export const Bookmark = (props:React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none" {...props}>
            <path d="M1 4.2C1 3.07989 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.07989 1 4.2 1H11.8C12.9201 1 13.4802 1 13.908 1.21799C14.2843 1.40973 14.5903 1.71569 14.782 2.09202C15 2.51984 15 3.07989 15 4.2V19L8 14L1 19V4.2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        </svg>
    )
}
