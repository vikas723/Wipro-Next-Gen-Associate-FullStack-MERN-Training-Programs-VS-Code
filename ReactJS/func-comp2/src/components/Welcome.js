import React, { use } from 'react'
import { useEffect } from 'react';
function Welcome() {
    useEffect (() => {
        alert("Component Loaded");
    }, []); //[] - used to run only once 
  return (
    <h1>
        Welcome
    </h1>
  )
}

export default Welcome
