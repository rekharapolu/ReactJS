import React from 'react'

const Employee = ({eid,ename,esalary=40000}) => {       //way1
  return (
    <>
    <div id="emp">
    <h1>Employee</h1>
    {/* <h1>Eid:{props.eid}</h1>
    <h1>Ename:{props.ename}</h1> */}
    {/* <h1>Esalary:{props.esalary}</h1> */}
    <h1>Esalary:{esalary}</h1>
    {/* <h1>Esalary:{props.esalary|| 60000}</h1> */}        //way2
    </div>
    </>
  )
}

export default Employee

// Employee.defaultProps={esalary:40000}                    //way3
