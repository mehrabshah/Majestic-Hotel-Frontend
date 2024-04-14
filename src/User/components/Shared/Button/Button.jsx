import React from 'react'
import "./Button.css"
function Button({
  backgroundColor,
  color,
  border,
  padding,
  onClick, 
  text,
  type,
  size
}) {
return (
     <button type={type} className={` ${backgroundColor}  ${size}  ${color}  ${border}  ${padding} text-center uppercase`}  onClick={onClick}>
        {text}
    </button>
 )
}

export default Button