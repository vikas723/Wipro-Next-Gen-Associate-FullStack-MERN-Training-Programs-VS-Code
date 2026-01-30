import React from 'react'
import Employee from './Employee';

function EmployeeList() {
    const handlePromote = (employeeName) => {
    alert(employeeName + " has been promoted!");
  };
  return (
    <div>
      <h2> Employee List</h2>
      <Employee
        name="Vikas"
        role="Software Engineer"
        promote={() => handlePromote("Vikas")}
      />

      <Employee
        name="Vihaan"
        role="QA Engineer"
        promote={() => handlePromote("Vihaan")}
      />
    <Employee
        name="Viyas"
        role="UI Developer"
        promote={() => handlePromote("Viyas")}
      />

    </div>
  )
}

export default EmployeeList
