
import React, { useState } from "react";

const UseState3 = () => {
  const [employee, setEmployee] = useState({
    name: "Anjum",
    age: 22,
    salary: 89000,
    address: "Pune"
  });

  function updateAge() {
    setEmployee((data) => {
      return {
        ...data,
        age: 23
      };
    });
  }

  function updateSalary() {
    setEmployee((data) => {
      return {
        ...data,
        salary: 130000
      };
    });
  }

  return (
    <div>
      <h2>Employee Details</h2>

      <p>Name: {employee.name}</p>
      <p>Age: {employee.age}</p>
      <p>Salary: ₹{employee.salary}</p>
      <p>Address: {employee.address}</p>

      <button onClick={updateAge}>Update Age</button>
      <button onClick={updateSalary}>Update Salary</button>
    </div>
  );
};

export default UseState3;