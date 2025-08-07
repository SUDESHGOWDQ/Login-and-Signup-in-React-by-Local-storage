import React from 'react'
import './index.css'

const Input = ({type="text",placeholder,onChange,name,value,className="",...props}) => {
  return (
	<input
		type={type}
		placeholder={placeholder}
		onChange={onChange}
		name={name}
		value={value}
		className={`custom-input ${className}`}
		{...props}
	/>
  )
}

export default Input