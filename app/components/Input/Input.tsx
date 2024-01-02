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

export const Input = ({ label, error, errorText, customMinWidthClass, required, register, fullWidth , placeholder = '', ...props }: PropTypes) => {
    return (
        <div className={`flex flex-col gap-2 justify-start  items-stretch ${fullWidth ? 'flex-1' : ''}`}>

            {!!label && <span className='text-french-gray text-body-2-normal  text-right'>{label} {required && '*'}</span>}

            <input 
            placeholder={placeholder}
            className={`rounded-[4px] py-1.5 px-1 
            text-body-2-normal
            outline-none
            focus:text-space-codet
            text-french-gray
            focus:bg-white 
         
             [&:not(:placeholder-shown)]:border
             [&:not(:placeholder-shown)]:text-space-codet
            focus: border
            ${fullWidth ? 'flex-1' : ''}
            ${error ? 'border-bittersweet bg-white' : ' border-ultra-violet    [&:not(:focus):placeholder-shown]:border-anti-flash-white-lighter bg-seasalt'}
            ${customMinWidthClass ?? 'lg:min-w-[300px] min-w-[150px]'} `}
                // placeholder={`${placeholder} `}
                {...register}
                {...props} />

            {!!error && !!errorText && <span className='text-body-3-normal text-right text-bittersweet'>{errorText}</span>}

        </div>
    )
}
