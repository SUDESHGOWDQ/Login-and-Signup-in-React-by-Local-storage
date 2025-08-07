import React from 'react'
import './index.css'

const Button = ({ type = "button", onClick, children, className = "", variant = "primary", disabled = false, ...props }) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`custom-button ${variant} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
