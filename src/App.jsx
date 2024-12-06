import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import ViewEmployee from "./employee/viewEmployee.jsx";
import EditEmployee from "./employee/editEmployee.jsx";
import CreateEmployee from "./employee/createEmployee.jsx";
import EmployeeList from "./employee/employeeList.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/view-employee" element={<ViewEmployee />} />
          <Route path="/edit-employee" element={<EditEmployee />} />

          <Route path="/" element={<DefaultLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

function DefaultLayout() {
  const navigate = useNavigate();

  const goToEmployeeList = () => {
    navigate("/employee-list");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          <div className="hamburger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <span className="logo">Employee</span>
        </div>
      </div>

      <div className="sidebar">
        <button className="save-button" onClick={goToEmployeeList}>
          Employee List
        </button>
      </div>
    </>
  );
}

export default App;
