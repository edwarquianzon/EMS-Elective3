import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./createEmployee.css";

function CreateEmployee() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    contact: "",
    role: "Manager",
    pin: generatePIN(),
  });

  // Generate a random 4-digit PIN
  function generatePIN() {
    return Math.floor(1000 + Math.random() * 9000); // Generates a random 4-digit number
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Data:", formData);
  };

  // Handle back button click (navigate to employee list)
  const handleBackClick = () => {
    navigate("/employee-list"); // Navigate back to the employee list page
  };

  return (
    <div className="create-employee-container">
      {/* Navbar Container */}
      <div className="navbar-container">
        <button className="back-button" onClick={handleBackClick}>
          {"<"}
        </button>{" "}
        {/* Trigger back navigation */}
        <span className="logo">Create Employee</span>
        <button className="save-button">Save</button>
      </div>

      {/* Form Container */}
      <div className="form-container">
        <form className="employee-form" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Contact Number</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
          <label>PIN</label>
          <div className="pin">
            <input type="text" name="pin" value={formData.pin} readOnly />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEmployee;
