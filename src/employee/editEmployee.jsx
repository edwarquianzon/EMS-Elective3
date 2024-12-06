import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./editEmployee.css";

function EditEmployee() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "john_doe",
    name: "John Doe",
    email: "johndoe@example.com",
    contact: "123-456-7890",
    role: "Manager",
    pin: "1234",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Employee Data:", formData);
    navigate("/view-employee");
  };

  return (
    <div className="edit-employee-container">
      {/* Navbar Container */}
      <div className="navbar-container">
        <button
          className="back-button"
          onClick={() => navigate("/view-employee")}
        >
          {"<"}
        </button>
        <span className="logo">Edit Employee</span>
        <button className="save-button" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>

      {/* Form Container */}
      <div className="form-container">
        <form className="employee-form">
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
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
