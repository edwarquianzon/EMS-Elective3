import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation
import "./viewEmployee.css";
import "./employeeList";
function ViewEmployee() {
  const navigate = useNavigate();
  const formData = {
    username: "john_doe",
    name: "John Doe",
    email: "johndoe@example.com",
    contact: "123-456-7890",
    role: "Manager",
    pin: "1234",
  };

  return (
    <div className="view-employee-container">
      {/* Navbar Container */}
      <div className="navbar-container">
        <button
          className="back-button"
          onClick={() => navigate("/employee-list")}
        >
          {"<"}
        </button>
        <span className="logo">View Employee</span>
        <Link to="/edit-employee">
          <button className="edit-button">Edit</button>
        </Link>
      </div>

      {/* Details Container */}
      <div className="details-container">
        <div className="detail-item">
          <label>Username:</label>
          <span>{formData.username}</span>
        </div>
        <div className="detail-item">
          <label>Name:</label>
          <span>{formData.name}</span>
        </div>
        <div className="detail-item">
          <label>Email:</label>
          <span>{formData.email}</span>
        </div>
        <div className="detail-item">
          <label>Contact Number:</label>
          <span>{formData.contact}</span>
        </div>
        <div className="detail-item">
          <label>Role:</label>
          <span>{formData.role}</span>
        </div>
        <div className="detail-item">
          <label>PIN:</label>
          <span className="pin">{formData.pin}</span>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
