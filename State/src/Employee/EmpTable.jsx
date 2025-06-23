import React, { useState } from 'react';
import Emp_data from './Emp_data';

const EmpTable = () => {
  const [employees, setEmployees] = useState(Emp_data);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <table border={5} cellPadding={20}>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>SAL</th>
          <th>ROLE</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(({ id, name, sal, role }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{sal}</td>
            <td>{role}</td>
            <td>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmpTable;
