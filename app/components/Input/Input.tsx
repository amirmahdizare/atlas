import React from 'react'


interface PropTypes extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string,
    required?: boolean,
    error?: boolean,
    errorText?: string,
    fullWidth?: boolean,
    customMinWidthClass?: string,
    register?: any
}

export const Input = ({ label, error, errorText, customMinWidthClass, required, register, placeholder, fullWidth, ...props }: PropTypes) => {
    return (
        <div className={`flex flex-col gap-2 justify-start  items-stretch ${fullWidth ? 'flex-1' : ''}`}>

            {!!label && <span className='text-gray-600 text-body-3-normal  text-right'>{label} {required && '*'}</span>}

            <input className={`rounded-[4px] py-1.5 px-1 
            text-body-2-normal
            outline-none
            focus:text-black
            text-gray-600
            focus:bg-white bg-gray-100
            [&:not(:focus):placeholder-shown]:border-transparent
             [&:not(:placeholder-shown)]:border
            focus: border
            ${error ? 'border-red-400' : ' border-gray-800 '}
            ${customMinWidthClass ?? 'min-w-[300px]'} `}
                placeholder={`${placeholder} ${!!required && '*'}`}
                {...register}
                {...props} />

            {!!error && !!errorText && <span className='text-body-3-normal text-right text-red-400'>{errorText}</span>}

        </div>
    )
}
