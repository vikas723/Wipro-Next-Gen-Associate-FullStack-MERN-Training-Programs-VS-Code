import React from 'react'

function Button({label, onClick}) {
  return (
    <button onClick = {onClick} style={{marginLeft: "5px"}}>
        {label}
    </button>
  
  )
}

export default Button

