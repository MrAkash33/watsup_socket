import React from "react"
const Input = ({
    label = '',
    name = '',
    type = 'text',
    className = '',
    inputClassName = '',
    isRequired = true,
    placeholder = '',
    value = '',
    onChange = () => { }
}) => {
    return (
        <>
            <span class=" after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                {label}
            </span>
            <input type={type} name={name} class={`mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${inputClassName} ${className}`} placeholder={placeholder} required={isRequired} value={value} onChange={onChange} />
        </>
    )
}

export default Input