import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import EmployeeList from "./employee/employeeList"; // Import EmployeeList component
import CreateEmployee from "./employee/createEmployee"; // Import CreateEmployee component

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Render the navbar and sidebar for routes other than '/employee-list' */}
        <Routes>
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route
            path="/"
            element={
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
                  <ul className="menu">
                    <li className="menu-item">
                      <Link to="/employee-list">Employee List</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/roles">Roles</Link>
                    </li>
                  </ul>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
