import React from 'react'
import {useRef} from "react" 

function UncontrolledForm() { // Directly setting and directly retieving the element is known as uncontrolled component
    const inputRef = useRef(); // It is a reference variable and it points to DOM element
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        alert("value:" + inputRef.current.value); {/* Reads value directly from DOM , To pick the value from DOM use this */}
    }

  return (

    <div>
       <form>
        <h2>  Uncontrolled User Registration Form</h2>
        <input type = "text" ref={inputRef}/> {/*React connects ref to DOM input */}
        <button onClick={handleSubmit}>Submit</button>

      </form>
    </div>
  )
}

export default UncontrolledForm
