import React from 'react'
import { useState } from 'react'
function empcount() {
    // usestate - To store the content and get the content ; It is a state management which is dynamic 
   
    // In a state you are setting an initial as 10 after youo can either set or get value from useState
    const[getCount, setCount] = useState(10); 
    return (
    // It will return or rendered HTML Code and it's a jsx file where we return HTML + JS Code and internally it is converting into a JS
    
    // To check Tailwindcss we can apply tailwind css names here the class name should be className keyword 
    // because in JS there is already classname exists
    <div className="bg-amber-400 p-6 rounded shadow w-60 text-center"> 
        <h1 className='text-2xl font-bold mb-4'> Employee Count</h1>

        {/*getCount is dynamic so we have to specify it in {} */}

        <div className = "flex-gap -0.5" >
        <button className="bg-red-700 text-whte px-4 py-2 rounded " onClick={() => setCount(getCount + 1)}> Add Employee</button>
         <button className="bg-red-700 text-whte px-4 py-2 rounded " onClick={() => setCount(getCount + 1)}> Remove Employee</button>
        </div>
        <button onClick={() => setCount(getCount+1)}>Add Employee</button>
        
        <p className='text-3xl mb-6'>{getCount}</p>
    </div>
  )
}

export default empcount
