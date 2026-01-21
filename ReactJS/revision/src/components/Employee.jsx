import React from 'react'

function Employee(props) {
  return (
    <div>
     <p> Employee Name : {props.name}</p>
     <p> Role: {props.role}</p>
      <button style = {{
          backgroundColor: "green",
          color: "white",
          padding: "5px 10px",
          cursor: "pointer"
        }} onClick={props.promote}>promote</button>
      
    </div>
  )
}

export default Employee
