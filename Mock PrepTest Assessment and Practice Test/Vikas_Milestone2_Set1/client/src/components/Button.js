import React from 'react'

export default function Button({text, onClick}) {
  return (
    <button
        onClick = {onClick}
        style = {{margin: "5px", padding: "6px 10px"}}
    >
        {text}
    </button>

  )
}

