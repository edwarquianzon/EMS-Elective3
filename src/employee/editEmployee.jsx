import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./editEmployee.css";

function EditEmployee() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    username: "john_doe",
    name: "John Doe",
    email: "johndoe@example.com",
    contact: "123-456-7890",
    role: "Manager",
    pin: "1234",
  });

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

    // Log or save the updated employee data here
    console.log("Updated Employee Data:", formData);

    // Optionally, you could send this data to a backend API here

    // Navigate back to the view employee page after saving
    navigate("/"); // Navigate to the home page (ViewEmployee)
  };

  return (
    <div className="edit-employee-container">
      {/* Navbar Container */}
      <div className="navbar-container">
        <button className="back-button" onClick={() => navigate("/")}>
          {"<"}
        </button>
        <span className="logo">Edit Employee</span>
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
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
