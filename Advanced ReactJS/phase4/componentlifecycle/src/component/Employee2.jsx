import React, { useEffect } from 'react'
import {UseEffect} from 'react'

function Employee2() {

    useEffect(()=> {console.log("Mounted");
        return() =>{console.log("Unmounted")};
    },[]);
  return (
    <div>
      <h2> Employee Component Rendered </h2>
    </div>
  )
}

export default Employee2
