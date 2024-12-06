import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./employeeList.css";

const EmployeeList = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleAddEmployee = () => {
    navigate("/create-employee"); // Navigate to the CreateEmployee page
  };

  const handleBackClick = () => {
    navigate("/"); // Go back to the previous page in the history stack
  };

  const handleRowClick = (username) => {
    navigate(`/view-employee/`); // Navigate to EditEmployee page with username
  };

  return (
    <div className="employee-list-container">
      <div className="header">
        <button className="back-button" onClick={handleBackClick}>
          {"<"}
        </button>
        <h2>Employee List</h2>
        <div>
          <label>
            <input type="radio" name="status" />
            Active
          </label>
          <label>
            <input type="radio" name="status" />
            Inactive
          </label>
        </div>
        <button>🔍</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => handleRowClick("jc1234")}>
            <td>jc1234</td>
            <td>Jeff Cruz</td>
            <td>Jeff Cruz@gmail.com</td>
            <td>09687345344</td>
            <td>Manager</td>
          </tr>
          <tr onClick={() => handleRowClick("ej189")}>
            <td>ej189</td>
            <td>Efren James</td>
            <td>Jfffe23@gmail.com</td>
            <td>09587753414</td>
            <td>Cashier</td>
          </tr>
        </tbody>
      </table>

      <button className="add-button" onClick={handleAddEmployee}>
        +
      </button>
    </div>
  );
};

export default EmployeeList;
