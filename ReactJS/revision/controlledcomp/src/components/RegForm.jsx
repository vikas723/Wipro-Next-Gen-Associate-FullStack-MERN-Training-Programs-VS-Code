import {useState} from 'react'

import React from 'react'

function RegForm() {

    const[name, setName] = useState() //React stores input value in state
    const[mail, setMail] = useState() 
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("Registration Form Submmitted")
    }
  return (
    <div>
      
        <form onSubmit = {handleSubmit}>
        <h2>  User Registration Form</h2>
        <input type ="text" placeholder='Enter Name' value={name} onChange={(e)=> setName(e.target.value)}/> {/*e.target.value is used to get current value enterin in the text */}
        <input type ="email" placeholder='Enter Email' value={mail} onChang e={(e)=> setMail(e.target.value)}/> {/* value={name} = Input value comes from React */}
        {/* onChange={(e) => setName(e.target.value)} = Every keystroke updates React state */}
      </form>
    </div>
  )
}

export default RegForm
